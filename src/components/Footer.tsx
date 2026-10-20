import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, ExternalLink, Info, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showSafetyModal, setShowSafetyModal] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-8 px-4 border-t border-slate-800 mt-16 print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-bold text-white tracking-wide">SaathiFlow Research Workspace</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              Techfest IIT Bombay 2026
            </span>
          </div>
          <p className="text-slate-400 text-xs max-w-xl">
            Concept Proposal & Empirical Validation Platform for Theme 3: Financial Inclusion & Meaningful Banking Access.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <button
            onClick={() => setShowSafetyModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors text-xs font-semibold"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Financial & Privacy Safety Protocol</span>
          </button>

          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Helpline 1930
          </a>
          <span className="text-slate-700">•</span>
          <a
            href="https://www.npci.org.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            NPCI Official
          </a>
          <span className="text-slate-700">•</span>
          <a
            href="https://www.rbi.org.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            RBI Guidelines
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <div>
          Ethical Research Protocol: Aadhaar-free architecture. No biometric data, PINs, OTPs, or authentication secrets collected or stored.
        </div>
        <div>
          Rigorous Research & Evidence Grounding • IIT Bombay Challenge
        </div>
      </div>

      {/* Safety Protocol Modal */}
      {showSafetyModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200 text-slate-800">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900 text-base">SaathiFlow Safety & Non-Interference Mandate</h3>
              </div>
              <button
                onClick={() => setShowSafetyModal(false)}
                className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-slate-700">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 space-y-1">
                <strong className="text-emerald-950 block">1. Aadhaar-Free & Data-Minimised Metadata Architecture</strong>
                <p className="text-emerald-900">
                  We never request or store 12-digit Aadhaar numbers, biometric fingerprints, PINs, OTPs, or full bank account numbers. Aadhaar-free, data-minimised transaction metadata (RRN, terminal ID, timestamp, error code) are processed client-side in browser memory as pseudonymous quasi-identifiers. Any demo references are strictly synthetic.
                </p>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 space-y-1">
                <strong className="text-blue-950 block">2. No Unauthorised Banking or API Claims</strong>
                <p className="text-blue-900">
                  SaathiFlow does not claim to execute real-time fund reversals, freeze accounts, or lodge formal police reports without authorized integrations. All financial settlements occur solely via official NPCI UDIR and bank channels.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 space-y-1">
                <strong className="text-amber-950 block">3. Strict Separation: Fraud vs Routine Timeout</strong>
                <p className="text-amber-900">
                  Suspected unauthorized fraud cases are immediately triaged to official government channels (Helpline 1930 / cybercrime.gov.in). Note: Calling 1930 triggers an administrative debit hold on recipient accounts to halt fund siphoning, but does not guarantee recovery; final fund restitution depends on judicial or law enforcement verification protocols (such as an application under Section 503 BNSS / Section 457 CrPC).
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowSafetyModal(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg"
              >
                Understood & Acknowledged
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
