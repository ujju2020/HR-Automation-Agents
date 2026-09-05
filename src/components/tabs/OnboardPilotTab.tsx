/**
 * Copyright (c) 2026 Ujjwal Kumar Bhowmick
 * Developer: Ujjwal Kumar Bhowmick
 * Email: ujjwalkumarbhowmick30@gmail.com
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  Circle, 
  UserPlus, 
  Laptop, 
  ShieldCheck, 
  KeyRound, 
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';
import { OnboardingProfile, OnboardingMilestone } from '../../types/hr';

interface OnboardPilotTabProps {
  onboarding: OnboardingProfile;
}

export const OnboardPilotTab: React.FC<OnboardPilotTabProps> = ({ onboarding }) => {
  const [milestones, setMilestones] = useState<OnboardingMilestone[]>(onboarding.milestones);
  const [activeDay, setActiveDay] = useState<number>(30);

  useEffect(() => {
    setMilestones(onboarding.milestones);
  }, [onboarding]);

  const handleToggleTask = (day: number, taskId: string) => {
    setMilestones((prev) =>
      prev.map((m) => {
        if (m.day === day) {
          return {
            ...m,
            tasks: m.tasks.map((t) =>
              t.id === taskId ? { ...t, completed: !t.completed } : t
            ),
          };
        }
        return m;
      })
    );
  };

  const currentMilestone = milestones.find((m) => m.day === activeDay) || milestones[0];

  // Calculate overall onboarding progress
  const totalTasks = milestones.flatMap((m) => m.tasks).length;
  const completedTasks = milestones.flatMap((m) => m.tasks).filter((t) => t.completed).length;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md relative overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                OnboardPilot Agent
              </span>
              <span className="text-xs text-slate-500">• Start Date: {onboarding.startDate}</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mt-1.5">
              Personalized 30-60-90 Day Ramp: {onboarding.employeeName}
            </h2>
            <p className="text-sm text-slate-400">
              Role: <strong className="text-slate-200">{onboarding.targetRole}</strong> ({onboarding.department})
            </p>
          </div>

          {/* Global Ramp Progress */}
          <div className="flex items-center gap-4 bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Onboarding Velocity
              </span>
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                {progressPercent}% Complete
              </div>
              <span className="text-[11px] text-slate-500">
                {completedTasks} of {totalTasks} milestones completed
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Compass className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Provisioning Telemetry Row */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Developer Hardware</p>
              <p className="text-xs font-semibold text-white">
                {onboarding.itProvisioningStatus.laptop} (MacBook M3 Max)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Cloud IAM & Repos</p>
              <p className="text-xs font-semibold text-emerald-400">
                {onboarding.itProvisioningStatus.cloudAccess} (SSO Linked)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Security & Facility Badge</p>
              <p className="text-xs font-semibold text-white">
                {onboarding.itProvisioningStatus.securityBadge}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Onboarding Milestones & Buddy Pairing */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: 30-60-90 Day Milestones */}
        <div className="lg:col-span-2 space-y-4">
          {/* Day Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            {milestones.map((m) => {
              const isActive = m.day === activeDay;
              const done = m.tasks.filter((t) => t.completed).length;
              return (
                <button
                  key={m.day}
                  onClick={() => setActiveDay(m.day)}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Day {m.day}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {done}/{m.tasks.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Day {currentMilestone.day} Core Objective
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">{currentMilestone.title}</h3>
                <p className="text-xs text-slate-300 mt-1">{currentMilestone.focus}</p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-indigo-300 border border-slate-700 shrink-0">
                Phase {currentMilestone.day / 30}
              </span>
            </div>

            {/* Tasks List */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-medium text-slate-400">
                Action Items (Click checkmark to toggle):
              </span>
              {currentMilestone.tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => handleToggleTask(currentMilestone.day, task.id)}
                  className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    task.completed
                      ? 'bg-slate-950/60 border-slate-800/80 text-slate-400'
                      : 'bg-slate-900/90 border-slate-700/80 text-white hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        task.completed ? 'line-through text-slate-500' : 'text-slate-200'
                      }`}
                    >
                      {task.task}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      task.category === 'Technical'
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : task.category === 'Culture'
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        : task.category === 'Compliance'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    }`}
                  >
                    {task.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Review Gate Banner */}
            <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/50 flex items-start gap-2.5 text-xs text-indigo-200 mt-4">
              <Award className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong>Milestone Review Gate:</strong> {currentMilestone.reviewGate}
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Mentor / Buddy Matching & Culture */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <UserPlus className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">AI-Matched Onboarding Buddy</h3>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 mb-3">
              <img
                src={onboarding.assignedBuddy.avatar}
                alt={onboarding.assignedBuddy.name}
                className="w-12 h-12 rounded-xl object-cover border border-emerald-500/40"
              />
              <div>
                <h4 className="text-xs font-bold text-white">
                  {onboarding.assignedBuddy.name}
                </h4>
                <p className="text-[11px] text-slate-400">
                  {onboarding.assignedBuddy.title}
                </p>
                <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  98% Compatibility Match
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-300 bg-slate-900/90 p-3 rounded-xl border border-slate-800/80">
              <p className="font-semibold text-slate-200 mb-1">Matching Rationale:</p>
              <p className="text-slate-400 leading-relaxed">
                {onboarding.assignedBuddy.compatibilityReason}
              </p>
            </div>
          </div>

          {/* First 90 Days Success Guarantee */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md shadow-lg text-xs space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Retention Guardrail</span>
            </div>
            <p className="text-slate-400">
              OnboardPilot initiates weekly micro-check-ins with the manager and buddy to ensure zero ramp blockers and eliminate first-90-day churn risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
