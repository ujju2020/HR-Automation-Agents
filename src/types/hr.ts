export type AgentType = 
  | 'talentscout' 
  | 'onboardpilot' 
  | 'pulsesentinel' 
  | 'elevate360' 
  | 'peopleadvisor';

export type AgentStatus = 'idle' | 'running' | 'completed' | 'failed';

export interface AgentMetric {
  id: AgentType;
  name: string;
  role: string;
  avatarIcon: string;
  status: AgentStatus;
  executionTimeMs: number;
  tokensProcessed: number;
  confidenceScore: number; // 0 - 100
  summary: string;
}

// 1. TalentScout Types
export interface CandidateEvaluation {
  id: string;
  name: string;
  role: string;
  avatar: string;
  overallMatchScore: number; // 0 - 100
  rank: number;
  vectorScores: {
    technicalProficiency: number;
    leadershipPotential: number;
    cultureAddition: number;
    retentionVelocity: number;
  };
  keyStrengths: string[];
  growthGaps: string[];
  biasMitigationFlags: string[];
  recommendedDecision: 'Strong Hire' | 'Hire' | 'Borderline' | 'Reject';
  interviewGuide: {
    question: string;
    targetCompetency: string;
    scoringCriteria: string;
  }[];
}

// 2. OnboardPilot Types
export interface OnboardingMilestone {
  day: number; // 30, 60, 90
  title: string;
  focus: string;
  tasks: {
    id: string;
    task: string;
    completed: boolean;
    category: 'Technical' | 'Culture' | 'Compliance' | 'Delivery';
  }[];
  reviewGate: string;
}

export interface OnboardingProfile {
  employeeName: string;
  targetRole: string;
  department: string;
  startDate: string;
  assignedBuddy: {
    name: string;
    title: string;
    avatar: string;
    compatibilityReason: string;
  };
  itProvisioningStatus: {
    laptop: 'Provisioned' | 'Shipped' | 'Pending';
    cloudAccess: 'Active' | 'Pending Approval';
    securityBadge: 'Active' | 'Ready for Pickup';
  };
  milestones: OnboardingMilestone[];
}

// 3. PulseSentinel Types
export interface DepartmentPulse {
  department: string;
  headcount: number;
  eNPS: number; // -100 to +100
  burnoutRiskLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  burnoutScore: number; // 0 - 100
  meetingLoadAvgHours: number; // e.g. 24 hrs/wk
  attritionFlightRisk: number; // percentage 0 - 100
  sentimentTrend: number[]; // 5 weeks history
  topStressors: string[];
  recommendedInterventions: {
    title: string;
    action: string;
    urgency: 'Immediate' | 'Medium-Term' | 'Routine';
  }[];
}

// 4. Elevate360 Types
export interface PerformanceEvaluation {
  employeeName: string;
  role: string;
  tenure: string;
  currentLevel: string;
  targetLevel: string;
  overallRating: 'Exceeds Expectations' | 'Consistently Meets' | 'Developing' | 'Needs Improvement';
  promotionReadinessScore: number; // 0 - 100
  competencyRadar: {
    domainKnowledge: number;
    strategicExecution: number;
    teamCollaboration: number;
    innovationInitiative: number;
    mentorshipImpact: number;
  };
  peerSummary: string;
  managerSummary: string;
  selfAssessmentHighlights: string;
  careerGrowthRoadmap: {
    quarter: string;
    milestone: string;
    actionableLearning: string;
  }[];
}

// 5. PeopleAdvisor Types
export interface PolicyMessage {
  id: string;
  sender: 'user' | 'agent' | 'system';
  text: string;
  timestamp: string;
  policyCitation?: {
    handbookSection: string;
    policyDocName: string;
    linkUrl?: string;
  };
  suggestedActions?: string[];
}

// Scenario Preset
export interface HRPresetScenario {
  id: string;
  title: string;
  tagline: string;
  department: string;
  candidateProfile: CandidateEvaluation;
  onboarding: OnboardingProfile;
  departmentPulse: DepartmentPulse;
  performanceReview: PerformanceEvaluation;
  samplePolicyPrompts: string[];
}
