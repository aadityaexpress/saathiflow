import React from 'react';
import { ShieldCheck, PhoneCall, ExternalLink, HelpCircle, FileText, ArrowUpRight } from 'lucide-react';

interface ProductFooterProps {
  onNavigate: (page: 'home' | 'checker' | 'howItWorks' | 'privacy') => void;
  onOpenResearch: () => void;
}

export const ProductFooter: React.FC<ProductFooterProps> = ({
  onNavigate,
  onOpenResearch
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16 border-t border-slate-800">
      {/* Official Emergency Helplines Band */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Official Government & Banking Helplines
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Cyber Crime Helpline</span>
                <span className="text-xs font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/50">24x7</span>
              </div>
              <div className="text-lg font-bold text-white flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-red-400" />
                <span>1930</span>
              </div>
              <div className="text-[11px] text-slate-400">
                National Cyber Crime Reporting Portal
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">RBI Ombudsman</span>
                <span className="text-xs font-bold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">Toll Free</span>
              </div>
              <div className="text-lg font-bold text-white flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>14448</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Reserve Bank of India CMS (cms.rbi.org.in)
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">UIDAI Helpline</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">Toll Free</span>
              </div>
              <div className="text-lg font-bold text-white flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>1947</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Biometric Lock & Aadhaar Services
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">NPCI Portal</span>
                <span className="text-xs font-bold text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/50">Web Portal</span>
              </div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5 mt-1">
                <span>npci.org.in</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="text-[11px] text-slate-400">
                AePS Grievances & Dispute Tracker
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-base shadow-sm">
                S
              </div>
              <span className="font-bold text-white text-lg">SaathiFlow</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              SaathiFlow is an independent decision and recovery navigator designed to assist citizens, community facilitators, and kiosk operators when AePS cash withdrawals fail or payment errors occur.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Aadhaar-free • In-browser memory only • DPDP 2023 compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">Product</div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('checker')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Check a Transaction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('howItWorks')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  How AePS Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy & Data Protection
                </button>
              </li>
            </ul>
          </div>

          {/* Research & Project */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">Evaluation</div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenResearch}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 group transition-colors"
                >
                  <span>Research Workspace</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </li>
              <li className="text-slate-400 text-[11px] leading-relaxed pt-1">
                For researchers, evaluators, and judges reviewing underlying regulatory citations, empirical data, and field protocols.
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="border-t border-slate-800 pt-6 text-[11px] text-slate-400 space-y-2 leading-relaxed">
          <p>
            <strong className="text-slate-300">Statutory Notice:</strong> SaathiFlow does not hold customer funds, conduct financial transactions, or act as a payment system operator. All turnaround times and compensation entitlements cited are governed by RBI Circular RBI/2019-20/67 (Harmonisation of Turn Around Time) and the Reserve Bank - Integrated Ombudsman Scheme, 2021.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-slate-400">
            <div>
              Developed for Techfest IIT Bombay "India @ 71/100 Challenge" • Financial Inclusion & Meaningful Banking Access
            </div>
            <div>
              Client-side build • Open academic and public good prototype
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
