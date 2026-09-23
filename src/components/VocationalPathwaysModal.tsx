import React, { useState } from 'react';
import { X, GraduationCap, ArrowRight, CheckCircle2, ChevronRight, BookOpen, Layers, Award, Sparkles, Building2 } from 'lucide-react';
import { RQF_LEVELS_INFO, UNIVERSITY_PATHWAYS } from '../data/qualificationsData';

interface VocationalPathwaysModalProps {
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const VocationalPathwaysModal: React.FC<VocationalPathwaysModalProps> = ({
  onClose,
  onOpenEnquiry,
}) => {
  const [selectedPathwayTab, setSelectedPathwayTab] = useState<'undergrad' | 'postgrad' | 'doctoral'>('postgrad');

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto border border-slate-300"
        role="dialog"
      >
        {/* Header */}
        <div className="bg-[#0b1a30] text-white p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Regulated Qualifications Framework (RQF)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Qualifi Vocational & University Degree Pathways
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Understand how Qualifi Ofqual-regulated diplomas map directly to British university degrees,
              enabling fast-track graduation with substantial tuition savings.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Pathway Stage Selector Tabs */}
        <div className="border-b border-slate-200 bg-slate-50 px-6 flex items-center gap-3 overflow-x-auto text-xs font-semibold shrink-0">
          <button
            onClick={() => setSelectedPathwayTab('postgrad')}
            className={`py-3.5 px-4 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              selectedPathwayTab === 'postgrad'
                ? 'border-[#0b1a30] text-[#0b1a30] font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Postgraduate Pathway (Level 7 → MBA / MSc Top-Up)
          </button>
          <button
            onClick={() => setSelectedPathwayTab('undergrad')}
            className={`py-3.5 px-4 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              selectedPathwayTab === 'undergrad'
                ? 'border-[#0b1a30] text-[#0b1a30] font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Undergraduate Degree Pathway (Levels 3, 4, 5 → BA / BSc Top-Up)
          </button>
          <button
            onClick={() => setSelectedPathwayTab('doctoral')}
            className={`py-3.5 px-4 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              selectedPathwayTab === 'doctoral'
                ? 'border-[#0b1a30] text-[#0b1a30] font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Doctoral Pathway (Level 8 → DBA / PhD Thesis)
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm text-slate-700">
          {/* Selected Pathway Visual Step Flow */}
          {selectedPathwayTab === 'postgrad' && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Master of Business Administration (MBA) & Master of Science (MSc) Route
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Fast-Track 6 to 9 Month British Master's Top-Up
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A traditional UK Master's degree consists of 180 credits (120 taught credits + 60 credit dissertation).
                  By completing the Qualifi Level 7 Diploma (120 credits), learners are awarded full exemption from all
                  taught modules and enter directly into the final 60-credit dissertation stage with UK universities.
                </p>

                {/* 2-Step Progression Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-5 rounded-lg border-2 border-[#0b1a30] shadow-xs relative">
                    <span className="absolute -top-3 left-4 bg-[#0b1a30] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                      Step 1 · 120 Credits
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">
                      Qualifi Level 7 Postgraduate Diploma
                    </h4>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Duration: 6 to 9 months flexible study</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>100% assignment based (no exams)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Subjects: Strategic Management, IT, Healthcare, Law</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg border-2 border-emerald-600 shadow-xs relative">
                    <span className="absolute -top-3 left-4 bg-emerald-700 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                      Step 2 · 60 Credits
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">
                      UK University Master's Dissertation
                    </h4>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Duration: 4 to 6 months dissertation/project</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Online or on-campus supervisor support</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Degree awarded by UK partner university</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Articulation Universities */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Approved Master’s Top-Up University Articulations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {UNIVERSITY_PATHWAYS.map((uni, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="font-bold text-slate-900 text-sm mb-1">{uni.university}</div>
                      <div className="text-[11px] text-slate-500 mb-2">{uni.established}</div>
                      <div className="space-y-1 text-slate-700 border-t border-slate-200/80 pt-2">
                        {uni.routes.map((r, rIdx) => (
                          <div key={rIdx} className="flex justify-between items-center text-[11px]">
                            <span>{r.to}</span>
                            <span className="font-mono text-slate-500">{r.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedPathwayTab === 'undergrad' && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Bachelor's Degree (BA / BSc Hons) 3-Stage Progression
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  From Foundation / High School to Full UK Honours Degree
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Complete Qualifi Level 4 and Level 5 Diplomas to gain 240 credits (equivalent to Year 1 & 2 of a UK degree),
                  then top-up with a 1-year final bachelor's degree program.
                </p>

                {/* 3 Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-4 rounded border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block text-sm mb-1">Year 1: Level 4</span>
                    <span className="text-slate-500 block mb-2">120 Credits (CertHE Level)</span>
                    <p className="text-slate-600">
                      Introduces core principles in Business, IT, Cyber, or Health. Builds foundational management competence.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block text-sm mb-1">Year 2: Level 5</span>
                    <span className="text-slate-500 block mb-2">120 Credits (DipHE Level)</span>
                    <p className="text-slate-600">
                      Intermediate operational management and specialization. Leads directly to final year university entry.
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded border border-emerald-300 text-xs">
                    <span className="font-bold text-emerald-900 block text-sm mb-1">Year 3: Degree Top-Up</span>
                    <span className="text-emerald-700 block mb-2">120 Credits (BA/BSc Hons)</span>
                    <p className="text-emerald-800">
                      Final year top-up at university. Graduate with full UK Bachelor's degree and participate in graduation ceremonies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedPathwayTab === 'doctoral' && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Doctoral Degree Pathway (DBA / PhD)
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Qualifi Level 8 Diploma in Strategic Management and Leadership
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Level 8 sits at the same academic level as a Doctorate. It provides 160 credits of doctoral-level
                  research methodology and leadership theories, providing advanced standing entry into Doctor of Business
                  Administration (DBA) thesis phases with UK universities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block text-sm mb-1">Phase 1: Qualifi Level 8 Diploma</span>
                    <span className="text-slate-500 block mb-2">160 Credits · 12 to 18 Months</span>
                    <p className="text-slate-600">
                      Covers 6 doctoral units including advanced research methodology, theoretical paradigms, and literature critique.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block text-sm mb-1">Phase 2: University Doctoral Thesis</span>
                    <span className="text-slate-500 block mb-2">Doctor of Business Administration</span>
                    <p className="text-slate-600">
                      Complete original doctoral thesis supervised by university faculty to achieve the title of Doctor (Dr).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* RQF Full Equivalency Reference Matrix */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Official Regulated Qualifications Framework (RQF) Level Matrix
            </h4>
            <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0b1a30] text-white">
                    <th className="p-3">RQF Level</th>
                    <th className="p-3">Qualifi Qualification</th>
                    <th className="p-3">UK Higher Education Equivalent</th>
                    <th className="p-3">Credits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {RQF_LEVELS_INFO.map((item) => (
                    <tr key={item.level} className="hover:bg-slate-50/70">
                      <td className="p-3 font-bold text-[#0b1a30]">Level {item.level}</td>
                      <td className="p-3 font-medium text-slate-900">{item.title}</td>
                      <td className="p-3 text-slate-600">{item.rqfEquivalent}</td>
                      <td className="p-3 font-mono text-slate-700">{item.creditsTypical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            All pathways are subject to partner university admission requirements and English language proficiency.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry();
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0b1a30] hover:bg-[#162e55] rounded transition-colors cursor-pointer"
            >
              Consult an Academic Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
