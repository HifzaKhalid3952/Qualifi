import React, { useState } from 'react';
import { X, Award, BookOpen, Clock, FileText, CheckCircle2, ChevronRight, GraduationCap, Building2, Download, Printer, Share2, Layers, Check } from 'lucide-react';
import { Qualification } from '../types/qualification';

interface QualificationDetailModalProps {
  qualification: Qualification | null;
  onClose: () => void;
  onDownloadSpec: (qual: Qualification) => void;
  onOpenEnquiry: (qualTitle?: string) => void;
  onOpenCentres: () => void;
  onToggleCompare: (qual: Qualification) => void;
  isCompared: boolean;
}

export const QualificationDetailModal: React.FC<QualificationDetailModalProps> = ({
  qualification,
  onClose,
  onDownloadSpec,
  onOpenEnquiry,
  onOpenCentres,
  onToggleCompare,
  isCompared,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'units' | 'entry' | 'progression'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!qualification) return null;

  const totalMandatoryCredits = qualification.units
    .filter((u) => u.isMandatory)
    .reduce((acc, u) => acc + u.credits, 0);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto border border-slate-300 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="bg-[#0b1a30] text-white p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-emerald-600/90 text-white font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wide">
                RQF Level {qualification.level}
              </span>
              <span className="text-slate-300">|</span>
              <span className="font-mono text-slate-300">Ofqual QN: {qualification.ofqualQN}</span>
              <span className="text-slate-300">|</span>
              <span className="text-amber-300 font-semibold">{qualification.credits} Credits</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-300">TQT: {qualification.tqt} Hours</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              {qualification.title}
            </h2>

            <div className="text-xs text-slate-300 flex items-center gap-2 pt-0.5">
              <span>Sector: <strong className="text-white font-medium">{qualification.sector}</strong></span>
              <span>·</span>
              <span className="text-emerald-400 font-medium">✓ 100% Assignment Based (No Exams)</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close qualification details"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200 bg-slate-50 px-6 flex items-center gap-2 overflow-x-auto text-xs font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#0b1a30] text-[#0b1a30]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Overview & Aims
          </button>
          <button
            onClick={() => setActiveTab('units')}
            className={`py-3 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'units'
                ? 'border-[#0b1a30] text-[#0b1a30]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <span>Unit Structure & Syllabus</span>
            <span className="text-[10px] bg-slate-200 px-1.5 py-0.2 rounded-full">
              {qualification.units.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('entry')}
            className={`py-3 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'entry'
                ? 'border-[#0b1a30] text-[#0b1a30]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Entry Requirements & Assessment
          </button>
          <button
            onClick={() => setActiveTab('progression')}
            className={`py-3 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'progression'
                ? 'border-[#0b1a30] text-[#0b1a30]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Progression & University Top-Ups</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Qualification Overview
                </h4>
                <p className="leading-relaxed text-slate-700 text-sm">
                  {qualification.overview}
                </p>
              </div>

              {/* Key Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block">Total Credits</span>
                  <span className="text-lg font-bold text-slate-900">{qualification.credits} Credits</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Total Qual Time (TQT)</span>
                  <span className="text-lg font-bold text-slate-900">{qualification.tqt} Hours</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Guided Learning (GLH)</span>
                  <span className="text-lg font-bold text-slate-900">{qualification.glh} Hours</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Grading Model</span>
                  <span className="text-lg font-bold text-slate-900">{qualification.grading}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Key Educational & Professional Aims
                </h4>
                <ul className="space-y-2">
                  {qualification.aims.map((aim, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{aim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regulatory Statement */}
              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded text-xs text-amber-900">
                <span className="font-semibold block mb-0.5">Ofqual Regulation & Standards</span>
                This qualification is fully regulated on the UK Regulated Qualifications Framework (RQF) under
                qualification number <strong>{qualification.ofqualQN}</strong> and is quality assured under
                Qualifi's Ofqual conditions of recognition.
              </div>
            </div>
          )}

          {activeTab === 'units' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>
                  Total Units: <strong>{qualification.units.length}</strong> (Mandatory:{' '}
                  {qualification.units.filter((u) => u.isMandatory).length})
                </span>
                <span>
                  Mandatory Credit Tally: <strong>{totalMandatoryCredits} / {qualification.credits} Credits</strong>
                </span>
              </div>

              <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden">
                {qualification.units.map((unit, idx) => (
                  <div key={unit.code} className="p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">
                          {unit.code}
                        </span>
                        <h5 className="font-semibold text-slate-900 text-sm">
                          {unit.title}
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-500">{unit.credits} Credits</span>
                        <span>·</span>
                        <span className="text-slate-500">GLH: {unit.glh} hrs</span>
                        <span>·</span>
                        <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                          unit.isMandatory ? 'bg-blue-50 text-blue-800 border border-blue-200' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {unit.isMandatory ? 'Mandatory' : 'Elective'}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {unit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'entry' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Entry Requirements & Eligibility
                </h4>
                <ul className="space-y-2.5">
                  {qualification.entryRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0b1a30] shrink-0 mt-2" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Assessment & Moderation Methodology
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {qualification.assessmentFormat}
                </p>
                <div className="pt-2 text-xs text-slate-500">
                  Evidence may include executive business reports, workplace presentations, case study evaluations,
                  and reflective journals. All assignments are internally marked by the approved centre and
                  externally verified by Qualifi.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'progression' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Career & University Academic Pathways
                </h4>
                <ul className="space-y-2.5">
                  {qualification.progression.map((prog, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                      <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{prog}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Recognized University Articulations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {qualification.universityPartners.map((partner, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-slate-800">{partner}</span>
                      <span className="text-emerald-700 text-[11px] font-medium">Top-Up Eligible</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded text-xs text-emerald-900 leading-relaxed">
                <strong className="block font-bold mb-1">Direct Master’s or Bachelor’s Top-Up Route</strong>
                Learners completing this diploma receive formal transcripts and certification with credit values,
                enabling direct admission into the final dissertation or top-up semester at UK universities.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompare(qualification)}
              className={`px-3 py-2 text-xs font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                isCompared
                  ? 'bg-emerald-100 text-emerald-900 font-semibold'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {isCompared ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Layers className="w-3.5 h-3.5" />}
              <span>{isCompared ? 'In Compare List' : 'Add to Compare'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="p-2 text-slate-500 hover:text-slate-800 rounded hover:bg-slate-200 transition-colors cursor-pointer"
              title="Copy share link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copiedLink && <span className="text-[11px] text-emerald-700">Link copied!</span>}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onDownloadSpec(qualification)}
              className="px-4 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Download Specification</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(qualification.title);
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0b1a30] hover:bg-[#162e55] rounded transition-colors cursor-pointer shadow-2xs"
            >
              Enquire to Study This Qualification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
