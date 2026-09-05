# PulseHR OS — Autonomous Multi-Agent Human Capital Management & Talent Lifecycle Platform

[![Built for BITSom Vertex Fest](https://img.shields.io/badge/Hackathon-BITSom_Vertex_Fest-6366f1.svg)](https://github.com)
[![Powered by Google Gemini](https://img.shields.io/badge/AI-Google_Gemini_Vertex_AI-06b6d4.svg)](https://cloud.google.com/vertex-ai)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript_5-blue.svg)](https://www.typescriptlang.org/)
[![React 18](https://img.shields.io/badge/Framework-React_18-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Bundler-Vite_6-646cff.svg)](https://vitejs.dev/)

> **Problem Statement Alignment**: *Streamline human capital management, talent acquisition, and workplace productivity. Develop AI agents that solve organizational, recruitment, or employee lifecycle challenges.*

---

## Executive Summary

Modern People Operations (HR) teams are overwhelmed by disconnected software silos, manual resume parsing, subjective evaluations, delayed onboarding ramps, and opaque team burnout. 

**PulseHR OS** is an end-to-end, multi-agent AI orchestration platform powered by **Google Gemini (Vertex AI)**. It unites 5 specialized autonomous agents across the entire employee lifecycle—from talent acquisition and personalized onboarding, to real-time burnout telemetry, 360-degree performance appraisal, and an autonomous HR policy concierge.

---

## System Architecture

PulseHR OS coordinates a synchronized 5-agent swarm where each agent is responsible for an autonomous lifecycle phase, exchanging telemetry and structured context across an orchestrated pipeline.

```mermaid
graph TD
    Trigger([HR Event / Requisition / Employee Query]) --> Orchestrator[PulseHR Multi-Agent Swarm Orchestrator]
    
    subgraph Multi-Agent Autonomous Swarm
        Orchestrator --> Agent1[1. TalentScout Agent: Talent Acquisition & Screening]
        Orchestrator --> Agent2[2. OnboardPilot Agent: 30-60-90 Day Personalized Ramp]
        Orchestrator --> Agent3[3. PulseSentinel Agent: Team Sentiment & Burnout Telemetry]
        Orchestrator --> Agent4[4. Elevate360 Agent: 360 Review & Promotion Synthesis]
        Orchestrator --> Agent5[5. PeopleAdvisor Agent: Autonomous HR Policy Concierge]
    end
    
    Agent1 --> Output1[Multi-Vector Match Index, Anonymized Audit, Interview Rubric]
    Agent2 --> Output2[Interactive 30-60-90 Milestones, Buddy Match, IT Provisioning]
    Agent3 --> Output3[Burnout Risk Heatmap, Attrition Predictor, Proactive Actions]
    Agent4 --> Output4[Competency Radar, Promotion Readiness Score, Career Roadmap]
    Agent5 --> Output5[Conversational HR Desk, Verified Handbook Citations, Ticket Triage]
```

---

## The 5 Autonomous HR Agents

### 1. 🎯 TalentScout Agent (Recruitment & Intelligent Screening)
- **Multi-Vector Semantic Matching**: Calculates multi-vector scores across Technical Proficiency, Leadership Potential, Culture Addition, and Retention Velocity.
- **Algorithmic Anti-Bias**: Blind evaluation engine that strips candidate names, graduation dates, and university pedigree to mitigate cognitive bias and evaluate strictly on demonstrable merit.
- **Autonomous Interview Questionnaire Synthesizer**: Generates structured, role-tailored behavioral and technical interview guides with clear scoring rubrics and 1-click clipboard export.
- **Interactive Resume Sandbox**: Real-time evaluation of custom candidate snippets with instant scoring and recommendations.

### 2. 🚀 OnboardPilot Agent (30-60-90 Day Personalized Ramp)
- **Dynamic 30-60-90 Milestones**: Automatically structures bespoke Day 30, Day 60, and Day 90 phases with actionable task checklists across Technical, Culture, Compliance, and Delivery categories.
- **Interactive Task Checklist**: Check off items in real time to visualize live onboarding velocity and milestone review gates.
- **AI-Matched Onboarding Buddy**: Pairs new hires with compatible senior peers based on tech stack synergy, domain focus, and culture metrics.
- **Automated IT Provisioning Tracker**: Live telemetry tracking laptop shipment, SSO/cloud IAM permissions, and security badge activations.

### 3. 📊 PulseSentinel Agent (Workplace Productivity & Burnout Telemetry)
- **Real-Time Burnout Risk Gauge**: Monitors organizational health, eNPS (+46 benchmark), meeting load averages (hrs/week), and predictive flight risk before voluntary attrition occurs.
- **5-Week Sentiment Trend Analysis**: Visual historical trend bars tracking team morale with automated alerts when scores drop below safe thresholds.
- **Anonymous Friction Signal Mining**: Synthesizes unvarnished team feedback into top stressors while guaranteeing k-anonymity (k ≥ 5) and privacy.
- **Proactive Managerial Interventions**: Dispatches targeted 1-click playbooks (e.g., No-Meeting Focus Wednesdays, AI meeting note bot, quota ramp buffers).

### 4. 📈 Elevate360 Agent (360 Performance Appraisal & Career Progression)
- **Multi-Stakeholder Synthesis**: Consolidates peer feedback, managerial calibrations, and self-assessments into an objective performance rating.
- **5-Dimension Competency Radar**: Quantifies Domain Mastery, Strategic Execution, Team Collaboration, Innovation, and Mentorship Impact.
- **Promotion Readiness Index**: Delivers an objective percentage score indicating readiness for target level progression (e.g., L6 Staff to L7 Principal).
- **Quarterly Career Development Pathway**: Outlines actionable quarter-by-quarter learning milestones to bridge remaining competency gaps.

### 5. 💬 PeopleAdvisor Agent (Autonomous HR Policy Concierge)
- **Interactive Multi-Turn Chat**: Instant answers to complex employee questions covering parental leave, remote work hardware stipends, equity vesting (RSUs/options), health coverage, and expense rules.
- **Verifiable Policy Citations**: Every response cites the exact section and policy document from the enterprise handbook (e.g., *Section 4.1: Remote Work Accommodations, Global Employee Handbook 2026*).
- **Quick-Inquiry Prompts**: 1-click contextual prompt chips for instant triage based on the selected departmental domain.

---

## Enterprise Role Presets (Demo Ready)

PulseHR OS includes 4 rich enterprise scenarios ready for instant demonstration:

1. **Senior AI / ML Platform Engineer** (*Core Infrastructure & AI Platform*): LLM inference cluster scaling, high-throughput model gateways, GPU kernel page triage, and Staff-to-Principal progression.
2. **Enterprise Account Executive (GTM)** (*Revenue Operations & Enterprise Sales*): Multi-million dollar quota attainment, MEDDPICC qualification, sales ramp milestones, and quarter-end burnout mitigation.
3. **Lead Product Designer** (*Product Experience & Design*): Figma design system architecture, WCAG AAA accessibility, user research synthesis, and cross-functional engineering handoffs.
4. **Customer Success Operations Lead** (*Customer Experience & Solutions*): Net Revenue Retention (NRR) optimization, Gainsight health score automation, churn deflection, and support tiering.

---

## Dual-Engine Architecture

- **Offline High-Fidelity Demo Mode**: Zero-latency, highly detailed datasets pre-configured for instant presentation and flawless demonstration.
- **Google Gemini Live Mode**: Configurable directly in the UI via the topbar **API Key** button. Enter any Google AI Studio or Vertex AI Gemini key (`gemini-2.5-flash`, `gemini-1.5-pro`, `gemini-1.5-flash`) to enable live dynamic candidate parsing, policy chat, and rubric generation.

---

## Technology Stack

- **Core & Runtime**: React 18, TypeScript 5, Vite 6
- **Styling & Aesthetics**: Tailwind CSS with custom glassmorphism design system (`#090d16` canvas, neon indigo/cyan/emerald accents, glowing borders, custom dark scrollbars)
- **Icons**: Lucide React
- **AI Integration**: Google Gemini REST API (Vertex AI compatible)

---

## Quickstart Guide

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation & Local Run

```bash
# 1. Clone or navigate to repository
cd HR-Automation-Agents

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The platform will launch at `http://localhost:5173`.

### Production Build Verification

```bash
npm run build
```

Compiles TypeScript cleanly and bundles production assets into `dist/`.

---

## License & Credits

Developed for the **BITSom Vertex Fest** Hackathon. Powered by Google Gemini.
