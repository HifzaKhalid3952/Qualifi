import React from 'react';
import { Briefcase, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';

interface EmployersViewProps {
  onNavigateTab: (tab: string) => void;
  onOpenEnquiry: (subject?: string) => void;
}

export const EmployersView: React.FC<EmployersViewProps> = ({
  onNavigateTab,
  onOpenEnquiry,
}) => {
  return (
    <div className="w-full">
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-8 sm:py-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            Employers
          </h1>
          <p className="mt-2 text-[14.5px] text-[#555555]">
            Industry-relevant vocational frameworks that deliver proven workplace competence
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-[22px] font-bold text-[#222222] tracking-tight">
                Why Employers Worldwide Value Qualifi Qualifications
              </h2>
              <p className="text-[14.5px] text-[#444444] leading-[1.65]">
                Qualifi qualifications are developed in direct consultation with employers, sector skills bodies, and professional institutes. Unlike purely theoretical degrees, our RQF-aligned diplomas assess practical capability, decision-making, and job-ready problem solving.
              </p>
            </section>

            <div className="space-y-4">
              <div className="p-5 border border-[#e5e9ec] bg-white rounded-xs flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#F9AF19] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[16px] text-[#222222]">Benchmarked to National Standards (RQF)</h3>
                  <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                    Every qualification is regulated by Ofqual under the Regulated Qualifications Framework, assuring rigorous levels of competence from Level 3 foundation through Level 8 doctorate equivalence.
                  </p>
                </div>
              </div>

              <div className="p-5 border border-[#e5e9ec] bg-white rounded-xs flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-[#F9AF19] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[16px] text-[#222222]">Corporate Upskilling & Tailored Endorsement</h3>
                  <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                    Have an in-house corporate development programme? Qualifi can formally endorse your bespoke training or help accredit it into a nationally recognised qualification.
                  </p>
                </div>
              </div>

              <div className="p-5 border border-[#e5e9ec] bg-white rounded-xs flex items-start gap-4">
                <Users className="w-6 h-6 text-[#F9AF19] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[16px] text-[#222222]">Direct Talent Recruitment</h3>
                  <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                    Hire graduates who possess verified practical portfolios in Cybersecurity, Health & Safety, Strategic Management, Data Science, and Law.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenEnquiry('Employer Partnership & Endorsement Enquiry')}
                className="bg-black hover:bg-[#222222] text-white font-bold tracking-wider text-xs uppercase px-7 py-3.5 rounded-full transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Partner With Qualifi</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="border border-[#e5e9ec] p-6 bg-[#fafbfc] rounded-xs space-y-4">
              <h3 className="text-[17px] font-bold text-[#222222]">Employer Advisory Panels</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Join our sectoral consultation panels to influence qualification design, learning outcomes, and assessment methodologies in your industry.
              </p>
              <div className="pt-2 border-t border-[#e5e9ec]">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Join Employer Advisory Panel')}
                  className="w-full py-2.5 bg-black hover:bg-[#222222] text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer transition-colors"
                >
                  Join Advisory Panel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
