/**
 * Copyright (c) 2026 Ujjwal Kumar Bhowmick
 * Developer: Ujjwal Kumar Bhowmick
 * Email: ujjwalkumarbhowmick30@gmail.com
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  Compass, 
  Activity, 
  Award, 
  HelpCircle, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Workflow 
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { MetricOverview } from './components/MetricOverview';
import { AgentPipelineVisualizer } from './components/AgentPipelineVisualizer';
import { ApiKeyModal } from './components/ApiKeyModal';
import { TalentScoutTab } from './components/tabs/TalentScoutTab';
import { OnboardPilotTab } from './components/tabs/OnboardPilotTab';
import { PulseSentinelTab } from './components/tabs/PulseSentinelTab';
import { Elevate360Tab } from './components/tabs/Elevate360Tab';
import { PeopleAdvisorTab } from './components/tabs/PeopleAdvisorTab';

import { ENTERPRISE_PRESETS } from './data/enterprisePresets';
import { AgentMetric, AgentType, HRPresetScenario } from './types/hr';
import { GeminiHRService } from './services/geminiService';

export const App: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<HRPresetScenario>(ENTERPRISE_PRESETS[0]);
  const [activeTab, setActiveTab] = useState<AgentType>('talentscout');
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isLiveApiConnected, setIsLiveApiConnected] = useState(false);
  const [isRunningPipeline, setIsRunningPipeline] = useState(false);

  const initialMetrics: Record<AgentType, AgentMetric> = {
    talentscout: {
      id: 'talentscout',
      name: 'TalentScout',
      role: 'Recruitment & Screening',
      avatarIcon: 'UserCheck',
      status: 'completed',
      executionTimeMs: 142,
      tokensProcessed: 1250,
      confidenceScore: 96,
      summary: 'Multi-vector match computed. Blind screen verified.',
    },
    onboardpilot: {
      id: 'onboardpilot',
      name: 'OnboardPilot',
      role: '30-60-90 Day Ramp',
      avatarIcon: 'Compass',
      status: 'completed',
      executionTimeMs: 118,
      tokensProcessed: 980,
      confidenceScore: 94,
      summary: 'Tailored 90-day checklist & mentor assigned.',
    },
    pulsesentinel: {
      id: 'pulsesentinel',
      name: 'PulseSentinel',
      role: 'Productivity & Burnout',
      avatarIcon: 'Activity',
      status: 'completed',
      executionTimeMs: 89,
      tokensProcessed: 740,
      confidenceScore: 91,
      summary: 'Organizational pulse analyzed. Stressors flagged.',
    },
    elevate360: {
      id: 'elevate360',
      name: 'Elevate360',
      role: '360 Appraisal & Growth',
      avatarIcon: 'Award',
      status: 'completed',
      executionTimeMs: 164,
      tokensProcessed: 1420,
      confidenceScore: 93,
      summary: '360 feedback synthesized into promotion score.',
    },
    peopleadvisor: {
      id: 'peopleadvisor',
      name: 'PeopleAdvisor',
      role: 'HR Policy Concierge',
      avatarIcon: 'HelpCircle',
      status: 'completed',
      executionTimeMs: 95,
      tokensProcessed: 680,
      confidenceScore: 98,
      summary: 'Handbook citations verified and indexed.',
    },
  };

  const [agentMetrics, setAgentMetrics] = useState<Record<AgentType, AgentMetric>>(initialMetrics);

  useEffect(() => {
    setIsLiveApiConnected(GeminiHRService.isConfigured());
  }, []);

  const handleRunFullPipeline = () => {
    setIsRunningPipeline(true);

    const agentSequence: AgentType[] = [
      'talentscout',
      'onboardpilot',
      'pulsesentinel',
      'elevate360',
      'peopleadvisor',
    ];

    // Reset all to running sequentially
    agentSequence.forEach((key, index) => {
      setTimeout(() => {
        setAgentMetrics((prev) => ({
          ...prev,
          [key]: {
            ...prev[key],
            status: 'running',
          },
        }));

        setTimeout(() => {
          setAgentMetrics((prev) => ({
            ...prev,
            [key]: {
              ...prev[key],
              status: 'completed',
              executionTimeMs: Math.floor(Math.random() * 80) + 90,
              tokensProcessed: Math.floor(Math.random() * 500) + 800,
              confidenceScore: Math.floor(Math.random() * 7) + 93,
            },
          }));

          if (index === agentSequence.length - 1) {
            setIsRunningPipeline(false);
          }
        }, 400);
      }, index * 400);
    });
  };

  const tabOptions: { id: AgentType; label: string; icon: any; agentBadge: string }[] = [
    {
      id: 'talentscout',
      label: '1. Talent Acquisition & Screening',
      icon: UserCheck,
      agentBadge: 'TalentScout',
    },
    {
      id: 'onboardpilot',
      label: '2. 30-60-90 Day Onboarding Ramp',
      icon: Compass,
      agentBadge: 'OnboardPilot',
    },
    {
      id: 'pulsesentinel',
      label: '3. Workplace Sentiment & Burnout',
      icon: Activity,
      agentBadge: 'PulseSentinel',
    },
    {
      id: 'elevate360',
      label: '4. 360 Performance & Career Growth',
      icon: Award,
      agentBadge: 'Elevate360',
    },
    {
      id: 'peopleadvisor',
      label: '5. Autonomous HR Policy Concierge',
      icon: HelpCircle,
      agentBadge: 'PeopleAdvisor',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navigation */}
      <Navbar
        scenarios={ENTERPRISE_PRESETS}
        selectedScenario={selectedScenario}
        onSelectScenario={(s) => {
          setSelectedScenario(s);
          handleRunFullPipeline();
        }}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        isLiveApiConnected={isLiveApiConnected}
        onRunFullPipeline={handleRunFullPipeline}
        isRunningPipeline={isRunningPipeline}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Top Hero / Role Context Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Workflow className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-white">
                  Active Requisition: {selectedScenario.title}
                </h1>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                  {selectedScenario.department}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{selectedScenario.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Engine: {isLiveApiConnected ? 'Google Gemini Live' : 'High-Fidelity Offline Engine'}
            </span>
          </div>
        </div>

        {/* 4 High-Level Metrics */}
        <MetricOverview />

        {/* Multi-Agent Swarm Visualizer */}
        <AgentPipelineVisualizer
          agentMetrics={agentMetrics}
          activeTab={activeTab}
          onSelectAgentTab={(tab) => setActiveTab(tab)}
          isRunningPipeline={isRunningPipeline}
        />

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-800/80 scrollbar-none">
          {tabOptions.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600/90 to-cyan-600/90 text-white shadow-lg shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent hover:border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-black/30 text-white' : 'bg-slate-800/60 text-slate-500'
                  }`}
                >
                  {t.agentBadge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="transition-all duration-300">
          {activeTab === 'talentscout' && (
            <TalentScoutTab
              candidate={selectedScenario.candidateProfile}
              roleTitle={selectedScenario.title}
              department={selectedScenario.department}
            />
          )}

          {activeTab === 'onboardpilot' && (
            <OnboardPilotTab onboarding={selectedScenario.onboarding} />
          )}

          {activeTab === 'pulsesentinel' && (
            <PulseSentinelTab pulse={selectedScenario.departmentPulse} />
          )}

          {activeTab === 'elevate360' && (
            <Elevate360Tab review={selectedScenario.performanceReview} />
          )}

          {activeTab === 'peopleadvisor' && (
            <PeopleAdvisorTab
              department={selectedScenario.department}
              samplePrompts={selectedScenario.samplePolicyPrompts}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#070a11] py-6 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">PulseHR OS</span>
            <span>•</span>
            <span>Autonomous Human Capital Management & Talent Lifecycle System</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-400">
              © 2026 <strong>Ujjwal Kumar Bhowmick</strong> • All rights reserved.
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Built for <strong className="text-indigo-400">BITSom Vertex Fest</strong>
            </span>
            <span>•</span>
            <span className="text-slate-400">Powered by Google Gemini Vertex AI</span>
          </div>
        </div>
      </footer>

      {/* Gemini API Key Configuration Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onConfigSaved={() => setIsLiveApiConnected(GeminiHRService.isConfigured())}
      />
    </div>
  );
};

export default App;
