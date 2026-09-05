/**
 * Copyright (c) 2026 Ujjwal Kumar Bhowmick
 * Developer: Ujjwal Kumar Bhowmick
 * Email: ujjwalkumarbhowmick30@gmail.com
 * All rights reserved.
 */

import React from 'react';
import { Clock, Zap, HeartPulse, MessageSquareCheck, ArrowUpRight, TrendingDown } from 'lucide-react';

export const MetricOverview: React.FC = () => {
  const metrics = [
    {
      title: 'Autonomous Screening Speed',
      value: '1.4 mins',
      benchmark: 'vs 4.2 days manual',
      badge: '98% Bias Mitigated',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      icon: Clock,
      iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      delta: '-96% cycle time',
      isPositive: true,
    },
    {
      title: 'Time-to-Productivity (Ramp)',
      value: '18.5 days',
      benchmark: 'vs 45 days industry avg',
      badge: '30-60-90 Automated',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      icon: Zap,
      iconColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      delta: '2.4x faster velocity',
      isPositive: true,
    },
    {
      title: 'Workplace Pulse Health',
      value: '84 / 100',
      benchmark: 'eNPS +46 across units',
      badge: 'Low Flight Risk',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      icon: HeartPulse,
      iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      delta: '-68% burnout alerts',
      isPositive: true,
    },
    {
      title: 'Autonomous Policy Triage',
      value: '93.2%',
      benchmark: 'First-contact resolution',
      badge: 'Zero Ticket Backlog',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      icon: MessageSquareCheck,
      iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      delta: '+420 hrs saved/mo',
      isPositive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m, idx) => {
        const Icon = m.icon;
        return (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-md hover:border-slate-700/80 transition-all duration-300 group shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-xl border ${m.iconColor}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`px-2 py-0.5 text-[11px] font-medium rounded-full border ${m.badgeColor}`}>
                {m.badge}
              </span>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">{m.title}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold tracking-tight text-white">{m.value}</span>
                <span className="text-xs text-slate-500 font-normal">{m.benchmark}</span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-emerald-400 flex items-center gap-1 font-medium">
                <ArrowUpRight className="w-3.5 h-3.5" />
                {m.delta}
              </span>
              <span className="text-slate-500 text-[11px]">Real-time telemetry</span>
            </div>

            {/* Background Glow */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />
          </div>
        );
      })}
    </div>
  );
};
