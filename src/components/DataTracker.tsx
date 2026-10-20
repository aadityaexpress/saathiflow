import React, { useState } from 'react';
import { DataTrackerItem, CollectionStatus } from '../types';
import { Layers, Search, Download, AlertCircle, CheckCircle2, Clock, HelpCircle, ExternalLink, ArrowUpRight } from 'lucide-react';

interface DataTrackerProps {
  trackerData: DataTrackerItem[];
  onUpdateItem?: (updatedItem: DataTrackerItem) => void;
}

export const DataTracker: React.FC<DataTrackerProps> = ({ trackerData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<DataTrackerItem | null>(null);

  const statuses: CollectionStatus[] = [
    'Verified',
    'Partially Verified',
    'Awaiting verification',
    'Not publicly found'
  ];

  const filteredData = trackerData.filter((item) => {
    const matchesSearch =
      item.metricName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.whyItMatters.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.notesAndLimitations.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.verifiedValue.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || item.collectionStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportCSV = () => {
    const headers = [
      'ID',
      'Metric / Dataset Needed',
      'Category',
      'Collection Status',
      'Verified Value or Finding',
      'Why It Matters',
      'Preferred Source',
      'Date Last Checked',
      'Source URL',
      'Notes & Limitations',
      'Next Action Required'
    ];

    const rows = filteredData.map((item) => [
      `"${item.id}"`,
      `"${item.metricName.replace(/"/g, '""')}"`,
      `"${item.category}"`,
      `"${item.collectionStatus}"`,
      `"${item.verifiedValue.replace(/"/g, '""')}"`,
      `"${item.whyItMatters.replace(/"/g, '""')}"`,
      `"${item.preferredSource.replace(/"/g, '""')}"`,
      `"${item.dateLastChecked}"`,
      `"${item.sourceUrl}"`,
      `"${item.notesAndLimitations.replace(/"/g, '""')}"`,
      `"${item.nextAction.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `saathiflow_data_collection_tracker_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: CollectionStatus) => {
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
            <AlertCircle className="w-3 h-3 text-amber-600" /> Partially Verified
          </span>
        );
      case 'Awaiting verification':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-800 border border-blue-300">
            <Clock className="w-3 h-3 text-blue-600" /> Awaiting Field Verification
          </span>
        );
      case 'Not publicly found':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800 border border-rose-300">
            <HelpCircle className="w-3 h-3 text-rose-600" /> Not Publicly Found (RTI Needed)
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>C. Data Collection Tracker</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
              {filteredData.length} Target Datasets
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Separating established national indicators from unknown metrics. Missing values are explicitly flagged as <em>"Not publicly found"</em> or <em>"Awaiting verification"</em> rather than fabricated estimates.
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Tracker (.CSV)</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search metrics, preferred sources, or next actions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="w-full sm:w-auto flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600 whitespace-nowrap">Status Filter:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-56 px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="ALL">All Statuses ({trackerData.length})</option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tracker Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow space-y-3.5 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-slate-500">{item.id}</span>
                {getStatusBadge(item.collectionStatus)}
              </div>

              <h3 className="font-bold text-slate-900 text-sm">{item.metricName}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Why It Matters:</strong> {item.whyItMatters}
              </p>

              {/* Value Box */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase block tracking-wider">
                  Verified Finding / Current State
                </span>
                <span
                  className={`text-xs font-semibold ${
                    item.collectionStatus === 'Not publicly found'
                      ? 'text-rose-700 italic'
                      : item.collectionStatus === 'Awaiting verification'
                      ? 'text-blue-700'
                      : 'text-emerald-900'
                  }`}
                >
                  {item.verifiedValue}
                </span>
              </div>

              {/* Notes & Limitations */}
              <div className="text-[11px] text-slate-500 space-y-0.5">
                <span className="font-semibold text-slate-600">Limitations: </span>
                <span>{item.notesAndLimitations}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="text-[11px] text-slate-600">
                <strong className="text-slate-700">Next Action:</strong> {item.nextAction}
              </div>

              {item.sourceUrl && item.sourceUrl.startsWith('http') && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 whitespace-nowrap self-start sm:self-auto"
                >
                  <span>Source Link</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
