import {
  EvidenceItem,
  DataTrackerItem,
  SolutionComparisonItem,
  ResearchHypothesis,
  UserInterviewRecord,
  UsabilityMetric,
  SimulationScenario
} from '../types';

export const evidenceRegisterData: EvidenceItem[] = [
  {
    id: 'EV-001',
    category: 'Grievance Redress & UDIR',
    claim: 'NPCI UDIR circular lists "Cash Withdrawal — Cash not received" as an automated dispute workflow for member banks, utilizing the ReqChkTxn API, credit adjustments, and chargebacks directly between issuer and acquirer core switches.',
    sourceTitle: 'Circular NPCI/2023-24/AEPS/084: UDIR - Enhancing complaint handling and resolution process for AePS transactions',
    organization: 'National Payments Corporation of India (NPCI)',
    url: 'https://www.npci.org.in/PDF/AePS/circular/2023-24/21-July-2023-NPCI-2023-24-AEPS-084-Circular-84-UDIR-Enhancing-complaint-handling-and-resolution-process-for-AePS-transactions.pdf',
    publicationDate: '2023-07-21',
    dataPeriod: 'July 2023 onwards',
    geographicScope: 'Pan-India',
    populationScope: 'AePS Member Banks, Acquirers, Issuers, and Central Switch',
    isPrimary: true,
    whatItProves: 'NPCI operates a fully automated backend interbank dispute resolution engine (UDIR) for defined AePS failure scenarios.',
    limitations: 'UDIR is strictly a backend bank-to-bank API protocol without a native customer-facing interface. Frontline BCs and rural customers cannot directly view UDIR statuses unless exposed by bank apps.',
    verificationStatus: 'Verified',
    nature: 'Regulatory Mandate'
  },
  {
    id: 'EV-002',
    category: 'Grievance Redress & UDIR',
    claim: 'For ATM / Micro-ATM: Customer\'s account debited but cash not dispensed (Sl. No. 1), RBI mandates proactive auto-reversal within T + 5 calendar days, and ₹100/day delay compensation payable suo-motu beyond T+5 calendar days without requiring a customer complaint.',
    sourceTitle: 'Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions (RBI/2019-20/67 DPSS.CO.PD No.629/02.01.014/2019-20) Annexure Sl. No. 1',
    organization: 'Reserve Bank of India (RBI)',
    url: 'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693&Mode=0',
    publicationDate: '2019-09-20',
    dataPeriod: 'Effective October 2019 onwards',
    geographicScope: 'Pan-India',
    populationScope: 'All scheduled commercial banks, white label ATM operators, and payment system participants',
    isPrimary: true,
    whatItProves: 'Statutory mandate for auto-reversal is T+5 calendar days with ₹100/day delay compensation for debited ATM/Micro-ATM cash-not-dispensed cases.',
    limitations: 'Applies specifically to cases where customer account is debited but cash is not dispensed. Does NOT apply to terminal declines where account is not debited or biometric mismatches without debit.',
    verificationStatus: 'Verified',
    nature: 'Regulatory Mandate'
  },
  {
    id: 'EV-003',
    category: 'Grievance Redress & UDIR',
    claim: 'For Aadhaar Enabled Payment System (including Aadhaar Pay) - Account debited but transaction confirmation not received at merchant location (Sl. No. 5), RBI mandates credit adjustment within T + 5 calendar days and ₹100/day delay compensation.',
    sourceTitle: 'Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions (RBI/2019-20/67 DPSS.CO.PD No.629/02.01.014/2019-20) Annexure Sl. No. 5',
    organization: 'Reserve Bank of India (RBI)',
    url: 'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693&Mode=0',
    publicationDate: '2019-09-20',
    dataPeriod: 'Effective October 2019 onwards',
    geographicScope: 'Pan-India',
    populationScope: 'Merchant acquirers, AePS merchant transactions, and Aadhaar Pay network participants',
    isPrimary: true,
    whatItProves: 'Establishes statutory T+5 timeline and ₹100/day delay compensation specifically for merchant/Aadhaar Pay debits without merchant confirmation.',
    limitations: 'Distinguished separately from Sl. No. 1 (Micro-ATM cash withdrawals). Both specify T+5 and ₹100/day, but Sl. No. 5 applies to merchant payment flows.',
    verificationStatus: 'Verified',
    nature: 'Regulatory Mandate'
  },
  {
    id: 'EV-004',
    category: 'Grievance Redress & UDIR',
    claim: 'Under Clause 10(2)(a) of the Reserve Bank - Integrated Ombudsman Scheme 2021 (RB-IOS 2021), a customer can escalate to the RBI Ombudsman immediately if the bank has rejected the complaint wholly or partly. The 30-day waiting period only applies if the bank has not responded.',
    sourceTitle: 'Reserve Bank - Integrated Ombudsman Scheme, 2021 (Clause 10 & 11) & Annual Report 2024–25',
    organization: 'Reserve Bank of India (RBI)',
    url: 'https://www.rbi.org.in/Scripts/AnnualReportPublications.aspx?Id=1436',
    publicationDate: '2025-05-29',
    dataPeriod: 'FY 2024–25 Ombudsman Review',
    geographicScope: 'Pan-India',
    populationScope: 'Aggrieved bank customers escalating deficient banking service',
    isPrimary: true,
    whatItProves: 'Customers have a formalized quasi-judicial escalation mechanism; the 30-day waiting period is subject to an immediate escalation exception upon bank rejection under Clause 10(2)(a)(i).',
    limitations: 'Ombudsman handles escalations only after initial complaint to Regulated Entity; does not provide real-time frontline kiosk resolution.',
    verificationStatus: 'Verified',
    nature: 'Regulatory Mandate'
  },
  {
    id: 'EV-005',
    category: 'Fraud & Security',
    claim: 'Ministry of Home Affairs operates Helpline 1930 and CFCFRMS to place administrative debit liens on suspect recipient bank accounts during the golden hour. Administrative liens halt fund siphoning but do not automatically return funds; formal restitution depends on judicial or law enforcement verification protocols (such as an application under Section 503 BNSS / Section 457 CrPC).',
    sourceTitle: 'National Cyber Crime Reporting Portal SOP & Citizen Financial Cyber Fraud Reporting System',
    organization: 'Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs',
    url: 'https://cybercrime.gov.in/',
    publicationDate: '2024-01-15',
    dataPeriod: 'Operational 2021–Present',
    geographicScope: 'Pan-India',
    populationScope: 'Victims of financial cyber fraud across all banking rails',
    isPrimary: true,
    whatItProves: 'A dedicated law-enforcement and banking interbank lien mechanism exists for rapid fraud reporting.',
    limitations: 'Freezing is contingent on funds remaining unwithdrawn in the immediate beneficiary account. Administrative liens do not disburse money back to victims without judicial or legal authorization. Reporting does not guarantee recovery.',
    verificationStatus: 'Verified',
    nature: 'Regulatory Mandate'
  },
  {
    id: 'EV-006',
    category: 'AePS Scale & Infra',
    claim: 'NPCI publishes monthly approved transaction volume and value across AePS services (cash withdrawal, balance enquiry, Aadhaar Pay) on its product statistics portal. Aggregated national failure percentages and disaggregated interbank dispute volumes are not publicly disclosed on official portals.',
    sourceTitle: 'NPCI AePS Product Statistics & Retail Payment Indicators (FY 2024–25)',
    organization: 'National Payments Corporation of India (NPCI)',
    url: 'https://www.npci.org.in/what-we-do/aeps/product-statistics/2024-25',
    publicationDate: '2025-04-01',
    dataPeriod: 'FY 2024–25',
    geographicScope: 'Pan-India',
    populationScope: 'AePS Cash Withdrawals, Aadhaar Pay, and Micro-ATM touchpoints',
    isPrimary: true,
    whatItProves: 'AePS operates at massive national scale, enabling rural cash access across all participating member banks.',
    limitations: 'Disputed brief figures of 462M-618M and derived 80M-110M monthly ranges removed as unverified estimates. NPCI reports approved volumes only; failure rates are omitted.',
    verificationStatus: 'Verified',
    nature: 'Official Statistic'
  },
  {
    id: 'EV-007',
    category: 'Financial Inclusion & BC',
    claim: 'Over 53.5 crore Jan Dhan (PMJDY) accounts have been opened with deposit balances exceeding ₹2.3 lakh crore; over 67% of accounts are in rural/semi-urban areas reliant on Business Correspondents (Bank Mitras).',
    sourceTitle: 'PMJDY Progress Report & Scheme Overview',
    organization: 'Department of Financial Services, Ministry of Finance, GoI',
    url: 'https://pmjdy.gov.in/scheme',
    publicationDate: '2025-01-01',
    dataPeriod: 'Cumulative August 2014 – December 2024',
    geographicScope: 'Pan-India',
    populationScope: 'Basic Savings Bank Deposit (BSBD) account holders',
    isPrimary: true,
    whatItProves: 'Demonstrates the enormous demographic scale of rural citizens reliant on micro-ATMs and BCs for cash withdrawal.',
    limitations: 'Total PMJDY accounts cannot be used as a proxy for the number of failed AePS transactions or aggrieved users; it only demonstrates demographic scale.',
    verificationStatus: 'Verified',
    nature: 'Official Statistic'
  },
  {
    id: 'EV-008',
    category: 'Financial Inclusion & BC',
    claim: 'Digital payment grievance interfaces fail constrained users due to buried menus, English-dominated layouts, rigid symptom categories, and opaque tracking mechanisms.',
    sourceTitle: 'Do UPI In-App Grievance Redress Mechanisms Work for Constrained Users?',
    organization: 'Dvara Research (Aishwarya Narayan & Srikara Prasad)',
    url: 'https://dvararesearch.com/do-upi-in-app-grievance-redress-mechanisms-work-for-constrained-users/',
    publicationDate: '2023-03-31',
    dataPeriod: '2022–2023 Empirical Field Assessment',
    geographicScope: 'India (Low-income & informal sector demographics)',
    populationScope: 'Low-literacy and digital immigrant smartphone payment users',
    isPrimary: true,
    whatItProves: 'Constrained users experience severe anxiety and drop-off when confronted with rigid error taxonomies and English-heavy self-service portals.',
    limitations: 'Evaluated smartphone UPI apps (Google Pay, PhonePe, Paytm); findings cannot be treated as direct empirical proof of BC micro-ATM behavior without field validation.',
    verificationStatus: 'Verified',
    nature: 'Research Finding'
  },
  {
    id: 'EV-009',
    category: 'Grievance Redress & UDIR',
    claim: 'Dvara Research published an open-access UPI GRM Toolkit providing conversational intake patterns, progressive disclosure models, and visual tracking prototypes.',
    sourceTitle: 'UPI Grievance Redress Mechanism Toolkit',
    organization: 'Dvara Research',
    url: 'https://upigrm.dvararesearch.com/toolkit/',
    publicationDate: '2023-09-15',
    dataPeriod: '2023 UX Design Framework',
    geographicScope: 'India',
    populationScope: 'Digital payment UX designers and fintech product managers',
    isPrimary: true,
    whatItProves: 'Guided triage and conversational complaint intake have already been conceptualized and open-sourced for digital payments.',
    limitations: 'The toolkit is optimized strictly for smartphone in-app UPI experiences; it does not address rural BC micro-ATM kiosks, biometric errors, or offline physical slips.',
    verificationStatus: 'Verified',
    nature: 'Research Finding'
  },
  {
    id: 'EV-010',
    category: 'Fraud & Security',
    claim: 'To curb AePS fraud involving cloned silicone fingerprints, NPCI and UIDAI mandated STQC-certified Level 1 (L1) biometric devices with hardware liveness detection and disabled face authentication for AePS cash withdrawals.',
    sourceTitle: 'UIDAI & NPCI Security Mandates on Registered Devices (L1) and AePS Risk Mitigation',
    organization: 'NPCI & Unique Identification Authority of India (UIDAI)',
    url: 'https://www.npci.org.in/what-we-do/aeps/circulars',
    publicationDate: '2024-03-20',
    dataPeriod: '2023–2024 Rollout',
    geographicScope: 'Pan-India',
    populationScope: 'All AePS BCs, acquiring banks, and device manufacturers',
    isPrimary: true,
    whatItProves: 'Biometric spoofing has been officially acknowledged as a major operational fraud vector necessitating hardware-level liveness enforcement.',
    limitations: 'Protects capture at point of sale, but does not provide post-fraud recovery assistance to victims whose funds were already compromised.',
    verificationStatus: 'Verified',
    nature: 'Regulatory Mandate'
  },
  {
    id: 'EV-011',
    category: 'Technical Feasibility',
    claim: 'Working Hypothesis: Rural customers travel 15–25 km to parent bank branches to log complaints or verify reversal status for failed AePS withdrawals.',
    sourceTitle: 'SaathiFlow Research Working Hypothesis H1 & Field Protocol',
    organization: 'SaathiFlow Research Team',
    url: 'https://saathiflow.org/research/hypotheses',
    publicationDate: '2026-10-20',
    dataPeriod: 'Pre-pilot desk research',
    geographicScope: 'Rural BC kiosks (Targeting UP, Bihar, Maharashtra)',
    populationScope: 'Rural bank customers visiting BC kiosks',
    isPrimary: false,
    whatItProves: 'Represents a core geographic burden hypothesis requiring empirical confirmation via FIELD_VALIDATION_PLAN.md.',
    limitations: 'Unverified hypothesis. Average distance to branch varies significantly by district and bank network.',
    verificationStatus: 'Unverified',
    nature: 'Working Assumption'
  },
  {
    id: 'EV-012',
    category: 'Technical Feasibility',
    claim: 'Working Hypothesis: Rural consumers incur out-of-pocket transit fares and lost daily wages estimated at ₹150–₹300 per dispute attempt.',
    sourceTitle: 'SaathiFlow Research Working Hypothesis H2 & Field Protocol',
    organization: 'SaathiFlow Research Team',
    url: 'https://saathiflow.org/research/hypotheses',
    publicationDate: '2026-10-20',
    dataPeriod: 'Pre-pilot desk research',
    geographicScope: 'Rural India',
    populationScope: 'Daily wage earners and agricultural laborers',
    isPrimary: false,
    whatItProves: 'Represents an economic cost hypothesis to be measured through itemised transit and wage loss interviews.',
    limitations: 'Unverified hypothesis. Local bus/auto fares and daily wage rates fluctuate widely across states.',
    verificationStatus: 'Unverified',
    nature: 'Working Assumption'
  },
  {
    id: 'EV-013',
    category: 'Technical Feasibility',
    claim: 'Working Hypothesis / Indirect Evidence: Immediate repeated biometric attempts trigger cascading duplicate debits when customers panic after a timeout.',
    sourceTitle: 'MicroSave Consulting / Parliamentary Unstarred Questions on AePS Technical Failures',
    organization: 'MicroSave & Ministry of Finance',
    url: 'https://sansad.in/',
    publicationDate: '2024-08-05',
    dataPeriod: 'Monsoon Session 2024 / Industry Studies',
    geographicScope: 'National',
    populationScope: 'AePS customers experiencing terminal timeouts',
    isPrimary: false,
    whatItProves: 'Qualitative reports indicate in-flight transactions settle retroactively, creating double-debits.',
    limitations: 'Exact percentage of timeout events that result in duplicate debits remains unquantified at scale.',
    verificationStatus: 'Partially Verified',
    nature: 'Indirect Evidence'
  },
  {
    id: 'EV-014',
    category: 'Financial Inclusion & BC',
    claim: 'Working Hypothesis / Indirect Evidence: Terminal silence or generic failure slips cause interpersonal friction and accusations of theft against BCs.',
    sourceTitle: 'BC Federation of India Whitepapers & Field Reports',
    organization: 'Business Correspondent Industry Groups',
    url: 'https://saathiflow.org/research/hypotheses',
    publicationDate: '2024-06-15',
    dataPeriod: 'Qualitative BC Surveys 2023–2024',
    geographicScope: 'Rural and semi-urban kiosk locations',
    populationScope: 'Frontline BC agents and Customer Service Points',
    isPrimary: false,
    whatItProves: 'Frontline agents face severe interpersonal confrontation when debit SMS arrives without cash delivery.',
    limitations: 'Supported by industry qualitative surveys; requires structured measurement across 5 BCs in validation plan.',
    verificationStatus: 'Partially Verified',
    nature: 'Indirect Evidence'
  },
  {
    id: 'EV-015',
    category: 'Grievance Redress & UDIR',
    claim: 'Working Hypothesis / Indirect Evidence: Standard SMS alerts and generic error slips are unintelligible to low-literacy consumers, causing complete drop-off from formal redress.',
    sourceTitle: 'Dvara Research GRM In-App Studies & MicroSave Usability Audits',
    organization: 'Dvara Research / MicroSave',
    url: 'https://dvararesearch.com/do-upi-in-app-grievance-redress-mechanisms-work-for-constrained-users/',
    publicationDate: '2023-03-31',
    dataPeriod: '2022–2023 Research Studies',
    geographicScope: 'Pan-India',
    populationScope: 'Constrained, low-literacy digital payment consumers',
    isPrimary: false,
    whatItProves: 'Cognitive load and language barriers cause constrained users to abandon formal grievance portals.',
    limitations: 'Indirect evidence derived from UPI smartphone apps; AePS-specific SMS comprehension requires field testing.',
    verificationStatus: 'Partially Verified',
    nature: 'Indirect Evidence'
  }
];

export const dataCollectionTrackerData: DataTrackerItem[] = [
  {
    id: 'DT-01',
    metricName: 'Monthly AePS Approved Transaction Volume & Value',
    category: 'Scale & Activity',
    whyItMatters: 'Establishes the true operating scale of the AePS payment rail in India.',
    preferredSource: 'NPCI AePS Product Statistics (Monthly Table)',
    collectionStatus: 'Verified',
    dateLastChecked: '2026-10-20',
    verifiedValue: 'Aggregated monthly volume and value published by NPCI across transaction types; national failure rates not public.',
    sourceUrl: 'https://www.npci.org.in/what-we-do/aeps/product-statistics/2024-25',
    notesAndLimitations: 'Disputed brief figures of 462M-618M and derived ~80M-110M estimates removed. NPCI switch reports approved counts only.',
    nextAction: 'Monitor subsequent monthly releases from NPCI to track official published transaction types.'
  },
  {
    id: 'DT-02',
    metricName: 'AePS Technical & Business Decline / Failure Rate (%)',
    category: 'System Reliability',
    whyItMatters: 'Quantifies the exact frequency of transaction drop-offs and potential customer grievances.',
    preferredSource: 'NPCI / RBI Annual Payment System Indicators / RTI Request',
    collectionStatus: 'Not publicly found',
    dateLastChecked: '2026-10-20',
    verifiedValue: 'Not publicly disclosed on official NPCI or RBI portals',
    sourceUrl: 'https://www.npci.org.in/what-we-do/aeps/product-statistics',
    notesAndLimitations: 'NPCI publishes aggregate approved volume but does not disclose overall failure rates. Secondary estimates range from 3% to 15% across varied states, but lack official verification.',
    nextAction: 'File formal RTI application to NPCI/RBI requesting disaggregated monthly failure and timeout percentages.'
  },
  {
    id: 'DT-03',
    metricName: '"Cash Not Dispensed but Debited" Incident Frequency',
    category: 'Dispute Volume',
    whyItMatters: 'Defines the primary core use-case volume and economic justification for SaathiFlow.',
    preferredSource: 'NPCI UDIR Dispute Logs / Lead Bank Reports / Ombudsman Data',
    collectionStatus: 'Not publicly found',
    dateLastChecked: '2026-10-20',
    verifiedValue: 'Internal bank switch metric; no public disclosure',
    sourceUrl: 'https://www.rbi.org.in',
    notesAndLimitations: 'Banks track this under internal UDIR reason codes ("Cash Withdrawal - Cash Not Received"), but do not disclose breakdown in annual reports.',
    nextAction: 'Gather empirical incidence rates from rural user field interviews (Cohort A, n=10).'
  },
  {
    id: 'DT-04',
    metricName: 'Auto-Reversal TAT Compliance Rate within T+5 Days (%)',
    category: 'Regulatory Adherence',
    whyItMatters: 'Measures how often banks fulfill their statutory obligation under RBI Circular DPSS.CO.PD No.629/2019-20.',
    preferredSource: 'RBI Annual Ombudsman Report / Bank Grievance Disclosures',
    collectionStatus: 'Partially Verified',
    dateLastChecked: '2026-10-20',
    verifiedValue: 'RBI Ombudsman report records recurring non-reversal complaints; universal adherence not achieved',
    sourceUrl: 'https://www.rbi.org.in/Scripts/AnnualReportPublications.aspx?Id=1436',
    notesAndLimitations: 'Ombudsman report aggregates all ATM/payment complaints (over 2.96 lakh complaints across REs), confirming delays occur, but does not provide bank-by-bank AePS breakdown.',
    nextAction: 'Audit passbooks and SMS records of 5 real failure cases during field validation.'
  },
  {
    id: 'DT-05',
    metricName: '₹100/Day Delay Compensation Credit Rate (Suo-Motu vs Claimed)',
    category: 'Customer Protection',
    whyItMatters: 'Validates whether the statutory compensation mechanism works automatically or requires customer agitation.',
    preferredSource: 'Bank Statement Audits / Consumer Court Records / RBI Survey',
    collectionStatus: 'Not publicly found',
    dateLastChecked: '2026-10-20',
    verifiedValue: 'No official audit published on suo-motu compensation credit rates for AePS',
    sourceUrl: 'https://www.rbi.org.in',
    notesAndLimitations: 'Under Circular 67, banks must credit compensation suo-motu. Qualitative reports suggest customers rarely receive it without explicit escalation.',
    nextAction: 'Formally test in field research: Ask 10 affected users if they ever received ₹100/day compensation for delayed credit.'
  },
  {
    id: 'DT-06',
    metricName: 'Cyber Fraud Helpline 1930 Call Volume & Lien Freeze Rate (%)',
    category: 'Fraud Response',
    whyItMatters: 'Assesses the operational efficiency of the 1930 channel in halting fund diversion.',
    preferredSource: 'I4C / Ministry of Home Affairs Annual Review / Parliamentary Q&A',
    collectionStatus: 'Partially Verified',
    dateLastChecked: '2026-10-20',
    verifiedValue: 'I4C reported over ₹1,200 crore prevented from siphoning across all financial fraud categories in 2023–24',
    sourceUrl: 'https://cybercrime.gov.in/',
    notesAndLimitations: 'Headline figures demonstrate CFCFRMS scale, but AePS biometric cloning fraud is not disaggregated from investment and OTP scams.',
    nextAction: 'Track MHA press releases for AePS-specific cybercrime disclosures.'
  },
  {
    id: 'DT-07',
    metricName: 'Business Correspondent (BC) Friction & Altercation Frequency',
    category: 'Frontline Operations',
    whyItMatters: 'Verifies the social cost and agent vulnerability created by failed transactions.',
    preferredSource: 'BCFI Surveys / Grameen Foundation / MicroSave Field Studies',
    collectionStatus: 'Secondary Evidence Only',
    dateLastChecked: '2026-10-20',
    verifiedValue: 'Documented qualitatively in industry whitepapers; no standardized national index',
    sourceUrl: 'https://saathiflow.org/research/protocols',
    notesAndLimitations: 'Interpersonal friction is widely reported in qualitative ethnographies but lacks a quantitative baseline.',
    nextAction: 'Execute structured BC survey (Cohort B, n=5) to quantify weekly friction incidents.'
  },
  {
    id: 'DT-08',
    metricName: 'Customer Travel Cost & Wage Loss to Branch for Dispute Resolution',
    category: 'Economic Burden',
    whyItMatters: 'Defines the direct financial burden of physical dispute logging on rural citizens.',
    preferredSource: 'Empirical Field Survey (Current SaathiFlow User Research Hub)',
    collectionStatus: 'Pending Fieldwork',
    dateLastChecked: '2026-10-20',
    verifiedValue: 'Estimated ₹150 to ₹300 per dispute attempt (Desk hypothesis awaiting field validation)',
    sourceUrl: 'https://saathiflow.org/research/protocols',
    notesAndLimitations: 'Hypothesis formulated from rural transit fares and agricultural daily wage averages (MGNREGA / local rates).',
    nextAction: 'Complete 10 rural user interviews using Protocol INT-PROTO-01 to measure exact travel and wage loss figures.'
  }
];

export const existingSolutionsComparisonData: SolutionComparisonItem[] = [
  {
    id: 'SOL-01',
    name: 'NPCI AePS UDIR',
    governingOrg: 'National Payments Corporation of India (NPCI)',
    solutionType: 'Central Switch Dispute Engine',
    supportedIncidentTypes: 'Cash withdrawal debited but not received, transaction status inquiry, automated chargeback settlement.',
    transactionStatusAccess: 'Direct interbank switch integration (`ReqChkTxn` API between issuer and acquirer).',
    complaintRegistration: 'Automated backend initiation between member bank switches; no customer-facing registration portal.',
    reversalAndEscalation: 'Automated T+5 credit adjustments and chargebacks between bank settlement accounts.',
    localLanguageAccessibility: 'Not applicable — Backend interbank machine-to-machine protocol.',
    suitabilityForLowLiteracy: 'Zero — Strictly an interbank messaging specification with no consumer UI.',
    assistedServiceBCWorkflow: 'Documented as Unavailable — BCs cannot access UDIR APIs directly; access is restricted to bank switch systems.',
    complaintTrackingFollowUp: 'Bank-level settlement logs; customer cannot track status independently.',
    apiIntegrationAvailability: 'Proprietary ISO 8583 / JSON APIs restricted to authorized NPCI member banks.',
    knownLimitations: 'Completely invisible to frontline users. When a village kiosk transaction fails, UDIR operates silently in the background while the customer and BC remain in acute conflict.',
    sourceUrl: 'https://www.npci.org.in/PDF/AePS/circular/2023-24/21-July-2023-NPCI-2023-24-AEPS-084-Circular-84-UDIR-Enhancing-complaint-handling-and-resolution-process-for-AePS-transactions.pdf',
    isDocumentedUnavailable: false
  },
  {
    id: 'SOL-02',
    name: 'NPCI Public Grievance Portal',
    governingOrg: 'NPCI Customer Touchpoint',
    solutionType: 'Public Web Form',
    supportedIncidentTypes: 'AePS failed cash withdrawal, incorrect debit, biometric transaction failure.',
    transactionStatusAccess: 'Requires manual 12-digit RRN entry; returns central switch transmission status.',
    complaintRegistration: 'Online form requiring dropdown selection, transaction details, and text description.',
    reversalAndEscalation: 'Forwards complaint payload to the respective member issuing bank; NPCI does not disburse money directly.',
    localLanguageAccessibility: 'English-only web form with minimal bilingual Hindi labels.',
    suitabilityForLowLiteracy: 'Very Low — Requires typing 12-digit RRN, selecting technical dropdown categories, and reading English alerts.',
    assistedServiceBCWorkflow: 'No dedicated agent portal; BC must use regular consumer web browser.',
    complaintTrackingFollowUp: 'Ticket reference lookup available if user saves 16-character alphanumeric reference.',
    apiIntegrationAvailability: 'No public API; CAPTCHA protected consumer web portal.',
    knownLimitations: 'Non-English or non-tech-savvy users cannot navigate CAPTCHA and technical fields without literate proxy assistance.',
    sourceUrl: 'https://www.npci.org.in/register-a-complaint',
    isDocumentedUnavailable: false
  },
  {
    id: 'SOL-03',
    name: 'Commercial Bank CMS (SBI, PNB, etc.)',
    governingOrg: 'Scheduled Commercial Banks (e.g., SBI CRCF, PNB CGRS)',
    solutionType: 'Commercial Bank Channel',
    supportedIncidentTypes: 'All account-related debits, ATM/micro-ATM failures, unauthorized transactions.',
    transactionStatusAccess: 'Direct access to core banking transaction history (CBS).',
    complaintRegistration: 'Branch visit with physical application letter, branch kiosk, or web CMS form.',
    reversalAndEscalation: 'Internal branch escalation; 30-day window (or earlier upon rejection) before escalation to RBI Ombudsman.',
    localLanguageAccessibility: 'Branch staff speak local language; web/app interfaces primarily English and Hindi.',
    suitabilityForLowLiteracy: 'Moderate at physical branch counter; Very Low on digital web CMS portals.',
    assistedServiceBCWorkflow: 'BCs refer customer to parent branch; causes wage loss and travel expense.',
    complaintTrackingFollowUp: 'SMS reference ticket sent to registered mobile; status query via IVR or branch visit.',
    apiIntegrationAvailability: 'Proprietary internal CBS APIs; strictly closed to third-party consumer apps.',
    knownLimitations: 'Physical branch visits impose opportunity costs (travel fare + lost daily wages) that often exceed the disputed withdrawal fee.',
    sourceUrl: 'https://crcf.sbi.co.in/ccf/',
    isDocumentedUnavailable: false
  },
  {
    id: 'SOL-04',
    name: 'National Cyber Crime Reporting Portal & Helpline 1930',
    governingOrg: 'Indian Cyber Crime Coordination Centre (I4C), MHA',
    solutionType: 'Law Enforcement Portal',
    supportedIncidentTypes: 'Suspected cyber financial fraud, identity theft, unauthorized AePS biometric cloning debits.',
    transactionStatusAccess: 'Tracks beneficiary account lien/freezing through CFCFRMS banking nodal integration.',
    complaintRegistration: 'Phone call to 1930 (urgent) or web submission on cybercrime.gov.in with PDF bank statement proof.',
    reversalAndEscalation: 'Police nodal officers instruct recipient banks to place temporary liens on defrauded funds; restitution requires Section 457 CrPC court order.',
    localLanguageAccessibility: '1930 operators connect to regional State control rooms; multilingual voice operators.',
    suitabilityForLowLiteracy: 'High for Helpline 1930 (Spoken voice); Very Low for cybercrime.gov.in web portal (Requires PDF uploads, Aadhaar OTP registration).',
    assistedServiceBCWorkflow: 'No agent dashboard; operators recommend victim contact police or bank.',
    complaintTrackingFollowUp: 'Acknowledgement SMS with National Crime Record Number; trackable online.',
    apiIntegrationAvailability: 'Restricted law-enforcement switch between MHA, State Police, and Bank Nodal Officers.',
    knownLimitations: 'Must be reserved for genuine criminal fraud. Misrouting routine T+5 network timeouts clogs 1930 lines and causes police distress for innocent BCs. Does not guarantee recovery.',
    sourceUrl: 'https://cybercrime.gov.in/',
    isDocumentedUnavailable: false
  },
  {
    id: 'SOL-05',
    name: 'Dvara Research UPI GRM Toolkit',
    governingOrg: 'Dvara Research (Customer Protection Division)',
    solutionType: 'Academic UX Prototype',
    supportedIncidentTypes: 'UPI money debited but not received, fraud/unauthorized payment, merchant dispute.',
    transactionStatusAccess: 'Designed for smartphone in-app status API integration.',
    complaintRegistration: 'Guided conversational intake, progressive disclosure, plain-language symptom selection.',
    reversalAndEscalation: 'Structured step-by-step escalation hierarchy designed to align with RBI ODR framework.',
    localLanguageAccessibility: 'Designed with multi-vernacular visual layout guidelines.',
    suitabilityForLowLiteracy: 'High for smartphone owners; incorporates visual icons and cognitive load reduction.',
    assistedServiceBCWorkflow: 'Documented as Unavailable — Explicitly designed for smartphone consumer-facing UPI apps.',
    complaintTrackingFollowUp: 'Visual timeline card prototype with plain-language status explanations ("In Progress", "Bank Responding").',
    apiIntegrationAvailability: 'Open-source design guidelines & wireframes; not a hosted production API service.',
    knownLimitations: 'Prior art benchmark that proves guided triage works, but does not address rural AePS micro-ATM transactions, biometric failure modes, or BC print slips.',
    sourceUrl: 'https://upigrm.dvararesearch.com/toolkit/',
    isDocumentedUnavailable: true
  },
  {
    id: 'SOL-06',
    name: 'Dvara Research UPI Market Monitoring (PARSE)',
    governingOrg: 'Dvara Research',
    solutionType: 'NLP Monitoring Engine',
    supportedIncidentTypes: 'All public digital payment grievances surfaced on social media.',
    transactionStatusAccess: 'Public scrape; no direct transaction or bank CBS integration.',
    complaintRegistration: 'Passive monitoring; does not register or lodge individual customer complaints.',
    reversalAndEscalation: 'Ecosystem policy advocacy and supervisory insights; no operational fund reversal.',
    localLanguageAccessibility: 'English and Romanized Hindi social media post classification.',
    suitabilityForLowLiteracy: 'Not applicable — System-level policy monitoring tool, not user-facing.',
    assistedServiceBCWorkflow: 'Documented as Unavailable — No frontline agent tools.',
    complaintTrackingFollowUp: 'Aggregated macro trend dashboards for regulators and payment operators.',
    apiIntegrationAvailability: 'Internal research analytics pipeline.',
    knownLimitations: 'Monitors public online sentiment of urban smartphone users; completely blind to offline rural AePS users who have no presence on social media.',
    sourceUrl: 'https://dvararesearch.com/cpgs-third-slide/',
    isDocumentedUnavailable: true
  },
  {
    id: 'SOL-07',
    name: 'RBI CMS & Integrated Ombudsman Scheme (RB-IOS 2021)',
    governingOrg: 'Reserve Bank of India',
    solutionType: 'Regulatory Escalation',
    supportedIncidentTypes: 'Unresolved payment disputes, non-payment of delayed TAT compensation, deficient banking service.',
    transactionStatusAccess: 'Requires prior complaint number from bank and 30-day non-resolution evidence (or rejection letter).',
    complaintRegistration: 'Online portal (cms.rbi.org.in), postal letter, or centralized receipt center (CRPC, Chandigarh).',
    reversalAndEscalation: 'Binding quasi-judicial ombudsman awards, customer compensation directives.',
    localLanguageAccessibility: 'Forms in English and Hindi; toll-free CRPC helpline in multiple Indian languages.',
    suitabilityForLowLiteracy: 'Low — Requires legalistic evidence, formal dates, previous bank response letters.',
    assistedServiceBCWorkflow: 'Documented as Unavailable — BCs cannot represent customers before the Ombudsman.',
    complaintTrackingFollowUp: 'Online CMS case tracker with case officer assignment.',
    apiIntegrationAvailability: 'Internal RBI portal; no public integration API.',
    knownLimitations: 'Only accessible as a second-tier escalation after bank rejection or 30 days of unaddressed grievance; cannot help with immediate village-level panic on Day 1.',
    sourceUrl: 'https://cms.rbi.org.in/',
    isDocumentedUnavailable: true
  },
  {
    id: 'SOL-08',
    name: 'SaathiFlow Proposed Guided Navigator',
    governingOrg: 'Proposed Concept (IIT Bombay Challenge)',
    solutionType: 'Proposed Triage Co-Pilot',
    supportedIncidentTypes: 'AePS cash withdrawal debited but not dispensed, timeout with debit status unknown, cash not dispensed without debit, suspicious unauthorized SMS debits, biometric scanner repeat errors, post-filing escalation.',
    transactionStatusAccess: 'Aadhaar-Free Metadata: Interprets public transaction SMS, terminal slip error code, or manual date/amount without collecting Aadhaar, PINs, or biometrics.',
    complaintRegistration: 'Guided vernacular triage: Does NOT settle disputes internally; pre-formats an official escalation slip & directs customer to proper bank/1930 channel.',
    reversalAndEscalation: 'Educates user on exact T+5 auto-reversal deadline, ₹100/day penalty entitlement, and step-by-step escalation milestones.',
    localLanguageAccessibility: 'High — Voice-guided and vernacular icon-first navigation in Hindi, Marathi, Bengali, Tamil, Telugu, and English.',
    suitabilityForLowLiteracy: 'Designed specifically for constrained users: audio playback, minimal text, traffic-light status cues, printable/shareable summary card.',
    assistedServiceBCWorkflow: 'Dual-mode: Customer self-check OR BC Assisted Mode (generates verifiable neutral timestamp receipt proving terminal timeout vs fraud).',
    complaintTrackingFollowUp: 'Local client-side timeline tracker (reminds user on Day 6 if auto-reversal did not credit, offering one-tap branch escalation letter).',
    apiIntegrationAvailability: 'Client-first PWA / Offline-capable; optional future integration via Account Aggregator / open bank complaint APIs if permitted.',
    knownLimitations: 'Cannot directly move bank funds or override switch logs; depends on existing UDIR/bank settlement rails for final financial settlement.',
    sourceUrl: 'https://saathiflow.org',
    isDocumentedUnavailable: false
  }
];

export const researchHypothesesData: ResearchHypothesis[] = [
  {
    id: 'HYP-01',
    code: 'H1: Triage Confusion',
    statement: 'Low-literacy rural AePS customers fail to distinguish between routine technical timeouts (eligible for T+5 auto-reversal) and unauthorized fraudulent debits (requiring immediate Helpline 1930 golden-hour reporting).',
    supportingEvidence: 'Dvara Research (2023) documented severe category confusion in payment interfaces; police report high volumes of non-fraud transactional queries on 1930 lines.',
    contradictingEvidence: 'If rural customers rely entirely on BCs who accurately diagnose every incident, user triage confusion would not cause individual harm.',
    validationMethod: 'Scenario-based comprehension interview with 10 AePS users and 5 BCs: present a sample debit SMS and observe whether participant knows if they should call 1930 or wait 5 days.',
    status: 'Open / In Testing',
    decisionImplication: 'If confirmed: Validates SaathiFlow’s core triage decision-tree that immediately splits routine reversal paths from urgent fraud protocols.',
    falsificationTrigger: '> 85% of interviewed rural users accurately identify the correct channel without assistance.'
  },
  {
    id: 'HYP-02',
    code: 'H2: Rights & Compensation Ignorance',
    statement: 'The vast majority of rural AePS customers are unaware of the RBI-mandated T+5 auto-reversal deadline and the ₹100/day delay compensation rule, leading them to make unnecessary, expensive branch trips prematurely.',
    supportingEvidence: 'RBI Ombudsman reports show recurring complaints about uncredited compensation; field research by financial inclusion NGOs indicates compensation is rarely claimed.',
    contradictingEvidence: 'Banks claim automated UDIR systems automatically credit ₹100/day penalties suo-motu without requiring customer awareness.',
    validationMethod: 'Survey 10 rural customers on rights awareness; audit bank statements of past delayed reversal cases to verify if ₹100/day was credited suo-motu.',
    status: 'Supported',
    decisionImplication: 'Empowers SaathiFlow to provide real economic value through an automated "Rights Calculator" and Day-6 escalation generator.',
    falsificationTrigger: 'Field verification reveals banks consistently credit ₹100/day penalties suo-motu within 48 hours of delay.'
  },
  {
    id: 'HYP-03',
    code: 'H3: Frontline BC Friction & Lack of Audit Trail',
    statement: 'When cash is not dispensed after a biometric debit, the lack of an immediate, neutral, verifiable receipt causes acute mistrust, accusations of theft against the BC, and dangerous repeated biometric retry attempts.',
    supportingEvidence: 'BC network whitepapers and news reports highlight physical altercations and agent account blocks following cash withdrawal timeouts; NPCI issued anti-retry circulars.',
    contradictingEvidence: 'Modern micro-ATM thermal printers or SMS alerts could provide sufficient immediate confirmation to calm the customer.',
    validationMethod: 'Structured BC interviews investigating weekly incident frequency, customer reactions, paper roll availability, and multi-retry occurrences.',
    status: 'Supported',
    decisionImplication: 'Proves high value for a "BC-Assisted Mode" in SaathiFlow that produces a neutral, timestamped, tamper-evident digital slip explaining the interbank timeout.',
    falsificationTrigger: 'BCs report that customers remain completely calm and thermal printer slips resolve 100% of customer doubts.'
  },
  {
    id: 'HYP-04',
    code: 'H4: Redundancy / Falsification Test',
    statement: 'Existing bank branch channels, toll-free customer care lines, and NPCI web facilities already solve the grievance needs of low-literacy AePS users adequately, rendering SaathiFlow redundant.',
    supportingEvidence: 'Every scheduled commercial bank has a designated Grievance Redressal Officer; NPCI maintains an active public complaint portal.',
    contradictingEvidence: 'Physical branch visits require travel costs and lost daily wages; phone IVRs have long wait times; NPCI web portal is English-centric and requires complex text typing.',
    validationMethod: 'Usability benchmark comparing time, cost, comprehension, and completion rates of lodging an AePS inquiry via standard bank channel vs SaathiFlow.',
    status: 'At Risk / Nuanced',
    decisionImplication: 'If true: The project should pivot or terminate immediately. If falsified: Establishes an unassailable justification for SaathiFlow in competition Round 1.',
    falsificationTrigger: 'Usability testing shows rural users successfully resolve AePS disputes via existing bank web/IVR channels within 10 minutes without assistance.'
  },
  {
    id: 'HYP-05',
    code: 'H5: Aadhaar-Free Metadata Technical Viability',
    statement: 'A decision and recovery assistant can deliver > 80% of its guidance and verification value using only Aadhaar-free, data-minimised transaction metadata (12-digit RRN, terminal ID, date, transaction amount, error code) without handling Aadhaar numbers, fingerprints, or OTPs.',
    supportingEvidence: 'NPCI UDIR complaint filing and bank status lookups rely primarily on RRN and Date; cybercrime 1930 intake requires transaction reference and bank names.',
    contradictingEvidence: 'Checking real-time individual bank balance changes requires authenticated core banking API access.',
    validationMethod: 'Technical architectural review and legal compliance audit against UIDAI regulations and Digital Personal Data Protection (DPDP) Act 2023.',
    status: 'Supported',
    decisionImplication: 'Ensures SaathiFlow can be legally deployed immediately as a client-side progressive web app without acquiring impossible banking license permissions.',
    falsificationTrigger: 'Regulatory audit proves that effective triage cannot be conducted without live bank account balance feeds.'
  }
];

export const userInterviewProtocols: UserInterviewRecord[] = [
  {
    id: 'INT-PROTO-01',
    participantType: 'Customer',
    anonymousId: 'PROTO-CUST-RUR-01',
    consentObtained: true,
    interviewDate: 'Protocol Template (For Phase 2 Fieldwork)',
    locationState: 'Maharashtra / Uttar Pradesh (Planned)',
    experienceYearsOrUsageFreq: '1-3 withdrawals per month at village Customer Service Point (CSP)',
    scenarioDiscussed: 'Recent cash withdrawal failure where account was debited but cash not received.',
    keyQuestionsAndResponses: [
      {
        question: 'Describe what happened the last time an AePS withdrawal failed.',
        anonymizedSummary: 'Standard protocol prompt: Note down exact words used by customer (e.g., "paisa kat gaya par mila nahi"), emotional response, and immediate reaction.'
      },
      {
        question: 'Did you know how to check if the money was actually debited?',
        anonymizedSummary: 'Investigate whether customer received SMS, asked BC for mini-statement, or had to visit bank passbook machine.'
      },
      {
        question: 'What did the Business Correspondent tell you to do?',
        anonymizedSummary: 'Examine advice given: Did BC say "wait 24 hours", "retry thumbprint now", or "go to bank"? Did customer retry immediately?'
      },
      {
        question: 'Did you know the bank is legally required to return the money within 5 days or pay ₹100 daily fine?',
        anonymizedSummary: 'Record binary awareness (Yes/No) and whether customer ever received or demanded compensation.'
      },
      {
        question: 'What format of help is easiest: voice in your mother tongue, pictures/icons, or having someone read it?',
        anonymizedSummary: 'Record preferred modality for low-literacy navigation.'
      }
    ],
    observedPainPoints: [
      'Panic and terror of total fund loss upon receiving debit SMS without cash',
      'Cognitive inability to read English-language bank SMS alerts',
      'Distrust towards the Business Correspondent, suspecting fraud or device tampering',
      'Immediate desire to retry biometric scan, leading to duplicate debit hazard'
    ],
    empiricalEvidenceBasis: 'Secondary Qualitative Literature (Dvara Research & MicroSave 2023)',
    recommendedFollowUp: 'Administer structured 10-user field validation protocol (Cohort A in FIELD_VALIDATION_PLAN.md).',
    isTemplateOrPilot: 'Protocol Template'
  },
  {
    id: 'INT-PROTO-02',
    participantType: 'Business Correspondent / Mitra',
    anonymousId: 'PROTO-BC-RUR-01',
    consentObtained: true,
    interviewDate: 'Protocol Template (For Phase 2 Fieldwork)',
    locationState: 'Maharashtra / Uttar Pradesh (Planned)',
    experienceYearsOrUsageFreq: '4 years operating Micro-ATM / AePS CSP; 25-40 transactions daily',
    scenarioDiscussed: 'Operational handling of customer disputes when terminal times out after biometric authentication.',
    keyQuestionsAndResponses: [
      {
        question: 'How often do cash withdrawal timeouts or debited-without-cash failures occur?',
        anonymizedSummary: 'Record estimated weekly occurrences and which bank core banking systems time out most frequently.'
      },
      {
        question: 'What happens between you and the customer when money is debited but cash is not dispensed?',
        anonymizedSummary: 'Examine customer emotional response, accusations of theft, verbal arguments, or demands to hand over cash from BC personal pocket.'
      },
      {
        question: 'Does your terminal print a clear failure receipt with the 12-digit RRN?',
        anonymizedSummary: 'Examine thermal printer reliability, paper availability, and whether error messages make sense to customers.'
      },
      {
        question: 'Do customers attempt to rescan their fingerprint immediately?',
        anonymizedSummary: 'Investigate frequency of multi-debits caused by panic retries within 5 minutes.'
      },
      {
        question: 'What tool would help you de-escalate customer tension the most?',
        anonymizedSummary: 'Evaluate interest in an official, neutral "Bank Timeout Proof Slip" that explains the money is not in the BC agent account.'
      }
    ],
    observedPainPoints: [
      'BC bears full brunt of customer anger and reputational damage for bank switch failures',
      'Micro-ATM prints cryptic error codes (e.g. ISO 68, ISO 91) that customers do not believe',
      'Thermal printer paper frequently runs out or ink fades within days',
      'No official mechanism for BC to log a UDIR dispute directly on behalf of customer'
    ],
    empiricalEvidenceBasis: 'BC Federation of India Whitepapers & Industry Surveys',
    recommendedFollowUp: 'Administer structured 5-BC operational interview protocol (Cohort B in FIELD_VALIDATION_PLAN.md).',
    isTemplateOrPilot: 'Protocol Template'
  },
  {
    id: 'INT-PROTO-03',
    participantType: 'Customer',
    anonymousId: 'PROTO-CUST-RUR-02',
    consentObtained: true,
    interviewDate: 'Protocol Template (For Phase 2 Fieldwork)',
    locationState: 'Bihar / Jharkhand (Planned)',
    experienceYearsOrUsageFreq: 'Elderly pensioner; monthly DBT social pension withdrawal',
    scenarioDiscussed: 'Biometric authentication failure (worn fingerprints) followed by confusion regarding account debit status.',
    keyQuestionsAndResponses: [
      {
        question: 'Have you ever had trouble with your fingerprint not scanning properly?',
        anonymizedSummary: 'Examine frequency of "Biometric Data Did Not Match" (ISO 55) among manual laborers and elderly users.'
      },
      {
        question: 'When the machine beeps red, do you know if money was deducted from your pension?',
        anonymizedSummary: 'Investigate fear and inability to distinguish between a failed authentication (no debit) and a timeout failure (debit occurred).'
      },
      {
        question: 'Have you ever traveled to the main bank branch to complain about a failed withdrawal?',
        anonymizedSummary: 'Measure distance traveled (in km), travel cost (bus/auto fare), and hours spent waiting at the branch.'
      }
    ],
    observedPainPoints: [
      'Severe anxiety that failed thumbprint scan deducted money from pension',
      'Cannot read SMS messages due to lack of literacy and English text',
      'Traveling to block branch costs transit fares and takes an entire day, only to be told "no money was cut"'
    ],
    empiricalEvidenceBasis: 'Secondary Qualitative Studies & Community Focus Groups',
    recommendedFollowUp: 'Target elderly DBT beneficiaries in Round 2 field validation cohort.',
    isTemplateOrPilot: 'Protocol Template'
  }
];

export const usabilityMetricsData: UsabilityMetric[] = [
  {
    id: 'MET-01',
    metricName: 'Correct Recovery Pathway Identification Rate (%)',
    definition: 'Proportion of users who correctly identify the statutory action (Wait T+5 vs Call 1930 vs Visit Branch).',
    measurementMethod: 'Simulated failure scenario: Present user with debited-without-cash SMS. Measure % who select correct action.',
    cautionBias: 'Scenario recall bias in lab settings; must be re-verified during real kiosk failure incidents.',
    currentBaseline: 'Not measured (Pre-pilot baseline estimated at ~32% in literature)',
    targetThreshold: '≥ 85% Correct Channel Selection',
    status: 'Target Defined'
  },
  {
    id: 'MET-02',
    metricName: 'Time to Triage & Generate Recovery Action (Seconds)',
    definition: 'Total elapsed time from launching the assistant to receiving vernacular next-step guidance and verification slip.',
    measurementMethod: 'Stopwatch recording from app intake to final summary screen across 10 rural test users.',
    cautionBias: 'Device performance variations across low-cost Android smartphones in rural connectivity conditions.',
    currentBaseline: 'Not measured (Existing bank IVR/web takes > 300 seconds)',
    targetThreshold: '≤ 90 Seconds to Complete Triage',
    status: 'Target Defined'
  },
  {
    id: 'MET-03',
    metricName: 'Panic Multi-Retry Suppression Rate (%)',
    definition: 'Proportion of customers who pause and verify balance via missed-call banking rather than immediately rescanning thumb.',
    measurementMethod: 'Observational trial at 5 BC kiosks comparing retry frequency with and without SaathiFlow balance pause cue.',
    cautionBias: 'Customer anxiety may overpower visual prompts without firm verbal reinforcement from the BC agent.',
    currentBaseline: 'Not measured (Literature indicates high multi-retry rate)',
    targetThreshold: '≥ 80% Biometric Rescan Suppression',
    status: 'Target Defined'
  },
  {
    id: 'MET-04',
    metricName: 'Premature Bank Branch Visit Reduction (%)',
    definition: 'Reduction in avoidable customer trips to parent bank branches during the routine T+1 to T+5 auto-reversal window.',
    measurementMethod: 'Follow-up phone or in-person survey with 10 affected users on whether they visited the branch before Day 6.',
    cautionBias: 'High dependency on whether customer receives reassuring SMS from their bank when reversal credits.',
    currentBaseline: 'Not measured (Baseline: Immediate Day 1 or Day 2 branch visit)',
    targetThreshold: '≥ 70% Reduction in Premature Branch Visits',
    status: 'Target Defined'
  },
  {
    id: 'MET-05',
    metricName: 'Low-Literacy User Independent Comprehension Rate (%)',
    definition: 'Proportion of low-literacy users who accurately explain in their own words what happened to their debited money.',
    measurementMethod: 'Post-test comprehension quiz following voice guidance in native dialect (Hindi, Marathi, Bhojpuri).',
    cautionBias: 'Interviewer prompting bias; must follow standardized non-leading scoring rubric.',
    currentBaseline: 'Not measured (Dvara found high cognitive drop-off in text apps)',
    targetThreshold: '≥ 80% Accurate Comprehension of Funds Status',
    status: 'Target Defined'
  },
  {
    id: 'MET-06',
    metricName: 'BC De-escalation & Trust Score (1 to 5 Likert)',
    definition: 'Frontline BC operator rating of customer calm and interpersonal trust when using neutral verification slips.',
    measurementMethod: 'Structured 5-point Likert survey administered to 5 participating BC agents after failure handling.',
    cautionBias: 'Social desirability bias; BCs may inflate scores to please research interviewers.',
    currentBaseline: 'Not measured (Qualitative reports cite high hostility)',
    targetThreshold: '≥ 4.0 / 5.0 Average Trust & Calm Rating',
    status: 'Target Defined'
  },
  {
    id: 'MET-07',
    metricName: 'Fraud Golden-Hour Escalation Compliance (%)',
    definition: 'Proportion of users experiencing unauthorized debits who dial Helpline 1930 within 2 hours without sharing OTPs.',
    measurementMethod: 'Simulated unauthorized SMS alert test: Measure speed and correctness of selecting 1930 escalation.',
    cautionBias: 'Simulated emergencies cannot fully replicate real panic of unauthorized money loss.',
    currentBaseline: 'Not measured (Victims typically wait days for branch)',
    targetThreshold: '≥ 90% Immediate 1930 Escalation Compliance',
    status: 'Target Defined'
  }
];

export const simulationScenariosData: SimulationScenario[] = [
  {
    id: 'SCEN-01',
    title: 'Case 1: Cash Not Dispensed, Account Debited (Timeout Failure)',
    participantPersona: 'Ramesh (Daily Wage Earner, PMJDY Account Holder)',
    contextDescription: 'Scanned thumbprint for ₹2,500 at BC kiosk. Terminal timed out (ISO 68). Customer phone received SMS stating account debited, but micro-ATM produced no currency.',
    isFraudIncident: false,
    officialMandatedAction: 'RBI TAT Circular RBI/2019-20/67 Annexure Sl. No. 1 mandates auto-reversal within T+5 calendar days. ₹100/day compensation applies suo-motu beyond T+5 calendar days.',
    tatDays: 5,
    traditionalPathSteps: [
      'Customer panics upon reading debit SMS, believing cash has been stolen.',
      'Customer accuses the BC agent of pocketing ₹2,500 or manipulating the device.',
      'Customer attempts 3 rapid biometric rescans, causing risk of duplicate debits.',
      'Customer spends transit fare and loses daily wage travelling to branch on Day 1.'
    ],
    saathiFlowPathSteps: [
      'Audio in native dialect reassures customer: "Money is held in the bank network, not with the agent."',
      'Generates neutral "Interbank Timeout Verification Slip" with RRN, timestamp, and ISO error code.',
      'Enforces mandatory balance check pause, blocking panic biometric retries.',
      'Starts visual T+5 auto-reversal countdown tracker, advising customer to wait in the village.'
    ],
    traditionalRisk: 'Severe frontline hostility, loss of trust in digital banking, duplicate debit depletion, and costly premature branch travel.',
    saathiFlowMitigation: 'Neutral audit trail de-escalates BC friction, suppresses double-debit retries, and protects user rights under RBI T+5 mandate.'
  },
  {
    id: 'SCEN-02',
    title: 'Case 2: Transaction Pending / Timeout, Debit Status Unknown',
    participantPersona: 'Sunita Devi (SHG Member, Micro-Enterprise Operator)',
    contextDescription: 'Micro-ATM showed "Network Timeout — Transaction Pending" during ₹4,000 withdrawal. Customer received no SMS. Neither agent nor customer knows if money was cut.',
    isFraudIncident: false,
    officialMandatedAction: 'In-flight transaction settlement check via core banking balance inquiry before initiating fresh transaction.',
    tatDays: null,
    traditionalPathSteps: [
      'BC immediately requests customer to rescan thumbprint to "try again".',
      'First pending transaction settles asynchronously in the background.',
      'Second transaction also debits account, causing unexpected ₹8,000 deduction.'
    ],
    saathiFlowPathSteps: [
      'Enforces strict 15-minute verification hold on the terminal interface.',
      'Provides one-tap toll-free missed-call banking button to check live balance.',
      'If balance is deducted, automatically routes to Case 1 (T+5 Auto-Reversal).',
      'If balance is unchanged after 15 minutes, safely clears customer for fresh withdrawal.'
    ],
    traditionalRisk: 'Catastrophic double-debit that overdraws customer account or exhausts monthly liquidity.',
    saathiFlowMitigation: 'Mandatory verification pause eliminates premature biometric retries while in-flight transactions settle.'
  },
  {
    id: 'SCEN-03',
    title: 'Case 3: Cash Not Dispensed, Account NOT Debited (Benign Terminal Decline)',
    participantPersona: 'Gangadhar (Elderly Social Security Pensioner)',
    contextDescription: 'Micro-ATM displayed red light and declined withdrawal with error "ISO 51: Insufficient Balance" or "ISO 91: Switch Inoperative". No debit SMS received.',
    isFraudIncident: false,
    officialMandatedAction: 'Immediate verbal reassurance. No financial dispute generated as core banking account was not debited.',
    tatDays: null,
    traditionalPathSteps: [
      'Customer cannot read English thermal slip and fears monthly pension was deducted.',
      'Customer spends entire day and bus fare travelling to block branch to check passbook.',
      'Branch teller dismissively confirms no money was cut, wasting customer time and money.'
    ],
    saathiFlowPathSteps: [
      'Displays bold green icon on screen: "Zero Deduction — Account Completely Safe."',
      'Spoken audio in regional dialect explains exact cause: "Bank server is busy, try after 1 hour."',
      'Eliminates anxiety on the spot without requiring written complaints or branch travel.'
    ],
    traditionalRisk: 'Avoidable panic and wasted travel expenses for economically vulnerable pensioners.',
    saathiFlowMitigation: 'Instant visual and audio confirmation of zero-debit protects low-literacy users from false alarms.'
  },
  {
    id: 'SCEN-04',
    title: 'Case 4: Unfamiliar Midnight Debit / Suspected Biometric Clone Fraud',
    participantPersona: 'Kavita (Rural Homemaker, Aadhaar Holder)',
    contextDescription: 'Received SMS alert for ₹10,000 withdrawn via AePS at 2:30 AM in another district while customer was asleep at home with physical Aadhaar card.',
    isFraudIncident: true,
    officialMandatedAction: 'Immediate reporting to Cyber Financial Crime Helpline 1930 within golden hour to place CFCFRMS administrative debit lien on recipient account. Biometric locking via mAadhaar. Restitution subject to judicial or law enforcement verification protocols (such as an application under Section 503 BNSS / Section 457 CrPC).',
    tatDays: null,
    traditionalPathSteps: [
      'Victim waits 3 days for local bank branch to open on Monday morning.',
      'Branch staff directs victim to local police station; police asks for bank statement.',
      'Defrauded funds are withdrawn via mule accounts within 4 hours, making recovery impossible.'
    ],
    saathiFlowPathSteps: [
      'Identifies criminal fraud signature; immediately bypasses 5-day timeout protocol.',
      'Direct one-tap connection to Cyber Fraud Helpline 1930 during golden hour.',
      'Pre-formats operator intake card: Bank Name, RRN, Amount, and Timestamp.',
      'Interactive voice guide walks customer through locking biometrics via mAadhaar app.'
    ],
    traditionalRisk: 'Irreversible loss of savings due to delayed reporting beyond golden hour.',
    saathiFlowMitigation: 'Cuts emergency fraud reporting time from days to minutes, maximizing chance of administrative debit lien.'
  },
  {
    id: 'SCEN-05',
    title: 'Case 5: Persistent Biometric Authentication Failure (Worn Prints)',
    participantPersona: 'Bhagwan (Agricultural Laborer with Worn Friction Ridges)',
    contextDescription: 'Fingerprint scanner repeatedly beeps error "ISO 55: Biometric Data Did Not Match" after 4 attempts. Customer unable to withdraw wages.',
    isFraudIncident: false,
    officialMandatedAction: 'Switch to alternative authentication (Debit Card + PIN or Iris) or guide to Aadhaar Enrolment Centre for biometric update.',
    tatDays: null,
    traditionalPathSteps: [
      'BC repeatedly asks customer to press harder on sensor until terminal security lock triggers.',
      'Customer accuses BC of operating a defective machine or denying service intentionally.',
      'Customer leaves without money, unable to buy household provisions.'
    ],
    saathiFlowPathSteps: [
      'Detects repeat ISO 55 errors and halts further fingerprint attempts to prevent terminal block.',
      'Explains biometric ridge wear respectfully via audio, removing shame and frustration.',
      'Suggests Micro-ATM Debit Card + PIN withdrawal or Iris authentication if supported.',
      'Provides map and operating hours of nearest Aadhaar Seva Kendra for free biometric update.'
    ],
    traditionalRisk: 'Exclusion from banking services and terminal lockout due to excessive failed attempts.',
    saathiFlowMitigation: 'Preserves dignity, provides actionable alternative withdrawal pathways, and guides user to biometric update.'
  },
  {
    id: 'SCEN-06',
    title: 'Case 6: Complaint Already Filed, Overdue Beyond T+5 Days (Escalation Path)',
    participantPersona: 'Anand (Small Farmer, Past Failure Victim)',
    contextDescription: 'AePS withdrawal failed 7 days ago. Account debited ₹3,000, cash not received. Money has not auto-reversed. Customer holds transaction slip.',
    isFraudIncident: false,
    officialMandatedAction: 'Formal written representation to Branch Manager citing RBI TAT Circular RBI/2019-20/67 demanding auto-reversal and ₹100/day compensation. Immediate escalation to RBI Ombudsman under RB-IOS 2021 Clause 10(2)(a) if rejected.',
    tatDays: 5,
    traditionalPathSteps: [
      'Customer visits branch without formal paperwork; teller verbally promises to "look into it".',
      'No formal complaint ticket is logged in bank CRM; statutory delay penalty is not tracked.',
      'Weeks pass without reversal; customer eventually gives up due to fatigue.'
    ],
    saathiFlowPathSteps: [
      'Verifies that T+5 calendar days have elapsed since transaction date.',
      'Calculates statutory delay compensation: ₹200 accrued for 2 overdue days.',
      'Generates pre-formatted bilingual representation letter addressed to Branch Manager & Grievance Redressal Officer citing RBI Circular 67.',
      'Includes mandatory Clause 10(2)(a) warning: immediate escalation to RBI Ombudsman if claim is rejected.'
    ],
    traditionalRisk: 'Forfeiture of statutory compensation and unresolved fund debit due to informal verbal complaints.',
    saathiFlowMitigation: 'Transforms aggrieved customer into an empowered claimant backed by official RBI circulars and legally structured documentation.'
  }
];
