import React from 'react';
import { 
  UserCheck, 
  Compass, 
  Activity, 
  Award, 
  HelpCircle, 
  CheckCircle2, 
  Loader2, 
  Cpu, 
  Clock, 
  Flame 
} from 'lucide-react';
import { AgentMetric, AgentType } from '../types/hr';

interface AgentPipelineVisualizerProps {
  agentMetrics: Record<AgentType, AgentMetric>;
  activeTab: AgentType;
  onSelectAgentTab: (tab: AgentType) => void;
  isRunningPipeline: boolean;
}

export const AgentPipelineVisualizer: React.FC<AgentPipelineVisualizerProps> = ({
  agentMetrics,
  activeTab,
  onSelectAgentTab,
  isRunningPipeline,
}) => {
  const agentIcons: Record<AgentType, any> = {
    talentscout: UserCheck,
    onboardpilot: Compass,
    pulsesentinel: Activity,
    elevate360: Award,
    peopleadvisor: HelpCircle,
  };

  const agentOrder: AgentType[] = [
    'talentscout',
    'onboardpilot',
    'pulsesentinel',
    'elevate360',
    'peopleadvisor',
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              Autonomous Swarm Orchestration Pipeline
              <span className="flex items-center gap-1 text-[11px] font-normal text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                5 Agents Synchronized
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Click any agent to inspect real-time outputs, decisions, and reasoning graphs.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Avg Latency: <strong className="text-slate-200">120ms</strong></span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Token Usage: <strong className="text-slate-200">4.8k tok</strong></span>
          </div>
        </div>
      </div>

      {/* Agents Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
        {agentOrder.map((agentKey, index) => {
          const metric = agentMetrics[agentKey];
          const Icon = agentIcons[agentKey];
          const isSelected = activeTab === agentKey;

          return (
            <div
              key={agentKey}
              onClick={() => onSelectAgentTab(agentKey)}
              className={`relative cursor-pointer rounded-xl p-3 border transition-all duration-200 ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/50'
                  : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              {/* Agent Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center border ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{metric.name}</h4>
                    <p className="text-[10px] text-slate-400 truncate max-w-[110px]">{metric.role}</p>
                  </div>
                </div>

                <div>
                  {metric.status === 'running' ? (
                    <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
                  ) : metric.status === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-600" />
                  )}
                </div>
              </div>

              {/* Agent Stats & Confidence */}
              <div className="mt-2 text-[11px] text-slate-400 space-y-1">
                <div className="flex justify-between items-center">
                  <span>Confidence:</span>
                  <span className="font-semibold text-emerald-400">{metric.confidenceScore}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${metric.confidenceScore}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] pt-1 text-slate-500">
                  <span>{metric.executionTimeMs}ms</span>
                  <span>{metric.tokensProcessed} tokens</span>
                </div>
              </div>

              {/* Pipeline Connector indicator for desktop */}
              {index < agentOrder.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-3 h-[2px] bg-slate-700" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
