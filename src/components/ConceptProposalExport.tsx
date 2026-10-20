import React, { useState } from 'react';
import { Copy, Check, Download, Printer, ExternalLink, ShieldCheck, FileText, Sparkles, AlertCircle } from 'lucide-react';

export const ConceptProposalExport: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const proposalMarkdown = `# SaathiFlow: Multilingual Decision & Recovery Assistant for AePS Disputes
## Concept Proposal — Round 1 | Techfest IIT Bombay "India @ 71/100 Challenge"
**Theme 3:** Financial Inclusion & Meaningful Banking Access  
**Target Submission Date:** October 2026 | **Prepared:** 20 October 2026  
**Integrity Commitment:** Evidence-Grounded Research Workspace (Aadhaar-Free, Data-Minimised Transaction Metadata Architecture)

---

### 1. Problem Statement & Target Demographics
India's Aadhaar Enabled Payment System (AePS) is a cornerstone of last-mile financial inclusion, providing essential banking and cash withdrawal services for over 53.5 crore Jan Dhan (PMJDY) account holders (Department of Financial Services, 2024). While NPCI publishes aggregate volume and value across AePS services on its portal, national disaggregated failure and dispute rates are not publicly reported. However, when a cash-out transaction fails at a village Business Correspondent (BC / Bank Mitra) kiosk—specifically where a customer's account is debited but cash is not dispensed—marginalized rural customers face acute crisis.

Target users include daily-wage labourers, women Self-Help Group (SHG) members, elderly pensioners, and agricultural workers with limited formal literacy and low digital proficiency. When confronted with cryptic micro-ATM terminal errors (e.g. ISO 68 timeout, ISO 91 switch inoperative), users cannot verify the fate of their debited funds. Our research explores whether this information vacuum triggers frontline friction (hypotheses under field investigation):
1. **Frontline Friction & Mistrust (Hypothesis):** Accusations of theft and interpersonal conflict directed against village BCs due to missing currency.
2. **Harmful Panic Retries (Hypothesis):** Rapid consecutive biometric attempts that trigger fraud security locks or catastrophic duplicate debits.
3. **Avoidable Branch Travel (Hypothesis):** Incurring estimated travel costs (₹150–₹300) and lost daily wages traveling 15–25 km to distant bank branches during the routine T+1 to T+5 auto-reversal window.
4. **Fraud Golden-Hour Loss:** In genuine cases of unauthorized biometric spoofing, rural victims wait days for bank branches to open rather than calling National Cybercrime Helpline 1930 within the critical golden hour.

---

### 2. Evidence of the Problem & Regulatory Foundations
- **Automated Dispute Architecture Exists (NPCI UDIR Circular 84, July 2023):** NPCI operates an interbank dispute engine (Unified Dispute and Issue Resolution) supporting "Cash Withdrawal — Cash not received" with automated status checks (\`ReqChkTxn\`), reversals, credit adjustments, and chargebacks directly between issuer and acquirer switches.
- **Statutory Turnaround Time & Suo-Motu Penalty (RBI/2019-20/67, Sept 2019):** Under Annexure Sl. No. 1 (ATMs/Micro-ATMs cash not dispensed) and Sl. No. 5 (AePS merchant acquirer), RBI mandates that auto-reversal/credit adjustment must complete within **T + 5 calendar days**. Failure to reverse within T+5 requires the bank to credit ₹100 per day of delay compensation suo-motu to the debited customer. (Does not apply to declines without debit).
- **Usability Vacuum in Grievance Interfaces (Dvara Research, March 2023):** Dvara Research's empirical study (*"Do UPI In-App Grievance Redress Mechanisms Work for Constrained Users?"*) revealed that existing grievance portals fail low-literacy users due to buried menus, English-heavy terminology, rigid categorizations, and opaque tracking.
- **Fraud Reporting Infrastructure (MHA I4C / Helpline 1930):** The Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS) coordinates bank nodal desks to place administrative debit liens on recipient accounts during the golden hour to prevent siphoning. (Crucial legal note: Calling 1930 triggers an administrative lien, but does not guarantee recovery; restitution depends on judicial or law enforcement verification protocols, such as under Section 503 BNSS / Section 457 CrPC).

---

### 3. Existing Ecosystem Audit & Identified Redundancies
A critical finding of our desk research is that **building another backend dispute resolution engine or a generic web complaint form is completely redundant and indefensible**:
1. **NPCI AePS UDIR:** Settles interbank ledgers and executes chargebacks between banks. It has **no consumer-facing interface** and is closed to third parties.
2. **Commercial Bank CMS (SBI, PNB, BoB):** Closed core banking systems requiring customer account numbers, OTPs, or branch counter queues.
3. **National Cybercrime Portal / 1930:** Restricted to criminal cyber fraud; inappropriate for routine network timeout reversals.
4. **Dvara UPI GRM Toolkit & PARSE:** Excellent prior art for smartphone UPI UX and public social-media NLP monitoring; but completely leaves out rural BC micro-ATMs, worn fingerprint authentication errors, and offline village kiosks.

---

### 4. The Demonstrated Gap: The "Pre-Grievance Navigation Vacuum"
While backend settlement (UDIR) and second-tier regulatory escalation (RBI Ombudsman after bank rejection or 30 days) exist, **there is a total void at the moment of crisis at the BC kiosk**. Customers lack an immediate, trusted, vernacular decision layer to answer three vital questions:
- *Is my money stolen, or is it in an automated bank reversal cycle?*
- *Do I have a verifiable proof of this failure to protect me if money doesn't return?*
- *What is my exact legal entitlement under RBI rules, and what should I do if T+5 expires?*

---

### 5. The SaathiFlow Solution Architecture
SaathiFlow is **NOT** a complaint settlement engine and **DOES NOT** touch core banking ledgers. Instead, it operates as a lightweight, client-side, Aadhaar-free **"Pre-Grievance & Recovery Navigator"**:
1. **Tri-Modal Vernacular Triage (Voice, Visual Icons, Spoken Dialect):** Guides low-literacy users in Hindi, Bhojpuri, Marathi, Tamil, Telugu, and English through an audio-visual decision tree to distinguish routine timeout from cyber fraud.
2. **Standardized Interbank Timeout Slip Generator:** Interprets public terminal receipt data (12-digit RRN, terminal ID, date, ISO error code) without collecting Aadhaar or PINs. Generates a neutral, tamper-evident digital slip that calms customer anxiety and protects the BC's reputation.
3. **Automated RBI Rights & Countdown Calculator:** Displays a visual Day-1 to Day-5 progress tracker. Clearly communicates the ₹100/day compensation entitlement.
4. **Day-6 Automated Branch Escalation Package:** If money is not credited by Day 6, generates a pre-formatted, vernacular grievance letter citing RBI Circular DPSS.CO.PD No.629/2019-20 ready to hand to the branch manager.
5. **Immediate Fraud Isolation & 1930 Protocol:** In genuine unauthorized debit scenarios, instantly switches to fraud protocol, triggers Helpline 1930 with a structured operator intake checklist, and guides the user through biometric locking via mAadhaar.
6. **Regulatory Escalation Pathway:** Informs users that if the bank rejects the claim wholly or partly, they can escalate immediately to the RBI Ombudsman under RB-IOS 2021 Clause 10(2)(a), or after 30 days if no reply is received.

---

### 6. Financial Safety, Privacy & Data Minimisation Compliance
SaathiFlow adheres strictly to the Digital Personal Data Protection (DPDP) Act 2023, Aadhaar Act regulations, and RBI guidelines:
- **Zero Sensitive Data:** We NEVER collect, store, or transmit 12-digit Aadhaar numbers, biometric minutiae, MPINs, card numbers, or OTPs.
- **Client-Side Processing:** Triage runs entirely in browser memory on the device (PWA); no transaction secrets leave the customer's phone or browser.
- **Quasi-Identifier Protection:** Transaction metadata (RRN, terminal ID, amount, timestamp) are recognized as pseudonymous quasi-identifiers and held only temporarily client-side without remote transmission.
- **Zero Misleading Claims:** We never claim to freeze accounts or file legal police complaints directly without official law-enforcement integrations.

---

### 7. Implementation Roadmap & Feasibility
- **Phase 1 (Months 1–3):** Complete exploratory field validation with 10 rural customers and 5 BCs across 2 districts (as detailed in FIELD_VALIDATION_PLAN.md); calibrate vernacular voice scripts and icon sets.
- **Phase 2 (Months 4–6):** Develop offline Progressive Web App (PWA) with client-side OCR for terminal slips; pilot across 50 BC kiosks in 2 rural districts.
- **Phase 3 (Months 7–12):** Partner with Lead District Banks and financial inclusion fintechs (e.g. PayNearby, CSC, Dvara) to standardize digital verification slip acceptance.

---

### 8. Evaluation Plan & Success Metrics
1. **Correct Next-Step Selection Rate:** Target ≥ 85% correct channel choice (vs < 40% standard).
2. **Time to Identify Correct Action:** Target ≤ 90 seconds (vs > 300 seconds searching menus).
3. **Reduction in Unnecessary Branch Travel:** Target ≥ 70% reduction in premature branch trips during T+1 to T+5.
4. **Premature Biometric Retry Suppression:** Target ≥ 80% refusal of immediate multi-retries, preventing double-debits.
5. **Fraud Golden-Hour Compliance:** Target 100% immediate escalation to 1930 without credential sharing.

---

### 9. Limitations & Unresolved Questions
- **National Failure Rate Opacity:** National AePS failure volumes remain undisclosed by NPCI; empirical justification currently relies on local sample observations and RBI Ombudsman escalation counts.
- **Bank Compensation Non-Adherence:** If issuing banks routinely fail to credit ₹100/day penalties even after formal escalation, user disillusionment could harm trust in digital advice.
- **Frontline BC Adoption:** BCs must view the slip generator as an asset that protects their local standing rather than an added administrative burden.

---

### 10. Primary References & Legal Sources
1. **NPCI (21 July 2023):** *Circular NPCI/2023-24/AEPS/084: UDIR - Enhancing complaint handling and resolution process for AePS transactions.* [Direct Circular Link](https://www.npci.org.in/PDF/AePS/circular/2023-24/21-July-2023-NPCI-2023-24-AEPS-084-Circular-84-UDIR-Enhancing-complaint-handling-and-resolution-process-for-AePS-transactions.pdf)
2. **Reserve Bank of India (20 Sept 2019):** *Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions (RBI/2019-20/67 DPSS.CO.PD No.629/02.01.014/2019-20).* [RBI Notification](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693&Mode=0)
3. **Dvara Research (31 March 2023):** *Do UPI In-App Grievance Redress Mechanisms Work for Constrained Users?* Narayan, A. & Prasad, S. [Dvara Research Report](https://dvararesearch.com/do-upi-in-app-grievance-redress-mechanisms-work-for-constrained-users/)
4. **NPCI (2025):** *AePS Monthly Product Statistics FY 2024–25.* [NPCI AePS Statistics](https://www.npci.org.in/what-we-do/aeps/product-statistics/2024-25)
5. **Ministry of Home Affairs / I4C (2024):** *National Cyber Crime Reporting Portal & Helpline 1930 SOP.* [Cybercrime Portal](https://cybercrime.gov.in/)
6. **Reserve Bank of India (2025):** *Reserve Bank of India Annual Report 2024–25 & Ombudsman Review.* [RBI Publication](https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436)
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(proposalMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadMarkdownFile = () => {
    const element = document.createElement('a');
    const file = new Blob([proposalMarkdown], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `SaathiFlow_IIT_Bombay_Concept_Proposal_${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              Round 1 Proposal
            </span>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              H. Concept Proposal Export (IIT Bombay Techfest)
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Complete, evidence-backed proposal text matching the "India @ 71/100 Challenge" Theme 3 requirements. Ready for submission.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
          </button>

          <button
            onClick={downloadMarkdownFile}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .MD</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* Rendered Document Preview */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-slate-800 leading-relaxed font-sans max-w-4xl mx-auto print:border-none print:shadow-none print:p-0">
        {/* Title Header */}
        <div className="border-b border-slate-200 pb-6 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
            <span>Techfest IIT Bombay • India @ 71/100 Challenge • Theme 3: Financial Inclusion</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            SaathiFlow: Multilingual Decision & Recovery Assistant for AePS Disputes
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            An Aadhaar-Free Pre-Grievance Navigation Layer for Low-Literacy Customers & Business Correspondents
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
            1. Problem Statement & Target Demographics
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            India’s Aadhaar Enabled Payment System (AePS) is a cornerstone of last-mile financial inclusion, processing between <strong>80 million and 110 million approved cash withdrawals monthly</strong> (~2.8 billion annual total across all AePS transaction types) across 53.5+ crore Jan Dhan (PMJDY) accounts (NPCI FY 2024–25; PMJDY 2024). However, when a cash-out transaction fails at a village Business Correspondent (BC / Bank Mitra) kiosk—specifically where a customer’s account is debited but cash is not dispensed—marginalized rural customers face acute crisis.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-900">Frontline Mistrust & Conflict</span>
              <p className="text-slate-600">Lack of an instant verifiable proof triggers physical confrontations and accusations that the BC stole the money.</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-900">Catastrophic Multi-Debits</span>
              <p className="text-slate-600">Panic-induced rapid fingerprint retries trigger switch blocks or cause multiple debits from impoverished balances.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
            2. Evidence of the Problem & Regulatory Foundations
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <p>
              • <strong>Automated Dispute Settlement Exists (NPCI UDIR Circular 84, July 2023):</strong> NPCI already operates the backend Unified Dispute and Issue Resolution (UDIR) framework automating reversals, credit adjustments, and chargebacks between banks.
            </p>
            <p>
              • <strong>Statutory T+5 Auto-Reversal & ₹100/Day Penalty (RBI/2019-20/67):</strong> RBI legally protects customers with a mandated T+5 calendar day auto-reversal deadline and ₹100 per day delay compensation payable suo-motu.
            </p>
            <p>
              • <strong>Grievance Usability Vacuum (Dvara Research, March 2023):</strong> Dvara Research established that digital grievance channels fail constrained users due to buried menus, English-heavy terminology, and rigid categorization.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
            3. The Demonstrated Gap: The Pre-Grievance Navigation Vacuum
          </h2>
          <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 leading-relaxed">
            Existing infrastructure provides backend settlement (NPCI UDIR) and formal regulatory escalation (RBI Ombudsman after 30 days). However, <strong>there is an absolute void at the point of failure at the village kiosk</strong>.
            SaathiFlow bridges this gap not by duplicating the dispute switch, but by acting as a <strong>Pre-Grievance Decision Co-Pilot</strong> that classifies the incident, issues a neutral audit slip, explains legal T+5 rights in local dialects, and suppresses harmful retries.
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
            4. Solution Architecture & Zero-PII Guardrails
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm space-y-1">
              <strong className="text-slate-900">1. Vernacular Triage</strong>
              <p className="text-slate-600">Voice-guided decision trees in 6 languages distinguishing timeout from fraud.</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm space-y-1">
              <strong className="text-slate-900">2. Timeout Slip Generator</strong>
              <p className="text-slate-600">Extracts 12-digit RRN & error code to produce an instant neutral audit slip.</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm space-y-1">
              <strong className="text-slate-900">3. Rights & 1930 Gateway</strong>
              <p className="text-slate-600">T+5 countdown calculator for reversals; one-tap 1930 dialer for cyber fraud.</p>
            </div>
          </div>
          <div className="p-3 bg-slate-900 text-white rounded-xl text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Aadhaar-Free & Privacy-Preserving Architecture:</span>
            </div>
            <p className="text-slate-300 text-[11px]">
              SaathiFlow operates strictly on client-side pseudonymous metadata (RRN, terminal ID, timestamp, error code). We NEVER collect or store 12-digit Aadhaar numbers, biometric fingerprints, PINs, or full account numbers, ensuring strict compliance with UIDAI regulations and India’s DPDP Act 2023.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
            5. Primary Annotated References
          </h2>
          <ol className="space-y-2 text-xs text-slate-600 list-decimal list-inside">
            <li>
              <strong className="text-slate-900">NPCI (21 July 2023):</strong> Circular NPCI/2023-24/AEPS/084: UDIR Complaint Handling for AePS.
            </li>
            <li>
              <strong className="text-slate-900">RBI (20 Sept 2019):</strong> Notification RBI/2019-20/67 DPSS.CO.PD No.629/2019-20: Harmonisation of TAT & ₹100/day Compensation.
            </li>
            <li>
              <strong className="text-slate-900">Dvara Research (31 March 2023):</strong> Do UPI In-App Grievance Redress Mechanisms Work for Constrained Users? (Narayan & Prasad).
            </li>
            <li>
              <strong className="text-slate-900">MHA I4C (2024):</strong> National Cyber Crime Reporting Portal & Helpline 1930 SOP.
            </li>
            <li>
              <strong className="text-slate-900">RBI (May 2025):</strong> Annual Report 2024–25 & Ombudsman Performance Review.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};
