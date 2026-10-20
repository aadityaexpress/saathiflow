import React, { useState } from 'react';
import { ResearchHypothesis, HypothesisStatus } from '../types';
import { HelpCircle, CheckCircle2, AlertTriangle, XCircle, Clock, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface HypothesisTrackerProps {
  hypotheses: ResearchHypothesis[];
  onUpdateStatus?: (id: string, newStatus: HypothesisStatus) => void;
}

export const HypothesisTracker: React.FC<HypothesisTrackerProps> = ({ hypotheses }) => {
  const [items, setItems] = useState<ResearchHypothesis[]>(hypotheses);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const handleStatusChange = (id: string, newStatus: HypothesisStatus) => {
    setItems((prev) =>
      prev.map((h) => (h.id === id ? { ...h, status: newStatus } : h))
    );
  };

  const getStatusBadge = (status: HypothesisStatus) => {
    switch (status) {
      case 'Supported':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Supported by Evidence
          </span>
        );
      case 'Open / In Testing':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-800 border border-blue-300">
            <Clock className="w-3 h-3 text-blue-600" /> Open / In Testing
          </span>
        );
      case 'At Risk / Nuanced':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-300">
            <AlertTriangle className="w-3 h-3 text-amber-600" /> At Risk / High Redundancy Danger
          </span>
        );
      case 'Falsified':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800 border border-rose-300">
            <XCircle className="w-3 h-3 text-rose-600" /> Falsified (Pivot Required)
          </span>
        );
    }
  };

  const filtered = items.filter((h) => {
    if (statusFilter === 'ALL') return true;
    return h.status === statusFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>F. Research Hypothesis & Falsification Tracker</span>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
            {items.length} Hypotheses
          </span>
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          Scientific rigor requires testing hypotheses against disconfirming evidence.
          Most importantly: We explicitly test <strong>Hypothesis 4 (The Falsification Hypothesis)</strong> to determine if existing bank and NPCI systems already solve the problem adequately.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['ALL', 'Supported', 'Open / In Testing', 'At Risk / Nuanced', 'Falsified'].map((st) => (
          <button
            key={st}
            onClick={() => setStatusFilter(st)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              statusFilter === st
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {st === 'ALL' ? `All Hypotheses (${items.length})` : st}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="space-y-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl border p-5 sm:p-6 shadow-sm space-y-4 transition-all ${
              item.code.includes('H4')
                ? 'border-amber-300 bg-amber-50/20'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {item.code}
                  </span>
                  {item.code.includes('H4') && (
                    <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300 uppercase">
                      Core Falsification Test
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-base">{item.statement}</h3>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                {getStatusBadge(item.status)}
              </div>
            </div>

            {/* Evidence Comparison: Supporting vs Contradicting */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Supporting Evidence & Observations</span>
                </div>
                <p className="text-emerald-900 leading-relaxed text-xs">{item.supportingEvidence}</p>
              </div>

              <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-rose-950">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span>Contradicting Evidence & Alternate Explanations</span>
                </div>
                <p className="text-rose-900 leading-relaxed text-xs">{item.contradictingEvidence}</p>
              </div>
            </div>

            {/* Validation Method & Falsification Trigger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="space-y-1">
                <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block">
                  Empirical Validation Methodology
                </span>
                <p className="text-slate-800">{item.validationMethod}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-amber-800 uppercase tracking-wider text-[10px] block">
                  Definite Falsification Trigger
                </span>
                <p className="text-amber-900 font-medium">{item.falsificationTrigger}</p>
              </div>
            </div>

            {/* Decision Implications & Manual Status Override */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-600">
                <strong className="text-slate-800">Product Decision Implication:</strong>{' '}
                <span>{item.decisionImplication}</span>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <span className="text-[11px] font-semibold text-slate-500">Update Status:</span>
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item.id, e.target.value as HypothesisStatus)}
                  className="px-2 py-1 text-xs rounded border border-slate-300 bg-white font-medium"
                >
                  <option value="Supported">Supported</option>
                  <option value="Open / In Testing">Open / In Testing</option>
                  <option value="At Risk / Nuanced">At Risk / Nuanced</option>
                  <option value="Falsified">Falsified</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
