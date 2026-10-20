import React, { useState } from 'react';
import {
  ArrowLeft,
  FileCheck,
  Database,
  Layers,
  Users,
  TestTube,
  BarChart3,
  FileText,
  ShieldCheck,
  ExternalLink,
  BookOpen
} from 'lucide-react';

import { ResearchOverview } from '../ResearchOverview';
import { EvidenceRegister } from '../EvidenceRegister';
import { DataTracker } from '../DataTracker';
import { ExistingSolutions } from '../ExistingSolutions';
import { UserResearchHub } from '../UserResearchHub';
import { HypothesisTracker } from '../HypothesisTracker';
import { ImpactUsabilityMetrics } from '../ImpactUsabilityMetrics';
import { ConceptProposalExport } from '../ConceptProposalExport';

import {
  evidenceRegisterData,
  dataCollectionTrackerData,
  existingSolutionsComparisonData,
  researchHypothesesData
} from '../../data/researchData';

interface ResearchWorkspaceProps {
  onBackToProduct: () => void;
}

export const ResearchWorkspace: React.FC<ResearchWorkspaceProps> = ({ onBackToProduct }) => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const verifiedCount = evidenceRegisterData.filter(
    (e) => e.verificationStatus === 'Verified'
  ).length;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'evidence', label: 'Evidence Register', count: evidenceRegisterData.length, icon: FileCheck },
    { id: 'dataTracker', label: 'Data Tracker', count: dataCollectionTrackerData.length, icon: Database },
    { id: 'solutions', label: 'Ecosystem Matrix', count: existingSolutionsComparisonData.length, icon: Layers },
    { id: 'userResearch', label: 'User Research Hub', icon: Users },
    { id: 'hypotheses', label: 'Hypotheses & Tests', count: researchHypothesesData.length, icon: TestTube },
    { id: 'metrics', label: 'Metrics & Evaluation', icon: BarChart3 },
    { id: 'proposal', label: 'Concept Proposal Export', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-sans text-slate-900">
      <div>
        {/* Top Research Workspace Navigation & Return Bar */}
        <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={onBackToProduct}
                className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors min-h-[40px] shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Customer App</span>
              </button>
              <div className="border-l border-slate-700 pl-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm tracking-tight">Research & Regulatory Workspace</span>
                  <span className="text-[10px] font-semibold uppercase bg-slate-800 text-emerald-400 px-2 py-0.5 rounded border border-slate-700">
                    IIT Bombay India @ 71/100
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Theme 3: Financial Inclusion & Meaningful Banking Access • Evidence Dossier
                </p>
              </div>
            </div>

            {/* Evidence summary pill */}
            <div className="hidden lg:flex items-center gap-3 text-xs bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {verifiedCount}/{evidenceRegisterData.length} Evidence Verified
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">
                11 Tracker Metrics
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">
                5 Tested Hypotheses
              </span>
            </div>
          </div>

          {/* Research Sub-Tabs */}
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto border-t border-slate-800 scrollbar-none">
            <nav className="flex space-x-1 py-1" aria-label="Research Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 min-h-[40px] ${
                      isActive
                        ? 'bg-slate-800 text-emerald-400 font-semibold shadow-inner'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                    {tab.count !== undefined && (
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                          isActive
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Research Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {activeTab === 'overview' && (
            <ResearchOverview onNavigateTab={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'evidence' && (
            <EvidenceRegister evidenceList={evidenceRegisterData} />
          )}

          {activeTab === 'dataTracker' && (
            <DataTracker trackerData={dataCollectionTrackerData} />
          )}

          {activeTab === 'solutions' && (
            <ExistingSolutions solutions={existingSolutionsComparisonData} />
          )}

          {activeTab === 'userResearch' && <UserResearchHub />}

          {activeTab === 'hypotheses' && (
            <HypothesisTracker hypotheses={researchHypothesesData} />
          )}

          {activeTab === 'metrics' && <ImpactUsabilityMetrics />}

          {activeTab === 'proposal' && <ConceptProposalExport />}
        </main>
      </div>

      {/* Internal Workspace Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 px-4 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>SaathiFlow Research Dossier • Techfest IIT Bombay Submission Preparation</span>
          </div>
          <button
            onClick={onBackToProduct}
            className="text-emerald-400 hover:text-emerald-300 font-medium underline flex items-center gap-1"
          >
            <span>Return to Customer Product Experience</span>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
          </button>
        </div>
      </footer>
    </div>
  );
};
