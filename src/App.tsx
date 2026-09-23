import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SectorAccordion } from './components/SectorAccordion';
import { PathwayToGraduateDegree } from './components/PathwayToGraduateDegree';
import { QualificationPageView } from './components/QualificationPageView';
import { SpecificationDocModal } from './components/SpecificationDocModal';
import { VocationalPathwaysModal } from './components/VocationalPathwaysModal';
import { CentreFinderModal } from './components/CentreFinderModal';
import { CompareModal } from './components/CompareModal';
import { EnquiryModal } from './components/EnquiryModal';
import { Footer } from './components/Footer';

// Page Views
import { CertificateVerificationView } from './components/views/CertificateVerificationView';
import { LearnersView } from './components/views/LearnersView';
import { EmployersView } from './components/views/EmployersView';
import { CentresView } from './components/views/CentresView';
import { UniversityProgressionView } from './components/views/UniversityProgressionView';
import { FaqView } from './components/views/FaqView';
import { InternationalView } from './components/views/InternationalView';
import { ContactView } from './components/views/ContactView';
import { AboutView } from './components/views/AboutView';

import { SECTORS, QUALIFICATIONS, SECTOR_CLUSTERS } from './data/qualificationsData';
import { Qualification } from './types/qualification';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('QUALIFICATIONS');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  // Active full-page qualification view
  const [selectedQualification, setSelectedQualification] = useState<Qualification | null>(null);

  // Modals state
  const [specDocQualification, setSpecDocQualification] = useState<Qualification | null>(null);
  const [specDocType, setSpecDocType] = useState<'spec' | 'cass' | 'brochure'>('spec');
  const [isPathwaysOpen, setIsPathwaysOpen] = useState(false);
  const [isCentresOpen, setIsCentresOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState<string>('');

  // Compare list
  const [comparedIds, setComparedIds] = useState<string[]>([
    'qualifi-level-7-diploma-in-strategic-management-and-leadership',
    'qualifi-level-5-diploma-in-business-management'
  ]);

  const handleToggleCompare = (qual: Qualification) => {
    setComparedIds((prev) => {
      if (prev.includes(qual.id)) {
        return prev.filter((id) => id !== qual.id);
      } else {
        if (prev.length >= 3) {
          return [prev[1], prev[2], qual.id];
        }
        return [...prev, qual.id];
      }
    });
  };

  const handleRemoveCompare = (id: string) => {
    setComparedIds((prev) => prev.filter((item) => item !== id));
  };

  const handleClearCompare = () => {
    setComparedIds([]);
  };

  const comparedQualifications = useMemo(() => {
    return QUALIFICATIONS.filter((q) => comparedIds.includes(q.id));
  }, [comparedIds]);

  const handleOpenEnquiryWithSubject = (subject?: string) => {
    setEnquirySubject(subject || '');
    setIsEnquiryOpen(true);
  };

  const handleNavigateTab = (tab: string) => {
    setActiveTab(tab);
    setSelectedQualification(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col font-sans selection:bg-[#222222] selection:text-[#F9AF19]">
      {/* Official Header with amber ribbon & dark bar from Screenshot 1 */}
      <Header
        activeTab={activeTab}
        onNavigateTab={handleNavigateTab}
        onOpenCompare={() => setIsCompareOpen(true)}
        compareCount={comparedIds.length}
      />

      {/* Main Page Routing */}
      {selectedQualification ? (
        <QualificationPageView
          qualification={selectedQualification}
          onBack={() => setSelectedQualification(null)}
          onDownloadSpec={(qual, docType = 'spec') => {
            setSpecDocType(docType);
            setSpecDocQualification(qual);
          }}
          onOpenEnquiry={(qualTitle) => handleOpenEnquiryWithSubject(qualTitle)}
        />
      ) : activeTab === 'LEARNERS' ? (
        <LearnersView
          onNavigateTab={handleNavigateTab}
          onOpenEnquiry={handleOpenEnquiryWithSubject}
        />
      ) : activeTab === 'CERTIFICATE VERIFICATION' ? (
        <CertificateVerificationView />
      ) : activeTab === 'EMPLOYERS' ? (
        <EmployersView
          onNavigateTab={handleNavigateTab}
          onOpenEnquiry={handleOpenEnquiryWithSubject}
        />
      ) : activeTab === 'CENTRES' ? (
        <CentresView
          onNavigateTab={handleNavigateTab}
          onOpenEnquiry={handleOpenEnquiryWithSubject}
        />
      ) : activeTab === 'UNIVERSITY PROGRESSION' ? (
        <UniversityProgressionView
          onNavigateTab={handleNavigateTab}
          onOpenEnquiry={handleOpenEnquiryWithSubject}
        />
      ) : activeTab === 'FAQ' ? (
        <FaqView />
      ) : activeTab === 'INTERNATIONAL' ? (
        <InternationalView onOpenEnquiry={handleOpenEnquiryWithSubject} />
      ) : activeTab === 'CONTACT' ? (
        <ContactView />
      ) : activeTab === 'ABOUT US' || activeTab === 'NEWS' || activeTab === 'POLICIES' || activeTab === 'PRIVACY' || activeTab === 'TERMS' || activeTab === 'COOKIES' || activeTab === 'DISCLAIMER' ? (
        <AboutView
          onNavigateTab={handleNavigateTab}
          onOpenEnquiry={handleOpenEnquiryWithSubject}
        />
      ) : (
        /* DEFAULT: QUALIFICATIONS PAGE - Exact Two-Column Ratio from Screenshot (Left is wider ~62% vs ~38%) */
        <main id="qualifications" className="flex-1 max-w-[1180px] mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            
            {/* LEFT COLUMN: Wider portion (~62% / 7.5 cols in 12-grid, approx col-span-7 or 8) */}
            <section className="lg:col-span-7 xl:col-span-8 lg:pr-8 xl:pr-10 lg:border-r lg:border-[#e2e8f0] space-y-7">
              {/* Regulated Qualifications Heading */}
              <div>
                <h1 className="font-['Raleway',sans-serif] text-[28px] sm:text-[32px] font-[600] text-[#222222] tracking-tight">
                  Regulated Qualifications
                </h1>
                {/* Short subtle divider line matching screenshot */}
                <div className="w-12 h-[2px] bg-[#d1d5db] my-3.5" />
                <p className="font-['Raleway',sans-serif] text-[14px] sm:text-[14.5px] font-[400] text-[#222222] leading-[1.7]">
                  Regulated qualifications, also known as accredited qualifications, are those that are reviewed,
                  recognised and monitored by the UK Regulators to ensure that they meet specific criteria and quality
                  standards. The requirements for the regulated qualifications to be accredited are set out in the
                  regulatory arrangements of the General Conditions of Recognition in England (Ofqual).
                </p>
              </div>

              {/* Compliance and Accreditation Heading from Screenshot */}
              <div>
                <h2 className="font-['Raleway',sans-serif] text-[22px] sm:text-[24px] font-[600] text-[#222222] tracking-tight mb-3">
                  Compliance and Accreditation of Regulated Qualifications
                </h2>
                <p className="font-['Raleway',sans-serif] text-[14px] sm:text-[14.5px] font-[400] text-[#222222] leading-[1.7]">
                  Ofqual, the Regulator in England, monitor and review the process of accredited qualifications
                  before and after they are listed in the Register of Regulated Qualifications. For the qualification
                  to be accredited, Qualifi has to submit their proposed qualification programme against the regulatory
                  requirements and, that Qualifi maintains the appropriate standards and quality for the design,
                  development and delivery of its qualifications.
                </p>
              </div>

              {/* Accordions Component (Organized by Combined Clusters with Standalone Separations) */}
              <SectorAccordion
                sectors={SECTORS}
                clusters={SECTOR_CLUSTERS}
                qualifications={QUALIFICATIONS}
                onSelectQualification={(qual) => setSelectedQualification(qual)}
                searchQuery={searchQuery}
                selectedLevel={selectedLevel}
              />
            </section>

            {/* RIGHT COLUMN: Narrower portion (~38% / 4.5 cols in 12-grid, col-span-5 or 4) */}
            <aside className="lg:col-span-5 xl:col-span-4 lg:pl-8 xl:pl-10">
              <PathwayToGraduateDegree
                onOpenPathways={() => handleNavigateTab('UNIVERSITY PROGRESSION')}
                onOpenEnquiry={() => handleOpenEnquiryWithSubject()}
              />
            </aside>
          </div>
        </main>
      )}

      {/* Bottom Footer - Exact IMPORTANT LINKS & 3 Columns from Screenshot 5 */}
      <Footer
        onNavigateTab={handleNavigateTab}
        onOpenEnquiry={handleOpenEnquiryWithSubject}
      />

      {/* Printable Specification Dossier Modal */}
      {specDocQualification && (
        <SpecificationDocModal
          qualification={specDocQualification}
          docType={specDocType}
          onClose={() => setSpecDocQualification(null)}
        />
      )}

      {/* Vocational Pathways Modal */}
      {isPathwaysOpen && (
        <VocationalPathwaysModal
          onClose={() => setIsPathwaysOpen(false)}
          onOpenEnquiry={() => handleOpenEnquiryWithSubject('Vocational Pathways Consultation')}
        />
      )}

      {/* Centre Finder Modal */}
      {isCentresOpen && (
        <CentreFinderModal
          onClose={() => setIsCentresOpen(false)}
          onOpenEnquiry={(centreName) => handleOpenEnquiryWithSubject(centreName)}
        />
      )}

      {/* Qualification Comparison Modal */}
      {isCompareOpen && (
        <CompareModal
          qualifications={comparedQualifications}
          onClose={() => setIsCompareOpen(false)}
          onRemove={handleRemoveCompare}
          onClear={handleClearCompare}
          onSelectQual={(q) => {
            setSelectedQualification(q);
            setIsCompareOpen(false);
          }}
        />
      )}

      {/* Direct Enquiry Modal */}
      {isEnquiryOpen && (
        <EnquiryModal
          initialSubject={enquirySubject}
          onClose={() => setIsEnquiryOpen(false)}
        />
      )}
    </div>
  );
}

