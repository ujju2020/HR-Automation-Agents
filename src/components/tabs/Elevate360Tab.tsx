import React, { useState } from 'react';
import { 
  Award, 
  TrendingUp, 
  Target, 
  FileCheck, 
  Compass, 
  MessageSquare, 
  Check, 
  Copy,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PerformanceEvaluation } from '../../types/hr';

interface Elevate360TabProps {
  review: PerformanceEvaluation;
}

export const Elevate360Tab: React.FC<Elevate360TabProps> = ({ review }) => {
  const [copiedReview, setCopiedReview] = useState(false);

  const handleCopyReview = () => {
    const text = `ELEVATE360 PERFORMANCE DOSSIER: ${review.employeeName}
Role: ${review.role} | Level: ${review.currentLevel} -> Target: ${review.targetLevel}
Overall Rating: ${review.overallRating} | Promotion Readiness: ${review.promotionReadinessScore}%

COMPETENCY BREAKDOWN:
- Domain Knowledge: ${review.competencyRadar.domainKnowledge}%
- Strategic Execution: ${review.competencyRadar.strategicExecution}%
- Team Collaboration: ${review.competencyRadar.teamCollaboration}%
- Innovation Initiative: ${review.competencyRadar.innovationInitiative}%
- Mentorship Impact: ${review.competencyRadar.mentorshipImpact}%

PEER SYNTHESIS:
${review.peerSummary}

MANAGER SYNTHESIS:
${review.managerSummary}

CAREER ROADMAP:
${review.careerGrowthRoadmap.map((r) => `${r.quarter}: ${r.milestone} - ${r.actionableLearning}`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopiedReview(true);
    setTimeout(() => setCopiedReview(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md relative overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                Elevate360 Agent
              </span>
              <span className="text-xs text-slate-500">• Cycle: Q3 Comprehensive Review</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mt-1.5">
              360 Performance Appraisal & Promotion Readiness: {review.employeeName}
            </h2>
            <div className="flex items-center gap-3 mt-1 text-sm text-slate-400">
              <span>{review.role}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-indigo-300 font-medium">
                Current: {review.currentLevel}
                <ArrowRight className="w-3.5 h-3.5" />
                Target: {review.targetLevel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Promotion Readiness
              </span>
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                {review.promotionReadinessScore}%
              </div>
              <span className="text-[11px] text-emerald-400 font-semibold">
                {review.overallRating}
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Synthesized across 8 peer reviews, manager evaluation, and OKR delivery milestones.
          </span>
          <button
            onClick={handleCopyReview}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
          >
            {copiedReview ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Copied Dossier
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-indigo-400" />
                Export 360 Summary
              </>
            )}
          </button>
        </div>
      </div>

      {/* Grid: Competency Breakdown & 360 Feedback Synthesis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Competency Radar Breakdown */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-cyan-400" />
              Core Competency Dimensions
            </h3>
            <span className="text-xs text-slate-400 font-mono">Calibration: Exceeds</span>
          </div>

          <div className="space-y-3.5">
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-300">Domain Mastery & Technical Depth</span>
                <span className="text-cyan-400 font-semibold">{review.competencyRadar.domainKnowledge}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  style={{ width: `${review.competencyRadar.domainKnowledge}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-300">Strategic Execution & Velocity</span>
                <span className="text-indigo-400 font-semibold">{review.competencyRadar.strategicExecution}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  style={{ width: `${review.competencyRadar.strategicExecution}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-300">Team Collaboration & Cross-Functional Impact</span>
                <span className="text-emerald-400 font-semibold">{review.competencyRadar.teamCollaboration}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                  style={{ width: `${review.competencyRadar.teamCollaboration}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-300">Innovation & Proactive Initiative</span>
                <span className="text-amber-400 font-semibold">{review.competencyRadar.innovationInitiative}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
                  style={{ width: `${review.competencyRadar.innovationInitiative}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-300">Mentorship & Knowledge Sharing</span>
                <span className="text-purple-400 font-semibold">{review.competencyRadar.mentorshipImpact}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: `${review.competencyRadar.mentorshipImpact}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-400 bg-slate-950/40 p-3 rounded-xl border border-slate-800">
            <strong className="text-slate-200">Elevate360 Summary:</strong> Clear demonstration of next-level behaviors. Candidate exhibits high autonomous leverage and consistently unblocks peers across organizational boundaries.
          </div>
        </div>

        {/* 360 Feedback Synthesized Streams */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            Synthesized 360 Perspectives
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="font-semibold text-cyan-400 block mb-1">Peer Feedback Consensus:</span>
              <p className="text-slate-300 leading-relaxed">{review.peerSummary}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="font-semibold text-indigo-400 block mb-1">Manager Calibration:</span>
              <p className="text-slate-300 leading-relaxed">{review.managerSummary}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="font-semibold text-emerald-400 block mb-1">Self-Assessment Highlights:</span>
              <p className="text-slate-300 leading-relaxed">{review.selfAssessmentHighlights}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quarterly Career Growth Roadmap */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              Tailored Career Progression Pathway ({review.targetLevel})
            </h3>
            <p className="text-xs text-slate-400">
              Autonomous micro-milestones designed to close calibration gaps for promotion.
            </p>
          </div>
          <span className="text-xs text-emerald-400 font-medium">Growth Plan Active</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {review.careerGrowthRoadmap.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {item.quarter}
                </span>
                <span className="text-[11px] text-slate-500">Milestone #{idx + 1}</span>
              </div>
              <h4 className="text-xs font-bold text-white">{item.milestone}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Actionable Plan:</strong> {item.actionableLearning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
