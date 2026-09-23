import React from 'react';
import { GraduationCap, ArrowRight, CheckCircle2, Globe, ExternalLink } from 'lucide-react';
import { UNIVERSITY_PATHWAYS } from '../../data/qualificationsData';

interface UniversityProgressionViewProps {
  onNavigateTab: (tab: string) => void;
  onOpenEnquiry: (subject?: string) => void;
}

export const UniversityProgressionView: React.FC<UniversityProgressionViewProps> = ({
  onNavigateTab,
  onOpenEnquiry,
}) => {
  return (
    <div className="w-full">
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-8 sm:py-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            University Progression
          </h1>
          <p className="mt-2 text-[14.5px] text-[#555555]">
            Formal university articulation agreements enabling direct entry to UK and USA Bachelor's and Master's top-ups
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-10 sm:py-14 space-y-12">
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-[22px] font-bold text-[#222222] tracking-tight">
            How University Top-Up Pathways Work
          </h2>
          <p className="text-[14.5px] text-[#444444] leading-[1.65]">
            Qualifi qualifications are accepted by UK and international universities for advanced standing and credit transfer. Because our Level 4, 5, 6, and 7 qualifications are regulated by Ofqual on the Regulated Qualifications Framework (RQF), each credit has formal academic equivalence:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 border border-[#e5e9ec] bg-white rounded-xs">
              <div className="text-xs font-bold text-[#b88c3a] uppercase tracking-wider mb-1">Qualifi Level 4 Diploma</div>
              <div className="text-[16px] font-bold text-[#222222]">Year 1 University Exemption</div>
              <p className="text-xs text-[#555555] mt-2 leading-relaxed">
                120 Credits equivalent to Certificate of Higher Education (CertHE). Enters into Year 2 of a UK Bachelor's degree.
              </p>
            </div>
            <div className="p-5 border border-[#e5e9ec] bg-white rounded-xs">
              <div className="text-xs font-bold text-[#b88c3a] uppercase tracking-wider mb-1">Qualifi Level 5 Diploma</div>
              <div className="text-[16px] font-bold text-[#222222]">Year 2 University Exemption</div>
              <p className="text-xs text-[#555555] mt-2 leading-relaxed">
                120 Credits equivalent to Diploma of Higher Education (DipHE) or Foundation Degree. Enters Final Year (Year 3) Top-Up.
              </p>
            </div>
            <div className="p-5 border border-[#e5e9ec] bg-white rounded-xs">
              <div className="text-xs font-bold text-[#b88c3a] uppercase tracking-wider mb-1">Qualifi Level 7 Diploma</div>
              <div className="text-[16px] font-bold text-[#222222]">MBA / MSc Top-Up Entry</div>
              <p className="text-xs text-[#555555] mt-2 leading-relaxed">
                120 Postgraduate Credits. Exempts from taught modules, requiring only the 60-credit research dissertation for full MBA.
              </p>
            </div>
          </div>
        </section>

        {/* University Articulation Agreements */}
        <section className="space-y-6">
          <h2 className="text-[22px] font-bold text-[#222222] tracking-tight">
            Partner Universities & Direct Top-Up Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UNIVERSITY_PATHWAYS.map((uni, idx) => (
              <div key={idx} className="border border-[#e5e9ec] p-6 bg-white rounded-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-[18px] text-[#222222]">{uni.university}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#666666] mt-1">
                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                        <span>{uni.established}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                      Articulation Routes:
                    </div>
                    {uni.routes.map((deg, i) => (
                      <div key={i} className="text-xs p-2.5 bg-[#fbfbfb] border border-[#f0f0f0] rounded-xs">
                        <div className="font-semibold text-[#222222]">{deg.to}</div>
                        <div className="text-[#666666] mt-0.5">Pre-requisite: {deg.from} ({deg.creditsNeeded})</div>
                        <div className="text-[#b88c3a] font-medium mt-0.5">Duration: {deg.duration}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e5e9ec] flex items-center justify-between">
                  <span className="text-xs text-[#555555]">{uni.logoText}</span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(`Progression enquiry for ${uni.university}`)}
                    className="text-xs font-bold text-black hover:underline cursor-pointer"
                  >
                    Enquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-black text-white p-8 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Have questions about your university progression?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Our academic advisors can guide you through entry requirements, transcripts, and application deadlines.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('University Top-Up Consultation')}
            className="bg-[#F9AF19] hover:bg-[#e09a0e] text-[#222222] font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-full transition-colors cursor-pointer shrink-0"
          >
            Request Consultation
          </button>
        </section>
      </div>
    </div>
  );
};
