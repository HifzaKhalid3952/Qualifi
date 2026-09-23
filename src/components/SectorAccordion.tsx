import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Sector, Qualification, SectorCluster } from '../types/qualification';
import { SECTOR_CLUSTERS } from '../data/qualificationsData';

interface SectorAccordionProps {
  sectors: Sector[];
  clusters?: SectorCluster[];
  qualifications: Qualification[];
  onSelectQualification: (qual: Qualification) => void;
  searchQuery: string;
  selectedLevel: number | null;
}

export const SectorAccordion: React.FC<SectorAccordionProps> = ({
  sectors,
  clusters = SECTOR_CLUSTERS,
  qualifications,
  onSelectQualification,
  searchQuery,
  selectedLevel,
}) => {
  // Mode: combined clusters (default) vs individual sectors
  const [viewMode, setViewMode] = useState<'combined' | 'all'>('combined');

  // Sector / Cluster open state
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const getClusterQualifications = (cluster: SectorCluster) => {
    return qualifications.filter((q) => {
      const matchesSector = cluster.sectorIds.includes(q.sectorId);
      const matchesLevel = selectedLevel === null || q.level === selectedLevel;
      const matchesSearch =
        searchQuery.trim() === '' ||
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.ofqualQN.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.overview.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSector && matchesLevel && matchesSearch;
    });
  };

  const getSectorQualifications = (sectorId: string) => {
    return qualifications.filter((q) => {
      const matchesSector = q.sectorId === sectorId;
      const matchesLevel = selectedLevel === null || q.level === selectedLevel;
      const matchesSearch =
        searchQuery.trim() === '' ||
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.ofqualQN.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.overview.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSector && matchesLevel && matchesSearch;
    });
  };

  return (
    <div className="w-full">
      {/* Exact Heading from Screenshot with subtle view toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <h2 className="font-['Raleway',sans-serif] text-[22px] sm:text-[24px] font-[600] text-[#222222] tracking-tight">
          Qualifi Regulated Qualifications Available:
        </h2>

        {/* View mode toggle: Combined clusters vs All 21 sectors */}
        <div className="flex items-center gap-1 self-start sm:self-auto bg-slate-100 p-0.5 rounded text-[11px] font-semibold text-slate-600">
          <button
            type="button"
            onClick={() => setViewMode('combined')}
            className={`px-2 py-1 rounded transition-colors cursor-pointer ${
              viewMode === 'combined'
                ? 'bg-[#03052E] text-white shadow-xs'
                : 'hover:text-black'
            }`}
          >
            Combined Clusters ({clusters.length})
          </button>
          <button
            type="button"
            onClick={() => setViewMode('all')}
            className={`px-2 py-1 rounded transition-colors cursor-pointer ${
              viewMode === 'all'
                ? 'bg-[#03052E] text-white shadow-xs'
                : 'hover:text-black'
            }`}
          >
            All Sectors ({sectors.length})
          </button>
        </div>
      </div>

      {/* Accordion List - Combined Clusters View (Default) */}
      {viewMode === 'combined' ? (
        <div className="space-y-[3px]">
          {clusters.map((cluster) => {
            const clusterQuals = getClusterQualifications(cluster);
            const isOpen = openItems[cluster.id] || searchQuery.trim().length > 0;
            const hasMatchingQuals = clusterQuals.length > 0;

            if ((searchQuery.trim() !== '' || selectedLevel !== null) && !hasMatchingQuals) {
              return null;
            }

            return (
              <div key={cluster.id} className="w-full">
                {/* Dark Blue Accordion Bar (#03052E) */}
                <button
                  type="button"
                  onClick={() => toggleItem(cluster.id)}
                  style={{ backgroundColor: '#03052E' }}
                  className="w-full bg-[#03052E] hover:bg-[#070b4a] text-white px-5 py-[13.5px] flex items-center justify-between text-left transition-colors cursor-pointer select-none rounded-none border-b border-white last:border-b-0 shadow-xs group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2 flex-wrap pr-2">
                    <span className="font-bold tracking-[0.03em] text-[13px] sm:text-[14px] uppercase font-sans text-white">
                      {cluster.name}
                    </span>
                    {cluster.clusterType === 'standalone' && (
                      <span className="text-[10px] font-semibold tracking-wider uppercase bg-white/15 text-white/90 px-1.5 py-0.5 rounded">
                        Standalone
                      </span>
                    )}
                  </div>

                  <span className="text-white shrink-0 ml-3 flex items-center justify-center">
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-white stroke-[2.5]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-white stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Opened Accordion Body */}
                {isOpen && (
                  <div className="bg-white border border-[#e5e9ec] border-t-0 pl-6 sm:pl-8 pr-5 py-5 shadow-xs space-y-6">
                    {clusterQuals.length === 0 ? (
                      <p className="text-xs text-slate-500 py-2">
                        No qualifications found matching current filter.
                      </p>
                    ) : cluster.subSectors.length > 1 ? (
                      /* Multi-sector Cluster with nested sub-discipline groupings */
                      cluster.subSectors.map((sub) => {
                        const subQuals = clusterQuals.filter((q) => q.sectorId === sub.id);
                        if (subQuals.length === 0) return null;

                        return (
                          <div key={sub.id} className="space-y-3">
                            <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                              <h4 className="font-['Raleway',sans-serif] text-[13.5px] sm:text-[14px] font-bold text-[#03052E] uppercase tracking-wide">
                                {sub.name}
                              </h4>
                              <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                                {subQuals.length} {subQuals.length === 1 ? 'qualification' : 'qualifications'}
                              </span>
                            </div>

                            <ul className="space-y-2.5 pl-1">
                              {subQuals.map((qual) => (
                                <li key={qual.id} className="flex items-start gap-3 group">
                                  {/* Triangle Bullet */}
                                  <svg
                                    className="w-[9px] h-[9px] text-black shrink-0 mt-[6.5px] select-none group-hover:text-[#F9AF19] transition-colors"
                                    viewBox="0 0 10 10"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <polygon points="0,0 10,5 0,10" />
                                  </svg>

                                  <button
                                    type="button"
                                    onClick={() => onSelectQualification(qual)}
                                    style={{ color: 'var(--e-global-color-4ddc3b4)' }}
                                    className="text-left hover:underline text-[14px] sm:text-[14.5px] font-normal leading-[1.5] cursor-pointer transition-colors"
                                  >
                                    {qual.title} ({qual.ofqualQN})
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })
                    ) : (
                      /* Standalone single category list */
                      <ul className="space-y-2.5">
                        {clusterQuals.map((qual) => (
                          <li key={qual.id} className="flex items-start gap-3 group">
                            {/* Triangle Bullet */}
                            <svg
                              className="w-[9px] h-[9px] text-black shrink-0 mt-[6.5px] select-none group-hover:text-[#F9AF19] transition-colors"
                              viewBox="0 0 10 10"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <polygon points="0,0 10,5 0,10" />
                            </svg>

                            <button
                              type="button"
                              onClick={() => onSelectQualification(qual)}
                              style={{ color: 'var(--e-global-color-4ddc3b4)' }}
                              className="text-left hover:underline text-[14.5px] sm:text-[15px] font-normal leading-[1.5] cursor-pointer transition-colors"
                            >
                              {qual.title} ({qual.ofqualQN})
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* Accordion List - All 21 Individual Sectors View */
        <div className="space-y-[3px]">
          {sectors.map((sector) => {
            const sectorQuals = getSectorQualifications(sector.id);
            const isOpen = openItems[sector.id] || searchQuery.trim().length > 0;
            const hasMatchingQuals = sectorQuals.length > 0;

            if ((searchQuery.trim() !== '' || selectedLevel !== null) && !hasMatchingQuals) {
              return null;
            }

            return (
              <div key={sector.id} className="w-full">
                {/* Dark Blue Accordion Bar (#03052E) */}
                <button
                  type="button"
                  onClick={() => toggleItem(sector.id)}
                  style={{ backgroundColor: '#03052E' }}
                  className="w-full bg-[#03052E] hover:bg-[#070b4a] text-white px-5 py-[13.5px] flex items-center justify-between text-left transition-colors cursor-pointer select-none rounded-none border-b border-white last:border-b-0 shadow-xs"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold tracking-[0.03em] text-[13px] sm:text-[14px] uppercase font-sans text-white">
                    {sector.name}
                  </span>

                  <span className="text-white shrink-0 ml-3 flex items-center justify-center">
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-white stroke-[2.5]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-white stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Opened Accordion Body */}
                {isOpen && (
                  <div className="bg-white border border-[#e5e9ec] border-t-0 pl-6 sm:pl-8 pr-5 py-5 shadow-xs">
                    {sectorQuals.length === 0 ? (
                      <p className="text-xs text-slate-500 py-2">
                        No qualifications found matching current filter.
                      </p>
                    ) : (
                      <ul className="space-y-2.5">
                        {sectorQuals.map((qual) => (
                          <li key={qual.id} className="flex items-start gap-3 group">
                            {/* Triangle Bullet */}
                            <svg
                              className="w-[9px] h-[9px] text-black shrink-0 mt-[6.5px] select-none group-hover:text-[#F9AF19] transition-colors"
                              viewBox="0 0 10 10"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <polygon points="0,0 10,5 0,10" />
                            </svg>

                            <button
                              type="button"
                              onClick={() => onSelectQualification(qual)}
                              style={{ color: 'var(--e-global-color-4ddc3b4)' }}
                              className="text-left hover:underline text-[14.5px] sm:text-[15px] font-normal leading-[1.5] cursor-pointer transition-colors"
                            >
                              {qual.title} ({qual.ofqualQN})
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Centre Development Qualifications - Exact from Screenshot */}
      <div className="mt-12 space-y-4">
        <h3 className="font-['Raleway',sans-serif] text-[20px] sm:text-[22px] font-[600] text-[#222222] tracking-tight">
          Centre Development Qualifications - Resources provided by Qualifi
        </h3>

        <div className="space-y-[3px]">
          {/* Bar 1 */}
          <div className="border border-[#03052E] bg-[#03052E]" style={{ backgroundColor: '#03052E' }}>
            <button
              type="button"
              onClick={() => toggleItem('centre-qa-staff')}
              style={{ backgroundColor: '#03052E' }}
              className="w-full bg-[#03052E] hover:bg-[#070b4a] flex items-center justify-between px-5 py-[13.5px] text-left text-white cursor-pointer transition-colors"
            >
              <span className="font-bold text-[13px] sm:text-[14px] uppercase tracking-[0.03em]">
                QUALITY ASSURANCE, TEACHING AND ASSESSMENT – FOR CENTRE STAFF AND ASSESSORS
              </span>
              <span className="text-white ml-3 shrink-0 flex items-center justify-center">
                {openItems['centre-qa-staff'] ? (
                  <ChevronDown className="w-4 h-4 text-white stroke-[2.5]" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-white stroke-[2.5]" />
                )}
              </span>
            </button>
            {openItems['centre-qa-staff'] && (
              <div className="bg-white border-t border-[#e5e9ec] pl-6 sm:pl-8 pr-5 py-5">
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <svg className="w-[9px] h-[9px] text-black shrink-0 mt-[6.5px]" viewBox="0 0 10 10" fill="currentColor"><polygon points="0,0 10,5 0,10" /></svg>
                    <span style={{ color: 'var(--e-global-color-4ddc3b4)' }} className="text-[14.5px]">Qualifi Level 3 Award in Assessing Competence in the Work Environment (603/5041/4)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-[9px] h-[9px] text-black shrink-0 mt-[6.5px]" viewBox="0 0 10 10" fill="currentColor"><polygon points="0,0 10,5 0,10" /></svg>
                    <span style={{ color: 'var(--e-global-color-4ddc3b4)' }} className="text-[14.5px]">Qualifi Level 4 Award in Understanding the Internal Quality Assurance of Assessment (603/5042/6)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-[9px] h-[9px] text-black shrink-0 mt-[6.5px]" viewBox="0 0 10 10" fill="currentColor"><polygon points="0,0 10,5 0,10" /></svg>
                    <span style={{ color: 'var(--e-global-color-4ddc3b4)' }} className="text-[14.5px]">Qualifi Level 4 Certificate in Leading the Internal Quality Assurance of Assessment Processes (603/5043/8)</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Bar 2 */}
          <div className="border border-[#03052E] bg-[#03052E]" style={{ backgroundColor: '#03052E' }}>
            <button
              type="button"
              onClick={() => toggleItem('free-tutorial')}
              style={{ backgroundColor: '#03052E' }}
              className="w-full bg-[#03052E] hover:bg-[#070b4a] flex items-center justify-between px-5 py-[13.5px] text-left text-white cursor-pointer transition-colors"
            >
              <span className="font-bold text-[13px] sm:text-[14px] uppercase tracking-[0.03em]">
                Qualifi Free Tutorial:
              </span>
              <span className="text-white ml-3 shrink-0 flex items-center justify-center">
                {openItems['free-tutorial'] ? (
                  <ChevronDown className="w-4 h-4 text-white stroke-[2.5]" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-white stroke-[2.5]" />
                )}
              </span>
            </button>
            {openItems['free-tutorial'] && (
              <div className="bg-white border-t border-[#e5e9ec] pl-6 sm:pl-8 pr-5 py-5">
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <svg className="w-[9px] h-[9px] text-black shrink-0 mt-[6.5px]" viewBox="0 0 10 10" fill="currentColor"><polygon points="0,0 10,5 0,10" /></svg>
                    <span style={{ color: 'var(--e-global-color-4ddc3b4)' }} className="text-[14.5px]">Qualifi Centre Portal Orientation & Induction Tutorial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-[9px] h-[9px] text-black shrink-0 mt-[6.5px]" viewBox="0 0 10 10" fill="currentColor"><polygon points="0,0 10,5 0,10" /></svg>
                    <span style={{ color: 'var(--e-global-color-4ddc3b4)' }} className="text-[14.5px]">Internal Verification and Quality Assurance Masterclass</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Endorsed Courses - Exact from Screenshot 4 */}
      <div className="mt-10 space-y-3">
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#222222] tracking-tight">
          Endorsed Courses
        </h3>
        <p className="text-[14.5px] sm:text-[15px] text-[#444444] leading-[1.65]">
          In addition to regulated qualifications, Qualifi endorses programmes and courses provided by
          centres and organisations that are industry specific. We have a wide range of skills sectors
          available at all levels and partner with other learning organisations to provide flexible solutions.
          To learn more about endorsed courses{' '}
          <button
            type="button"
            onClick={() => onSelectQualification(qualifications[0])}
            style={{ color: '#c98d00' }}
            className="hover:underline cursor-pointer font-medium"
          >
            click here
          </button>.
        </p>
      </div>

      {/* Not seeing what you're looking for? - Exact from Screenshot 4 */}
      <div className="mt-10 space-y-3">
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#222222] tracking-tight">
          Not seeing what you're looking for?
        </h3>
        <p className="text-[14.5px] sm:text-[15px] text-[#444444] leading-[1.65]">
          Qualifi has many qualifications currently being developed at Level 2 and above. You may have your
          own programme that has the potential to become a regulated qualification. Our experts can work with
          you to design and develop a qualification that is fit for purpose and meets all regulatory requirements
          within one of our recognised skills sectors. Contact us for more information.
        </p>
      </div>
    </div>
  );
};
