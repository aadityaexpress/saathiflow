import React, { useState, useEffect } from 'react';
import { UserInterviewRecord } from '../types';
import { userInterviewProtocols } from '../data/researchData';
import { Users, Plus, ShieldCheck, CheckCircle2, AlertTriangle, FileText, Download, Calendar, MapPin, Trash2 } from 'lucide-react';

export const UserResearchHub: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'All' | 'Customer' | 'Business Correspondent / Mitra' | 'Financial Inclusion Practitioner'>('All');
  const [interviews, setInterviews] = useState<UserInterviewRecord[]>(() => {
    const saved = localStorage.getItem('saathiflow_interviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved interviews', e);
      }
    }
    return userInterviewProtocols;
  });

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newParticipantType, setNewParticipantType] = useState<'Customer' | 'Business Correspondent / Mitra' | 'Financial Inclusion Practitioner'>('Customer');
  const [newAnonId, setNewAnonId] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newConsent, setNewConsent] = useState(false);
  const [newScenario, setNewScenario] = useState('');
  const [newPainPointsText, setNewPainPointsText] = useState('');
  const [newNotesText, setNewNotesText] = useState('');
  const [newFollowUp, setNewFollowUp] = useState('');

  useEffect(() => {
    localStorage.setItem('saathiflow_interviews', JSON.stringify(interviews));
  }, [interviews]);

  const handleAddInterview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newConsent) {
      alert('Informed consent is strictly mandatory under research ethics guidelines.');
      return;
    }
    if (!newAnonId.trim()) {
      alert('Please provide an anonymous participant ID.');
      return;
    }

    const painPoints = newPainPointsText
      .split('\n')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    const newRecord: UserInterviewRecord = {
      id: `INT-LOG-${Date.now().toString().slice(-4)}`,
      participantType: newParticipantType,
      anonymousId: newAnonId.trim(),
      consentObtained: newConsent,
      interviewDate: new Date().toISOString().slice(0, 10),
      locationState: newLocation.trim() || 'Undisclosed Location',
      experienceYearsOrUsageFreq: 'Field Entry',
      scenarioDiscussed: newScenario.trim() || 'AePS Cash Withdrawal / Grievance Experience',
      keyQuestionsAndResponses: [
        {
          question: 'Field Observations & Participant Feedback',
          anonymizedSummary: newNotesText.trim() || 'No detailed qualitative text provided.'
        }
      ],
      observedPainPoints: painPoints.length > 0 ? painPoints : ['General communication barrier noted'],
      empiricalEvidenceBasis: 'Direct Consented Field Interview Note',
      recommendedFollowUp: newFollowUp.trim() || 'Verify against bank passbook or switch log.',
      isTemplateOrPilot: 'Pilot Field Entry'
    };

    setInterviews([newRecord, ...interviews]);
    setIsAddingNew(false);
    // Reset form
    setNewAnonId('');
    setNewLocation('');
    setNewConsent(false);
    setNewScenario('');
    setNewPainPointsText('');
    setNewNotesText('');
    setNewFollowUp('');
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this interview record?')) {
      setInterviews(interviews.filter((i) => i.id !== id));
    }
  };

  const filteredInterviews = interviews.filter((item) => {
    if (activeSegment === 'All') return true;
    return item.participantType === activeSegment;
  });

  const exportInterviewsCSV = () => {
    const headers = [
      'ID',
      'Record Type',
      'Participant Segment',
      'Anonymous ID',
      'Consent Obtained',
      'Date',
      'Location / State',
      'Scenario Discussed',
      'Observed Pain Points',
      'Anonymized Notes',
      'Follow-Up Action'
    ];

    const rows = filteredInterviews.map((item) => [
      `"${item.id}"`,
      `"${item.isTemplateOrPilot}"`,
      `"${item.participantType}"`,
      `"${item.anonymousId}"`,
      item.consentObtained ? 'YES' : 'NO',
      `"${item.interviewDate}"`,
      `"${item.locationState}"`,
      `"${item.scenarioDiscussed.replace(/"/g, '""')}"`,
      `"${item.observedPainPoints.join('; ').replace(/"/g, '""')}"`,
      `"${item.keyQuestionsAndResponses.map((q) => q.question + ': ' + q.anonymizedSummary).join(' | ').replace(/"/g, '""')}"`,
      `"${item.recommendedFollowUp.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `saathiflow_user_research_protocols_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>E. User & Frontline BC Research Protocols</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
              {filteredInterviews.length} Protocols & Logs
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Structured interview guides with ethical consent safeguards.
            <strong className="text-slate-700 ml-1">Research Ethics Rule:</strong> We do NOT fabricate completed interview responses. Templates serve as standardized protocol instruments for Phase 2 validation.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={exportInterviewsCSV}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-colors whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Notes (.CSV)</span>
          </button>
          <button
            onClick={() => setIsAddingNew(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Log Field Interview Note</span>
          </button>
        </div>
      </div>

      {/* Segment Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {(['All', 'Customer', 'Business Correspondent / Mitra', 'Financial Inclusion Practitioner'] as const).map((seg) => (
          <button
            key={seg}
            onClick={() => setActiveSegment(seg)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeSegment === seg
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {seg === 'All' ? 'All Segments' : seg}
          </button>
        ))}
      </div>

      {/* New Interview Modal / Form */}
      {isAddingNew && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base">Record Consented Field Interview / Pilot Observation</h3>
              <button
                onClick={() => setIsAddingNew(false)}
                className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddInterview} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Participant Segment *</label>
                  <select
                    value={newParticipantType}
                    onChange={(e: any) => setNewParticipantType(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white"
                  >
                    <option value="Customer">Customer (AePS User)</option>
                    <option value="Business Correspondent / Mitra">Business Correspondent / Mitra</option>
                    <option value="Financial Inclusion Practitioner">Financial Inclusion Practitioner</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Anonymous Participant ID *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. PILOT-CUST-PUNE-01"
                    value={newAnonId}
                    onChange={(e) => setNewAnonId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200"
                  />
                  <span className="text-[10px] text-slate-400">Never use real names or mobile numbers</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Location / State</label>
                  <input
                    type="text"
                    placeholder="e.g. Gorakhpur, Uttar Pradesh"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Incident Scenario Discussed</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹1,000 cash withdrawal timeout"
                    value={newScenario}
                    onChange={(e) => setNewScenario(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Observed Pain Points (One per line)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Fear of losing money&#10;Believed BC stole the cash&#10;Cannot read SMS alert"
                  value={newPainPointsText}
                  onChange={(e) => setNewPainPointsText(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Anonymized Summary of Participant Responses</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Summarize exact statements, verbal reactions, and how the participant reacted to waiting vs branch escalation..."
                  value={newNotesText}
                  onChange={(e) => setNewNotesText(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Recommended Follow-Up Action</label>
                <input
                  type="text"
                  placeholder="e.g. Follow up on Day 6 to check if T+5 auto-reversal completed"
                  value={newFollowUp}
                  onChange={(e) => setNewFollowUp(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200"
                />
              </div>

              {/* Ethics Consent Checkbox */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="consentCheck"
                  checked={newConsent}
                  onChange={(e) => setNewConsent(e.target.checked)}
                  className="mt-0.5 rounded border-emerald-400 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="consentCheck" className="text-xs text-emerald-900 leading-snug">
                  <strong>Informed Ethical Consent Obtained:</strong> I certify that the participant was fully briefed, participated voluntarily, agreed to anonymized academic research, and no Aadhaar numbers, biometric templates, or credentials were collected.
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm"
                >
                  Save Research Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Protocols List */}
      <div className="space-y-4">
        {filteredInterviews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4 hover:border-slate-300 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs font-bold text-slate-500">{item.id}</span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                    item.participantType === 'Customer'
                      ? 'bg-blue-50 text-blue-800 border border-blue-200'
                      : item.participantType === 'Business Correspondent / Mitra'
                      ? 'bg-amber-50 text-amber-800 border border-amber-200'
                      : 'bg-purple-50 text-purple-800 border border-purple-200'
                  }`}
                >
                  {item.participantType}
                </span>
                <span className="text-xs font-mono font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {item.anonymousId}
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                    item.isTemplateOrPilot === 'Protocol Template'
                      ? 'bg-slate-100 text-slate-600'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {item.isTemplateOrPilot}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {item.interviewDate}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {item.locationState}
                </span>
                {item.isTemplateOrPilot === 'Pilot Field Entry' && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-rose-600 hover:text-rose-800 p-1"
                    title="Delete record"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Questions & Summaries */}
            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block">
                Standardized Interview Questions & Qualitative Findings
              </span>
              <div className="space-y-2">
                {item.keyQuestionsAndResponses.map((qa, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-150 space-y-1">
                    <p className="font-semibold text-slate-900 text-xs">Q: {qa.question}</p>
                    <p className="text-slate-600 text-xs leading-relaxed">{qa.anonymizedSummary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Observed Pain Points */}
            <div className="space-y-1.5 text-xs">
              <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block">
                Observed Frontline Pain Points
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.observedPainPoints.map((pt, pIdx) => (
                  <span
                    key={pIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-medium"
                  >
                    <AlertTriangle className="w-3 h-3 text-rose-600" />
                    <span>{pt}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Audit */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  Consent: <strong>Verified</strong> • Basis: {item.empiricalEvidenceBasis}
                </span>
              </div>
              <div>
                <strong className="text-slate-700">Follow-up:</strong> {item.recommendedFollowUp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
