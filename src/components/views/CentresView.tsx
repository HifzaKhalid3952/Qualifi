import React, { useState } from 'react';
import { Search, Building, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { APPROVED_CENTRES } from '../../data/qualificationsData';

interface CentresViewProps {
  onNavigateTab: (tab: string) => void;
  onOpenEnquiry: (subject?: string) => void;
}

export const CentresView: React.FC<CentresViewProps> = ({
  onNavigateTab,
  onOpenEnquiry,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const countries = ['All', ...Array.from(new Set(APPROVED_CENTRES.map((c) => c.country)))];

  const filteredCentres = APPROVED_CENTRES.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.sectors.some((s: string) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesCountry = selectedCountry === 'All' || c.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="w-full">
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-8 sm:py-10">
        <div className="max-w-[1140px] mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
              Centres
            </h1>
            <p className="mt-2 text-[14.5px] text-[#555555]">
              Deliver Qualifi regulated qualifications at your institution or find an approved provider
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Become an Approved Centre Application')}
            className="bg-black hover:bg-[#222222] text-white font-bold tracking-wider text-xs uppercase px-6 py-3 rounded-full transition-colors cursor-pointer self-start md:self-auto shrink-0"
          >
            Become an Approved Centre
          </button>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-10 sm:py-14 space-y-10">
        {/* Approved Centre Directory Search */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-[22px] font-bold text-[#222222] tracking-tight">
                Find an Approved Delivery Centre
              </h2>
              <p className="text-xs text-[#666666] mt-1">
                Showing {filteredCentres.length} accredited institutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Search by centre name, city, sector..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-3 py-2 border border-[#cccccc] text-xs rounded-xs w-full sm:w-64 focus:outline-hidden focus:border-black"
              />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-3 py-2 border border-[#cccccc] text-xs rounded-xs bg-white focus:outline-hidden cursor-pointer"
              >
                {countries.map((cntry) => (
                  <option key={cntry} value={cntry}>{cntry}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCentres.map((centre) => (
              <div key={centre.id} className="border border-[#e5e9ec] p-5 bg-white hover:border-[#cccccc] transition-colors rounded-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-[15px] text-[#222222] leading-snug">
                      {centre.name}
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xs shrink-0">
                      Approved
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#666666] mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{centre.city}, {centre.country}</span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#f0f3f5]">
                    <div className="text-[11px] font-semibold text-[#888888] uppercase mb-1.5">Approved Sectors</div>
                    <div className="flex flex-wrap gap-1">
                      {centre.sectors.map((sec: string, idx: number) => (
                        <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-xs">
                          {sec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f0f3f5] flex items-center justify-between">
                  <span className="text-[11px] text-[#777777]">{centre.deliveryMode}</span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(`Enquiry regarding centre: ${centre.name}`)}
                    className="text-xs font-bold text-[#b88c3a] hover:underline cursor-pointer"
                  >
                    Contact Centre →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Centre Approval Process info */}
        <section className="bg-[#fafbfc] border border-[#e5e9ec] p-6 sm:p-8 rounded-xs space-y-4">
          <h2 className="text-[20px] font-bold text-[#222222]">
            Centre Approval Process
          </h2>
          <p className="text-[14px] text-[#555555] leading-relaxed">
            Becoming a Qualifi Approved Centre allows your college, university, or training academy to deliver Ofqual-regulated diplomas. Our streamlined approval process takes typically 10 to 14 working days following desktop review and virtual/site audit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-white border border-[#e5e9ec] rounded-xs">
              <div className="font-bold text-sm text-[#222222] mb-1">Step 1: Application Form</div>
              <p className="text-xs text-[#666666]">Submit institutional registration, staff CVs, and physical/online delivery resources.</p>
            </div>
            <div className="p-4 bg-white border border-[#e5e9ec] rounded-xs">
              <div className="font-bold text-sm text-[#222222] mb-1">Step 2: Quality Audit</div>
              <p className="text-xs text-[#666666]">Qualifi External Quality Assurer conducts desk-based verification of policies.</p>
            </div>
            <div className="p-4 bg-white border border-[#e5e9ec] rounded-xs">
              <div className="font-bold text-sm text-[#222222] mb-1">Step 3: Accreditation</div>
              <p className="text-xs text-[#666666]">Centre agreement signed, portal access granted, and learner registration enabled.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
