import React from 'react';
import { ShieldCheck, BookOpen, Layers, BarChart3, Users, HelpCircle, FileText, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  evidenceCount: number;
  verifiedCount: number;
  openHypothesesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  evidenceCount,
  verifiedCount,
  openHypothesesCount
}) => {
  const navItems = [
    { id: 'overview', label: 'A. Research Overview', icon: BookOpen },
    { id: 'evidence', label: 'B. Evidence Register', icon: CheckCircle2, badge: `${verifiedCount}/${evidenceCount}` },
    { id: 'dataTracker', label: 'C. Data Tracker', icon: Layers },
    { id: 'solutions', label: 'D. Existing Solutions Matrix', icon: Layers },
    { id: 'userResearch', label: 'E. User Research & BCs', icon: Users },
    { id: 'hypotheses', label: 'F. Hypothesis Tracker', icon: HelpCircle, badge: `${openHypothesesCount} Open` },
    { id: 'metrics', label: 'G. Usability Metrics & Sim', icon: BarChart3 },
    { id: 'proposal', label: 'H. Concept Proposal Export', icon: FileText, highlight: true },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold px-2 py-0.5 rounded text-[11px] tracking-wide uppercase">
              Techfest IIT Bombay
            </span>
            <span className="text-slate-300 font-medium">India @ 71/100 Challenge • Theme 3: Financial Inclusion & Meaningful Banking Access</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> Aadhaar-Free Protected
            </span>
            <span>•</span>
            <span className="text-slate-300">Desk Research & Hypothesis Workspace</span>
            <span>•</span>
            <span className="text-slate-400 font-mono text-[11px]">As of 20 Oct 2026</span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">SaathiFlow</h1>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
                v1.0-research
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Multilingual, Low-Literacy Decision & Recovery Assistant for AePS Disputes & Unauthorised Debits
            </p>
          </div>
        </div>

        {/* Quick Integrity Badges */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold">{verifiedCount}</span>
            <span className="text-emerald-700">Verified Sources</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-semibold">{openHypothesesCount}</span>
            <span className="text-amber-700">Hypotheses Under Test</span>
          </div>
          <a
            href="https://www.npci.org.in/what-we-do/aeps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors"
          >
            <span>NPCI Reference</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>
      </div>

      {/* Nav Tabs */}
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-none border-t border-slate-100">
        <nav className="flex space-x-1 py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : item.highlight
                    ? 'text-emerald-700 bg-emerald-50/70 hover:bg-emerald-100 hover:text-emerald-900 border border-emerald-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : item.highlight ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-semibold ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
