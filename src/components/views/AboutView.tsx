import React from 'react';
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onNavigateTab: (tab: string) => void;
  onOpenEnquiry: (subject?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigateTab, onOpenEnquiry }) => {
  return (
    <div className="w-full">
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-8 sm:py-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            About Qualifi
          </h1>
          <p className="mt-2 text-[14.5px] text-[#555555]">
            An Ofqual Recognised UK Awarding Organisation committed to vocational excellence
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-10 sm:py-14 space-y-12">
        <section className="space-y-4 max-w-[900px]">
          <h2 className="text-[22px] font-bold text-[#222222] tracking-tight">
            Our Purpose and Accreditation
          </h2>
          <p className="text-[14.5px] text-[#444444] leading-[1.65]">
            Qualifi is a recognized UK Awarding Organisation regulated by Ofqual (The Office of Qualifications and Examinations Regulation). We design, develop, and award vocational and professional qualifications across 21 industry sectors, from Level 2 through to Level 8.
          </p>
          <p className="text-[14.5px] text-[#444444] leading-[1.65]">
            As a signatory to the BIS international commitments of quality, Qualifi operates under the regulatory arrangements of the General Conditions of Recognition in England. Our qualifications are designed to give learners practical, career-defining knowledge while providing universities with a dependable foundation for direct entry and credit transfer.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 border border-[#e5e9ec] bg-white rounded-xs space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#F9AF19]" />
            <h3 className="font-bold text-[17px] text-[#222222]">Regulated by Ofqual</h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              Every accredited qualification is listed on the official Register of Regulated Qualifications under Awarding Body reference RN5354.
            </p>
          </div>

          <div className="p-6 border border-[#e5e9ec] bg-white rounded-xs space-y-2">
            <Award className="w-8 h-8 text-[#F9AF19]" />
            <h3 className="font-bold text-[17px] text-[#222222]">RQF Alignment</h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              Mapped directly to the national Regulated Qualifications Framework, assuring portability, transparent credit values, and employer recognition.
            </p>
          </div>

          <div className="p-6 border border-[#e5e9ec] bg-white rounded-xs space-y-2">
            <FileCheck className="w-8 h-8 text-[#F9AF19]" />
            <h3 className="font-bold text-[17px] text-[#222222]">Academic Articulations</h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              Pre-agreed progression pathways to UK and US university degrees, exempting learners from undergraduate and postgraduate modules.
            </p>
          </div>
        </section>

        <div className="bg-[#fafbfc] border border-[#e5e9ec] p-8 rounded-xs space-y-4">
          <h3 className="text-[20px] font-bold text-[#222222]">Corporate & Governance Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#555555]">
            <div><strong>Company Name:</strong> Qualifi Ltd</div>
            <div><strong>Registration No:</strong> 04619981 (England & Wales)</div>
            <div><strong>Registered Office:</strong> 700 Aztec West, Almondsbury, Bristol, BS32 4SD, UK</div>
            <div><strong>Primary Regulator:</strong> Ofqual (England)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
