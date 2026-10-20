import React from 'react';
import {
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
  FileText,
  AlertTriangle,
  RotateCcw,
  Smartphone,
  Lock
} from 'lucide-react';

interface ProductLandingProps {
  onStartChecker: (initialScenario?: string) => void;
  onNavigateHowItWorks: () => void;
  onNavigatePrivacy: () => void;
}

export const ProductLanding: React.FC<ProductLandingProps> = ({
  onStartChecker,
  onNavigateHowItWorks,
  onNavigatePrivacy
}) => {
  return (
    <div className="space-y-12 py-4 sm:py-8">
      {/* 1. Hero Section */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Assisted Transaction & Dispute Navigator</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Clear, calm guidance when cash machine withdrawals fail
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            If you tried to withdraw money at a village kiosk, customer service point, or micro-ATM and something went wrong, SaathiFlow helps you understand where your money is, what official rules protect you, and what safe steps to take next.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onStartChecker()}
              className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <span>Check a Transaction Issue</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateHowItWorks}
              className="bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-semibold px-5 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <span>How the Process Works</span>
            </button>
          </div>

          {/* Quick reassurance pills */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 border-t border-slate-100">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Plain-language guidance
            </span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
              No Aadhaar or PIN required
            </span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              RBI T+5 calendar day timelines
            </span>
          </div>
        </div>
      </section>

      {/* 2. Choose Your Situation (Accessible Quick Selector) */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              What happened during your transaction?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select the situation that matches your experience to receive specific, step-by-step guidance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Cash Not Dispensed, Debited */}
          <button
            onClick={() => onStartChecker('cashNotDispensed')}
            className="text-left bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[140px] flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                Cash not received, but account was debited
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The machine did not dispense cash, but your phone received an SMS saying your money was deducted.
              </p>
            </div>
            <div className="pt-3 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>View 5-day auto-reversal steps</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          {/* Card 2: Pending or Timed Out */}
          <button
            onClick={() => onStartChecker('pendingTimeout')}
            className="text-left bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[140px] flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                Transaction timed out or status is unclear
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The screen froze or showed an error. You don't know whether money was deducted from your account.
              </p>
            </div>
            <div className="pt-3 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Check balance before retrying</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          {/* Card 3: Unrecognised Debit / Suspected Fraud */}
          <button
            onClick={() => onStartChecker('unrecognisedDebit')}
            className="text-left bg-white p-5 rounded-xl border border-slate-200 hover:border-rose-500 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-rose-500 min-h-[140px] flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-800 transition-colors">
                I see a debit I do not recognise
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You received an SMS alert for an unfamiliar withdrawal, or suspect someone used your biometric credentials.
              </p>
            </div>
            <div className="pt-3 flex items-center text-xs font-semibold text-rose-700 group-hover:translate-x-1 transition-transform">
              <span>Immediate Helpline 1930 steps</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          {/* Card 4: Biometric Authentication Failure */}
          <button
            onClick={() => onStartChecker('biometricFailure')}
            className="text-left bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[140px] flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                Fingerprint failed to match or scanner error
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The scanner says "Biometric Data Did Not Match" (ISO 55) or repeatedly beeps red when scanning your finger.
              </p>
            </div>
            <div className="pt-3 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Explore alternative withdrawal methods</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          {/* Card 5: Already Reported / Overdue */}
          <button
            onClick={() => onStartChecker('alreadyReported')}
            className="text-left bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[140px] flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                I already waited or reported, but no refund
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                More than 5 calendar days have passed since the failure, or your bank branch rejected your claim.
              </p>
            </div>
            <div className="pt-3 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Generate formal representation & rights</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          {/* Card 6: General Overview */}
          <button
            onClick={onNavigateHowItWorks}
            className="text-left bg-slate-50 p-5 rounded-xl border border-dashed border-slate-300 hover:border-slate-400 hover:bg-slate-100 transition-all group focus:outline-none focus:ring-2 focus:ring-slate-400 min-h-[140px] flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                Not sure what happened?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn how interbank cash withdrawals work and what happens during a technical failure.
              </p>
            </div>
            <div className="pt-3 flex items-center text-xs font-semibold text-slate-700 group-hover:translate-x-1 transition-transform">
              <span>Read simple 3-step guide</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>
        </div>
      </section>

      {/* 3. Three Concise Steps Showing the User Journey */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            How SaathiFlow helps you recover
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Three simple steps to resolve payment anxiety without visiting a distant branch unnecessarily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="space-y-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center">
              1
            </div>
            <h3 className="font-bold text-sm text-slate-900">1. Tell us what happened</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Answer 2 simple questions about your transaction slip or phone message. No technical jargon, account numbers, or passwords needed.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center">
              2
            </div>
            <h3 className="font-bold text-sm text-slate-900">2. Get a safe action plan</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Find out whether you should wait for an automatic refund, pause before rescanning, or immediately report an unauthorized payment.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center">
              3
            </div>
            <h3 className="font-bold text-sm text-slate-900">3. Save your reference slip</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Generate a clear, neutral slip citing official Reserve Bank of India timelines that you can show your kiosk agent or bank manager.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Privacy & Transparent Implementation Reassurance */}
      <section className="bg-slate-100/70 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h2 className="font-bold text-slate-900 text-base">Your privacy is protected by design</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              SaathiFlow operates under strict data-minimisation principles in compliance with the Digital Personal Data Protection Act, 2023:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-700">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <strong className="text-slate-900 block font-semibold">Zero Sensitive Data</strong>
            <p className="text-slate-600">
              We never request or record 12-digit Aadhaar numbers, biometric fingerprints, ATM PINs, OTPs, or passwords.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <strong className="text-slate-900 block font-semibold">100% Client-Side</strong>
            <p className="text-slate-600">
              All triage logic runs entirely in your browser memory. No transaction details leave your phone or are sent to remote clouds.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <strong className="text-slate-900 block font-semibold">Independent Guidance</strong>
            <p className="text-slate-600">
              We do not track you, show advertisements, or sell data. We provide neutral guidance based on official regulations.
            </p>
          </div>
        </div>

        <div className="pt-1 flex items-center justify-between text-xs">
          <button
            onClick={onNavigatePrivacy}
            className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 focus:outline-none focus:underline"
          >
            <span>Read full Privacy Notice & Data Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 5. Clear Limitations Statement */}
      <section className="bg-amber-50/60 rounded-xl border border-amber-200/80 p-4 sm:p-5 text-xs text-amber-950 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1 leading-relaxed">
          <strong className="font-semibold block text-amber-900">What SaathiFlow cannot do:</strong>
          <p className="text-amber-900/90 font-normal">
            SaathiFlow is an independent decision assistant. It does not connect directly to banking switches, execute fund transfers, or guarantee monetary recovery. Official reversals and dispute settlements remain solely under the authority of your bank, NPCI UDIR, the Reserve Bank Ombudsman, and official cybercrime law enforcement.
          </p>
        </div>
      </section>
    </div>
  );
};
