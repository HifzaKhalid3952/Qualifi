import React from 'react';
import { ShieldCheck, CheckCircle2, Globe2, BookCheck } from 'lucide-react';

export const RegulatoryBanner: React.FC = () => {
  return (
    <div className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              UK Government Recognised Awarding Organisation
            </span>
            <span className="text-xs text-slate-500 font-mono">RN5354</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Qualifications
          </h1>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Ofqual, the Regulator in England, monitor and review the process of accredited qualifications
            before and after they are listed in the Register of Regulated Qualifications. For the qualification
            to be accredited, Qualifi has to submit their proposed qualification programme against the regulatory
            requirements and, that Qualifi maintains the appropriate standards and quality for the design,
            development and delivery of its qualifications.
          </p>

          {/* Regulatory Standards Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2.5 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900 block">Ofqual Regulated</span>
                <span className="text-slate-500">Every diploma carries official QN code</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-700">
              <Globe2 className="w-4 h-4 text-[#0b1a30] shrink-0" />
              <div>
                <span className="font-semibold text-slate-900 block">Worldwide Recognition</span>
                <span className="text-slate-500">Accepted across 100+ countries</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-700">
              <BookCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900 block">University Degree Top-Ups</span>
                <span className="text-slate-500">Direct credit articulation with UK universities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
