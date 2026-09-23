import React, { useRef } from 'react';
import { X, Printer, FileText } from 'lucide-react';
import { Qualification } from '../types/qualification';

interface SpecificationDocModalProps {
  qualification: Qualification | null;
  docType?: 'spec' | 'cass' | 'brochure';
  onClose: () => void;
}

export const SpecificationDocModal: React.FC<SpecificationDocModalProps> = ({
  qualification,
  docType = 'spec',
  onClose,
}) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!qualification) return null;

  const handlePrint = () => {
    window.print();
  };

  const getDocTitle = () => {
    switch (docType) {
      case 'cass':
        return 'Qualifi CASS Strategy – Centre Assessment Standards Scrutiny';
      case 'brochure':
        return 'Official Course Brochure & Syllabus';
      default:
        return 'Official Qualification Specification Document';
    }
  };

  const getDocBadge = () => {
    switch (docType) {
      case 'cass':
        return 'CASS STRATEGY (OFQUAL H2)';
      case 'brochure':
        return 'COURSE BROCHURE & SYLLABUS';
      default:
        return 'PROGRAMME SPECIFICATION';
    }
  };

  const getDocRef = () => {
    switch (docType) {
      case 'cass':
        return `QUA-CASS-H2-${qualification.ofqualQN.replace(/\//g, '-')}`;
      case 'brochure':
        return `QUA-BROCHURE-${qualification.level}-${qualification.id.substring(0, 8).toUpperCase()}`;
      default:
        return `QUA-SPEC-${qualification.level}-${qualification.id.substring(0, 8).toUpperCase()}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[94vh] flex flex-col overflow-hidden my-auto border border-slate-300"
        role="dialog"
      >
        {/* Document Viewer Toolbar */}
        <div className="bg-[#222222] text-white px-6 py-3.5 flex items-center justify-between gap-4 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#F9AF19]" />
            <span className="text-xs font-semibold tracking-wide uppercase">
              {getDocTitle()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-white text-slate-900 hover:bg-slate-100 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Specification Document Body */}
        <div 
          ref={printRef}
          className="p-8 sm:p-12 overflow-y-auto bg-white text-slate-800 space-y-8 font-sans print:p-0 print:m-0"
        >
          {/* Document Header */}
          <div className="border-b-2 border-[#222222] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <div className="text-3xl font-black font-serif text-[#222222] tracking-tight">
                QUALIFI
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-600 mt-1">
                Success Through Learning Recognised Worldwide
              </div>
              <div className="text-[11px] text-slate-500">
                UK Awarding Organisation Recognised by Ofqual (RN5354)
              </div>
            </div>

            <div className="text-right sm:text-right text-xs space-y-0.5">
              <span className="inline-block bg-[#222222] text-[#F9AF19] text-[11px] font-bold px-2.5 py-1 rounded">
                {getDocBadge()}
              </span>
              <div className="text-slate-500 font-mono text-[11px] pt-1">
                Document Ref: {getDocRef()}
              </div>
              <div className="text-slate-500 text-[10px]">
                Valid for Academic Year 2024–2027
              </div>
            </div>
          </div>

          {/* Title Box */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
              Ofqual Regulated Qualification
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
              {qualification.title}
            </h1>
            <div className="text-xs text-slate-600 mt-2 font-mono">
              Ofqual Qualification Number (QN): <strong className="text-slate-900">{qualification.ofqualQN}</strong>
            </div>
          </div>

          {/* DOC TYPE 1: CASS STRATEGY */}
          {docType === 'cass' && (
            <div className="space-y-6 text-xs text-slate-700 leading-relaxed">
              <div>
                <h2 className="text-sm font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                  1. Regulatory Framework & Condition H2 Scope
                </h2>
                <p>
                  This Centre Assessment Standards Scrutiny (CASS) strategy outlines the requirements and processes established by Qualifi Ltd in accordance with Ofqual General Condition of Recognition H2. The strategy ensures that assessment standards for <strong>{qualification.title} ({qualification.ofqualQN})</strong> are consistently and rigorously applied across all approved delivery centres globally.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                  2. Centre Risk Profiling & Monitoring Bands
                </h2>
                <p className="mb-2">
                  Qualifi evaluates delivery centres into three risk tiers based on historical moderation reports, assessor qualifications, cohort size, and internal quality assurance (IQA) governance:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded">
                    <strong className="text-emerald-900 block font-bold">Band A (Low Risk)</strong>
                    <span className="text-[11px] text-emerald-800">
                      Standard sampling with eligibility for Direct Claims Status (DCS). Annual external verifier sampling audits.
                    </span>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded">
                    <strong className="text-amber-900 block font-bold">Band B (Medium Risk)</strong>
                    <span className="text-[11px] text-amber-800">
                      Increased sample size (minimum 25% of student portfolios). Pre-certification External Quality Assurer review.
                    </span>
                  </div>
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded">
                    <strong className="text-rose-900 block font-bold">Band C (High Risk / New Centre)</strong>
                    <span className="text-[11px] text-rose-800">
                      100% portfolio audit on first cohort. Mandatory standardisation workshop before certificate issuance.
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                  3. External Quality Assurance (EQA) Sampling Strategy
                </h2>
                <p>
                  Qualifi EQA sampling utilizes a square root + multi-factor methodology. External Verifiers inspect portfolios representing all grades (Pass/Merit/Distinction or Pass/Fail), all active satellite sites, all course assessors, and borderlines. Verifiers cross-examine candidate authentications, plagiarism reports (Turnitin/Copycatch), and marked assignments against RQF Level {qualification.level} assessment criteria.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                  4. Direct Claims Status (DCS) Governance
                </h2>
                <p>
                  Direct Claims Status allows approved centres to claim candidate certificates prior to external verification visits. To achieve and maintain DCS for this qualification:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                  <li>Centre must achieve two consecutive satisfactory EQA reports with zero major non-conformances.</li>
                  <li>Assessor team must hold recognized assessing awards (e.g. CAVA, A1, D32/33) or equivalent industry mastery.</li>
                  <li>Internal Quality Assurer (IQA) must hold formal verifying qualifications (e.g. TAQA, V1, D34).</li>
                  <li>Annual desk-based surveillance and random unannounced batch verification audits by Qualifi.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                  5. Authenticity, Malpractice & AI Usage Regulations
                </h2>
                <p>
                  Centres must enforce signed learner declarations confirming sole authorship of coursework. The uncredited use of artificial intelligence generators or commercial essay-writing services constitutes severe assessment malpractice, triggering immediate suspension of centre registration under Qualifi Malpractice and Maladministration Policies.
                </p>
              </div>
            </div>
          )}

          {/* DOC TYPE 2: COURSE BROCHURE */}
          {docType === 'brochure' && (
            <div className="space-y-6 text-xs text-slate-700 leading-relaxed">
              <div>
                <h2 className="text-sm font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                  Course Overview & Strategic Value
                </h2>
                <p className="text-[13px] leading-relaxed">
                  {qualification.overview}
                </p>
              </div>

              {/* Key Highlights Table */}
              <div>
                <h2 className="text-sm font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                  Key Qualification Specifications
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">RQF Level</span>
                    <span className="font-bold text-slate-900 text-sm">Level {qualification.level}</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">Credit Value</span>
                    <span className="font-bold text-slate-900 text-sm">{qualification.credits} Credits</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">Total Qual Time</span>
                    <span className="font-bold text-slate-900 text-sm">{qualification.tqt} Hours</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">Guided Learning</span>
                    <span className="font-bold text-slate-900 text-sm">{qualification.glh} Hours</span>
                  </div>
                </div>
              </div>

              {/* Units Curriculum Breakdown */}
              <div>
                <h2 className="text-sm font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                  Units & Syllabus Structure
                </h2>
                <div className="border border-slate-200 rounded overflow-hidden">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 font-semibold text-slate-700">
                        <th className="p-2.5">Code</th>
                        <th className="p-2.5">Unit Title</th>
                        <th className="p-2.5">Credits</th>
                        <th className="p-2.5">GLH</th>
                        <th className="p-2.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {qualification.units.map((unit) => (
                        <tr key={unit.code}>
                          <td className="p-2.5 font-mono font-semibold">{unit.code}</td>
                          <td className="p-2.5 font-medium">{unit.title}</td>
                          <td className="p-2.5">{unit.credits}</td>
                          <td className="p-2.5">{unit.glh}</td>
                          <td className="p-2.5">
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                              {unit.isMandatory ? 'Mandatory' : 'Optional'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* University Progression */}
              <div>
                <h2 className="text-sm font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                  University Progression & Articulation Pathways
                </h2>
                <p className="mb-2">
                  Upon completion of this qualification, learners are eligible for direct advancement into Bachelor’s or Master’s degree programmes at leading universities across the United Kingdom and internationally.
                </p>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded font-medium text-amber-900">
                  {qualification.progression[0] || 'Direct progression to advanced standing degree at partner UK universities.'}
                </div>
              </div>
            </div>
          )}

          {/* DOC TYPE 3: PROGRAMME SPECIFICATION (Default) */}
          {docType === 'spec' && (
            <>
              {/* Key Facts Summary Table */}
              <div>
                <h2 className="text-xs font-bold text-[#222222] uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
                  Section 1: Qualification Overview & Technical Data
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">RQF Level</span>
                    <span className="font-bold text-slate-900 text-sm">Level {qualification.level}</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">Total Credit Value</span>
                    <span className="font-bold text-slate-900 text-sm">{qualification.credits} Credits</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">Total Qual Time (TQT)</span>
                    <span className="font-bold text-slate-900 text-sm">{qualification.tqt} Hours</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">Guided Learning (GLH)</span>
                    <span className="font-bold text-slate-900 text-sm">{qualification.glh} Hours</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">Grading Structure</span>
                    <span className="font-bold text-slate-900 text-sm">{qualification.grading}</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded">
                    <span className="text-slate-500 block">Assessment Mode</span>
                    <span className="font-bold text-slate-900 text-sm">Assignment Portfolio</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded sm:col-span-2">
                    <span className="text-slate-500 block">UK Sector Subject Area</span>
                    <span className="font-bold text-slate-900 text-sm">{qualification.sector}</span>
                  </div>
                </div>
              </div>

              {/* Rationale & Aims */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1">
                  Section 2: Qualification Aims & Target Learning Rationale
                </h2>
                <p className="text-xs leading-relaxed text-slate-700">
                  {qualification.overview}
                </p>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-semibold text-xs text-slate-800 block mb-2">Key Intended Learning Aims:</span>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                    {qualification.aims.map((aim, idx) => (
                      <li key={idx}>{aim}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Units Table */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1">
                  Section 3: Mandatory & Elective Unit Structure
                </h2>
                <div className="border border-slate-200 rounded overflow-hidden">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 font-semibold text-slate-700">
                        <th className="p-2.5">Unit Code</th>
                        <th className="p-2.5">Unit Title</th>
                        <th className="p-2.5">Level</th>
                        <th className="p-2.5">Credits</th>
                        <th className="p-2.5">GLH</th>
                        <th className="p-2.5">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {qualification.units.map((unit) => (
                        <tr key={unit.code}>
                          <td className="p-2.5 font-mono font-semibold text-slate-800">{unit.code}</td>
                          <td className="p-2.5 font-medium text-slate-900">{unit.title}</td>
                          <td className="p-2.5 text-slate-600">{unit.level}</td>
                          <td className="p-2.5 text-slate-600">{unit.credits}</td>
                          <td className="p-2.5 text-slate-600">{unit.glh} hrs</td>
                          <td className="p-2.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                              unit.isMandatory ? 'bg-slate-200 text-slate-900' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {unit.isMandatory ? 'Mandatory' : 'Optional'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Assessment & Quality Assurance */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold text-[#222222] uppercase tracking-wider border-b border-slate-200 pb-1">
                  Section 4: Assessment & External Quality Assurance
                </h2>
                <p className="text-xs leading-relaxed text-slate-700">
                  Assessment is achieved through 100% evidence-based coursework, assignments, and practical business projects.
                  There are no written examination papers. All centres must have an approved Internal Quality Assurer (IQA)
                  to verify grading consistency before submission to Qualifi for External Quality Assurance (EQA) sign-off.
                </p>
              </div>
            </>
          )}

          {/* Document Footer */}
          <div className="pt-8 border-t border-slate-200 text-[10px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>
              © Qualifi Ltd · Registered in England and Wales · Company No. 04619981
            </div>
            <div className="flex items-center gap-3">
              <span>Ofqual RN5354</span>
              <span>·</span>
              <span>www.qualifi.net</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
