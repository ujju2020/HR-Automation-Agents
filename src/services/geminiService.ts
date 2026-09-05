// Gemini Vertex AI Service for PulseHR OS

export interface GeminiConfig {
  apiKey: string;
  model: string;
}

export const DEFAULT_GEMINI_MODEL = 'gemini-2.5-flash';

export class GeminiHRService {
  private static getStoredConfig(): GeminiConfig {
    const key = localStorage.getItem('pulsehr_gemini_key') || '';
    const model = localStorage.getItem('pulsehr_gemini_model') || DEFAULT_GEMINI_MODEL;
    return { apiKey: key, model };
  }

  public static isConfigured(): boolean {
    return Boolean(this.getStoredConfig().apiKey.trim());
  }

  public static setConfig(config: GeminiConfig): void {
    localStorage.setItem('pulsehr_gemini_key', config.apiKey.trim());
    localStorage.setItem('pulsehr_gemini_model', config.model.trim());
  }

  public static getConfig(): GeminiConfig {
    return this.getStoredConfig();
  }

  /**
   * Generic prompt call to Gemini REST API
   */
  public static async generateContent(prompt: string, systemInstruction?: string): Promise<string> {
    const config = this.getStoredConfig();
    if (!config.apiKey) {
      throw new Error('Google Gemini API Key is not configured. Please add your key in Settings.');
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:generateContent?key=${config.apiKey}`;

    const body: any = {
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 2048,
      }
    };

    if (systemInstruction) {
      body.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Gemini API Error: HTTP ${response.status}`);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidateText) {
      throw new Error('No response text returned from Gemini API.');
    }

    return candidateText;
  }

  /**
   * HR Policy Concierge Chat
   */
  public static async queryPolicyConcierge(
    userQuestion: string, 
    contextDepartment: string
  ): Promise<{ text: string; citation: { handbookSection: string; policyDocName: string } }> {
    const systemPrompt = `You are PeopleAdvisor, an expert, empathetic, and compliant Autonomous HR Policy Concierge Agent.
Ground your responses in standard modern enterprise employee handbooks (covering parental leave, healthcare, PTO, remote stipends, equity vesting, on-call compensation, and DEI).
Always provide a concise, warm, actionable answer, followed by a cited section and policy document name.
Format your output as valid JSON:
{
  "text": "Detailed yet clear explanation...",
  "citation": {
    "handbookSection": "e.g., Section 4.2: Parental & Family Support",
    "policyDocName": "Global Employee Handbook 2026"
  }
}`;

    const userPrompt = `Employee from Department: ${contextDepartment}
Question: "${userQuestion}"

Provide an authoritative, helpful response with policy citation as JSON.`;

    try {
      const response = await this.generateContent(userPrompt, systemPrompt);
      const cleaned = response.replace(/```json/gi, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      return {
        text: parsed.text || response,
        citation: parsed.citation || {
          handbookSection: 'Section 3.1: General Workplace Guidelines',
          policyDocName: 'Global Employee Handbook 2026'
        }
      };
    } catch (e: any) {
      // Fallback if parsing fails or offline
      return {
        text: `Based on enterprise handbook guidelines for ${contextDepartment}, employees are entitled to standard benefits with managerial sign-off. Please review the employee benefits portal or submit a ticket to the People Operations team. (Note: ${e.message})`,
        citation: {
          handbookSection: 'Section 5.0: People Operations Dispatch',
          policyDocName: 'Employee Handbook 2026'
        }
      };
    }
  }
}
