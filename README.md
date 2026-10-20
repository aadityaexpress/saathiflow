# SaathiFlow: Research & Data Collection Workspace

> **Techfest IIT Bombay | India @ 71/100 Challenge**  
> **Theme 3:** Financial Inclusion & Meaningful Banking Access  
> **Concept Working Title:** SaathiFlow — Multilingual Pre-Grievance Decision & Recovery Assistant for AePS Disputes & Unauthorised Debits  
> **Date:** 20 October 2026  
> **Workspace Directory:** `C:\Users\hp\.gemini\antigravity\scratch\saathiflow-research`

---

## 1. Project Overview & Objective

SaathiFlow is an evidence-backed concept investigation to test whether a multilingual, low-literacy-friendly decision and recovery assistant solves an unmet need beyond existing NPCI, bank, and cybercrime reporting mechanisms.

Our objective is **NOT** to build another generic complaint portal. NPCI AePS UDIR already automates interbank dispute resolution and reversals. Instead, we investigate whether a front-end **"Pre-Grievance Navigation Layer"** for customers and Business Correspondents (BCs / Bank Mitras) can:
1. Instantly classify whether an incident is a routine technical timeout (eligible for T+5 auto-reversal) vs. urgent financial cyber fraud.
2. Provide a neutral, timestamped, tamper-evident digital slip (RRN, terminal ID, error code) that de-escalates kiosk conflicts and prevents dangerous repeated biometric retries.
3. Educate low-literacy users on their statutory rights under RBI guidelines (T+5 auto-reversal deadline and ₹100/day delay compensation).
4. Direct genuine unauthorized fraud victims immediately to the National Cybercrime Helpline 1930 / cybercrime.gov.in within the "golden hour" for fund liens.

---

## 2. Workspace Sections & Architecture

The research dashboard is structured into 8 integrated modules matching the project brief:

- **Section A: Research Overview:** Executive brief, current status, key established findings, critical unknowns, opportunity assessment, and Phase 2 research priorities.
- **Section B: Evidence Register:** Searchable and filterable database of 12+ verified empirical claims, circulars, and assumptions with primary source links, publication dates, data periods, geographic/population scope, and verification status. Includes CSV export.
- **Section C: Data Collection Tracker:** Tracks 8 critical payment indicators, distinguishing verified metrics (e.g. 462M–618M monthly approved AePS transactions) from missing values (*"Not publicly found"* / *"Awaiting verification"*).
- **Section D: Existing Solutions & Prior-Art Matrix:** Side-by-side comparison across 8 systems (NPCI AePS UDIR, NPCI Complaint Facility, Commercial Bank CMS, Helpline 1930 / Cybercrime Portal, Dvara UPI GRM Toolkit, Dvara UPI Market Monitoring PARSE, RBI CMS / Ombudsman, and SaathiFlow). Clearly delineates between features *documented as unavailable* vs. *simply unevidenced*.
- **Section E: User Research & Frontline BC Protocols:** Standardized interview guides and ethical consent trackers for Customers, Business Correspondents, and Financial Inclusion Practitioners. Includes local persistence (`localStorage`) for logging new field notes without fabricating interview responses.
- **Section F: Research Hypothesis & Falsification Tracker:** Tracks 5 scientific hypotheses, including **Hypothesis 4 (The Falsification Hypothesis)** to test whether existing bank/BC channels already suffice.
- **Section G: Impact & Usability Evaluation Bench:** 7 quantified usability metrics (with "Not measured" empirical baselines) and an interactive **Field Incident Triage Simulator** comparing traditional outcomes against SaathiFlow across 4 realistic field scenarios.
- **Section H: Concept Proposal Export:** Complete, competition-ready Round 1 proposal document for Techfest IIT Bombay, featuring one-click Markdown copy, `.MD` file download, and print-ready stylesheet.

---

## 3. Technology Stack & Local Run Instructions

- **Framework:** React 18 with TypeScript 5.7+
- **Bundler & Dev Server:** Vite 6
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Client Storage:** `localStorage` for field research notes

### Quick Start:

```bash
# Navigate to workspace
cd "C:\Users\hp\.gemini\antigravity\scratch\saathiflow-research"

# Start the interactive development server
npx vite

# Or create a production build
npx vite build
```

---

## 4. Financial Safety & Zero-PII Guardrails

SaathiFlow operates under strict research ethics and regulatory compliance boundaries:
- **Zero Sensitive Data:** We NEVER collect, transmit, or store 12-digit Aadhaar numbers, biometric fingerprint templates, MPINs, card PINs, OTPs, or full 16-digit account numbers.
- **No Unauthorised API Claims:** The app does NOT claim to move money, reverse bank charges, or file police FIRs directly without authorized institutional gateways.
- **Fraud Separation:** Suspected unauthorized debits are cleanly routed to the Ministry of Home Affairs Helpline 1930, keeping them isolated from routine network reversal tracking.
- **Transparent Labelling:** All simulated statuses, scenario walkthroughs, and projected baselines are explicitly tagged.

---

## 5. Primary Source Bibliography

1. **NPCI (21 July 2023):** *Circular NPCI/2023-24/AEPS/084: UDIR - Enhancing complaint handling and resolution process for AePS transactions.*
2. **Reserve Bank of India (20 Sept 2019):** *Notification RBI/2019-20/67 DPSS.CO.PD No.629/02.01.014/2019-20: Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions.*
3. **Dvara Research (31 March 2023):** *Do UPI In-App Grievance Redress Mechanisms Work for Constrained Users?* (Narayan & Prasad).
4. **NPCI (2025):** *AePS Monthly Product Statistics FY 2024–25.*
5. **Ministry of Home Affairs / I4C (2024):** *National Cyber Crime Reporting Portal & Helpline 1930 SOP.*
6. **Reserve Bank of India (May 2025):** *Reserve Bank of India Annual Report 2024–25 & Ombudsman Review.*
7. **Department of Financial Services, MoF (2024):** *Pradhan Mantri Jan Dhan Yojana (PMJDY) Progress Overview.*
