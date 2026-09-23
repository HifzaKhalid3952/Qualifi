import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <div className="bg-[#f7f9fa] border-b border-[#e5e9ec] py-8 sm:py-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            Contact Qualifi
          </h1>
          <p className="mt-2 text-[14.5px] text-[#555555]">
            Get in touch with our regulatory, centre support, and qualification teams
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-[#e5e9ec] p-6 sm:p-8 rounded-xs shadow-xs">
            <h2 className="text-[20px] font-bold text-[#222222] mb-1">
              Send an Official Enquiry
            </h2>
            <p className="text-xs text-[#666666] mb-6">
              Our support desk aims to respond within 24 to 48 business hours.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Enquiry Dispatched Successfully</span>
                </div>
                <p className="text-xs text-emerald-700">
                  Thank you, <strong>{formData.name}</strong>. An email confirmation has been sent to {formData.email}. Reference QLF-{Date.now().toString().slice(-6)}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
                  }}
                  className="mt-3 text-xs font-bold text-emerald-900 underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-[#cccccc] rounded-xs text-xs focus:outline-hidden focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-[#cccccc] rounded-xs text-xs focus:outline-hidden focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-[#cccccc] rounded-xs text-xs focus:outline-hidden focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                      Department / Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 border border-[#cccccc] rounded-xs text-xs bg-white focus:outline-hidden cursor-pointer"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Qualifications & Syllabus">Qualifications & Syllabus</option>
                      <option value="Centre Approval Application">Centre Approval Application</option>
                      <option value="University Progression">University Progression</option>
                      <option value="Certificate Verification">Certificate Verification</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 border border-[#cccccc] rounded-xs text-xs focus:outline-hidden focus:border-black"
                    placeholder="Please specify your centre name or qualification of interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-black hover:bg-[#222222] text-white font-bold tracking-wider text-xs uppercase px-8 py-3.5 rounded-full transition-colors cursor-pointer"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fafbfc] border border-[#e5e9ec] p-6 rounded-xs space-y-4">
              <h3 className="text-[17px] font-bold text-[#222222]">Headquarters & Registry</h3>
              
              <div className="space-y-3 text-xs text-[#555555]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F9AF19] shrink-0 mt-0.5" />
                  <div>
                    <strong>Qualifi Ltd</strong><br />
                    700 Aztec West, Almondsbury, Bristol, BS32 4SD, United Kingdom
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#F9AF19] shrink-0 mt-0.5" />
                  <div>
                    <strong>Telephone:</strong><br />
                    +44 (0)115 888 2550
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#F9AF19] shrink-0 mt-0.5" />
                  <div>
                    <strong>General Enquiries:</strong><br />
                    info@qualifi.net
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#F9AF19] shrink-0 mt-0.5" />
                  <div>
                    <strong>Operational Hours:</strong><br />
                    Monday – Friday: 09:00 – 17:00 GMT
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e5e9ec] text-[11px] text-[#777777]">
                Ofqual Recognised Awarding Organisation Number: <strong>RN5354</strong><br />
                Company Registration: <strong>04619981 (England & Wales)</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
