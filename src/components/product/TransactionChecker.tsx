import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  Clock,
  AlertCircle,
  Smartphone,
  FileText,
  Printer,
  CheckCircle2,
  PhoneCall,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';

export type IncidentCategory =
  | 'cashNotDispensed'
  | 'pendingTimeout'
  | 'unrecognisedDebit'
  | 'biometricFailure'
  | 'alreadyReported';

interface TransactionCheckerProps {
  initialCategory?: IncidentCategory;
  onBackToHome: () => void;
}

export const TransactionChecker: React.FC<TransactionCheckerProps> = ({
  initialCategory,
  onBackToHome
}) => {
  // Step 1: Category selection
  const [category, setCategory] = useState<IncidentCategory | null>(initialCategory || null);

  // Step 2: Context questions
  const [smsReceived, setSmsReceived] = useState<'yes' | 'no' | 'unsure' | null>(null);
  const [timeElapsed, setTimeElapsed] = useState<'justNow' | 'today' | 'within5days' | 'moreThan5days' | null>(null);
  const [isBankComplaintLogged, setIsBankComplaintLogged] = useState<'yes' | 'no' | null>(null);
  const [bankRejected, setBankRejected] = useState<'yes' | 'no' | null>(null);

  // Optional slip metadata (non-sensitive quasi-identifiers)
  const [bankName, setBankName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [rrn, setRrn] = useState<string>('');
  const [terminalId, setTerminalId] = useState<string>('');
  const [showSlipDetailsForm, setShowSlipDetailsForm] = useState(false);
  const [copiedSlip, setCopiedSlip] = useState(false);

  // Restart flow
  const handleRestart = () => {
    setCategory(null);
    setSmsReceived(null);
    setTimeElapsed(null);
    setIsBankComplaintLogged(null);
    setBankRejected(null);
    setAmount('');
    setRrn('');
    setTerminalId('');
    setShowSlipDetailsForm(false);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `SaathiFlow Incident Summary
Date: ${new Date().toLocaleDateString('en-IN')}
Incident Type: ${
      category === 'cashNotDispensed'
        ? 'Cash Not Dispensed, Account Debited'
        : category === 'pendingTimeout'
        ? 'Transaction Pending / Timeout'
        : category === 'unrecognisedDebit'
        ? 'Unrecognised Debit / Suspected Cyber Fraud'
        : category === 'biometricFailure'
        ? 'Biometric Authentication Failure (ISO 55)'
        : 'Delayed Reversal Escalation'
    }
Bank: ${bankName || 'Not specified'}
Amount: ${amount ? `₹${amount}` : 'Not specified'}
RRN: ${rrn || 'Not provided'}
Next Step: ${
      category === 'cashNotDispensed'
        ? 'Wait T+5 calendar days for auto-reversal under RBI Circular RBI/2019-20/67 Annexure Sl. No. 1. If uncredited by Day 6, lodge formal bank representation demanding ₹100/day delay compensation.'
        : category === 'pendingTimeout'
        ? 'Enforce 15-minute balance verification pause. Check balance via missed-call banking before attempting any fresh withdrawal.'
        : category === 'unrecognisedDebit'
        ? 'Immediately call National Cybercrime Helpline 1930 within the golden hour to place CFCFRMS administrative lien on beneficiary account, and lock biometrics via mAadhaar.'
        : category === 'biometricFailure'
        ? 'Halt repeated fingerprint retries to avoid security lockout. Try Micro-ATM Debit Card + PIN or visit nearest Aadhaar Seva Kendra for biometric update.'
        : 'Submit formal written representation to Branch Manager citing RBI TAT Circular. If rejected, escalate immediately to RBI Ombudsman under RB-IOS 2021 Clause 10(2)(a)(i).'
    }`;

    navigator.clipboard.writeText(text);
    setCopiedSlip(true);
    setTimeout(() => setCopiedSlip(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-10 space-y-8">
      {/* Top Breadcrumb & Step Navigation */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <button
          onClick={category ? () => setCategory(null) : onBackToHome}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 min-h-[44px] px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{category ? 'Change Incident Type' : 'Back to Home'}</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className={`px-2 py-0.5 rounded-full ${!category ? 'bg-emerald-100 text-emerald-800 font-bold' : 'text-slate-500'}`}>
            1. Select Issue
          </span>
          <span>→</span>
          <span className={`px-2 py-0.5 rounded-full ${category && (smsReceived === null && timeElapsed === null) ? 'bg-emerald-100 text-emerald-800 font-bold' : 'text-slate-500'}`}>
            2. Details
          </span>
          <span>→</span>
          <span className={`px-2 py-0.5 rounded-full ${category && (smsReceived !== null || timeElapsed !== null || category === 'biometricFailure') ? 'bg-emerald-100 text-emerald-800 font-bold' : 'text-slate-500'}`}>
            3. Action Plan
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          STAGE 1: INCIDENT SELECTION
      ───────────────────────────────────────────────────────────── */}
      {!category && (
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Select your transaction problem
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Pick the option that best describes what occurred at the kiosk or on your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5" role="radiogroup" aria-label="Transaction Incident Types">
            {/* Option 1 */}
            <button
              onClick={() => setCategory('cashNotDispensed')}
              className="text-left p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/30 transition-all flex items-start gap-4 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              role="radio"
              aria-checked="false"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="font-bold text-sm sm:text-base text-slate-900">
                  Cash was not received, but my account was debited
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  The micro-ATM or kiosk failed to give cash, but your bank sent an SMS showing funds were deducted.
                </p>
              </div>
            </button>

            {/* Option 2 */}
            <button
              onClick={() => setCategory('pendingTimeout')}
              className="text-left p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/30 transition-all flex items-start gap-4 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              role="radio"
              aria-checked="false"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="font-bold text-sm sm:text-base text-slate-900">
                  My transaction is pending or timed out (debit status unknown)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  The screen showed "Network Timeout" or "Transaction Pending". You do not know if money was deducted.
                </p>
              </div>
            </button>

            {/* Option 3 */}
            <button
              onClick={() => setCategory('unrecognisedDebit')}
              className="text-left p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:border-rose-500 hover:bg-rose-50/30 transition-all flex items-start gap-4 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-sm"
              role="radio"
              aria-checked="false"
            >
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="font-bold text-sm sm:text-base text-slate-900">
                  I see a debit I do not recognise (suspected unauthorized payment)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  You received an SMS for a withdrawal you never made, or suspect someone cloned your fingerprint.
                </p>
              </div>
            </button>

            {/* Option 4 */}
            <button
              onClick={() => setCategory('biometricFailure')}
              className="text-left p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/30 transition-all flex items-start gap-4 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              role="radio"
              aria-checked="false"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="font-bold text-sm sm:text-base text-slate-900">
                  My biometric authentication failed (fingerprint scanner error)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  The scanner repeatedly flashes red, displays "ISO 55: Mismatch", or rejects worn friction ridges.
                </p>
              </div>
            </button>

            {/* Option 5 */}
            <button
              onClick={() => setCategory('alreadyReported')}
              className="text-left p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/30 transition-all flex items-start gap-4 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              role="radio"
              aria-checked="false"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="font-bold text-sm sm:text-base text-slate-900">
                  I already reported the problem, but money was not reversed
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  More than 5 calendar days have passed, or your bank branch rejected your claim.
                </p>
              </div>
            </button>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          STAGE 2: MINIMAL ESSENTIAL CONTEXT QUESTIONS
      ───────────────────────────────────────────────────────────── */}
      {category && (
        <div className="space-y-8">
          {/* Active Context Banner */}
          <div className="bg-slate-100/80 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Selected Issue:
              </span>
              <strong className="text-xs sm:text-sm text-slate-900 font-bold">
                {category === 'cashNotDispensed' && 'Cash not received, account debited'}
                {category === 'pendingTimeout' && 'Pending or timed out (debit status unknown)'}
                {category === 'unrecognisedDebit' && 'Unrecognised debit / suspected fraud'}
                {category === 'biometricFailure' && 'Biometric authentication failed (scanner error)'}
                {category === 'alreadyReported' && 'Previously reported or overdue beyond 5 days'}
              </strong>
            </div>

            <button
              onClick={handleRestart}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] px-2 flex items-center"
            >
              Start Over
            </button>
          </div>

          {/* Context Question A: Timing / SMS status */}
          {category === 'cashNotDispensed' && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-bold text-base text-slate-900">
                When did this cash withdrawal failure occur?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setTimeElapsed('today')}
                  className={`p-4 rounded-xl border text-left transition-all min-h-[52px] ${
                    timeElapsed === 'today'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <strong className="block text-sm">Today (Day 1)</strong>
                  <span className="text-xs text-slate-500">Occurred in the last 24 hours</span>
                </button>

                <button
                  onClick={() => setTimeElapsed('within5days')}
                  className={`p-4 rounded-xl border text-left transition-all min-h-[52px] ${
                    timeElapsed === 'within5days'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <strong className="block text-sm">2 to 5 Days Ago</strong>
                  <span className="text-xs text-slate-500">Within the statutory T+5 window</span>
                </button>

                <button
                  onClick={() => setTimeElapsed('moreThan5days')}
                  className={`p-4 rounded-xl border text-left transition-all min-h-[52px] ${
                    timeElapsed === 'moreThan5days'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <strong className="block text-sm">Over 5 Days Ago</strong>
                  <span className="text-xs text-slate-500">T+5 reversal window has passed</span>
                </button>
              </div>
            </div>
          )}

          {/* Context Question B: For Pending / Timeout */}
          {category === 'pendingTimeout' && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-bold text-base text-slate-900">
                Did you receive an SMS or alert from your bank?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSmsReceived('yes')}
                  className={`p-4 rounded-xl border text-left transition-all min-h-[52px] ${
                    smsReceived === 'yes'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <strong className="block text-sm">Yes, Debited</strong>
                  <span className="text-xs text-slate-500">SMS says money was deducted</span>
                </button>

                <button
                  onClick={() => setSmsReceived('no')}
                  className={`p-4 rounded-xl border text-left transition-all min-h-[52px] ${
                    smsReceived === 'no'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <strong className="block text-sm">No SMS Received</strong>
                  <span className="text-xs text-slate-500">Phone received no notification</span>
                </button>

                <button
                  onClick={() => setSmsReceived('unsure')}
                  className={`p-4 rounded-xl border text-left transition-all min-h-[52px] ${
                    smsReceived === 'unsure'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <strong className="block text-sm">I'm Not Sure</strong>
                  <span className="text-xs text-slate-500">Need to check current balance</span>
                </button>
              </div>
            </div>
          )}

          {/* Context Question C: For Already Reported / Overdue */}
          {category === 'alreadyReported' && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-bold text-base text-slate-900">
                Has your bank rejected your complaint or given you a formal response?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setBankRejected('yes')}
                  className={`p-4 rounded-xl border text-left transition-all min-h-[52px] ${
                    bankRejected === 'yes'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <strong className="block text-sm">Yes, Bank Rejected Claim</strong>
                  <span className="text-xs text-slate-500">Immediate right to escalate to RBI Ombudsman</span>
                </button>

                <button
                  onClick={() => setBankRejected('no')}
                  className={`p-4 rounded-xl border text-left transition-all min-h-[52px] ${
                    bankRejected === 'no'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <strong className="block text-sm">No Reply / Awaiting 30 Days</strong>
                  <span className="text-xs text-slate-500">Bank has not resolved or responded</span>
                </button>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STAGE 3: ACTION PLAN & RECOVERY GUIDANCE
          ───────────────────────────────────────────────────────────── */}
          <div className="space-y-6">
            {/* ACTION CARD 1: Cash Not Dispensed, Debited */}
            {category === 'cashNotDispensed' && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-6 p-6 sm:p-8">
                {/* Header status */}
                <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                      Official Recovery Pathway
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Auto-Reversal Window Active (T + 5 Calendar Days)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Under Reserve Bank of India rules, your money is held in the secure interbank settlement switch—the kiosk agent does NOT have your cash.
                    </p>
                  </div>
                </div>

                {/* Critical Action Steps */}
                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                    Recommended Safe Next Steps
                  </h4>

                  <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3 bg-rose-50/60 p-3.5 rounded-xl border border-rose-200/70 text-rose-950">
                      <span className="font-bold text-rose-700 bg-rose-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        1
                      </span>
                      <div>
                        <strong className="font-semibold block">DO NOT scan your fingerprint again right now.</strong>
                        <span className="text-xs text-rose-900">
                          Rescanning immediately is the leading cause of accidental double-debits. In-flight transactions can settle in the background.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        2
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">Get the 12-digit Reference Number (RRN) from the agent.</strong>
                        <span className="text-xs text-slate-600">
                          Ask the Business Correspondent for the thermal failure slip or note down the 12-digit RRN from your bank debit SMS. This is your proof.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        3
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">Wait for T + 5 calendar days before traveling to your branch.</strong>
                        <span className="text-xs text-slate-600">
                          Under <strong>RBI Circular RBI/2019-20/67 Annexure Sl. No. 1</strong>, the bank must auto-reverse failed micro-ATM withdrawals within 5 calendar days. Traveling prematurely costs bus fare and wages for no reason.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/70 text-emerald-950">
                      <span className="font-bold text-emerald-700 bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        4
                      </span>
                      <div>
                        <strong className="font-semibold block">Day 6 Protection: ₹100 per day delay compensation.</strong>
                        <span className="text-xs text-emerald-900">
                          If your money does not return by Day 6, the bank is legally required under RBI rules to pay you ₹100 for every day of delay. Use our slip below to lodge a formal written representation.
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            )}

            {/* ACTION CARD 2: Pending or Timed Out (Debit Status Unknown) */}
            {category === 'pendingTimeout' && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-6 p-6 sm:p-8">
                <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                      Precautionary Hold Protocol
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Enforce Balance Verification Pause Before Rescanning
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      When a terminal times out, the bank switch may process the debit with a few minutes delay. Do not treat this as a failed transaction without checking your balance first.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                    Mandatory Safe Steps
                  </h4>

                  <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 text-amber-950">
                      <span className="font-bold text-amber-700 bg-amber-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        1
                      </span>
                      <div>
                        <strong className="font-semibold block">STRICTLY PAUSE for 15 minutes.</strong>
                        <span className="text-xs text-amber-900">
                          Do not scan your thumb again right now. In-flight transactions often take 10 to 15 minutes to reconcile between the kiosk and your bank.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        2
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">Check your account balance via toll-free missed call.</strong>
                        <span className="text-xs text-slate-600">
                          Give a missed call from your registered mobile number to your bank's official balance inquiry number (e.g. SBI 9223766666, PNB 18001802223) or check your passbook.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        3
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">How to proceed based on your balance:</strong>
                        <span className="text-xs text-slate-600 block mt-1">
                          • <strong>If money was deducted:</strong> Follow the T+5 auto-reversal steps above.<br />
                          • <strong>If balance is unchanged after 15 minutes:</strong> The pending attempt has expired safely, and you can initiate a fresh withdrawal.
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            )}

            {/* ACTION CARD 3: Unrecognised Debit / Suspected Cyber Fraud */}
            {category === 'unrecognisedDebit' && (
              <div className="bg-white rounded-2xl border border-rose-200 shadow-sm overflow-hidden space-y-6 p-6 sm:p-8">
                <div className="flex items-start gap-4 border-b border-rose-100 pb-5">
                  <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
                      Emergency Fraud Protocol
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Report to Helpline 1930 within the "Golden Hour"
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      If you see an unfamiliar withdrawal that you did not make, do NOT wait 5 days. Report immediately to law enforcement to place an administrative lien on the beneficiary account.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                    Immediate Action Checklist
                  </h4>

                  <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3 bg-rose-50 p-3.5 rounded-xl border border-rose-200 text-rose-950">
                      <span className="font-bold text-rose-700 bg-rose-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        1
                      </span>
                      <div>
                        <strong className="font-semibold block text-rose-900 flex items-center gap-1.5">
                          <PhoneCall className="w-4 h-4 text-rose-600" />
                          Dial Cybercrime Helpline 1930 immediately.
                        </strong>
                        <span className="text-xs text-rose-800">
                          Operated by the Ministry of Home Affairs (I4C). Calling within the first 2 hours ("Golden Hour") allows authorities to trigger an administrative debit hold on the scammer's bank account before funds are withdrawn.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        2
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">Lock your Aadhaar biometrics via mAadhaar.</strong>
                        <span className="text-xs text-slate-600">
                          Open the official UIDAI mAadhaar app on your smartphone or visit resident.uidai.gov.in and click "Lock Biometrics". This instantly blocks any further unauthorized AePS withdrawals.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        3
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">File complaint on cybercrime.gov.in.</strong>
                        <span className="text-xs text-slate-600">
                          Submit an official report on the National Cyber Crime Reporting Portal to obtain your formal Cyber Crime Acknowledgment Number.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-amber-950">
                      <span className="font-bold text-amber-700 bg-amber-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        !
                      </span>
                      <div>
                        <strong className="font-semibold block text-amber-900">Important Legal Notice on Recovery:</strong>
                        <span className="text-xs text-amber-900">
                          Reporting to 1930 places an administrative debit hold to halt siphoning. However, an administrative hold does NOT automatically return funds. Lawful refund of seized funds is subject to judicial or law-enforcement verification protocols (typically an application under Section 503 BNSS / Section 457 CrPC).
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            )}

            {/* ACTION CARD 4: Biometric Authentication Failure */}
            {category === 'biometricFailure' && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-6 p-6 sm:p-8">
                <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">
                      Biometric Guidance
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Biometric Mismatch (No Financial Debit Occurred)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      When the terminal displays "ISO 55: Biometric Data Did Not Match", no money is deducted from your bank account. Your balance and pension are completely safe.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                    Recommended Alternatives
                  </h4>

                  <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        1
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">Halt repeated fingerprint pressing.</strong>
                        <span className="text-xs text-slate-600">
                          Continuous failed attempts can trigger a temporary security lockout on the kiosk terminal. Clean your finger and the scanner glass gently with a dry cloth.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        2
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">Use Micro-ATM Debit Card + PIN or Iris Authentication.</strong>
                        <span className="text-xs text-slate-600">
                          If you have a RuPay debit card, insert it into the micro-ATM card slot and enter your 4-digit PIN. If the kiosk has an STQC Iris scanner, request iris verification instead.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        3
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">Update biometrics at nearest Aadhaar Seva Kendra.</strong>
                        <span className="text-xs text-slate-600">
                          If your fingerprint friction ridges have worn down due to manual labor or age, visit an official Aadhaar center to perform a free biometric re-scan.
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            )}

            {/* ACTION CARD 5: Already Reported / Overdue Beyond T+5 Days */}
            {category === 'alreadyReported' && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-6 p-6 sm:p-8">
                <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                      Formal Escalation Channel
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Overdue Auto-Reversal: Demand Delay Compensation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      If 5 calendar days have passed and your bank has not refunded your money, or if the bank rejected your dispute, you have formal statutory rights under RBI regulations.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                    Your Statutory Escalation Rights
                  </h4>

                  <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3 bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 text-emerald-950">
                      <span className="font-bold text-emerald-700 bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        1
                      </span>
                      <div>
                        <strong className="font-semibold block">Demand ₹100 per day statutory delay compensation.</strong>
                        <span className="text-xs text-emerald-900">
                          Under <strong>RBI Circular RBI/2019-20/67</strong>, banks are mandated to pay ₹100 per day of delay beyond T+5 calendar days. Use our generated formal representation letter below.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        2
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">Escalate immediately if the bank rejected your claim.</strong>
                        <span className="text-xs text-slate-600">
                          Under <strong>Clause 10(2)(a)(i) of the Reserve Bank - Integrated Ombudsman Scheme 2021 (RB-IOS 2021)</strong>, you do NOT have to wait 30 days if the bank rejected your claim wholly or partly. You can escalate immediately on <strong>cms.rbi.org.in</strong>.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        3
                      </span>
                      <div>
                        <strong className="font-semibold block text-slate-900">Hand over physical signed letter at branch counter.</strong>
                        <span className="text-xs text-slate-600">
                          Take a printed copy of the representation slip below to your home branch. Always obtain a stamped receiving acknowledgment from the branch teller.
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                STANDARDIZED INCIDENT REFERENCE SLIP (PRINTABLE / SHAREABLE)
            ───────────────────────────────────────────────────────────── */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-700" />
                    <span>Standardised Incident Reference Slip</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Show this neutral slip to your Business Correspondent or bank branch manager.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopySummary}
                    className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 min-h-[44px]"
                  >
                    {copiedSlip ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSlip ? 'Copied' : 'Copy Text'}</span>
                  </button>

                  <button
                    onClick={handlePrintSlip}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 min-h-[44px] shadow-sm"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Slip</span>
                  </button>
                </div>
              </div>

              {/* Optional Input Drawer to Personalize Slip */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">
                    Add details from your slip or SMS (Optional)
                  </span>
                  <button
                    onClick={() => setShowSlipDetailsForm(!showSlipDetailsForm)}
                    className="text-emerald-700 hover:text-emerald-800 font-semibold"
                  >
                    {showSlipDetailsForm ? 'Hide Form' : 'Fill In Details'}
                  </button>
                </div>

                {showSlipDetailsForm && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">Bank Name</label>
                      <input
                        type="text"
                        placeholder="e.g. State Bank of India"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">Amount (₹)</label>
                      <input
                        type="text"
                        placeholder="e.g. 2500"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">12-Digit RRN (Ref No)</label>
                      <input
                        type="text"
                        maxLength={12}
                        placeholder="e.g. 423409182341"
                        value={rrn}
                        onChange={(e) => setRrn(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">Terminal ID</label>
                      <input
                        type="text"
                        placeholder="e.g. POS-BC-8921"
                        value={terminalId}
                        onChange={(e) => setTerminalId(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Printable Reference Card */}
              <div
                id="printable-slip"
                className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-5 sm:p-6 space-y-4 font-mono text-xs text-slate-800"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="font-bold text-sm tracking-tight text-slate-900 block font-sans">
                      SAATHIFLOW INTERBANK INCIDENT VERIFICATION
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Standardized Pre-Grievance Navigation Record
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-sans">
                    Date: {new Date().toLocaleDateString('en-IN')}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 font-sans text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Incident Nature</span>
                    <strong className="text-slate-900">
                      {category === 'cashNotDispensed' && 'Timeout / Cash Not Dispensed'}
                      {category === 'pendingTimeout' && 'Pending / Debit Status Unverified'}
                      {category === 'unrecognisedDebit' && 'Suspected Unauthorized Debit'}
                      {category === 'biometricFailure' && 'Biometric Authentication Error'}
                      {category === 'alreadyReported' && 'Overdue Reversal Dispute'}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Bank</span>
                    <strong className="text-slate-900">{bankName || 'Account Holder Bank'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Amount</span>
                    <strong className="text-slate-900">{amount ? `₹${amount}` : 'Amount on Slip'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">RRN (12-Digit)</span>
                    <strong className="text-slate-900 font-mono">{rrn || 'RRN from Receipt'}</strong>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1 font-sans text-xs">
                  <span className="font-bold text-slate-900 block text-[11px] uppercase">
                    Official Regulatory Rule:
                  </span>
                  <p className="text-slate-700 leading-relaxed text-[11px]">
                    {category === 'cashNotDispensed' &&
                      'Under RBI Circular RBI/2019-20/67 Annexure Sl. No. 1, failed Micro-ATM withdrawals where cash is not dispensed are subject to proactive auto-reversal within T+5 calendar days. Beyond T+5 calendar days, bank must credit ₹100/day compensation to the account holder.'}
                    {category === 'pendingTimeout' &&
                      'In-flight network drops may settle asynchronously within 15 minutes. Customer must pause and check account balance before attempting fresh biometric transactions.'}
                    {category === 'unrecognisedDebit' &&
                      'Immediate golden-hour reporting to National Cybercrime Helpline 1930 coordinates bank nodal officers to place an administrative debit lien on beneficiary accounts to halt fund siphoning.'}
                    {category === 'biometricFailure' &&
                      'Terminal biometric mismatch (ISO 55) does NOT debit customer balance. Customer may use alternative modalities (Micro-ATM RuPay Card+PIN or Iris).'}
                    {category === 'alreadyReported' &&
                      'Under RB-IOS 2021 Clause 10(2)(a)(i), if a bank rejects a complaint wholly or partly, the customer may escalate immediately to the Reserve Bank Ombudsman on cms.rbi.org.in.'}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400 font-sans gap-2">
                  <span>Note: SaathiFlow is an independent assistance co-pilot. Client-side processed metadata.</span>
                  <span>Helpline: 1930 • Portal: cms.rbi.org.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
