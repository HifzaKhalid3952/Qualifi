import React, { useState } from 'react';
import { X, Send, CheckCircle2, Award, Mail, Phone, User, BookOpen } from 'lucide-react';
import { SECTORS } from '../data/qualificationsData';

interface EnquiryModalProps {
  initialSubject?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  initialSubject = '',
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedSector, setSelectedSector] = useState(initialSubject || 'BUSINESS AND MANAGEMENT');
  const [studyMode, setStudyMode] = useState<'Online Distance Learning' | 'Blended' | 'Classroom'>('Online Distance Learning');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setErrorMsg('Please enter your full name and valid email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden my-auto border border-slate-300"
        role="dialog"
      >
        {/* Header */}
        <div className="bg-[#0b1a30] text-white p-6 flex items-start justify-between gap-4">
          <div>
            <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider mb-1">
              Admissions & Programme Guidance
            </div>
            <h2 className="text-xl font-serif font-bold text-white tracking-tight">
              Enquire About Qualifi Qualifications
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Receive the complete qualification syllabus, entry requirements, and approved centre options.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Enquiry Successfully Submitted</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{fullName}</strong>. An academic advisor will contact you at <strong>{email}</strong> within
              1 business day with the official qualification syllabus, fee structures, and approved centre intake details.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#0b1a30] hover:bg-[#162e55] text-white text-xs font-semibold rounded transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded text-xs">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Dr. Sarah Jenkins"
                  className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded focus:outline-hidden focus:border-[#0b1a30] text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded focus:outline-hidden focus:border-[#0b1a30] text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Phone / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7123 456789"
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded focus:outline-hidden focus:border-[#0b1a30] text-slate-900"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Sector / Qualification of Interest
              </label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-hidden focus:border-[#0b1a30] text-slate-900 bg-white"
              >
                {initialSubject && <option value={initialSubject}>{initialSubject}</option>}
                {SECTORS.map((sec) => (
                  <option key={sec.id} value={sec.name}>
                    {sec.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Preferred Study Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Online Distance Learning', 'Blended', 'Classroom'] as const).map((m) => (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setStudyMode(m)}
                    className={`py-2 px-2 text-center rounded border transition-colors cursor-pointer text-[11px] font-medium ${
                      studyMode === m
                        ? 'bg-[#0b1a30] text-white border-[#0b1a30]'
                        : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {m.replace(' Distance Learning', '')}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Additional Questions or Prior Education Background
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention your highest qualification or what university degree top-up you aim for..."
                className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-hidden focus:border-[#0b1a30] text-slate-900"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-[#0b1a30] hover:bg-[#162e55] text-white font-semibold rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs text-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Enquiry</span>
              </button>
            </div>

            <div className="text-[10px] text-slate-500 text-center pt-1">
              Your details are kept strictly confidential under Qualifi's privacy policy and GDPR guidelines.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
