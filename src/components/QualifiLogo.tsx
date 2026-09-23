import React from 'react';

interface QualifiLogoProps {
  className?: string;
  light?: boolean;
}

export const QualifiLogo: React.FC<QualifiLogoProps> = ({ className = 'h-12', light = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Qualifi Green Swirl Icon */}
      <svg className="h-10 w-10 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="#16a34a" strokeWidth="4" strokeDasharray="6 3" opacity="0.3" />
        <path
          d="M50 12C29.01 12 12 29.01 12 50C12 70.99 29.01 88 50 88C70.99 88 88 70.99 88 50"
          stroke="#15803d"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M50 24C35.64 24 24 35.64 24 50C24 64.36 35.64 76 50 76C64.36 76 76 64.36 76 50"
          stroke="#22c55e"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="50" cy="50" r="14" fill="#15803d" />
        <path d="M50 36V50L58 58" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`text-2xl sm:text-3xl font-black tracking-tight font-serif ${light ? 'text-white' : 'text-[#0a1931]'}`}>
          QUALIFI
        </span>
        <span className={`text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.16em] uppercase -mt-1 ${light ? 'text-emerald-400' : 'text-emerald-700'}`}>
          SUCCESS THROUGH LEARNING RECOGNISED WORLDWIDE
        </span>
      </div>
    </div>
  );
};
