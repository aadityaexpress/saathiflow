import React from 'react';
import { Target, AlertCircle, CheckCircle2, Search, ArrowRight, ShieldAlert, Cpu, HelpCircle, FileText, Compass, ExternalLink } from 'lucide-react';

interface ResearchOverviewProps {
  onNavigateTab: (tabId: string) => void;
}

export const ResearchOverview: React.FC<ResearchOverviewProps> = ({ onNavigateTab }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Executive Summary Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5" /> Concept Proposal Research Workspace
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-3xl">
            Testing the Unmet Need: Can a Multilingual Pre-Grievance Layer Solve the AePS Cash Recovery Deficit?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            SaathiFlow is an evidence-backed concept investigation for the <strong className="text-white">Techfest IIT Bombay "India @ 71/100 Challenge"</strong> (Theme 3: Financial Inclusion & Meaningful Banking Access).
            We are investigating two distinct crisis moments experienced by low-literacy rural banking customers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Incident Stream A
              </span>
              <h4 className="font-semibold text-white text-sm mb-1">Failed AePS Cash Withdrawal (Debited, Cash Not Received)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Interbank switches desync, terminal times out, but customer account shows debit. Customer panics, suspects Business Correspondent of theft, and attempts rapid repeated biometric scans that risk multiple debits or account blocks.
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                Incident Stream B
              </span>
              <h4 className="font-semibold text-white text-sm mb-1">Suspected Unauthorised Debit / Biometric Spoofing Fraud</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Customer receives unexpected SMS notification of debit (e.g., cloned silicone fingerprint). User waits for local branch to open instead of immediately calling National Cybercrime Helpline 1930, losing the critical "golden hour" for fund liens.
              </p>
            </div>
          </div>
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="font-semibold text-emerald-400">Core Premise:</span>
            <span>Our objective is <strong>NOT</strong> to build another generic complaint portal. NPCI AePS UDIR already handles interbank dispute settlement. We must prove whether front-end low-literacy triage genuinely prevents harm.</span>
          </div>
        </div>
      </div>

      {/* Current Research Status Banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-emerald-600 text-white rounded-lg mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-emerald-900">Current Phase Status: Desk Research & Hypothesis Mapping Completed</h3>
            <p className="text-xs text-emerald-800 mt-0.5">
              Source verification across NPCI circulars, RBI TAT regulations, Dvara Research papers, and cybercrime SOPs completed as of <strong>20 October 2026</strong>. Fieldwork protocols established; live bank-by-bank mystery shopping and BC field interviews pending.
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigateTab('proposal')}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-sm whitespace-nowrap transition-colors"
        >
          <span>View Proposal Export</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid: Key Findings vs Critical Unknowns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Established Findings */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Key Established Findings (Verified Sources)</h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              5 Primary Sources
            </span>
          </div>

          <ul className="space-y-3.5 text-xs text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 bg-emerald-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">1</span>
              <div>
                <strong className="text-slate-900">NPCI AePS UDIR already exists for interbank dispute settlement:</strong> Circular 84 (21 July 2023) lists "Cash Withdrawal — Cash not received" and automates reversals, credit adjustments, and chargebacks via <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-[10px]">ReqChkTxn</code> APIs. SaathiFlow must not replicate this backend.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 bg-emerald-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">2</span>
              <div>
                <strong className="text-slate-900">RBI mandates strict T+5 auto-reversal and ₹100/day compensation:</strong> Under RBI Circular DPSS.CO.PD No.629/2019-20, banks must automatically refund failed debits within T+5 calendar days without requiring customer complaint, paying ₹100/day penalty for delay.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 bg-emerald-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">3</span>
              <div>
                <strong className="text-slate-900">AePS operates at massive national scale:</strong> NPCI publishes monthly volume and value across AePS services on its official portal, serving over 53.5 crore Jan Dhan account holders. Disputed brief estimates (462M–618M and derived figures) are removed as unverified; national failure and dispute rates are not publicly reported.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 bg-emerald-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">4</span>
              <div>
                <strong className="text-slate-900">Digital grievance journeys fail constrained users:</strong> Dvara Research (2023) proved that in-app grievance portals feature buried menus, English-heavy terminology, and rigid categories that induce panic and cognitive drop-off among low-literacy users.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 bg-emerald-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">5</span>
              <div>
                <strong className="text-slate-900">Helpline 1930 / CFCFRMS is the sole authorized golden-hour fraud rail:</strong> The National Cybercrime Reporting Portal connects directly to bank nodal desks to place liens on stolen funds; routing routine network failures here misleads users and clogs emergency police lines.
              </div>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => onNavigateTab('evidence')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>Inspect complete Evidence Register</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Critical Unknowns & Data Gaps */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Critical Unknowns & Research Gaps</h3>
            </div>
            <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Needs Empirical Data
            </span>
          </div>

          <ul className="space-y-3.5 text-xs text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-amber-600 bg-amber-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">!</span>
              <div>
                <strong className="text-slate-900">National AePS failure and dispute rates are not publicly disclosed:</strong> NPCI reports approved transaction numbers only. We do not have an official national percentage for "cash not dispensed despite debit."
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-amber-600 bg-amber-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">!</span>
              <div>
                <strong className="text-slate-900">Empirical adherence to T+5 auto-reversals in rural branches:</strong> While RBI mandates T+5 auto-reversal, the proportion of rural Jan Dhan account holders who still have to travel to distant bank branches to recover funds is unmeasured.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-amber-600 bg-amber-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">!</span>
              <div>
                <strong className="text-slate-900">Transferability of Dvara’s UPI findings to BC AePS journeys:</strong> Dvara Research studied smartphone users navigating apps like PhonePe or Google Pay. The exact behavioral friction experienced by a rural customer at a BC micro-ATM requires independent validation.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-amber-600 bg-amber-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">!</span>
              <div>
                <strong className="text-slate-900">Suo-motu payout rate of ₹100/day compensation:</strong> Whether banks proactively deposit delay compensation into rural accounts without formal dispute escalation remains unverified in public datasets.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-amber-600 bg-amber-50 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[11px]">!</span>
              <div>
                <strong className="text-slate-900">BC willingness to adopt an independent triage slip:</strong> Whether Business Correspondents perceive SaathiFlow as a trust-building protection tool or as an administrative burden requires frontline BC interviews.
              </div>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => onNavigateTab('dataTracker')}
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
            >
              <span>Open Data Collection Tracker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Opportunity Assessment: The Defensible Niche */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Evidence-Backed Opportunity Assessment</h3>
            <p className="text-xs text-slate-500">Establishing the distinct value boundary: Where SaathiFlow starts and where existing rails take over.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-rose-900">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>What SaathiFlow is NOT</span>
            </div>
            <ul className="space-y-1.5 text-rose-800 text-[11px] list-disc list-inside">
              <li>NOT a replacement for NPCI AePS UDIR.</li>
              <li>NOT a proprietary payment dispute switch.</li>
              <li>NOT a live core banking API integration collecting customer PINs or Aadhaar biometrics.</li>
              <li>NOT an alternate cybercrime investigation portal claiming to freeze bank funds directly.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200/80 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-sky-900">
              <Cpu className="w-4 h-4 text-sky-600" />
              <span>Existing Rails (Leave to Them)</span>
            </div>
            <ul className="space-y-1.5 text-sky-800 text-[11px] list-disc list-inside">
              <li>Interbank settlement & chargeback execution (handled by NPCI UDIR between issuer and acquirer).</li>
              <li>Account balance debits & credit adjustments (handled by Core Banking Systems).</li>
              <li>Criminal fraud tracking & fund liens (handled by Helpline 1930 / CFCFRMS).</li>
              <li>Quasi-judicial dispute adjudication (handled by RBI Ombudsman).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-300 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-emerald-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>The Validated Defensible Niche</span>
            </div>
            <ul className="space-y-1.5 text-emerald-900 text-[11px] list-disc list-inside">
              <li><strong>Pre-Grievance Triage Co-Pilot:</strong> Classifies whether the incident is a routine T+5 timeout vs urgent fraud.</li>
              <li><strong>Zero-PII Digital Slip Generator:</strong> Produces a neutral, timestamped slip (RRN, terminal ID, error code) that de-escalates BC kiosk conflict.</li>
              <li><strong>Vernacular Rights Calculator:</strong> Explains T+5 auto-reversal deadline and ₹100/day penalty in local spoken dialect.</li>
              <li><strong>Prevents Fatal Multi-Retries:</strong> Warns users against immediate fingerprint rescan to eliminate double-debits.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Phase 2 Research Priorities Roadmap */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-4">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          Next Immediate Research Priorities for Round 1 Submission
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm space-y-1.5">
            <span className="font-mono text-[10px] text-slate-500 font-semibold block">PRIORITY 1</span>
            <h4 className="font-bold text-slate-900">BC Field Interviews (n=5)</h4>
            <p className="text-slate-600 text-[11px]">Interview 3–5 active Bank Mitras in rural Maharashtra/UP to measure weekly dispute frequency and thermal slip failure rates.</p>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm space-y-1.5">
            <span className="font-mono text-[10px] text-slate-500 font-semibold block">PRIORITY 2</span>
            <h4 className="font-bold text-slate-900">Customer Usability Task (n=8)</h4>
            <p className="text-slate-600 text-[11px]">Run standardized scenario comprehension tests comparing standard bank instructions against voice/icon-first SaathiFlow prototypes.</p>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm space-y-1.5">
            <span className="font-mono text-[10px] text-slate-500 font-semibold block">PRIORITY 3</span>
            <h4 className="font-bold text-slate-900">RTI / Bank Data Request</h4>
            <p className="text-slate-600 text-[11px]">Submit targeted RTI query for disaggregated AePS cash-not-dispensed failure rates and T+5 suo-motu compensation credit ratios.</p>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm space-y-1.5">
            <span className="font-mono text-[10px] text-slate-500 font-semibold block">PRIORITY 4</span>
            <h4 className="font-bold text-slate-900">Falsification Audit</h4>
            <p className="text-slate-600 text-[11px]">Verify whether any major public sector bank already offers a voice-guided vernacular micro-ATM dispute slip generator on WhatsApp or PWA.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
