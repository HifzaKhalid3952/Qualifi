import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';

export const FaqView: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is Qualifi and is it recognized by the UK government?',
      a: 'Yes, Qualifi is a recognized Awarding Organisation (AO) regulated by Ofqual (The Office of Qualifications and Examinations Regulation) in England. Our Ofqual Register recognition number is RN5354. All our regulated qualifications are accredited on the UK Regulated Qualifications Framework (RQF).',
    },
    {
      q: 'How do Qualifi RQF levels compare to traditional university degrees?',
      a: 'Qualifi Level 4 is equivalent to Year 1 of a UK Bachelor\'s Degree (CertHE). Qualifi Level 5 is equivalent to Year 2 (DipHE / Foundation Degree). Qualifi Level 6 is equivalent to the Final Year / Bachelor\'s Degree with Honours. Qualifi Level 7 is equivalent to Postgraduate / Master\'s Degree taught level. Qualifi Level 8 is equivalent to Doctorate level research study.',
    },
    {
      q: 'Can I top up a Qualifi Diploma to a full university degree?',
      a: 'Yes. Qualifi has formal articulation and progression agreements with numerous UK and international universities including the University of Chichester, Anglia Ruskin University, University of Cumbria, and Northampton. Students completing Level 4 & 5 can enter the Final Year of a Bachelor\'s degree, and Level 7 graduates can complete an MBA or MSc dissertation.',
    },
    {
      q: 'How are Qualifi qualifications assessed?',
      a: 'Qualifi qualifications are assessed primarily through assignment-based coursework, research reports, practical portfolios, case studies, and business simulations. There are no traditional closed-book rote exams, allowing learners to demonstrate real-world workplace competence.',
    },
    {
      q: 'How can an educational institution become an approved Qualifi centre?',
      a: 'Institutions can submit an online application via our Centres page. Qualifi External Quality Assurers will review your quality management system, teaching staff qualifications, and physical or virtual learning environments. The review process is completed within 10-14 working days.',
    },
    {
      q: 'How do employers verify a Qualifi certificate?',
      a: 'Certificates can be authenticated immediately through our Certificate Verification portal using the unique certificate reference number and holographic security features.',
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-8 sm:py-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-[14.5px] text-[#555555]">
            Essential information regarding accreditation, regulation, top-up pathways, and assessments
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-10 sm:py-14">
        <div className="max-w-[850px] space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border border-[#e5e9ec] bg-white rounded-xs overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-[15px] sm:text-[16px] text-[#222222]">
                    {faq.q}
                  </span>
                  <span className="text-[#999999] text-base shrink-0">
                    {isOpen ? '⌄' : '›'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[14px] text-[#444444] leading-relaxed border-t border-[#f0f3f5]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
