import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  FileText,
  HelpCircle,
  PhoneCall,
  Smartphone
} from 'lucide-react';

interface HowItWorksProps {
  onStartChecker: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartChecker }) => {
  return (
    <div className="space-y-10 py-4 sm:py-8">
      {/* Header Banner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Understanding Cash Withdrawal Errors</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How Cash Machine & Kiosk Transactions Work
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            When you withdraw cash at a Customer Service Point (CSP), Bank Mitra kiosk, or micro-ATM using your fingerprint, 
            multiple systems connect across the country within seconds. Here is what happens behind the scenes, why transactions fail, and how your money is recovered.
          </p>
        </div>
      </section>

      {/* 4-Step Diagram */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900">The 4 Steps of an AePS Cash Withdrawal</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">You Provide Biometrics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You give your Aadhaar number or bank selection and place your finger on the biometric scanner at the local kiosk.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">NPCI & UIDAI Verify</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The terminal connects to NPCI (National Payments Corporation of India) and UIDAI to match your biometric template.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Your Bank Debits Account</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your bank receives the approval and debits the amount from your savings account, sending an approval code back.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Agent Hands You Cash</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The kiosk screen confirms the success, prints or displays the RRN (12-digit number), and the agent hands you cash.
            </p>
          </div>
        </div>
      </section>

      {/* Why Money Gets Stuck */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900">Why Does Money Get Stuck When Cash Is Not Dispensed?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-amber-200 bg-amber-50/50 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm">
              <Clock className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Network Timeout (De-synchronisation)</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Your bank debited your account in Step 3, but the rural mobile data connection dropped before Step 4 reached the agent’s machine. The agent’s screen says "Transaction Pending" or "Failed", but your bank already registered the debit.
            </p>
            <div className="pt-2 text-xs font-medium text-amber-950 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Protected by RBI auto-reversal rules (T+5 calendar days).</span>
            </div>
          </div>

          <div className="border border-blue-200 bg-blue-50/50 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-semibold text-sm">
              <RotateCcw className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Interbank Settlement & Reconciliation</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Every night, NPCI and banks run automated reconciliation files (including the AePS UDIR system). When your bank sees that the agent’s acquiring bank never settled the cash, the system marks it as unfulfilled and sends the money back.
            </p>
            <div className="pt-2 text-xs font-medium text-blue-950 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Automated reversal happens directly back to your original bank account.</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950 space-y-1">
            <span className="font-bold">Crucial Caution: Do NOT scan your fingerprint again right away</span>
            <p className="leading-relaxed">
              If an agent tells you "It failed, let’s try one more time immediately", ask to check your balance first via missed-call or SMS. Scanning your finger again before verifying can cause a second debit from your account.
            </p>
          </div>
        </div>
      </section>

      {/* Official Protection Timelines & Rules */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900">Your Official Rights & Timelines</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-semibold text-slate-900 text-sm">T + 5 Calendar Days Auto-Reversal</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under RBI Circular RBI/2019-20/67 (Annexure Sl. No. 1 & 5), your bank must auto-credit the failed debit within 5 calendar days after the transaction date (T).
              </p>
            </div>
            <span className="shrink-0 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200">
              RBI Mandate
            </span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-semibold text-slate-900 text-sm">₹100 Per Day Delay Compensation</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the bank fails to credit your account within T+5 calendar days, they are mandated to pay ₹100 per day of delay directly into your account without requiring a separate claim.
              </p>
            </div>
            <span className="shrink-0 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200">
              ₹100 / Day
            </span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-semibold text-slate-900 text-sm">RBI Integrated Ombudsman Scheme, 2021</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your bank officially rejects your dispute or fails to resolve it after 30 days, you can escalate free of cost to the RBI Ombudsman under Clause 10(2)(a)(i) at cms.rbi.org.in or dial 14448.
              </p>
            </div>
            <span className="shrink-0 text-xs font-bold text-blue-800 bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200">
              Clause 10(2)(a)(i)
            </span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-semibold text-slate-900 text-sm">Suspected Fraud: Golden Hour Protocol (1930)</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For unauthorized withdrawals, calling the National Cyber Crime Helpline 1930 immediately triggers administrative debit freezes across beneficiary bank accounts via the Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS).
              </p>
            </div>
            <span className="shrink-0 text-xs font-bold text-red-800 bg-red-100 px-3 py-1.5 rounded-lg border border-red-200">
              Dial 1930
            </span>
          </div>
        </div>
      </section>

      {/* What SaathiFlow Does vs Does Not Do */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900">What SaathiFlow Does & Does Not Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>What SaathiFlow Does:</span>
            </div>
            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 leading-relaxed">
              <li>Provides clear, safe next steps tailored to your exact failure scenario.</li>
              <li>Explains official RBI timelines (T+5 days) and compensation rights so you are informed.</li>
              <li>Formats a standardised transaction reference slip that you can print, save, or show to your bank manager.</li>
              <li>Operates 100% privately in your browser without collecting your Aadhaar, biometrics, or PIN.</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-200 space-y-3">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-rose-700" />
              <span>What SaathiFlow Does NOT Do:</span>
            </div>
            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 leading-relaxed">
              <li>Does NOT hold, access, or touch your bank accounts or funds.</li>
              <li>Does NOT replace your bank’s official dispute logging or NPCI’s backend settlement.</li>
              <li>Does NOT guarantee instant fund recovery or override statutory bank verification processes.</li>
              <li>Does NOT ask for or store passwords, OTPs, or sensitive identity tokens.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-bold">Have an issue with a recent withdrawal?</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Check your situation in under 2 minutes and get a clear, safe action plan.
          </p>
        </div>
        <button
          onClick={onStartChecker}
          className="shrink-0 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2 min-h-[48px]"
        >
          <span>Check a Transaction</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
