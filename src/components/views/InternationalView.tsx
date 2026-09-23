import React from 'react';
import { Globe, MapPin, Building2, Mail, Phone } from 'lucide-react';

interface InternationalViewProps {
  onOpenEnquiry: (subject?: string) => void;
}

export const InternationalView: React.FC<InternationalViewProps> = ({ onOpenEnquiry }) => {
  const regions = [
    {
      region: 'Middle East & North Africa (MENA)',
      office: 'Dubai Knowledge Park, United Arab Emirates',
      contact: 'mena@qualifi.net',
      sectors: 'Business & Management, Cyber Security, Health & Safety, Aesthetic Practice',
    },
    {
      region: 'South Asia & East Asia',
      office: 'Regional Hub - Kuala Lumpur, Malaysia & Colombo, Sri Lanka',
      contact: 'asia@qualifi.net',
      sectors: 'Information Technology, Data Science, Hospitality & Tourism',
    },
    {
      region: 'Europe & UK Headquarters',
      office: '700 Aztec West, Almondsbury, Bristol, BS32 4SD, United Kingdom',
      contact: 'europe@qualifi.net',
      sectors: 'All 21 Regulated Sectors & University Top-Ups',
    },
    {
      region: 'Sub-Saharan Africa',
      office: 'Regional Support - Lagos, Nigeria & Nairobi, Kenya',
      contact: 'africa@qualifi.net',
      sectors: 'Education & Training, Early Years, Strategic Management',
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-8 sm:py-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            International Recognition & Global Hubs
          </h1>
          <p className="mt-2 text-[14.5px] text-[#555555]">
            Delivering British qualification standards across more than 50 countries worldwide
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-10 sm:py-14 space-y-10">
        <section className="space-y-4 max-w-[850px]">
          <h2 className="text-[22px] font-bold text-[#222222] tracking-tight">
            A Truly Global UK Awarding Organisation
          </h2>
          <p className="text-[14.5px] text-[#444444] leading-[1.65]">
            Qualifi qualifications are recognized by ministries of higher education, national qualification authorities, and global employers. As an Ofqual-regulated body and a signatory to BIS international commitments of quality, our certificates carry weight across commonwealth nations, the European Union, the United States, and the Gulf region.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regions.map((reg, i) => (
            <div key={i} className="border border-[#e5e9ec] p-6 bg-white rounded-xs space-y-3">
              <h3 className="font-bold text-[18px] text-[#222222]">{reg.region}</h3>
              <div className="flex items-start gap-2 text-xs text-[#555555]">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{reg.office}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#555555]">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{reg.contact}</span>
              </div>
              <div className="pt-2 border-t border-[#f0f3f5] text-xs text-[#666666]">
                <strong>Key Focus Sectors:</strong> {reg.sectors}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#fafbfc] border border-[#e5e9ec] p-8 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[18px] font-bold text-[#222222]">Are you an international institution seeking approval?</h3>
            <p className="text-xs text-[#666666] mt-1">Our international operations team will review your curriculum and centre suitability.</p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('International Centre Enquiry')}
            className="bg-black hover:bg-[#222222] text-white font-bold uppercase tracking-wider text-xs px-7 py-3.5 rounded-full transition-colors cursor-pointer shrink-0"
          >
            International Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};
