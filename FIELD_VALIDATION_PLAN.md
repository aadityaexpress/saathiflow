# SaathiFlow: Exploratory Field Validation Plan
**Document Version:** 2.0 (Post-Audit Correction)  
**Target Context:** Techfest IIT Bombay "India @ 71/100 Challenge" (Theme 3: Financial Inclusion & Meaningful Banking Access)  
**Status:** Protocol Approved for Field Execution  
**Ethics & Compliance:** DPDP Act 2023 Compliant; Informed Oral/Written Consent; Zero-Aadhaar/Zero-Biometric Collection.

---

## 1. Executive Summary & Objective

The SaathiFlow concept posits that rural and low-literacy users facing AePS cash withdrawal failures (e.g., account debited but cash not dispensed, terminal time-out, or ambiguous failure slips) encounter significant pre-grievance friction, uncertainty, and informational disempowerment.

While macro-level regulatory frameworks (RBI Circular RBI/2019-20/67, RB-IOS 2021) and interbank dispute architectures (NPCI UDIR) exist, ground-level user friction remains documented largely via qualitative secondary reports (Dvara Research, MicroSave Consulting) and unverified local hypotheses.

**Primary Objective:**  
To execute an exploratory, non-leading field study across **10 AePS service consumers** and **5 Business Correspondent (BC) / Bank Mitra operators** to rigorously test five core problem hypotheses before committing to production-scale engineering.

---

## 2. Hypotheses Under Investigation

Each qualitative inquiry in this protocol maps directly to a specific hypothesis tracked in [`EVIDENCE_AUDIT.csv`](file:///C:/Users/hp/.gemini/antigravity/scratch/saathiflow-research/EVIDENCE_AUDIT.csv):

| Hypothesis ID | Statement | Current Evidence Level | Primary Test Metric / Indicator |
| :--- | :--- | :--- | :--- |
| **HYP-01 (EV-011)** | Consumers travel 15–25 km to bank branches to report AePS failures. | Unverified Local Hypothesis | Actual measured transit distance (km) and transport mode reported by consumers. |
| **HYP-02 (EV-012)** | Direct out-of-pocket travel and wage-loss costs equal ₹150–₹300 per dispute attempt. | Unverified Local Hypothesis | Itemised round-trip transit fare + daily wage loss estimated by respondent. |
| **HYP-03 (EV-013)** | Immediate repeated biometric attempts trigger cascading duplicate debits. | Indirect Evidence (RBI/Dvara) | Proportion of failure events where user retried within 15 minutes and suffered >1 debit. |
| **HYP-04 (EV-014)** | Terminal silence or generic decline slips cause interpersonal friction and accusations of theft against BCs. | Indirect Evidence (Qualitative) | Incident frequency where consumer suspected BC of withholding cash or tampering with device. |
| **HYP-05 (EV-015)** | Standard SMS alerts and generic error slips are unintelligible to low-literacy consumers, causing complete drop-off. | Indirect Evidence (Dvara GRM) | Proportion of users unable to identify RRN, amount, or failure reason from bank SMS / thermal slip. |

---

## 3. Sample Design & Demographics

### 3.1 Cohort A: AePS Consumers (n = 10)
- **Target Population:** Rural / peri-urban bank account holders (PMJDY or standard savings) who have conducted an AePS cash withdrawal at a BC point within the last 90 days.
- **Inclusion Criteria:**
  - At least 5 respondents must have experienced an actual failed AePS transaction (cash not dispensed or debit ambiguity) within the past 6 months.
  - Mix of gender (minimum 4 female respondents).
  - Mix of literacy levels (at least 4 respondents with primary school education or below / functional low literacy).
- **Recruitment Channel:** Local self-help group (SHG) networks, gram panchayat open desks, or direct approach at rural haats/mandis (outside BC customer lines to prevent selection bias).

### 3.2 Cohort B: Business Correspondents / Bank Mitras (n = 5)
- **Target Population:** Active BC agents operating AePS Micro-ATMs / POS terminals.
- **Inclusion Criteria:**
  - Operating continuously for ≥ 12 months.
  - Serving at least 15–30 customers per day.
  - Representing at least 2 distinct corporate BC networks or sponsoring public/private sector banks.
- **Location Criteria:** Rural / semi-urban service points located at least 5 km away from the nearest parent bank branch.

---

## 4. Privacy, Safety, and Consent Protocol

In strict alignment with the **Digital Personal Data Protection (DPDP) Act, 2023** and ethical research standards:

1. **Informed Consent:**
   - Administered verbally in the respondent's primary local language (Hindi / regional dialect).
   - Plain-language explanation that this is an independent academic study for IIT Bombay Techfest, not an official bank inspection, tax audit, or police inquiry.
   - Explicit confirmation that participation is voluntary, unpaid, and can be stopped at any time without negative consequences.
2. **Data Minimisation (Zero PII Policy):**
   - **No Aadhaar Numbers:** Never ask for, view, or record full Aadhaar numbers or Virtual IDs.
   - **No Biometrics:** Never record or capture fingerprints, iris scans, or facial imagery.
   - **No Financial Secrets:** Never record full 16-digit debit card numbers, account passwords, or OTPs.
   - **Pseudonymisation:** Respondents assigned anonymised IDs (e.g., `USER-01` to `USER-10`, `BC-01` to `BC-05`).
   - **Quasi-Identifiers:** RRNs, transaction amounts, timestamps, and terminal IDs collected from anonymised slips are treated as sensitive quasi-identifiers and held in encrypted local storage only.

---

## 5. Semi-Structured Field Protocols (Non-Leading)

### 5.1 Protocol A: Consumer Journey & Friction (n = 10)

> **Interviewer Guideline:** Ask neutral, open-ended questions. Avoid priming the respondent with words like "unfair", "theft", "harassment", or "huge cost". Let the respondent describe their actual behaviour.

#### Module 1: Baseline Context & Banking Access
1. *When you need cash, where do you usually go first? How far is that from your home (in km or travel time)?*
2. *How often do you go to a bank branch versus a local kiosk/BC point? Why do you choose one over the other?*
3. *When you use your thumbprint for cash, what kind of phone message or paper receipt do you usually receive? Can you understand what it says?*

#### Module 2: Incident Deep-Dive (Failed Transaction Experience)
4. *Can you describe the last time you tried to withdraw cash and something went wrong? What did the screen or the agent tell you?*
5. *Did you receive an SMS on your phone? Did the message say money was taken out, or was it unclear?*
6. *What did you do immediately in the next 5 minutes? (Did you try your thumb again? How many times? Why?)*
7. *Did multiple withdrawals get deducted from your account during that visit?*

#### Module 3: Resolution Journey & Economic Impact (Testing HYP-01 & HYP-02)
8. *What did the kiosk agent tell you to do next? Did they give you any written slip or reference number?*
9. *What steps did you take to get your money back?*
10. *Did you have to travel somewhere else (like a bank branch)? Which branch, and how far was it?*
11. *How did you travel there, how much did the bus/auto fare cost, and how many hours or working days did you spend on this trip?*
12. *How many total days did it take for the money to return to your account? Did you receive any extra compensation for the delay?*

#### Module 4: Perceptions & Trust (Testing HYP-04 & HYP-05)
13. *When the cash did not come out but money was cut, what did you think happened? Who did you feel was responsible?*
14. *Have you ever called the customer care number on your passbook or bank board? What happened when you called?*
15. *If you had a simple tool on a basic smartphone or IVR that instantly told you: "Your bank has held this money; wait 5 days before going to branch", would you find that helpful, or would you still go directly to the branch?*

---

### 5.2 Protocol B: Business Correspondent Operational Protocol (n = 5)

> **Interviewer Guideline:** Focus on terminal operational limits, network latency, customer confrontation, and backend error reporting.

#### Module 1: Infrastructure & Volume
1. *Which bank or corporate BC network terminal are you using? On average, how many AePS transactions do you process each day?*
2. *Out of every 10 cash withdrawal attempts, how many fail on the first try? What are the common error messages you see?*

#### Module 2: Failure Handling & Receipts (Testing HYP-03, HYP-04, HYP-05)
3. *When an AePS withdrawal fails because of a timeout or biometric mismatch, does your machine always print a slip? If it runs out of thermal paper, what do you do?*
4. *When the screen shows a timeout but the customer's phone gets an SMS that cash was debited, what does your terminal show?*
5. *When this happens, do customers ask to try their thumbprint again immediately? What do you advise them, and why?*
6. *Have customers ever accused you of keeping their cash or manipulating the biometric reader? How do you handle such situations?*

#### Module 3: Grievance Logging & Backend Interaction
7. *Do you have access to an NPCI portal, UDIR system, or CRM portal where you can enter a dispute ticket for the customer? Or do you have to refer them to their home branch?*
8. *When you refer a customer to their home branch, do you provide them with the 12-digit RRN or terminal ID written down?*
9. *Do customers return to you if their bank branch turns them away? How often does this happen?*
10. *What is the single biggest tool or information feature that would help you resolve customer doubts during a failed transaction?*

---

## 6. Transaction Journey Mapping Method

For each recorded failure incident, interviewers will reconstruct the end-to-end event sequence on a standard 6-stage lifecycle template:

```
[Stage 1: Biometric Attempt] 
       │ 
       ▼
[Stage 2: Terminal Response] ──► Did slip print? What ISO code / message appeared?
       │ 
       ▼
[Stage 3: Account Debit Signal] ──► Did SMS arrive? Immediate vs Delayed?
       │ 
       ▼
[Stage 4: Triage & Immediate Retries] ──► Number of retries in <15 mins? Cascading debits?
       │ 
       ▼
[Stage 5: Grievance Journey] ──► Distance travelled (km)? Direct out-of-pocket costs (₹)?
       │ 
       ▼
[Stage 6: Settlement / Restitution] ──► TAT (calendar days)? Compensation paid (₹100/day)?
```

---

## 7. Explicit Decision Rules & Falsification Criteria

To maintain scientific integrity and avoid pursuing a concept without empirical justification, the project establishes the following pre-registered decision criteria:

| Evaluation Dimension | Threshold to Confirm Need (Proceed) | Threshold to Pivot / Abandon |
| :--- | :--- | :--- |
| **Physical Travel Burden (HYP-01)** | ≥ 60% of failure victims report travelling > 5 km specifically to log a dispute or check reversal status. | > 70% of users report disputes are handled remotely via phone or locally by the BC without branch visits. ➔ *Pivot to BC helper module.* |
| **Financial Friction (HYP-02)** | Mean out-of-pocket transit and wage-loss cost exceeds ₹100 per disputed incident. | Mean travel cost is < ₹30 or negligible (e.g. branch is within walking distance). ➔ *De-emphasise economic recovery ROI.* |
| **Duplicate Retry Debits (HYP-03)** | ≥ 30% of failed transaction cases experienced a duplicate debit due to retry within 15 minutes. | < 10% experience duplicate debit; terminal timeouts reliably block instant retries. ➔ *Downgrade retry blocker priority.* |
| **Interpersonal Mistrust (HYP-04)** | ≥ 40% of BCs report verbal disputes or loss of customer trust following cash-not-dispensed events. | BCs report customers fully understand machine timeouts and do not hold agents accountable. ➔ *Refocus on bank TAT tracking.* |
| **Comprehension Barrier (HYP-05)** | ≥ 70% of low-literacy users cannot explain the meaning of an AePS failure SMS or extract the 12-digit RRN. | Users easily understand failure SMS or rely seamlessly on vernacular bank voice alerts. ➔ *Abandon custom SMS parser.* |
| **Overall Value Proposition** | Target users express clear willingness to use an assisted voice/visual triage tool before travelling to a bank branch. | Target users state they will unconditionally travel to the branch regardless of app guidance due to distrust of digital tools. ➔ *Abandon consumer app; refocus on physical paper dispute slips.* |

---

## 8. Timeline & Execution Roadmap

- **Week 1 (Days 1–3):** Local field coordinator briefing, pilot testing of interview protocols on 2 dummy respondents, ethical clearance verification.
- **Week 1 (Days 4–7):** Field interviews across 10 AePS consumers and 5 BC agents across designated rural clusters.
- **Week 2 (Days 8–10):** Audio transcript translation, anonymisation, data entry into [`EVIDENCE_AUDIT.csv`](file:///C:/Users/hp/.gemini/antigravity/scratch/saathiflow-research/EVIDENCE_AUDIT.csv), and journey mapping synthesis.
- **Week 2 (Days 11–12):** Decision rule evaluation against pre-registered thresholds; formal go/no-go determination for Round 2 concept prototype.
