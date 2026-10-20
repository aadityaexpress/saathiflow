import React, { useState, useMemo } from 'react';
import { EvidenceItem, VerificationStatus, EvidenceCategory, EvidenceNature } from '../types';
import { Search, Filter, ExternalLink, Download, CheckCircle2, AlertTriangle, HelpCircle, Clock, Info, ShieldCheck } from 'lucide-react';

interface EvidenceRegisterProps {
  evidenceList: EvidenceItem[];
}

export const EvidenceRegister: React.FC<EvidenceRegisterProps> = ({ evidenceList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedNature, setSelectedNature] = useState<string>('ALL');
  const [activeItemModal, setActiveItemModal] = useState<EvidenceItem | null>(null);

  const categories: EvidenceCategory[] = [
    'AePS Scale & Infra',
    'Fraud & Security',
    'Grievance Redress & UDIR',
    'Financial Inclusion & BC',
    'Technical Feasibility'
  ];

  const statuses: VerificationStatus[] = ['Verified', 'Partially Verified', 'Unverified', 'Outdated'];
  const natures: EvidenceNature[] = ['Official Statistic', 'Research Finding', 'Regulatory Mandate', 'Working Assumption'];

  const filteredEvidence = useMemo(() => {
    return evidenceList.filter((item) => {
      const matchesSearch =
        item.claim.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sourceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.whatItProves.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'ALL' || item.verificationStatus === selectedStatus;
      const matchesNature = selectedNature === 'ALL' || item.nature === selectedNature;

      return matchesSearch && matchesCategory && matchesStatus && matchesNature;
    });
  }, [evidenceList, searchTerm, selectedCategory, selectedStatus, selectedNature]);

  const exportToCSV = () => {
    const headers = [
      'ID',
      'Category',
      'Verification Status',
      'Nature',
      'Exact Claim',
      'Source Title',
      'Organization',
      'URL',
      'Publication Date',
      'Data Period',
      'Geographic Scope',
      'Population Scope',
      'Is Primary',
      'What It Proves',
      'Limitations and SaathiFlow Relevance'
    ];

    const rows = filteredEvidence.map((item) => [
      `"${item.id}"`,
      `"${item.category}"`,
      `"${item.verificationStatus}"`,
      `"${item.nature}"`,
      `"${item.claim.replace(/"/g, '""')}"`,
      `"${item.sourceTitle.replace(/"/g, '""')}"`,
      `"${item.organization.replace(/"/g, '""')}"`,
      `"${item.url}"`,
      `"${item.publicationDate}"`,
      `"${item.dataPeriod}"`,
      `"${item.geographicScope}"`,
      `"${item.populationScope}"`,
      item.isPrimary ? 'Primary' : 'Secondary',
      `"${item.whatItProves.replace(/"/g, '""')}"`,
      `"${item.limitations.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `saathiflow_evidence_register_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: VerificationStatus) => {
    switch (status) {
      case 'Verified':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
          </span>
        );
      case 'Partially Verified':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-300">
            <AlertTriangle className="w-3 h-3 text-amber-600" /> Partially Verified
          </span>
        );
      case 'Unverified':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800 border border-rose-300">
            <HelpCircle className="w-3 h-3 text-rose-600" /> Unverified Assumption
          </span>
        );
      case 'Outdated':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-800 border border-slate-300">
            <Clock className="w-3 h-3 text-slate-500" /> Outdated
          </span>
        );
    }
  };

  const getNatureBadge = (nature: EvidenceNature) => {
    switch (nature) {
      case 'Official Statistic':
        return <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Official Statistic</span>;
      case 'Regulatory Mandate':
        return <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">Regulatory Mandate</span>;
      case 'Research Finding':
        return <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">Research Finding</span>;
      case 'Working Assumption':
        return <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-orange-50 text-orange-800 border border-orange-200">Working Assumption</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Export */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>B. Verified Evidence Register</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
              {filteredEvidence.length} Entries
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Every claim rigorously checked against primary NPCI, RBI, Cybercrime, and peer-reviewed sources. No fabricated figures or assumed APIs.
          </p>
        </div>

        <button
          onClick={exportToCSV}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Register (.CSV)</span>
        </button>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search claims, organisations, sources, or what it proves..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Filter Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Categories ({evidenceList.length})</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Verification Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Statuses</option>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Nature of Evidence</label>
            <select
              value={selectedNature}
              onChange={(e) => setSelectedNature(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Evidence Natures</option>
              {natures.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table of Evidence */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 w-20">ID</th>
                <th className="py-3 px-4 w-44">Category / Nature</th>
                <th className="py-3 px-4 min-w-[300px]">Exact Claim Statement</th>
                <th className="py-3 px-4 w-52">Source & Org</th>
                <th className="py-3 px-4 w-36">Status</th>
                <th className="py-3 px-4 w-28 text-center">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEvidence.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400 text-xs">
                    No evidence records matched your search filters.
                  </td>
                </tr>
              ) : (
                filteredEvidence.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-800 text-[11px]">
                      {item.id}
                    </td>
                    <td className="py-3.5 px-4 space-y-1">
                      <div className="text-[11px] font-medium text-slate-900">{item.category}</div>
                      <div>{getNatureBadge(item.nature)}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-800 leading-relaxed">
                      <div className="line-clamp-2">{item.claim}</div>
                      <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5">
                        <span className="font-semibold text-slate-600">Proves:</span>
                        <span className="line-clamp-1">{item.whatItProves}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 space-y-1">
                      <div className="font-semibold text-slate-900 line-clamp-1">{item.organization}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">{item.sourceTitle}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{item.publicationDate}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      {getStatusBadge(item.verificationStatus)}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => setActiveItemModal(item)}
                        className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 rounded-lg border border-slate-200 transition-colors"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Modal Viewer */}
      {activeItemModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 space-y-5 animate-scaleUp">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-500">{activeItemModal.id}</span>
                  <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    {activeItemModal.category}
                  </span>
                  {getNatureBadge(activeItemModal.nature)}
                </div>
                <h3 className="text-base font-bold text-slate-900">Evidence Provenance & Verification Audit</h3>
              </div>
              <button
                onClick={() => setActiveItemModal(null)}
                className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Exact Claim */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Exact Recorded Claim</label>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-900 font-medium leading-relaxed">
                "{activeItemModal.claim}"
              </div>
            </div>

            {/* Source Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Source Document</span>
                <span className="font-semibold text-slate-900">{activeItemModal.sourceTitle}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Publishing Entity</span>
                <span className="font-semibold text-slate-900">{activeItemModal.organization}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Date & Period</span>
                <span className="text-slate-800">Published: {activeItemModal.publicationDate} • Data: {activeItemModal.dataPeriod}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Scope & Type</span>
                <span className="text-slate-800">{activeItemModal.geographicScope} ({activeItemModal.isPrimary ? 'Primary Source' : 'Secondary Analysis'})</span>
              </div>
            </div>

            {/* What it Proves vs Limitations */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>What This Source Actually Proves</span>
                </div>
                <p className="text-emerald-900 text-xs leading-relaxed">{activeItemModal.whatItProves}</p>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Documented Limitations & Relevance to SaathiFlow</span>
                </div>
                <p className="text-amber-900 text-xs leading-relaxed">{activeItemModal.limitations}</p>
              </div>
            </div>

            {/* Verification Status & Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600">Verification Status:</span>
                {getStatusBadge(activeItemModal.verificationStatus)}
              </div>

              <a
                href={activeItemModal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
              >
                <span>Open Original Primary Document</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
