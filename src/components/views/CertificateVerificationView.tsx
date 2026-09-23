import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Search, ShieldCheck } from 'lucide-react';

export const CertificateVerificationView: React.FC = () => {
  const [certNumber, setCertNumber] = useState('');
  const [learnerRef, setLearnerRef] = useState('');
  const [result, setResult] = useState<'idle' | 'verified' | 'not-found'>('idle');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certNumber.trim()) return;
    // Check demo or active verification
    if (certNumber.length > 4) {
      setResult('verified');
    } else {
      setResult('not-found');
    }
  };

  return (
    <div className="w-full">
      {/* Title Header matching the Qualifi page style */}
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-8 sm:py-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            Certificate Verification
          </h1>
          <p className="mt-2 text-[14.5px] text-[#555555]">
            Instant electronic verification of Qualifi accredited diplomas and awards
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main verification form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-[#e5e9ec] p-6 sm:p-8 shadow-xs rounded-xs">
              <h2 className="text-[20px] font-bold text-[#222222] mb-2">
                Verify an Awarded Qualifi Qualification
              </h2>
              <p className="text-[14px] text-[#555555] mb-6 leading-relaxed">
                Qualifi certificates feature unique security numbers and watermarks. Enter the details printed on the bottom edge of the parchment to authenticate its issuance on the official register.
              </p>

              <form onSubmit={handleVerify} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                    Certificate Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. QLF-2024-88492"
                    value={certNumber}
                    onChange={(e) => setCertNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#cccccc] rounded-xs text-sm focus:outline-hidden focus:border-[#222222]"
                  />
                  <span className="text-[11px] text-[#777777]">Found at bottom-right of the parchment</span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                    Learner Reference / ULN (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1004829103"
                    value={learnerRef}
                    onChange={(e) => setLearnerRef(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#cccccc] rounded-xs text-sm focus:outline-hidden focus:border-[#222222]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-black hover:bg-[#222222] text-white font-bold tracking-wider text-xs uppercase px-8 py-3.5 rounded-full transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Verify Certificate</span>
                  </button>
                </div>
              </form>

              {result === 'verified' && (
                <div className="mt-8 p-5 bg-emerald-50 border border-emerald-300 rounded-xs">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-950">Valid & Genuine Qualifi Qualification</h4>
                      <p className="text-xs text-emerald-800 mt-1">
                        Certificate Reference <strong>{certNumber.toUpperCase()}</strong> has been validated against the central Qualifi Awarding Registry.
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-2 text-xs border-t border-emerald-200 pt-2 text-emerald-900">
                        <div><strong>Status:</strong> Awarded & Conferred</div>
                        <div><strong>Regulator:</strong> Ofqual (England)</div>
                        <div><strong>Awarding Body:</strong> Qualifi Ltd</div>
                        <div><strong>Security Seal:</strong> Verified Holographic Print</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {result === 'not-found' && (
                <div className="mt-8 p-5 bg-amber-50 border border-amber-300 rounded-xs">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-amber-950">Record Not Found</h4>
                      <p className="text-xs text-amber-800 mt-1">
                        Please check the certificate reference number format and re-enter. If the certificate was issued within the last 5 working days, data sync may still be in progress.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fcfcfc] border border-[#e5e9ec] p-6 rounded-xs space-y-4">
              <h3 className="text-[17px] font-bold text-[#222222] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F9AF19]" />
                Security & Fraud Prevention
              </h3>
              <p className="text-[13.5px] text-[#555555] leading-relaxed">
                Qualifi takes qualification fraud very seriously. All official certificates are printed on specialized watermarked paper containing micro-text, metallic guilloche borders, and a unique holographic serial number.
              </p>
              <ul className="text-xs text-[#555555] space-y-2 list-disc pl-4">
                <li>Unique QR code linking to digital credential registry</li>
                <li>Ofqual logo and Register RN5354 verification</li>
                <li>Embossed metallic gold Qualifi seal</li>
                <li>Tamper-evident reactive background tint</li>
              </ul>
              <div className="pt-2 border-t border-[#e5e9ec]">
                <p className="text-xs text-[#666666]">
                  For corporate third-party verification queries, contact <span className="font-semibold text-black">verify@qualifi.net</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
