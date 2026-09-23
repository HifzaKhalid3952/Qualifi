import React, { useState } from 'react';
import { X, Search, Building2, MapPin, Globe, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { APPROVED_CENTRES } from '../data/qualificationsData';

interface CentreFinderModalProps {
  onClose: () => void;
  onOpenEnquiry: (centreName?: string) => void;
}

export const CentreFinderModal: React.FC<CentreFinderModalProps> = ({
  onClose,
  onOpenEnquiry,
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState<'All' | 'Online' | 'Blended' | 'Classroom'>('All');

  const filteredCentres = APPROVED_CENTRES.filter((c) => {
    const matchesQuery =
      filterQuery.trim() === '' ||
      c.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.country.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.city.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.sectors.some((s) => s.toLowerCase().includes(filterQuery.toLowerCase()));

    const matchesMode = selectedMode === 'All' || c.deliveryMode === selectedMode;

    return matchesQuery && matchesMode;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden my-auto border border-slate-300"
        role="dialog"
      >
        {/* Header */}
        <div className="bg-[#0b1a30] text-white p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4" />
              <span>Approved Learning Centres</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Find an Approved Qualifi Centre
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Connect with accredited UK colleges and international online providers delivering Qualifi regulated qualifications.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Controls */}
        <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search by city, country, centre name, or sector..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded text-xs focus:outline-hidden focus:border-[#0b1a30] text-slate-900"
            />
          </div>

          {/* Delivery Mode Tabs */}
          <div className="flex items-center gap-1 bg-white border border-slate-300 p-1 rounded text-xs">
            {(['All', 'Online', 'Blended', 'Classroom'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                  selectedMode === mode
                    ? 'bg-[#0b1a30] text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Centre Cards List */}
        <div className="p-6 overflow-y-auto divide-y divide-slate-100 space-y-4">
          {filteredCentres.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No approved centres found matching your search. Try resetting filters.
            </div>
          ) : (
            filteredCentres.map((centre) => (
              <div key={centre.id} className="pt-4 first:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded">
                        {centre.centreNumber}
                      </span>
                      <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium text-[11px]">
                        <CheckCircle className="w-3 h-3" />
                        Approved Qualifi Centre
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-600 font-medium">{centre.deliveryMode} Delivery</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {centre.name}
                    </h4>

                    <div className="flex items-center gap-4 text-xs text-slate-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {centre.city}, {centre.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        {centre.contactEmail}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {centre.sectors.map((s, idx) => (
                        <span key={idx} className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onOpenEnquiry(centre.name);
                      }}
                      className="px-4 py-2 bg-[#0b1a30] hover:bg-[#162e55] text-white text-xs font-semibold rounded transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
                    >
                      Connect with Centre
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-between items-center text-xs text-slate-500 shrink-0">
          <span>Are you an educational institution wishing to deliver Qualifi programmes?</span>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry('Centre Approval Application');
            }}
            className="text-[#0b1a30] font-semibold hover:underline cursor-pointer"
          >
            Apply for Centre Recognition →
          </button>
        </div>
      </div>
    </div>
  );
};
