import React from 'react';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Server,
  FileText,
  AlertTriangle,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export const PrivacyNotice: React.FC = () => {
  return (
    <div className="space-y-10 py-4 sm:py-8 max-w-4xl mx-auto">
      {/* Header */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Privacy & Data Protection Protocol</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          How SaathiFlow Protects Your Privacy
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          SaathiFlow is engineered around strict data minimisation. We believe that resolving a payment issue or understanding financial regulations should never require handing over sensitive personal data or identity credentials.
        </p>
      </section>

      {/* 4 Pillars of Data Protection */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Lock className="w-5 h-5 text-emerald-700" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Zero Aadhaar or Biometric Collection</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            In full compliance with Section 29 of the Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016 and the DPDP Act 2023, SaathiFlow never asks for, captures, or processes your 12-digit Aadhaar number, fingerprints, iris scans, bank PINs, or OTPs.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
            <Server className="w-5 h-5 text-blue-700" />
          </div>
          <h2 className="text-base font-bold text-slate-900">100% In-Browser (Client-Side) Processing</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            All decision logic and dispute reference slip generation executes directly within your device’s local browser memory. No incident details, amounts, bank names, or transaction reference numbers (RRN) are ever sent over a network to an external server.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
            <EyeOff className="w-5 h-5 text-amber-700" />
          </div>
          <h2 className="text-base font-bold text-slate-900">No Tracking or Third-Party Analytics</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            SaathiFlow contains no advertising cookies, tracking pixels, or third-party behavioral analytics. Your interaction with the incident resolver leaves no digital fingerprint on external platforms.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center">
            <FileText className="w-5 h-5 text-purple-700" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Optional Slip Details for Personal Use Only</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            If you optionally type in an RRN (Retrieval Reference Number) or bank name to generate an incident reference slip, that text remains purely on your screen for printing or copying. It disappears completely when you close or refresh the tab.
          </p>
        </div>
      </section>

      {/* Distinction on Quasi-Identifiers */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900">Understanding "Data Minimised Transaction Metadata"</h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          While numbers like a 12-digit RRN, terminal ID, date, and amount do not contain your name or Aadhaar number, they are considered <span className="font-semibold text-slate-900">quasi-identifiers</span> because an issuing bank can link them to an account during a formal dispute.
        </p>
        <p className="text-xs text-slate-600 leading-relaxed">
          Because SaathiFlow does not transmit or persist these numbers, you retain full sovereign control over your information. You only hand the slip to your bank branch or official customer service representative.
        </p>
      </section>

      {/* Safety Best Practices for Kiosk Transactions */}
      <section className="bg-amber-50 rounded-2xl border border-amber-200 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
          <span>General Security Tips for Kiosk Users</span>
        </div>
        <ul className="text-xs text-slate-700 space-y-2.5 list-disc pl-5 leading-relaxed">
          <li>
            <strong className="text-slate-900">Never sign blank transaction slips or registers:</strong> Always confirm the withdrawal amount matches what the kiosk operator gives you in cash before signing.
          </li>
          <li>
            <strong className="text-slate-900">Always demand your printed or SMS slip:</strong> Make sure the 12-digit RRN is clearly visible on your phone SMS or receipt before leaving the CSP counter.
          </li>
          <li>
            <strong className="text-slate-900">Lock your biometrics when not in use:</strong> Use the official UIDAI mAadhaar app or resident portal to lock biometric authentication. Unlock it only when you are physically standing at the kiosk to withdraw money.
          </li>
          <li>
            <strong className="text-slate-900">Never share OTPs:</strong> No bank employee, police officer, or helpline agent will ever ask you for an OTP, password, or UPI PIN.
          </li>
        </ul>
      </section>
    </div>
  );
};
