import React, { useState } from 'react';
import { SolutionComparisonItem } from '../types';
import { Layers, CheckCircle2, XCircle, AlertTriangle, ExternalLink, HelpCircle, Eye, ShieldCheck, Sparkles } from 'lucide-react';

interface ExistingSolutionsProps {
  solutions: SolutionComparisonItem[];
}

export const ExistingSolutions: React.FC<ExistingSolutionsProps> = ({ solutions }) => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(solutions[0].id);
  const [activeDimension, setActiveDimension] = useState<string>('ALL');

  const selectedSolution = solutions.find((s) => s.id === selectedSolutionId) || solutions[0];

  const dimensions = [
    { key: 'ALL', label: 'All Dimensions' },
    { key: 'literacy', label: 'Low-Literacy & Vernacular' },
    { key: 'bcWorkflow', label: 'BC / Assisted Workflow' },
    { key: 'tracking', label: 'Dispute & Tracking API' },
    { key: 'limitations', label: 'Documented Limitations' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>D. Existing Solutions & Prior-Art Overlap Matrix</span>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
            {solutions.length} Systems Compared
          </span>
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          Rigorous benchmarking against national payments infrastructure, commercial bank CMS, law-enforcement portals, and academic prototypes.
          Crucial distinction: We distinguish between features <strong>documented as unavailable</strong> vs <strong>simply unevidenced</strong>.
        </p>
      </div>

      {/* Solution Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {solutions.map((sol) => (
          <button
            key={sol.id}
            onClick={() => setSelectedSolutionId(sol.id)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedSolutionId === sol.id
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : sol.id === 'SOL-08'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {sol.id === 'SOL-08' && <Sparkles className="w-3 h-3 inline mr-1 text-emerald-600" />}
            {sol.name}
          </button>
        ))}
      </div>

      {/* Deep-Dive Inspection Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-slate-400">{selectedSolution.id}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-slate-100 text-slate-700">
                {selectedSolution.solutionType}
              </span>
              {selectedSolution.isDocumentedUnavailable && (
                <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  Customer UI Documented as Unavailable
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedSolution.name}</h3>
            <span className="text-xs text-slate-500 font-medium">Governing Entity: {selectedSolution.governingOrg}</span>
          </div>

          {selectedSolution.sourceUrl && (
            <a
              href={selectedSolution.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-colors self-start sm:self-auto"
            >
              <span>Inspect Source</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* 10-Dimension Evaluation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Supported Incidents */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              1. Supported Incident Types
            </span>
            <p className="text-slate-800 font-medium">{selectedSolution.supportedIncidentTypes}</p>
          </div>

          {/* Status Access */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              2. Transaction-Status Access Mechanism
            </span>
            <p className="text-slate-800 font-medium">{selectedSolution.transactionStatusAccess}</p>
          </div>

          {/* Complaint Registration */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              3. Complaint Registration & Dispute Flow
            </span>
            <p className="text-slate-800 font-medium">{selectedSolution.complaintRegistration}</p>
          </div>

          {/* Reversal & Escalation */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              4. Reversal & Escalation Timelines
            </span>
            <p className="text-slate-800 font-medium">{selectedSolution.reversalAndEscalation}</p>
          </div>

          {/* Vernacular Language */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              5. Local-Language Accessibility (Vernacular)
            </span>
            <p className="text-slate-800 font-medium">{selectedSolution.localLanguageAccessibility}</p>
          </div>

          {/* Low-Literacy Suitability */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              6. Suitability for Constrained / Low-Literacy Users
            </span>
            <p className="text-slate-800 font-medium">{selectedSolution.suitabilityForLowLiteracy}</p>
          </div>

          {/* BC / Assisted Workflow */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              7. Assisted-Service / Business Correspondent Workflow
            </span>
            <p className="text-slate-800 font-medium">{selectedSolution.assistedServiceBCWorkflow}</p>
          </div>

          {/* Tracking Follow-Up */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              8. Complaint Tracking & Post-Lodgement Follow-Up
            </span>
            <p className="text-slate-800 font-medium">{selectedSolution.complaintTrackingFollowUp}</p>
          </div>

          {/* API Integration */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              9. API & Third-Party Integration Availability
            </span>
            <p className="text-slate-800 font-medium">{selectedSolution.apiIntegrationAvailability}</p>
          </div>

          {/* Known Limitations */}
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
            <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
              10. Known Limitations (Supported by Evidence)
            </span>
            <p className="text-amber-900 font-medium">{selectedSolution.knownLimitations}</p>
          </div>
        </div>
      </div>

      {/* Side-by-Side Capability Comparison Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
            Comprehensive Side-by-Side Capability Matrix
          </h4>
          <span className="text-[11px] text-slate-500">Scroll horizontally to compare all 8 systems</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 text-slate-700 font-semibold text-[10px] uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-3 min-w-[180px] sticky left-0 bg-slate-100 z-10 border-r border-slate-200">System Name</th>
                <th className="py-3 px-3 min-w-[140px]">Primary User</th>
                <th className="py-3 px-3 min-w-[130px]">Low-Literacy Friendly?</th>
                <th className="py-3 px-3 min-w-[130px]">Vernacular Voice?</th>
                <th className="py-3 px-3 min-w-[140px]">BC Kiosk Mode?</th>
                <th className="py-3 px-3 min-w-[140px]">Zero-PII Safe?</th>
                <th className="py-3 px-3 min-w-[150px]">T+5 Rights Awareness?</th>
                <th className="py-3 px-3 min-w-[140px]">Helpline 1930 Integration?</th>
                <th className="py-3 px-3 min-w-[200px]">Core Structural Limitation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {solutions.map((sol) => (
                <tr
                  key={sol.id}
                  className={`hover:bg-slate-50 transition-colors ${
                    sol.id === 'SOL-08' ? 'bg-emerald-50/50 font-medium' : ''
                  }`}
                >
                  <td className="py-3 px-3 font-semibold text-slate-900 sticky left-0 bg-white z-10 border-r border-slate-200">
                    <div className="flex items-center gap-1.5">
                      {sol.id === 'SOL-08' && <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                      <span>{sol.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-slate-600">
                    {sol.id === 'SOL-01' ? 'Banks / NPCI' : sol.id === 'SOL-06' ? 'Regulators' : 'Citizens / Customers'}
                  </td>
                  <td className="py-3 px-3">
                    {sol.id === 'SOL-08' ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Yes (Icon/Audio)
                      </span>
                    ) : sol.id === 'SOL-04' ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Yes (1930 Voice)
                      </span>
                    ) : sol.id === 'SOL-05' ? (
                      <span className="text-amber-700 font-medium">Moderate (Mobile)</span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5 text-rose-500" /> Very Low / None
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3">
                    {sol.id === 'SOL-08' ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Yes (6 Langs)
                      </span>
                    ) : sol.id === 'SOL-04' ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Yes (1930 Call)
                      </span>
                    ) : (
                      <span className="text-slate-400">No</span>
                    )}
                  </td>
                  <td className="py-3 px-3">
                    {sol.id === 'SOL-08' ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dedicated Mode
                      </span>
                    ) : (
                      <span className="text-slate-400">None</span>
                    )}
                  </td>
                  <td className="py-3 px-3">
                    {sol.id === 'SOL-08' ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Complete Zero-PII
                      </span>
                    ) : (
                      <span className="text-slate-500">Requires Full Acct/UID</span>
                    )}
                  </td>
                  <td className="py-3 px-3">
                    {sol.id === 'SOL-08' ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Active Calculator
                      </span>
                    ) : (
                      <span className="text-slate-400">Passive Rule Only</span>
                    )}
                  </td>
                  <td className="py-3 px-3">
                    {sol.id === 'SOL-04' ? (
                      <span className="text-emerald-700 font-semibold">Primary Gateway</span>
                    ) : sol.id === 'SOL-08' ? (
                      <span className="text-emerald-700 font-semibold">One-Tap Triage Link</span>
                    ) : (
                      <span className="text-slate-400">Not Linked</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-slate-600 text-[11px] max-w-xs">
                    {sol.knownLimitations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
