import React, { useState } from 'react';
import { UsabilityMetric, SimulationScenario } from '../types';
import { usabilityMetricsData, simulationScenariosData } from '../data/researchData';
import { BarChart3, Play, CheckCircle2, AlertTriangle, ShieldCheck, Clock, ArrowRight, UserCheck, PhoneCall, Sparkles } from 'lucide-react';

export const ImpactUsabilityMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<UsabilityMetric[]>(usabilityMetricsData);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(simulationScenariosData[0].id);
  const [simStep, setSimStep] = useState<'initial' | 'simulated'>('initial');
  const [activeVoiceLanguage, setActiveVoiceLanguage] = useState<'Hindi' | 'Bhojpuri' | 'Marathi' | 'Tamil' | 'English'>('Hindi');

  const activeScenario = simulationScenariosData.find((s) => s.id === selectedScenarioId) || simulationScenariosData[0];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>G. Usability Evaluation Framework & Incident Simulator</span>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
            7 Metrics • 6 Incident Cases
          </span>
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          Grounded measurement methodology to validate whether SaathiFlow improves task completion and safety over existing channels.
          <strong className="text-slate-800 ml-1">Integrity Rule:</strong> Metrics display <em>"Not measured"</em> until empirical trial results are logged.
        </p>
      </div>

      {/* Metrics Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Prototype Usability & Decision Measurement Plan
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Target Thresholds Defined</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 text-slate-700 font-semibold text-[10px] uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 w-48">Metric Dimension</th>
                <th className="py-3 px-4 min-w-[200px]">Definition & Measurement Protocol</th>
                <th className="py-3 px-4 min-w-[180px]">Target Validation Threshold</th>
                <th className="py-3 px-4 w-40">Current Baseline</th>
                <th className="py-3 px-4 min-w-[180px]">Known Bias / Caution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {metrics.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    <div className="space-y-0.5">
                      <div>{m.metricName}</div>
                      <span className="text-[10px] font-mono text-slate-400 font-normal">{m.id}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                    <div>{m.definition}</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      <strong className="text-slate-600">Method:</strong> {m.measurementMethod}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-emerald-800 font-semibold bg-emerald-50/40">
                    {m.targetThreshold}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      <Clock className="w-3 h-3 text-slate-500" /> {m.currentBaseline}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-amber-900 text-[11px] bg-amber-50/20">
                    {m.cautionBias}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Scenario Triage Simulator */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                Interactive Test Bench
              </span>
              <span className="text-xs text-slate-500">Live Journey Simulator</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Field Incident Triage: Standard Process vs SaathiFlow Guided Journey
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-slate-600">Audio Dialect:</label>
            <select
              value={activeVoiceLanguage}
              onChange={(e: any) => setActiveVoiceLanguage(e.target.value)}
              className="px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-white font-medium"
            >
              <option value="Hindi">Hindi (हिंदी)</option>
              <option value="Bhojpuri">Bhojpuri (भोजपुरी)</option>
              <option value="Marathi">Marathi (मराठी)</option>
              <option value="Tamil">Tamil (தமிழ்)</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>

        {/* Scenario Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {simulationScenariosData.map((scen) => (
            <button
              key={scen.id}
              onClick={() => {
                setSelectedScenarioId(scen.id);
                setSimStep('initial');
              }}
              className={`p-3.5 rounded-xl text-left border transition-all space-y-1.5 ${
                selectedScenarioId === scen.id
                  ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-400">{scen.id}</span>
                {scen.isFraudIncident ? (
                  <span className="text-[10px] uppercase font-bold text-rose-700 bg-rose-100 px-1.5 py-0.2 rounded">
                    Fraud
                  </span>
                ) : scen.id === 'SCEN-06' ? (
                  <span className="text-[10px] uppercase font-bold text-purple-700 bg-purple-100 px-1.5 py-0.2 rounded">
                    Escalation
                  </span>
                ) : scen.id === 'SCEN-03' ? (
                  <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                    Decline
                  </span>
                ) : scen.id === 'SCEN-05' ? (
                  <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                    Biometric
                  </span>
                ) : (
                  <span className="text-[10px] uppercase font-bold text-blue-700 bg-blue-100 px-1.5 py-0.2 rounded">
                    Timeout
                  </span>
                )}
              </div>
              <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{scen.title}</h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">{scen.participantPersona}</p>
            </button>
          ))}
        </div>

        {/* Active Scenario Deep-Dive Card */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Incident Context</span>
            <h4 className="text-sm font-bold text-slate-900">{activeScenario.title}</h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium bg-white p-3 rounded-lg border border-slate-200">
              {activeScenario.contextDescription}
            </p>
          </div>

          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-xs text-blue-900 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Official Mandated Next Step: </strong>
              <span>{activeScenario.officialMandatedAction}</span>
              {activeScenario.tatDays && (
                <span className="ml-1 font-bold text-blue-800">
                  (Regulatory Auto-Reversal Window: T+{activeScenario.tatDays} days)
                </span>
              )}
            </div>
          </div>

          {/* Side-by-Side Journey Execution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Standard Existing Journey */}
            <div className="bg-white rounded-xl border border-rose-200 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-rose-100 pb-2">
                <span className="font-bold text-rose-900 text-xs flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  Standard Existing User Journey
                </span>
                <span className="text-[10px] text-rose-700 font-medium">Without Guided Co-Pilot</span>
              </div>

              <ol className="space-y-2 text-xs text-slate-700">
                {activeScenario.traditionalPathSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-rose-600 bg-rose-50 rounded-full w-4 h-4 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="text-xs">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="p-2.5 bg-rose-50 rounded-lg text-[11px] text-rose-900 font-medium border border-rose-100">
                <strong>Demonstrated Downside Risk: </strong>
                {activeScenario.traditionalRisk}
              </div>
            </div>

            {/* SaathiFlow Guided Journey */}
            <div className="bg-white rounded-xl border border-emerald-300 p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                <span className="font-bold text-emerald-950 text-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  SaathiFlow Guided Navigation Path
                </span>
                <span className="text-[10px] text-emerald-700 font-medium">Voice in {activeVoiceLanguage}</span>
              </div>

              <ol className="space-y-2 text-xs text-slate-800">
                {activeScenario.saathiFlowPathSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-emerald-700 bg-emerald-100 rounded-full w-4 h-4 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="text-xs">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="p-2.5 bg-emerald-50 rounded-lg text-[11px] text-emerald-950 font-medium border border-emerald-200">
                <strong>Demonstrated Mitigation: </strong>
                {activeScenario.saathiFlowMitigation}
              </div>

              {activeScenario.isFraudIncident && (
                <div className="p-2.5 bg-red-600 text-white rounded-lg text-xs font-semibold flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <PhoneCall className="w-4 h-4" /> Urgent Helpline 1930 Direct Trigger
                  </span>
                  <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded">Golden Hour Active</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
