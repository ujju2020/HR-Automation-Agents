/**
 * Copyright (c) 2026 Ujjwal Kumar Bhowmick
 * Developer: Ujjwal Kumar Bhowmick
 * Email: ujjwalkumarbhowmick30@gmail.com
 * All rights reserved.
 */

import React, { useState } from 'react';
import { 
  Activity, 
  Flame, 
  Users, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  ShieldAlert, 
  Zap,
  Play
} from 'lucide-react';
import { DepartmentPulse } from '../../types/hr';

interface PulseSentinelTabProps {
  pulse: DepartmentPulse;
}

export const PulseSentinelTab: React.FC<PulseSentinelTabProps> = ({ pulse }) => {
  const [triggeredInterventions, setTriggeredInterventions] = useState<Record<string, boolean>>({});

  const handleTrigger = (idx: number) => {
    setTriggeredInterventions((prev) => ({ ...prev, [idx]: true }));
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Moderate':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'High':
      case 'Critical':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md relative overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30">
                PulseSentinel Agent
              </span>
              <span className="text-xs text-slate-500">• Telemetry: Continuous Anonymized Pulse</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mt-1.5">
              Workplace Productivity & Burnout Telemetry
            </h2>
            <p className="text-sm text-slate-400">
              Department: <strong className="text-slate-200">{pulse.department}</strong> ({pulse.headcount} active headcount)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${getRiskColor(pulse.burnoutRiskLevel)}`}>
              <AlertTriangle className="w-4 h-4" />
              {pulse.burnoutRiskLevel} Burnout Risk ({pulse.burnoutScore}/100)
            </span>
          </div>
        </div>

        {/* 4 Telemetry Metrics Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Employee NPS (eNPS)</span>
              <Users className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-cyan-400">+{pulse.eNPS}</div>
            <p className="text-[11px] text-slate-500 mt-1">Benchmark: +35 industry avg</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Burnout Index</span>
              <Flame className="w-4 h-4 text-rose-400" />
            </div>
            <div className="text-2xl font-bold text-rose-400">{pulse.burnoutScore} / 100</div>
            <p className="text-[11px] text-slate-500 mt-1">Based on meeting load & survey NLP</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Weekly Meeting Load</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-bold text-amber-400">{pulse.meetingLoadAvgHours} hrs/wk</div>
            <p className="text-[11px] text-slate-500 mt-1">Target threshold: &lt; 18 hrs/wk</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Attrition Flight Risk</span>
              <Activity className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-purple-400">{pulse.attritionFlightRisk}%</div>
            <p className="text-[11px] text-emerald-400 mt-1">Down 6% from last quarter</p>
          </div>
        </div>
      </div>

      {/* Sentiment Trend & Stressors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 5-Week Trend */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-400" />
              5-Week Sentiment Health Trend
            </h3>
            <span className="text-xs text-slate-400">Weekly Score (0 - 100)</span>
          </div>

          <div className="h-44 flex items-end justify-between gap-4 pt-6 pb-2 px-4 bg-slate-950/40 rounded-xl border border-slate-800/80">
            {pulse.sentimentTrend.map((val, idx) => {
              const heightPercent = Math.max(val, 20);
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <span className="text-[11px] font-mono text-indigo-300 font-semibold">{val}</span>
                  <div
                    className="w-full max-w-[48px] bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-lg transition-all duration-500"
                    style={{ height: `${heightPercent}%` }}
                  />
                  <span className="text-[10px] text-slate-500">Wk {idx + 1}</span>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-slate-400 mt-4">
            *PulseSentinel automatically triggers managerial alert notifications when a team drops below a 65 sentiment index for 2 consecutive cycles.
          </p>
        </div>

        {/* Top Stressors */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            Top Friction Signals Detected
          </h3>

          <div className="space-y-3">
            {pulse.topStressors.map((stressor, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                <p className="text-xs text-slate-300 leading-relaxed">{stressor}</p>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-200">Privacy & Anonymity Guarantee:</span> All pulse inputs are aggregated and k-anonymized (k ≥ 5) before sentiment clustering. Individual responses are cryptographically shielded.
          </div>
        </div>
      </div>

      {/* Autonomous Proactive Interventions */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              PulseSentinel Recommended Interventions
            </h3>
            <p className="text-xs text-slate-400">
              Proactive playbooks automatically dispatched to mitigate workload bottlenecks.
            </p>
          </div>
          <span className="text-xs text-indigo-400 font-mono">Real-time Triage</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pulse.recommendedInterventions.map((item, idx) => {
            const isTriggered = triggeredInterventions[idx];
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-950/80 border border-slate-800 p-4 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.urgency === 'Immediate'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      }`}
                    >
                      {item.urgency}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.action}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => handleTrigger(idx)}
                    disabled={isTriggered}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      isTriggered
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    }`}
                  >
                    {isTriggered ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        Playbook Dispatched
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        Dispatch Action
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
