import React, { useState } from 'react';
import { Qualification } from '../types/qualification';
import { ArrowLeft, Download, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

interface QualificationPageViewProps {
  qualification: Qualification;
  onBack: () => void;
  onDownloadSpec: (qual: Qualification, docType?: 'spec' | 'cass' | 'brochure') => void;
  onOpenEnquiry: (qualTitle?: string) => void;
}

export const QualificationPageView: React.FC<QualificationPageViewProps> = ({
  qualification,
  onBack,
  onDownloadSpec,
  onOpenEnquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'Specifications' | 'Overview' | 'Units' | 'Outcomes' | 'Requirements'>('Specifications');

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      {/* Breadcrumb strip */}
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-3">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <button onClick={onBack} className="hover:text-[#c98d00] font-medium cursor-pointer">
              Qualifications
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-medium truncate max-w-md">
              {qualification.title}
            </span>
          </div>

          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs font-semibold text-[#0c1527] hover:text-[#c98d00] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Qualifications</span>
          </button>
        </div>
      </div>

      {/* Main Content Area - Exact layout from Image 3 */}
      <div className="max-w-[1200px] mx-auto px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: The Specifications Table / Tab Content */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
              {activeTab}
            </h1>

            {/* TAB 1: Specifications (Exact Table from Image 3 & Screenshot) */}
            {activeTab === 'Specifications' && (
              <div className="space-y-10">
                <div className="border border-[#e2e8f0] rounded-[2px] overflow-hidden text-[13.5px]">
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-[#e2e8f0]">
                      <tr className="bg-[#f8fafc]">
                        <td className="p-4 font-semibold text-[#222222] w-2/5 border-r border-[#e2e8f0]">
                          Qualification title:
                        </td>
                        <td className="p-4 text-[#333333] font-medium">
                          {qualification.title}
                        </td>
                      </tr>

                      <tr className="bg-white">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          Qualification type:
                        </td>
                        <td className="p-4 text-[#333333]">
                          {qualification.qualificationType || 'Vocational Related Qualification (Higher Education)'}
                        </td>
                      </tr>

                      <tr className="bg-[#f8fafc]">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          Level:
                        </td>
                        <td className="p-4 text-[#333333] font-bold">
                          {qualification.level}
                        </td>
                      </tr>

                      <tr className="bg-white">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          Accreditation status:
                        </td>
                        <td className="p-4 text-emerald-700 font-semibold">
                          {qualification.accreditationStatus || 'Accredited'}
                        </td>
                      </tr>

                      <tr className="bg-[#f8fafc]">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          Credit Equivalency:
                        </td>
                        <td className="p-4 text-[#333333] font-bold">
                          {qualification.credits}
                        </td>
                      </tr>

                      <tr className="bg-white">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          Qualification number (RQF):
                        </td>
                        <td className="p-4 font-mono font-semibold text-[#222222]">
                          {qualification.ofqualQN}
                        </td>
                      </tr>

                      <tr className="bg-[#f8fafc]">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          Progression routes:
                        </td>
                        <td className="p-4 text-[#333333] leading-relaxed">
                          {qualification.progression[0] || 'Qualifi Level 4 Certificate or first of 3 year Honours Degree at UK University'}
                        </td>
                      </tr>

                      <tr className="bg-white">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          Availability:
                        </td>
                        <td className="p-4 text-[#333333]">
                          {qualification.availability || 'UK and international'}
                        </td>
                      </tr>

                      {/* Row 9: Centre Specification */}
                      <tr className="bg-[#f8fafc]">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          Centre Specification:
                        </td>
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => onDownloadSpec(qualification, 'spec')}
                            style={{ color: '#c98d00' }}
                            className="font-normal hover:underline cursor-pointer"
                          >
                            Click here to download
                          </button>
                        </td>
                      </tr>

                      {/* Row 10: CASS Strategy (Exact from Screenshot) */}
                      <tr className="bg-white">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          CASS Strategy:
                        </td>
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => onDownloadSpec(qualification, 'cass')}
                            style={{ color: '#c98d00' }}
                            className="font-normal hover:underline cursor-pointer"
                          >
                            Click here to view
                          </button>
                        </td>
                      </tr>

                      {/* Row 11: Course Brochure (Exact from Screenshot) */}
                      <tr className="bg-[#f8fafc]">
                        <td className="p-4 font-semibold text-[#222222] border-r border-[#e2e8f0]">
                          Course Brochure:
                        </td>
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => onDownloadSpec(qualification, 'brochure')}
                            style={{ color: '#c98d00' }}
                            className="font-normal hover:underline cursor-pointer"
                          >
                            Click here to download
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Qualification Overview Section below table - Exact from Screenshot */}
                <div className="pt-2 space-y-4">
                  <h2 className="text-[22px] sm:text-[24px] font-bold text-[#222222] tracking-tight">
                    Qualification Overview
                  </h2>
                  <p className="text-[14.5px] sm:text-[15px] text-[#444444] leading-[1.65]">
                    {qualification.overview}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: Overview */}
            {activeTab === 'Overview' && (
              <div className="space-y-6 text-[14.5px] leading-relaxed text-[#444444]">
                <p>{qualification.overview}</p>

                <div className="pt-2">
                  <h3 className="font-bold text-[#222222] text-base mb-3">Qualification Aims:</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    {qualification.aims.map((aim, idx) => (
                      <li key={idx}>{aim}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 3: Units */}
            {activeTab === 'Units' && (
              <div className="space-y-4">
                <div className="text-xs text-slate-500 mb-2">
                  Total Units: <strong>{qualification.units.length}</strong> | Total Credits: <strong>{qualification.credits} Credits</strong>
                </div>

                <div className="divide-y divide-[#e2e8f0] border border-[#e2e8f0] rounded-[2px] overflow-hidden text-xs">
                  {qualification.units.map((unit) => (
                    <div key={unit.code} className="p-4 hover:bg-slate-50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">
                            {unit.code}
                          </span>
                          <span className="font-bold text-[#222222] text-[13.5px]">
                            {unit.title}
                          </span>
                        </div>
                        <div className="text-slate-500 font-medium">
                          {unit.credits} Credits · GLH: {unit.glh} hrs · {unit.isMandatory ? 'Mandatory' : 'Elective'}
                        </div>
                      </div>
                      <p className="text-slate-600 mt-1 leading-relaxed text-[12.5px]">
                        {unit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: Outcomes */}
            {activeTab === 'Outcomes' && (
              <div className="space-y-4 text-[14px] text-[#444444] leading-relaxed">
                <p>
                  Upon successful completion of the {qualification.title}, learners will demonstrate mastery across theoretical frameworks, operational methodologies, and analytical evaluation appropriate to RQF Level {qualification.level}.
                </p>
                <div className="bg-slate-50 p-4 border border-slate-200 rounded-[2px] space-y-2">
                  <h4 className="font-bold text-[#222222] text-sm">Assessment Evidence:</h4>
                  <p className="text-xs text-slate-600">
                    {qualification.assessmentFormat}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 5: Requirements */}
            {activeTab === 'Requirements' && (
              <div className="space-y-4 text-[14px] text-[#444444] leading-relaxed">
                <h3 className="font-bold text-[#222222] text-base mb-2">Entry Requirements & Eligibility:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  {qualification.entryRequirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sidebar Widget Card - Exact from Image 3 */}
          <aside className="lg:col-span-4 sticky top-24">
            <div className="bg-[#f7f7f7] border border-[#e5e5e5] rounded-[4px] p-6 space-y-6">
              {/* Qualification title */}
              <h2 className="text-[19px] sm:text-[21px] font-bold text-[#222222] leading-snug">
                {qualification.title}
              </h2>

              {/* Navigation Menu Tabs - Exact from Image 3 */}
              <div className="divide-y divide-[#e2e8f0] border-t border-b border-[#e2e8f0] text-[13.5px]">
                {(['Specifications', 'Overview', 'Units', 'Outcomes', 'Requirements'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full py-2.5 text-left transition-colors cursor-pointer flex items-center justify-between ${
                      activeTab === tab
                        ? 'font-bold text-[#222222]'
                        : 'text-[#555555] hover:text-[#222222]'
                    }`}
                  >
                    <span>{tab}</span>
                    {activeTab === tab && <span className="w-1.5 h-1.5 rounded-full bg-[#c98d00]" />}
                  </button>
                ))}
              </div>

              {/* Mustard/Gold Pill Button - FIND OUT MORE - Exact from Image 3 */}
              <div>
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(qualification.title)}
                  className="w-full bg-[#c98d00] hover:bg-[#b07b00] text-white font-bold tracking-wider text-[13px] uppercase py-3 px-6 rounded-full transition-colors cursor-pointer select-none text-center shadow-xs"
                >
                  FIND OUT MORE
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
