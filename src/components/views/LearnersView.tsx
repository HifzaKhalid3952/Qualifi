import React from 'react';
import { BookOpen, Award, GraduationCap, FileText, CheckSquare, Download } from 'lucide-react';

interface LearnersViewProps {
  onNavigateTab: (tab: string) => void;
  onOpenEnquiry: (subject?: string) => void;
}

export const LearnersView: React.FC<LearnersViewProps> = ({
  onNavigateTab,
  onOpenEnquiry,
}) => {
  return (
    <div className="w-full">
      {/* Title Header */}
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-8 sm:py-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            Learners
          </h1>
          <p className="mt-2 text-[14.5px] text-[#555555]">
            Empowering your career and academic journey with globally recognized RQF qualifications
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-[22px] font-bold text-[#222222] tracking-tight">
                Your Learning Journey With Qualifi
              </h2>
              <p className="text-[14.5px] text-[#444444] leading-[1.65]">
                As an Ofqual-recognised UK Awarding Organisation, Qualifi ensures that every learner receives rigorous, employer-relevant training and fair, transparent assessment. Whether you are aiming for immediate promotion in the workplace or fast-tracking your way onto a UK university Bachelor's or Master's degree, our qualifications are designed to give you portable, respected credentials.
              </p>
            </section>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-[#e5e9ec] p-5 rounded-xs bg-[#fdfdfd]">
                <div className="w-8 h-8 rounded-full bg-[#F9AF19] text-[#222222] font-bold flex items-center justify-center text-sm mb-3">
                  1
                </div>
                <h3 className="font-bold text-[16px] text-[#222222] mb-1.5">Enrol with an Approved Centre</h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Study through our network of accredited colleges, universities, and online learning providers worldwide.
                </p>
              </div>

              <div className="border border-[#e5e9ec] p-5 rounded-xs bg-[#fdfdfd]">
                <div className="w-8 h-8 rounded-full bg-[#F9AF19] text-[#222222] font-bold flex items-center justify-center text-sm mb-3">
                  2
                </div>
                <h3 className="font-bold text-[16px] text-[#222222] mb-1.5">Modular Assessment</h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Complete assignments and practical portfolios evaluated against strict national Total Qualification Time (TQT) criteria.
                </p>
              </div>

              <div className="border border-[#e5e9ec] p-5 rounded-xs bg-[#fdfdfd]">
                <div className="w-8 h-8 rounded-full bg-[#F9AF19] text-[#222222] font-bold flex items-center justify-center text-sm mb-3">
                  3
                </div>
                <h3 className="font-bold text-[16px] text-[#222222] mb-1.5">External Quality Assurance</h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Qualifi External Verifiers audit student portfolios to maintain consistency, fairness, and absolute regulatory compliance.
                </p>
              </div>

              <div className="border border-[#e5e9ec] p-5 rounded-xs bg-[#fdfdfd]">
                <div className="w-8 h-8 rounded-full bg-[#F9AF19] text-[#222222] font-bold flex items-center justify-center text-sm mb-3">
                  4
                </div>
                <h3 className="font-bold text-[16px] text-[#222222] mb-1.5">Conferment & Top-Up</h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Receive your official Ofqual certificate and parchment, eligible for direct progression into university degrees.
                </p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigateTab('QUALIFICATIONS')}
                className="bg-black hover:bg-[#222222] text-white font-bold tracking-wider text-xs uppercase px-7 py-3 rounded-full transition-colors cursor-pointer"
              >
                Browse Qualifications
              </button>
              <button
                type="button"
                onClick={() => onNavigateTab('UNIVERSITY PROGRESSION')}
                className="bg-slate-100 hover:bg-slate-200 text-[#222222] font-bold tracking-wider text-xs uppercase px-7 py-3 rounded-full transition-colors cursor-pointer border border-[#e5e9ec]"
              >
                University Pathways
              </button>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-[#e5e9ec] p-6 bg-[#fafbfc] rounded-xs space-y-4">
              <h3 className="text-[17px] font-bold text-[#222222]">Learner Resources</h3>
              <ul className="space-y-3 text-xs text-[#444444]">
                <li className="flex items-center justify-between pb-2 border-b border-[#e5e9ec]">
                  <span>Qualifi Learner Charter & Code of Conduct</span>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-[#e5e9ec]">
                  <span>Appeals and Complaints Policy</span>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-[#e5e9ec]">
                  <span>Special Considerations & Reasonable Adjustments</span>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                </li>
                <li className="flex items-center justify-between">
                  <span>Plagiarism & Malpractice Guidance</span>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                </li>
              </ul>

              <button
                onClick={() => onOpenEnquiry('Learner Support Enquiry')}
                className="w-full mt-4 py-2.5 bg-black hover:bg-[#222222] text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer transition-colors"
              >
                Contact Learner Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
