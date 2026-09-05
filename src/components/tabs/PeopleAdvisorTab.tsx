/**
 * Copyright (c) 2026 Ujjwal Kumar Bhowmick
 * Developer: Ujjwal Kumar Bhowmick
 * Email: ujjwalkumarbhowmick30@gmail.com
 * All rights reserved.
 */

import React, { useState } from 'react';
import { 
  HelpCircle, 
  Send, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  User, 
  Bot, 
  ExternalLink,
  Loader2 
} from 'lucide-react';
import { PolicyMessage } from '../../types/hr';
import { GeminiHRService } from '../../services/geminiService';

interface PeopleAdvisorTabProps {
  department: string;
  samplePrompts: string[];
}

export const PeopleAdvisorTab: React.FC<PeopleAdvisorTabProps> = ({
  department,
  samplePrompts,
}) => {
  const [messages, setMessages] = useState<PolicyMessage[]>([
    {
      id: 'msg-1',
      sender: 'agent',
      text: `Hello! I am PeopleAdvisor, your autonomous HR policy concierge. Ask me anything regarding employee benefits, parental leave, remote work allowances, equity vesting, or company compliance guidelines.`,
      timestamp: 'Just now',
      policyCitation: {
        handbookSection: 'Section 1.0: Welcome & Employee Resources',
        policyDocName: 'Global Employee Handbook 2026',
      },
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsgId = 'msg-' + Date.now();
    const newMessages: PolicyMessage[] = [
      ...messages,
      {
        id: userMsgId,
        sender: 'user',
        text: query,
        timestamp: 'Just now',
      },
    ];

    setMessages(newMessages);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    try {
      if (GeminiHRService.isConfigured()) {
        const result = await GeminiHRService.queryPolicyConcierge(query, department);
        setMessages((prev) => [
          ...prev,
          {
            id: 'msg-' + (Date.now() + 1),
            sender: 'agent',
            text: result.text,
            timestamp: 'Just now',
            policyCitation: result.citation,
          },
        ]);
      } else {
        // High fidelity simulated policy responses
        setTimeout(() => {
          let responseText = '';
          let section = 'Section 3.4: Workplace Guidelines';

          const lower = query.toLowerCase();
          if (lower.includes('remote') || lower.includes('hardware') || lower.includes('stipend')) {
            responseText = `Full-time employees receive a one-time $1,500 Home Office Technology Grant upon joining, plus a recurring $100/month reimbursement for high-speed internet and ergonomic accessories. Equipment is refreshed on a 24-month lifecycle through the IT self-service portal.`;
            section = 'Section 4.1: Remote & Distributed Work Accommodations';
          } else if (lower.includes('leave') || lower.includes('parental') || lower.includes('maternity') || lower.includes('paternity')) {
            responseText = `Our comprehensive Global Family Policy provides 18 weeks of 100% paid parental leave for all new parents (birth, adoption, or surrogacy), applicable within the first 12 months. Equity continues to vest unhindered throughout the duration of approved parental and medical leaves.`;
            section = 'Section 5.3: Family & Medical Leave Provisions';
          } else if (lower.includes('travel') || lower.includes('expense') || lower.includes('entertainment')) {
            responseText = `Client-facing and conference travel is booked via Navan. Meals during business travel are covered under a $90/day per-diem standard. Expense reports submitted through Expensify with receipts under $75 are auto-approved within 48 hours.`;
            section = 'Section 7.2: Business Travel & Corporate Expenses';
          } else if (lower.includes('equity') || lower.includes('vest') || lower.includes('options') || lower.includes('rsu')) {
            responseText = `Standard grants operate on a 4-year schedule with a 1-year cliff (25%), followed by quarterly vesting thereafter. Employees may exercise options via the Carta portal, and annual performance refreshers are evaluated in the Q3 cycle.`;
            section = 'Section 6.2: Equity Incentives & Long-Term Compensation';
          } else {
            responseText = `Based on our company policy for the ${department} department, employees are granted flexible paid time off (FTO), comprehensive health/vision/dental coverage (effective Day 1), and a $2,500 annual professional development budget.`;
            section = 'Section 2.2: Total Rewards & Wellbeing';
          }

          setMessages((prev) => [
            ...prev,
            {
              id: 'msg-' + (Date.now() + 1),
              sender: 'agent',
              text: responseText,
              timestamp: 'Just now',
              policyCitation: {
                handbookSection: section,
                policyDocName: 'Global Employee Handbook 2026',
              },
            },
          ]);
          setIsTyping(false);
        }, 800);
        return;
      }
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: 'msg-err-' + Date.now(),
          sender: 'agent',
          text: `Error contacting policy engine: ${e.message}. Please consult the HR Knowledge Base directly.`,
          timestamp: 'Just now',
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md relative overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
                PeopleAdvisor Agent
              </span>
              <span className="text-xs text-slate-500">• Grounded in Company Handbooks & Benefits</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mt-1.5">
              Autonomous HR Policy Concierge & Employee Self-Service
            </h2>
            <p className="text-sm text-slate-400">
              Instant answers with verified citations for <strong className="text-slate-200">{department}</strong> policies.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Verifiable Citations</span>
          </div>
        </div>

        {/* Suggested Quick Prompts */}
        <div className="mt-5 pt-4 border-t border-slate-800/80">
          <span className="text-xs font-medium text-slate-400 block mb-2">
            Suggested Quick Inquiries:
          </span>
          <div className="flex flex-wrap gap-2">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="text-xs px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all text-left flex items-center gap-1.5 group"
              >
                <Sparkles className="w-3 h-3 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
                <span>{prompt}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Stream Window */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg flex flex-col h-[520px]">
        {/* Messages scroll area */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-2xl rounded-2xl p-4 text-xs leading-relaxed space-y-2.5 ${
                    isUser
                      ? 'bg-indigo-600 text-white rounded-tr-sm shadow-md'
                      : 'bg-slate-950/80 border border-slate-800 text-slate-200 rounded-tl-sm shadow-sm'
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Policy Citation card */}
                  {m.policyCitation && (
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5 text-indigo-300">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{m.policyCitation.handbookSection}</span>
                      </div>
                      <span className="text-slate-500 font-mono text-[10px]">
                        {m.policyCitation.policyDocName}
                      </span>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-3 items-center text-xs text-slate-400">
              <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" />
                <span>PeopleAdvisor analyzing employee handbook...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-3">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder="Ask a policy question (e.g., 'What is our parental leave policy?' or 'How do I claim wellness stipend?')..."
            className="flex-1 px-4 py-3 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputQuery.trim() || isTyping}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-purple-600/20 flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};
