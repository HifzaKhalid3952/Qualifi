import React from 'react';
import { X, Trash2, CheckCircle2, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { Qualification } from '../types/qualification';

interface CompareModalProps {
  qualifications: Qualification[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onSelectQual: (qual: Qualification) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  qualifications,
  onClose,
  onRemove,
  onClear,
  onSelectQual,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto border border-slate-300"
        role="dialog"
      >
        {/* Header */}
        <div className="bg-[#0b1a30] text-white p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Qualification Comparison Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Compare credit weightings, RQF levels, unit quantities, and university top-up progression routes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {qualifications.length > 0 && (
              <button
                onClick={onClear}
                className="text-xs text-slate-300 hover:text-white underline cursor-pointer"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Table */}
        <div className="p-6 overflow-y-auto overflow-x-auto text-xs text-slate-800">
          {qualifications.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <Award className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">No qualifications selected for comparison.</p>
              <p className="text-xs text-slate-500 mt-1">
                Click the "Compare" button on any qualification to view them side-by-side.
              </p>
            </div>
          ) : (
            <table className="w-full border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 divide-x divide-slate-200 border-b border-slate-200">
                  <th className="p-3 text-left font-bold text-slate-700 w-1/4">Specification Attribute</th>
                  {qualifications.map((q) => (
                    <th key={q.id} className="p-3 text-left font-semibold text-slate-900 w-1/3">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-xs font-bold text-[#0b1a30] line-clamp-2">{q.title}</span>
                        <button
                          onClick={() => onRemove(q.id)}
                          className="text-slate-400 hover:text-red-600 p-0.5 rounded cursor-pointer"
                          title="Remove from comparison"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="divide-x divide-slate-200">
                  <td className="p-3 font-semibold text-slate-600 bg-slate-50/50">RQF Level</td>
                  {qualifications.map((q) => (
                    <td key={q.id} className="p-3 font-bold text-[#0b1a30]">
                      Level {q.level}
                    </td>
                  ))}
                </tr>

                <tr className="divide-x divide-slate-200">
                  <td className="p-3 font-semibold text-slate-600 bg-slate-50/50">Ofqual QN Code</td>
                  {qualifications.map((q) => (
                    <td key={q.id} className="p-3 font-mono text-slate-700 font-medium">
                      {q.ofqualQN}
                    </td>
                  ))}
                </tr>

                <tr className="divide-x divide-slate-200">
                  <td className="p-3 font-semibold text-slate-600 bg-slate-50/50">Credit Weighting</td>
                  {qualifications.map((q) => (
                    <td key={q.id} className="p-3 font-bold text-slate-900">
                      {q.credits} Credits
                    </td>
                  ))}
                </tr>

                <tr className="divide-x divide-slate-200">
                  <td className="p-3 font-semibold text-slate-600 bg-slate-50/50">Total Qual Time (TQT)</td>
                  {qualifications.map((q) => (
                    <td key={q.id} className="p-3 text-slate-700">
                      {q.tqt} Hours
                    </td>
                  ))}
                </tr>

                <tr className="divide-x divide-slate-200">
                  <td className="p-3 font-semibold text-slate-600 bg-slate-50/50">Guided Learning (GLH)</td>
                  {qualifications.map((q) => (
                    <td key={q.id} className="p-3 text-slate-700">
                      {q.glh} Hours
                    </td>
                  ))}
                </tr>

                <tr className="divide-x divide-slate-200">
                  <td className="p-3 font-semibold text-slate-600 bg-slate-50/50">Total Units</td>
                  {qualifications.map((q) => (
                    <td key={q.id} className="p-3 text-slate-700">
                      {q.units.length} Units ({q.units.filter((u) => u.isMandatory).length} Mandatory)
                    </td>
                  ))}
                </tr>

                <tr className="divide-x divide-slate-200">
                  <td className="p-3 font-semibold text-slate-600 bg-slate-50/50">Assessment Format</td>
                  {qualifications.map((q) => (
                    <td key={q.id} className="p-3 text-slate-700">
                      100% Coursework & Assignments (No Exams)
                    </td>
                  ))}
                </tr>

                <tr className="divide-x divide-slate-200">
                  <td className="p-3 font-semibold text-slate-600 bg-slate-50/50">Primary Degree Pathway</td>
                  {qualifications.map((q) => (
                    <td key={q.id} className="p-3 text-emerald-800 font-medium">
                      {q.progression[0]}
                    </td>
                  ))}
                </tr>

                <tr className="divide-x divide-slate-200">
                  <td className="p-3 font-semibold text-slate-600 bg-slate-50/50">Full Details</td>
                  {qualifications.map((q) => (
                    <td key={q.id} className="p-3">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectQual(q);
                        }}
                        className="px-3 py-1.5 bg-[#0b1a30] text-white rounded text-xs font-semibold hover:bg-[#162e55] transition-colors cursor-pointer w-full text-center"
                      >
                        View Full Specification
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
