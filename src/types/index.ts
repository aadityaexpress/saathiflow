export type VerificationStatus = 'Verified' | 'Partially Verified' | 'Unverified' | 'Outdated';
export type EvidenceNature = 'Official Statistic' | 'Research Finding' | 'Regulatory Mandate' | 'Working Assumption' | 'Indirect Evidence';
export type EvidenceCategory = 'AePS Scale & Infra' | 'Fraud & Security' | 'Grievance Redress & UDIR' | 'Financial Inclusion & BC' | 'Technical Feasibility';

export interface EvidenceItem {
  id: string;
  category: EvidenceCategory;
  claim: string;
  sourceTitle: string;
  organization: string;
  url: string;
  publicationDate: string;
  dataPeriod: string;
  geographicScope: string;
  populationScope: string;
  isPrimary: boolean;
  whatItProves: string;
  limitations: string;
  verificationStatus: VerificationStatus;
  nature: EvidenceNature;
}

export type CollectionStatus = 'Verified' | 'Partially Verified' | 'Awaiting verification' | 'Not publicly found' | 'Secondary Evidence Only' | 'Pending Fieldwork';

export interface DataTrackerItem {
  id: string;
  metricName: string;
  category: string;
  whyItMatters: string;
  preferredSource: string;
  collectionStatus: CollectionStatus;
  dateLastChecked: string;
  verifiedValue: string;
  sourceUrl: string;
  notesAndLimitations: string;
  nextAction: string;
}

export interface SolutionComparisonItem {
  id: string;
  name: string;
  governingOrg: string;
  solutionType: 'Central Switch Dispute Engine' | 'Public Web Form' | 'Commercial Bank Channel' | 'Law Enforcement Portal' | 'Academic UX Prototype' | 'NLP Monitoring Engine' | 'Regulatory Escalation' | 'Proposed Triage Co-Pilot';
  supportedIncidentTypes: string;
  transactionStatusAccess: string;
  complaintRegistration: string;
  reversalAndEscalation: string;
  localLanguageAccessibility: string;
  suitabilityForLowLiteracy: string;
  assistedServiceBCWorkflow: string;
  complaintTrackingFollowUp: string;
  apiIntegrationAvailability: string;
  knownLimitations: string;
  sourceUrl: string;
  isDocumentedUnavailable: boolean; // true if documented as not supported, false if simply unevidenced
}

export type HypothesisStatus = 'Supported' | 'Open / In Testing' | 'At Risk / Nuanced' | 'Falsified';

export interface ResearchHypothesis {
  id: string;
  code: string;
  statement: string;
  supportingEvidence: string;
  contradictingEvidence: string;
  validationMethod: string;
  status: HypothesisStatus;
  decisionImplication: string;
  falsificationTrigger: string;
}

export interface UserInterviewRecord {
  id: string;
  participantType: 'Customer' | 'Business Correspondent / Mitra' | 'Financial Inclusion Practitioner';
  anonymousId: string;
  consentObtained: boolean;
  interviewDate: string;
  locationState: string;
  experienceYearsOrUsageFreq: string;
  scenarioDiscussed: string;
  keyQuestionsAndResponses: {
    question: string;
    anonymizedSummary: string;
  }[];
  observedPainPoints: string[];
  empiricalEvidenceBasis: string;
  recommendedFollowUp: string;
  isTemplateOrPilot: 'Protocol Template' | 'Pilot Field Entry';
}

export interface UsabilityMetric {
  id: string;
  metricName: string;
  definition: string;
  measurementMethod: string;
  cautionBias: string;
  currentBaseline: string; // "Not measured" until real testing
  targetThreshold: string;
  status: 'Not Measured' | 'Empirical Pilot Ready' | 'Target Defined';
}

export interface SimulationScenario {
  id: string;
  title: string;
  participantPersona: string;
  contextDescription: string;
  isFraudIncident: boolean;
  officialMandatedAction: string;
  tatDays: number | null;
  traditionalPathSteps: string[];
  saathiFlowPathSteps: string[];
  traditionalRisk: string;
  saathiFlowMitigation: string;
}
