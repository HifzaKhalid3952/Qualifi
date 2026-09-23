import React from 'react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenEnquiry: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenEnquiry,
}) => {
  return (
    <footer className="bg-[#222222] text-[#cccccc] text-[13.5px] border-t border-[#333333] select-none pt-12 pb-14">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Exact Heading from Screenshot 5 */}
        <h3 className="text-white text-[15px] font-bold uppercase tracking-wider mb-6">
          IMPORTANT LINKS
        </h3>

        {/* 3 Columns of Links with horizontal divider lines - Exact from Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-1">
          {/* Column 1 */}
          <div className="space-y-0">
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('LEARNERS')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Learners</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('EMPLOYERS')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Employers</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('CENTRES')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Centres</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('QUALIFICATIONS')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Qualifications</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('UNIVERSITY PROGRESSION')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>University Progression</span>
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-0">
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('ABOUT US')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>About Qualifi</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('ABOUT US')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>UK Recognition</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('ABOUT US')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Key Members</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onOpenEnquiry('Become an Approved Centre Enquiry')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Become an approved centre</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('NEWS')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Notices</span>
              </button>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-0">
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('POLICIES')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Policies and Procedures</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('PRIVACY')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Privacy & GDPR Policy</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('TERMS')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Terms and Conditions</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('COOKIES')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>About Cookies</span>
              </button>
            </div>
            <div className="border-b border-[#2d2d2d] py-2.5">
              <button
                type="button"
                onClick={() => onNavigateTab('DISCLAIMER')}
                className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer text-left w-full"
              >
                <span className="text-[#999999] text-xs">›</span>
                <span>Website Disclaimer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Exact Copyright line from Screenshot 5 */}
        <div className="mt-14 pt-6 border-t border-[#333333] text-[12.5px] text-[#888888]">
          <p>
            Copyright 2017 Qualifi Ltd | Qualifi Ltd Company Registration No: 04619981 (England and Wales).
          </p>
        </div>
      </div>
    </footer>
  );
};

