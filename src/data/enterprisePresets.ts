/**
 * Copyright (c) 2026 Ujjwal Kumar Bhowmick
 * Developer: Ujjwal Kumar Bhowmick
 * Email: ujjwalkumarbhowmick30@gmail.com
 * All rights reserved.
 */

import { HRPresetScenario } from '../types/hr';

export const ENTERPRISE_PRESETS: HRPresetScenario[] = [
  {
    id: 'ai-platform-engineer',
    title: 'Senior AI / ML Platform Engineer',
    tagline: 'High-leverage GenAI Infrastructure, Model Serving & Agentic Pipeline Architecture',
    department: 'Artificial Intelligence & Core Infrastructure',
    candidateProfile: {
      id: 'cand-01',
      name: 'Dr. Elena Rostova',
      role: 'Staff AI/ML Infrastructure Engineer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
      overallMatchScore: 96,
      rank: 1,
      vectorScores: {
        technicalProficiency: 98,
        leadershipPotential: 92,
        cultureAddition: 95,
        retentionVelocity: 94
      },
      keyStrengths: [
        'Built multi-region Kubernetes LLM inference clusters handling 45k QPS',
        'Direct contributor to vLLM, TensorRT-LLM, and LangGraph ecosystems',
        'Proven track record scaling cross-disciplinary R&D teams from 4 to 22'
      ],
      growthGaps: [
        'Limited direct exposure to enterprise SOC-2 Type II audit compliance cycles'
      ],
      biasMitigationFlags: [
        'Name, university pedigree, and graduation year blinded during algorithmic scoring',
        'Competency weighed exclusively on verified open-source contributions & system design benchmark'
      ],
      recommendedDecision: 'Strong Hire',
      interviewGuide: [
        {
          question: 'Walk us through how you would architect a low-latency model gateway that balances speculative decoding with P99 cache hit rates.',
          targetCompetency: 'High-Throughput ML Systems',
          scoringCriteria: 'Exceeds if candidate addresses dynamic batching, KV cache sharing across nodes, and GPU memory fragmentation.'
        },
        {
          question: 'Describe an instance where you pushed back against deploying an LLM into production due to safety or hallucination risks.',
          targetCompetency: 'Ethical Engineering & Risk Judgment',
          scoringCriteria: 'Exceeds if candidate demonstrates concrete guardrailing protocols and cross-functional alignment with legal/product.'
        },
        {
          question: 'How do you foster technical autonomy in junior engineers without sacrificing system reliability?',
          targetCompetency: 'Distributed Mentorship',
          scoringCriteria: 'Exceeds if candidate utilizes automated CI guardrails, architectural decision records (ADRs), and blameless post-mortems.'
        }
      ]
    },
    onboarding: {
      employeeName: 'Dr. Elena Rostova',
      targetRole: 'Staff AI/ML Infrastructure Engineer',
      department: 'Core AI Infrastructure',
      startDate: 'First Monday, Next Month',
      assignedBuddy: {
        name: 'Marcus Vance',
        title: 'Principal Distributed Systems Architect',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
        compatibilityReason: 'Shared expertise in GPU cluster orchestration and high-performance RPC networks.'
      },
      itProvisioningStatus: {
        laptop: 'Provisioned',
        cloudAccess: 'Active',
        securityBadge: 'Active'
      },
      milestones: [
        {
          day: 30,
          title: 'Foundation & Observability',
          focus: 'Mastering the AI cluster topology, production telemetry, and shipping first canary release.',
          reviewGate: 'Manager Check-in: First Canary PR merged into Triton Serving cluster.',
          tasks: [
            { id: 't-30-1', task: 'Complete secure credential rotation & AWS/GCP Vertex AI IAM onboarding', completed: true, category: 'Compliance' },
            { id: 't-30-2', task: 'Setup local sandbox with vLLM benchmark harness and Grafana dashboards', completed: true, category: 'Technical' },
            { id: 't-30-3', task: '1:1 introductory sync with Product Leads across Search and Agentic Workflows', completed: true, category: 'Culture' },
            { id: 't-30-4', task: 'Review and propose latency optimizations for the multi-tenant embeddings router', completed: false, category: 'Delivery' }
          ]
        },
        {
          day: 60,
          title: 'Autonomous System Delivery',
          focus: 'Leading the redesign of KV cache eviction policy and orchestrating synthetic evaluation pipelines.',
          reviewGate: 'Engineering Lead Gate: Deliver ADR-042 and decrease model warm-up time by 25%.',
          tasks: [
            { id: 't-60-1', task: 'Deploy dynamic chunking pipeline for enterprise document ingestion', completed: false, category: 'Delivery' },
            { id: 't-60-2', task: 'Host internal tech-talk on GPU memory profiling and CUDA stream concurrency', completed: false, category: 'Culture' },
            { id: 't-60-3', task: 'Audit Ray cluster auto-scaler failure modes under sudden traffic bursts', completed: false, category: 'Technical' },
            { id: 't-60-4', task: 'Pair with Security Team on automated credential scanning in model checkpoints', completed: false, category: 'Compliance' }
          ]
        },
        {
          day: 90,
          title: 'Strategic Impact & Mentorship',
          focus: 'Owning long-term model serving roadmap and onboarding next sprint hire.',
          reviewGate: 'VP of Engineering Review: Autonomous ownership of Tier-1 inference infrastructure.',
          tasks: [
            { id: 't-90-1', task: 'Deliver quarterly AI infrastructure cost-efficiency roadmap (targeting 30% reduction)', completed: false, category: 'Delivery' },
            { id: 't-90-2', task: 'Assume role as primary technical interviewer for Senior Distributed Systems pool', completed: false, category: 'Culture' },
            { id: 't-90-3', task: 'Establish 24/7 on-call rotation runbooks with zero single points of failure', completed: false, category: 'Technical' }
          ]
        }
      ]
    },
    departmentPulse: {
      department: 'Core AI Infrastructure',
      headcount: 38,
      eNPS: 48,
      burnoutRiskLevel: 'Moderate',
      burnoutScore: 54,
      meetingLoadAvgHours: 21.5,
      attritionFlightRisk: 14,
      sentimentTrend: [72, 75, 68, 62, 70],
      topStressors: [
        'Late-night on-call pages due to GPU driver kernel panics',
        'Shifting product roadmaps impacting long-running foundational research'
      ],
      recommendedInterventions: [
        {
          title: 'Implement No-Meeting Focus Wednesdays',
          action: 'Block calendars Wednesdays company-wide for deep technical architecture and code focus.',
          urgency: 'Immediate'
        },
        {
          title: 'AI Cluster Automated Auto-Heal Watchdog',
          action: 'Deploy self-rebooting daemon for dead GPUs to reduce human on-call alerts by 60%.',
          urgency: 'Immediate'
        },
        {
          title: 'Quarterly Research Hackathon Week',
          action: 'Provide 5 uninterrupted days for unconstrained AI exploration and research publication.',
          urgency: 'Medium-Term'
        }
      ]
    },
    performanceReview: {
      employeeName: 'Dr. Elena Rostova',
      role: 'Staff AI/ML Infrastructure Engineer',
      tenure: '1 Year, 2 Months',
      currentLevel: 'L6 (Staff)',
      targetLevel: 'L7 (Principal)',
      overallRating: 'Exceeds Expectations',
      promotionReadinessScore: 91,
      competencyRadar: {
        domainKnowledge: 98,
        strategicExecution: 92,
        teamCollaboration: 88,
        innovationInitiative: 96,
        mentorshipImpact: 86
      },
      peerSummary: 'Elena has redefined our model serving capabilities. Her work on distributed tensor parallelism cut our inference costs by $420k annualized. She is incredibly responsive and generous with architectural reviews.',
      managerSummary: 'Tremendous velocity and high ownership. Ready for Principal responsibilities. Next growth area is expanding cross-functional influence across business stakeholders outside engineering.',
      selfAssessmentHighlights: 'Delivered 99.99% serving uptime across 3 peak enterprise launch events. Personally authored 4 RFCs and mentored 3 senior engineers into tech lead roles.',
      careerGrowthRoadmap: [
        {
          quarter: 'Q1',
          milestone: 'Cross-functional Executive Alignment',
          actionableLearning: 'Lead quarterly engineering review with CPO and CFO showcasing AI unit economics.'
        },
        {
          quarter: 'Q2',
          milestone: 'Open Source Community Stewardship',
          actionableLearning: 'Publish flagship paper or open-source repo representing the company at NeurIPS / MLSys.'
        },
        {
          quarter: 'Q3',
          milestone: 'Organization-Wide Mentorship Guild',
          actionableLearning: 'Formalize bi-weekly Systems Architecture office hours for junior and mid-level engineers.'
        }
      ]
    },
    samplePolicyPrompts: [
      'What is our remote work hardware stipend and refresh policy?',
      'How does parental leave and equity vesting work during medical leave?',
      'Can I attend international AI conferences using company learning budgets?'
    ]
  },
  {
    id: 'enterprise-ae-gtm',
    title: 'Enterprise Account Executive (GTM)',
    tagline: 'Strategic B2B SaaS Sales, Complex Enterprise Deal Cycles & MEDDPICC Mastery',
    department: 'Global Revenue Operations & Sales',
    candidateProfile: {
      id: 'cand-02',
      name: 'Julian Sterling',
      role: 'Enterprise Account Executive',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
      overallMatchScore: 94,
      rank: 1,
      vectorScores: {
        technicalProficiency: 86,
        leadershipPotential: 94,
        cultureAddition: 96,
        retentionVelocity: 91
      },
      keyStrengths: [
        '185% average quota attainment over 4 consecutive quarters at Fortune 500 SaaS',
        'Expert in negotiating 7-figure multi-year contracts with procurement and legal',
        'Deep relationships with C-Suite leaders in FinTech and Healthcare sectors'
      ],
      growthGaps: [
        'Adaptation to product-led growth (PLG) expansion motions alongside outbound sales'
      ],
      biasMitigationFlags: [
        'Standardized situational pitch assessment with objective scoring matrix',
        'Blind screening of previous employer brand tier'
      ],
      recommendedDecision: 'Strong Hire',
      interviewGuide: [
        {
          question: 'Walk us through a stalled $1M+ deal where the CFO blocked budget at the 11th hour. How did you construct the economic justification to close it?',
          targetCompetency: 'Executive Objection Handling & ROI Modeling',
          scoringCriteria: 'Evaluates multi-threading, payback period calculations, and executive sponsorship alignment.'
        },
        {
          question: 'How do you maintain accurate pipeline hygiene in CRM without sacrificing daily customer-facing prospecting time?',
          targetCompetency: 'Sales Discipline & Forecasting Accuracy',
          scoringCriteria: 'Looks for disciplined weekly cadences, AI voice-note note-taking, and transparent slip-deal tracking.'
        }
      ]
    },
    onboarding: {
      employeeName: 'Julian Sterling',
      targetRole: 'Enterprise Account Executive',
      department: 'Enterprise Sales (Strategic Accounts)',
      startDate: '15th of this month',
      assignedBuddy: {
        name: 'Rachel Kinsley',
        title: 'VP of Strategic Alliances',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80',
        compatibilityReason: 'Top producer across financial services vertical with deep playbook knowledge.'
      },
      itProvisioningStatus: {
        laptop: 'Provisioned',
        cloudAccess: 'Active',
        securityBadge: 'Active'
      },
      milestones: [
        {
          day: 30,
          title: 'Product Mastery & Pitch Certification',
          focus: 'Pass internal sales demo certification and shadow 15 executive discovery calls.',
          reviewGate: 'Sales Enablement Check: Complete 30-minute Mock Discovery & Demo.',
          tasks: [
            { id: 't-ae-1', task: 'Certify on enterprise security, compliance, and SOC-2 standard answers', completed: true, category: 'Compliance' },
            { id: 't-ae-2', task: 'Build target list of 50 tier-1 Named Accounts with assigned BDR', completed: true, category: 'Delivery' },
            { id: 't-ae-3', task: 'Setup Salesforce, Gong, Apollo, and automated meeting transcription workflows', completed: true, category: 'Technical' }
          ]
        },
        {
          day: 60,
          title: 'Pipeline Acceleration & First Deal Stage 3',
          focus: 'Generate $750k in qualified pipeline and run first executive workshop.',
          reviewGate: 'First stage-3 opportunity validated with economic buyer identified.',
          tasks: [
            { id: 't-ae-4', task: 'Deliver customized ROI proposal for pilot FinTech account', completed: false, category: 'Delivery' },
            { id: 't-ae-5', task: 'Collaborate with Solutions Engineering on tailored POC scoping', completed: false, category: 'Technical' }
          ]
        },
        {
          day: 90,
          title: 'Full Quota Ramp & First Close',
          focus: 'Execute first closed-won deal and maintain 3.5x pipeline coverage.',
          reviewGate: 'Sales VP Gate: Independent pipeline creation and forecasting reliability.',
          tasks: [
            { id: 't-ae-6', task: 'Close initial land deal ($120k+ ARR)', completed: false, category: 'Delivery' },
            { id: 't-ae-7', task: 'Present Q2 territory expansion plan to leadership', completed: false, category: 'Culture' }
          ]
        }
      ]
    },
    departmentPulse: {
      department: 'Global Revenue Operations & Sales',
      headcount: 52,
      eNPS: 39,
      burnoutRiskLevel: 'High',
      burnoutScore: 68,
      meetingLoadAvgHours: 28.2,
      attritionFlightRisk: 22,
      sentimentTrend: [65, 61, 58, 52, 55],
      topStressors: [
        'End-of-quarter pressure and aggressive quota ramp expectations',
        'Excessive administrative CRM logging taking away from customer discovery'
      ],
      recommendedInterventions: [
        {
          title: 'Autonomous CRM Note-Taking Bot Deployment',
          action: 'Integrate automatic meeting transcription to auto-populate CRM fields, saving 6 hrs/week per rep.',
          urgency: 'Immediate'
        },
        {
          title: 'Quota Relief Buffer for Ramp Period',
          action: 'Introduce tiered quarterly commission guarantees for the first 90 days to reduce early panic.',
          urgency: 'Immediate'
        }
      ]
    },
    performanceReview: {
      employeeName: 'Julian Sterling',
      role: 'Enterprise Account Executive',
      tenure: '10 Months',
      currentLevel: 'Senior AE',
      targetLevel: 'Strategic Accounts Lead',
      overallRating: 'Exceeds Expectations',
      promotionReadinessScore: 88,
      competencyRadar: {
        domainKnowledge: 90,
        strategicExecution: 95,
        teamCollaboration: 85,
        innovationInitiative: 89,
        mentorshipImpact: 82
      },
      peerSummary: 'Julian is an exceptional closer who also takes time to share winning outbound email cadences with junior SDRs. Invaluable energy during sales kick-off.',
      managerSummary: 'Exceeded target at 142% quota in Q3. Pipeline forecasting accuracy has been within 5% variance.',
      selfAssessmentHighlights: 'Sourced and closed our largest enterprise deal this fiscal year ($850k ACV) with a Fortune 100 logistics brand.',
      careerGrowthRoadmap: [
        {
          quarter: 'Q1',
          milestone: 'Strategic Account Penetration',
          actionableLearning: 'Shadow European territory VP on multi-subsidiary global contracts.'
        },
        {
          quarter: 'Q2',
          milestone: 'Sales Enablement Leadership',
          actionableLearning: 'Host monthly deal clinic on overcoming legal/procurement redlines.'
        }
      ]
    },
    samplePolicyPrompts: [
      'What are our sales travel and client entertainment reimbursement guidelines?',
      'How are commission accelerators and split-deal credits calculated?',
      'What wellness or mental health resources are available during quarter-end?'
    ]
  },
  {
    id: 'lead-product-designer',
    title: 'Lead Product Designer',
    tagline: 'Design Systems Architecture, Complex Multi-Tenant Workflows & Design Thinking',
    department: 'Product Experience & Design',
    candidateProfile: {
      id: 'cand-03',
      name: 'Maya Lin Chen',
      role: 'Lead Product Designer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
      overallMatchScore: 95,
      rank: 1,
      vectorScores: {
        technicalProficiency: 96,
        leadershipPotential: 90,
        cultureAddition: 97,
        retentionVelocity: 93
      },
      keyStrengths: [
        'Architected comprehensive Figma token design systems used by 120+ engineers',
        'Exceptional user testing methodology combining quantitative telemetry and user interviews',
        'Champion of WCAG AAA accessibility compliance standards'
      ],
      growthGaps: [
        'Further alignment with commercial pricing tier UX and checkout optimization'
      ],
      biasMitigationFlags: [
        'Anonymized portfolio case study review focusing on user friction reduction data',
        'Standardized rubric for design challenge presentation'
      ],
      recommendedDecision: 'Strong Hire',
      interviewGuide: [
        {
          question: 'How do you resolve a design impasse where Product wants speed-to-market but Engineering wants design system consistency?',
          targetCompetency: 'Cross-Functional Mediation & Pragmatism',
          scoringCriteria: 'Exceeds if candidate demonstrates tiered token rollouts and measurable compromise frameworks.'
        }
      ]
    },
    onboarding: {
      employeeName: 'Maya Lin Chen',
      targetRole: 'Lead Product Designer',
      department: 'Product Design',
      startDate: 'Next Monday',
      assignedBuddy: {
        name: 'Oliver Thorne',
        title: 'Staff Frontend Engineer (UI/UX Systems)',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
        compatibilityReason: 'Collaborative bridge between Figma component libraries and React design tokens.'
      },
      itProvisioningStatus: {
        laptop: 'Provisioned',
        cloudAccess: 'Active',
        securityBadge: 'Active'
      },
      milestones: [
        {
          day: 30,
          title: 'Design Audit & Design System Immersion',
          focus: 'Audit existing UI component inconsistencies and interview 10 enterprise users.',
          reviewGate: 'Present Design Audit Findings to Design & Product Guild.',
          tasks: [
            { id: 't-des-1', task: 'Review Figma Component Library and brand guidelines', completed: true, category: 'Technical' },
            { id: 't-des-2', task: 'Synthesize 5 user recording playback sessions on onboarding drop-off', completed: true, category: 'Delivery' }
          ]
        },
        {
          day: 60,
          title: 'Core Workflow Redesign',
          focus: 'Deliver high-fidelity prototypes for the next-gen analytics dashboard.',
          reviewGate: 'Sign-off from CPO on interactive usability benchmarks.',
          tasks: [
            { id: 't-des-3', task: 'Conduct usability test with 8 key enterprise customer personas', completed: false, category: 'Delivery' }
          ]
        },
        {
          day: 90,
          title: 'Design System V2 Launch',
          focus: 'Roll out updated dark/light mode token architecture with engineering parity.',
          reviewGate: '100% token coverage in React UI repository.',
          tasks: [
            { id: 't-des-4', task: 'Ship WCAG AAA compliant contrast updates across all core flows', completed: false, category: 'Technical' }
          ]
        }
      ]
    },
    departmentPulse: {
      department: 'Product Experience & Design',
      headcount: 19,
      eNPS: 56,
      burnoutRiskLevel: 'Low',
      burnoutScore: 32,
      meetingLoadAvgHours: 15.4,
      attritionFlightRisk: 8,
      sentimentTrend: [78, 80, 82, 85, 84],
      topStressors: [
        'Occasional tight sprint turnaround times from engineering backlogs'
      ],
      recommendedInterventions: [
        {
          title: 'Design Critique Asynchronous Video Loom Reviews',
          action: 'Transition 50% of visual feedback rounds to asynchronous video to protect deep focus blocks.',
          urgency: 'Medium-Term'
        }
      ]
    },
    performanceReview: {
      employeeName: 'Maya Lin Chen',
      role: 'Lead Product Designer',
      tenure: '1 Year, 6 Months',
      currentLevel: 'Senior Lead',
      targetLevel: 'Director of Product Design',
      overallRating: 'Exceeds Expectations',
      promotionReadinessScore: 93,
      competencyRadar: {
        domainKnowledge: 97,
        strategicExecution: 91,
        teamCollaboration: 96,
        innovationInitiative: 94,
        mentorshipImpact: 88
      },
      peerSummary: 'Maya has transformed the aesthetic and user flow standard of our entire product suite. Cross-team handoffs with front-end engineers are smoother than ever.',
      managerSummary: 'A stellar design leader who combines data-driven experimentation with pristine aesthetic taste. Championed our design system overhaul.',
      selfAssessmentHighlights: 'Redesigned core onboarding flow, increasing 14-day trial user retention by 28%. Mentored 2 junior designers.',
      careerGrowthRoadmap: [
        {
          quarter: 'Q1',
          milestone: 'Design Ops Scaling',
          actionableLearning: 'Formulate design ops standards for multi-product expansion.'
        }
      ]
    },
    samplePolicyPrompts: [
      'What software license and design font subscription expense limits apply to designers?',
      'Can I work remotely from another country for up to 30 days per year?',
      'How do I request ergonomic office equipment for my home workspace?'
    ]
  },
  {
    id: 'customer-success-lead',
    title: 'Customer Success Operations Lead',
    tagline: 'Retention Optimization, Scaled Support Telemetry & Churn Prevention',
    department: 'Customer Experience & Client Solutions',
    candidateProfile: {
      id: 'cand-04',
      name: 'Devon Blackwood',
      role: 'Head of Customer Success Operations',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&q=80',
      overallMatchScore: 93,
      rank: 1,
      vectorScores: {
        technicalProficiency: 88,
        leadershipPotential: 95,
        cultureAddition: 93,
        retentionVelocity: 92
      },
      keyStrengths: [
        'Maintained 118% Net Revenue Retention (NRR) across $40M portfolio',
        'Implemented automated health scoring in Gainsight predicting 85% of at-risk accounts',
        'Built enterprise escalation response teams with under 15-minute P1 SLAs'
      ],
      growthGaps: [
        'Deeper hands-on exposure to SQL/BigQuery data pipelines for ad-hoc cohort modeling'
      ],
      biasMitigationFlags: [
        'Blinded scenario evaluation focusing on customer remediation playbooks'
      ],
      recommendedDecision: 'Strong Hire',
      interviewGuide: [
        {
          question: 'How do you turn around a high-profile enterprise account actively threatening contract termination?',
          targetCompetency: 'Crisis Management & Executive De-escalation',
          scoringCriteria: 'Focuses on rapid root-cause diagnosis, cross-department remediation commitments, and revised milestones.'
        }
      ]
    },
    onboarding: {
      employeeName: 'Devon Blackwood',
      targetRole: 'Head of Customer Success Operations',
      department: 'Customer Solutions',
      startDate: 'Next Month',
      assignedBuddy: {
        name: 'Sarah Jennings',
        title: 'Director of Global Customer Experience',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80',
        compatibilityReason: 'Experienced operational leader with deep knowledge of cross-functional escalations.'
      },
      itProvisioningStatus: {
        laptop: 'Provisioned',
        cloudAccess: 'Active',
        securityBadge: 'Active'
      },
      milestones: [
        {
          day: 30,
          title: 'Portfolio Health Telemetry Audit',
          focus: 'Review top 20 at-risk client health scores and interview frontline CSMs.',
          reviewGate: 'Deliver Portfolio Health Baseline Deck to Executive Team.',
          tasks: [
            { id: 't-cs-1', task: 'Map out current customer journey touchpoints and CSAT surveys', completed: true, category: 'Delivery' }
          ]
        },
        {
          day: 60,
          title: 'Automated Playbook Deployment',
          focus: 'Roll out automated churn warning alerts in Slack for CSM triage.',
          reviewGate: 'Reduction in response time to at-risk accounts by 40%.',
          tasks: [
            { id: 't-cs-2', task: 'Deploy automated risk trigger rules in customer health platform', completed: false, category: 'Technical' }
          ]
        },
        {
          day: 90,
          title: 'Executive Business Review Standard',
          focus: 'Establish standardized EBR templates showcasing verified ROI metrics.',
          reviewGate: '95%+ quarterly renewal rate on targeted enterprise cohorts.',
          tasks: [
            { id: 't-cs-3', task: 'Train all CSMs on value-driven quarterly business reviews', completed: false, category: 'Culture' }
          ]
        }
      ]
    },
    departmentPulse: {
      department: 'Customer Experience & Client Solutions',
      headcount: 44,
      eNPS: 42,
      burnoutRiskLevel: 'Moderate',
      burnoutScore: 59,
      meetingLoadAvgHours: 23.0,
      attritionFlightRisk: 18,
      sentimentTrend: [68, 64, 61, 60, 63],
      topStressors: [
        'Handling high-stress client escalations during platform migrations',
        'Repetitive manual ticket logging across disparate support tools'
      ],
      recommendedInterventions: [
        {
          title: 'AI Ticket Deflection & Draft Suggestions',
          action: 'Deploy automated AI suggested responses to reduce repetitive escalation draft writing by 50%.',
          urgency: 'Immediate'
        }
      ]
    },
    performanceReview: {
      employeeName: 'Devon Blackwood',
      role: 'Head of Customer Success Operations',
      tenure: '1 Year',
      currentLevel: 'Senior Manager',
      targetLevel: 'Director of Customer Operations',
      overallRating: 'Exceeds Expectations',
      promotionReadinessScore: 90,
      competencyRadar: {
        domainKnowledge: 93,
        strategicExecution: 94,
        teamCollaboration: 91,
        innovationInitiative: 89,
        mentorshipImpact: 87
      },
      peerSummary: 'Devon brings calm, systematic order to chaos. Under his leadership, account churn decreased by 3.2% while CSAT rose to an all-time high.',
      managerSummary: 'Tremendous operational rigor. Has scaled the CSM team while improving individual rep retention.',
      selfAssessmentHighlights: 'Launched health scoring model, successfully saving 9 enterprise renewal contracts totaling $1.4M ARR.',
      careerGrowthRoadmap: [
        {
          quarter: 'Q1',
          milestone: 'Predictive Churn Machine Learning',
          actionableLearning: 'Collaborate with Data Science on real-time churn propensity scoring.'
        }
      ]
    },
    samplePolicyPrompts: [
      'What is the policy for customer incident on-call pay or comp time?',
      'How does tuition reimbursement work for professional operational certifications?',
      'What are our protocols for managing confidential client data under GDPR/CCPA?'
    ]
  }
];
