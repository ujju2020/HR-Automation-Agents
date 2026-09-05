import React from 'react';
import { 
  Users, 
  Sparkles, 
  Key, 
  RefreshCw, 
  Layers, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { HRPresetScenario } from '../types/hr';

interface NavbarProps {
  scenarios: HRPresetScenario[];
  selectedScenario: HRPresetScenario;
  onSelectScenario: (scenario: HRPresetScenario) => void;
  onOpenApiKeyModal: () => void;
  isLiveApiConnected: boolean;
  onRunFullPipeline: () => void;
  isRunningPipeline: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  scenarios,
  selectedScenario,
  onSelectScenario,
  onOpenApiKeyModal,
  isLiveApiConnected,
  onRunFullPipeline,
  isRunningPipeline,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090d16]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
              <Users className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                PulseHR <span className="text-indigo-400">OS</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                Multi-Agent Swarm
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Autonomous HCM & Talent Lifecycle Intelligence
            </p>
          </div>
        </div>

        {/* Center: Scenario Selector */}
        <div className="hidden md:flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-xl p-1.5 shadow-inner">
          <Layers className="w-4 h-4 text-indigo-400 ml-2" />
          <span className="text-xs text-slate-400 font-medium mr-1">Role Preset:</span>
          <select
            value={selectedScenario.id}
            onChange={(e) => {
              const found = scenarios.find((s) => s.id === e.target.value);
              if (found) onSelectScenario(found);
            }}
            className="bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer pr-2"
          >
            {scenarios.map((s) => (
              <option key={s.id} value={s.id} className="bg-slate-900 text-slate-200">
                {s.title} ({s.department})
              </option>
            ))}
          </select>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Re-run Swarm button */}
          <button
            onClick={onRunFullPipeline}
            disabled={isRunningPipeline}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shadow-md ${
              isRunningPipeline
                ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:brightness-110 shadow-indigo-500/20 active:scale-95'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRunningPipeline ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">
              {isRunningPipeline ? 'Agents Executing...' : 'Trigger Swarm Run'}
            </span>
          </button>

          {/* Gemini API Key config button */}
          <button
            onClick={onOpenApiKeyModal}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              isLiveApiConnected
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20'
                : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:text-white'
            }`}
            title="Configure Gemini API Key"
          >
            <Key className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden lg:inline">
              {isLiveApiConnected ? 'Gemini Live' : 'API Key'}
            </span>
            {isLiveApiConnected && (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
