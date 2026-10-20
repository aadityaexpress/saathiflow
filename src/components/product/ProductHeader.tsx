import React, { useState } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';

interface ProductHeaderProps {
  activePage: 'home' | 'checker' | 'howItWorks' | 'privacy';
  onNavigate: (page: 'home' | 'checker' | 'howItWorks' | 'privacy') => void;
  onOpenResearch: () => void;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  activePage,
  onNavigate,
  onOpenResearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'checker' | 'howItWorks' | 'privacy') => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      {/* Utility sub-banner for privacy reassurance */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 font-normal">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-200 text-[11px] font-medium">
              Free, independent guidance for failed AePS cash withdrawals & payment errors
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Private & client-side only
            </span>
            <span>•</span>
            <span>Zero Aadhaar or PIN collection</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
          aria-label="SaathiFlow Home"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-emerald-800 transition-colors">
            S
          </div>
          <div>
            <div className="font-bold text-slate-900 text-base leading-tight tracking-tight flex items-center gap-1.5">
              <span>SaathiFlow</span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal leading-none mt-0.5">
              Guidance for transaction problems
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors min-h-[44px] flex items-center ${
              activePage === 'home'
                ? 'text-emerald-800 bg-emerald-50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('checker')}
            className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors min-h-[44px] flex items-center ${
              activePage === 'checker'
                ? 'text-emerald-800 bg-emerald-50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Check a Transaction
          </button>
          <button
            onClick={() => handleNavClick('howItWorks')}
            className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors min-h-[44px] flex items-center ${
              activePage === 'howItWorks'
                ? 'text-emerald-800 bg-emerald-50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('privacy')}
            className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors min-h-[44px] flex items-center ${
              activePage === 'privacy'
                ? 'text-emerald-800 bg-emerald-50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Privacy & Safety
          </button>
        </nav>

        {/* Secondary Navigation: Research Workspace Link */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('checker')}
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors min-h-[44px] flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1"
          >
            <span>Check an Issue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenResearch}
            className="text-slate-500 hover:text-slate-800 border border-slate-200 hover:border-slate-300 text-xs font-medium px-3 py-2 rounded-lg transition-colors min-h-[44px] flex items-center gap-1.5"
            title="Inspect background evidence, regulatory audits, and concept proposal"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Research Workspace</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3.5 py-3 rounded-lg text-sm font-medium min-h-[44px] flex items-center ${
              activePage === 'home' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('checker')}
            className={`w-full text-left px-3.5 py-3 rounded-lg text-sm font-medium min-h-[44px] flex items-center justify-between ${
              activePage === 'checker' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>Check a Transaction</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">Start</span>
          </button>
          <button
            onClick={() => handleNavClick('howItWorks')}
            className={`w-full text-left px-3.5 py-3 rounded-lg text-sm font-medium min-h-[44px] flex items-center ${
              activePage === 'howItWorks' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('privacy')}
            className={`w-full text-left px-3.5 py-3 rounded-lg text-sm font-medium min-h-[44px] flex items-center ${
              activePage === 'privacy' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Privacy & Safety
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenResearch();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs text-slate-600 bg-slate-50 hover:bg-slate-100 font-medium min-h-[44px] flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Open Research & Regulatory Workspace</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
