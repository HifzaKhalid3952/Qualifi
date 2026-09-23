import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onNavigateTab: (tab: string) => void;
  onOpenCompare?: () => void;
  compareCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigateTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  const navLinks = [
    { id: 'LEARNERS', label: 'LEARNERS' },
    { id: 'CERTIFICATE VERIFICATION', label: 'CERTIFICATE VERIFICATION' },
    { id: 'EMPLOYERS', label: 'EMPLOYERS' },
    { id: 'CENTRES', label: 'CENTRES' },
    { id: 'QUALIFICATIONS', label: 'QUALIFICATIONS' },
    { id: 'UNIVERSITY PROGRESSION', label: 'UNIVERSITY PROGRESSION' },
    { id: 'FAQ', label: 'FAQ' },
    { id: 'INTERNATIONAL', label: 'INTERNATIONAL' },
    { id: 'CONTACT', label: 'CONTACT' },
  ];

  return (
    <header className="w-full select-none">
      {/* 1. Top Yellow Ribbon (#f5af18) - Exact from screenshot */}
      <div className="bg-[#f5af18] text-[#222222] py-1.5 px-4 sm:px-8 border-b border-[#e5a013]">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          {/* Left: Language selector dropdown */}
          <div className="flex items-center">
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-white border border-[#333333]/40 rounded-[2px] px-3 py-0.5 text-[12px] text-[#222222] font-normal shadow-2xs focus:outline-hidden cursor-pointer"
            >
              <option value="English">English</option>
              <option value="Arabic">العربية (Arabic)</option>
              <option value="Spanish">Español (Spanish)</option>
              <option value="French">Français (French)</option>
              <option value="Chinese">中文 (Chinese)</option>
            </select>
          </div>

          {/* Right: News | About Us | Contact & Social Icons */}
          <div className="flex items-center gap-4 text-[12.5px] text-[#222222]">
            <div className="flex items-center text-[#222222] font-normal">
              <button onClick={() => onNavigateTab('NEWS')} className="hover:underline cursor-pointer">News</button>
              <span className="mx-2 text-[#222222]/40">|</span>
              <button onClick={() => onNavigateTab('ABOUT US')} className="hover:underline cursor-pointer">About Us</button>
              <span className="mx-2 text-[#222222]/40">|</span>
              <button onClick={() => onNavigateTab('CONTACT')} className="hover:underline cursor-pointer">Contact</button>
            </div>

            {/* 4 Social Icons from screenshot: Facebook, LinkedIn, Instagram, X */}
            <div className="hidden sm:flex items-center gap-3.5 ml-2 text-[#222222]">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity" title="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity" title="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.91-.74-1.65-1.66-1.65-.92 0-1.66.74-1.66 1.65 0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity" title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* X */}
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity" title="X (Twitter)">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Dark Header Block (#202020) - Seamless Single Container */}
      <div className="bg-[#202020] text-white pt-6 pb-6 px-4 sm:px-8 border-b border-[#2d2d2d]">
        <div className="max-w-[1240px] mx-auto">
          {/* Top Row: Logo & Tagline */}
          <div className="flex items-center justify-between pb-6">
            {/* Left: Official Qualifi Logo */}
            <div 
              onClick={() => onNavigateTab('QUALIFICATIONS')}
              className="cursor-pointer flex items-center gap-3.5 select-none"
            >
              {/* 3D Multi-color Ribbon Sphere from image */}
              <svg className="w-12 h-12 shrink-0 drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="sphereBase" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#2c3542" />
                    <stop offset="65%" stopColor="#131821" />
                    <stop offset="100%" stopColor="#080b10" />
                  </radialGradient>
                  <linearGradient id="cyanRibbon" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#00c6ff" />
                    <stop offset="100%" stopColor="#0072ff" />
                  </linearGradient>
                  <linearGradient id="redRibbon" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#ff416c" />
                    <stop offset="100%" stopColor="#ff4b2b" />
                  </linearGradient>
                  <linearGradient id="yellowRibbon" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#f9d423" />
                    <stop offset="100%" stopColor="#ff7a00" />
                  </linearGradient>
                  <linearGradient id="greenRibbon" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#11998e" />
                    <stop offset="100%" stopColor="#38ef7d" />
                  </linearGradient>
                </defs>
                {/* Dark sphere body */}
                <circle cx="50" cy="50" r="46" fill="url(#sphereBase)" />
                {/* Swirling 3D ribbons */}
                <path d="M16 38 C 24 22, 66 16, 84 32 C 86 36, 83 40, 78 39 C 63 30, 28 32, 16 38 Z" fill="url(#cyanRibbon)" />
                <path d="M12 52 C 16 38, 62 34, 88 48 C 89 52, 85 57, 80 55 C 58 44, 24 47, 12 52 Z" fill="url(#redRibbon)" />
                <path d="M14 66 C 22 52, 68 50, 86 64 C 88 68, 83 72, 78 70 C 60 59, 26 62, 14 66 Z" fill="url(#yellowRibbon)" />
                <path d="M22 78 C 34 68, 68 67, 80 78 C 81 82, 77 86, 72 84 C 58 76, 34 77, 22 78 Z" fill="url(#greenRibbon)" />
              </svg>

              {/* QUALIFI Wordmark + Golden Swoosh Ribbon */}
              <div className="flex flex-col">
                <span className="text-[34px] sm:text-[38px] font-black tracking-[0.04em] text-white leading-none font-sans">
                  QUALIFI
                </span>
                {/* Golden swoosh underneath */}
                <svg className="w-28 sm:w-32 h-2.5 mt-0.5 text-[#f5af18]" viewBox="0 0 140 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10 C 25 10, 48 3, 85 2 C 110 1.5, 128 3.5, 138 7 C 132 5.5, 110 3, 85 3.5 C 50 4.5, 26 11, 2 10 Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Right: Tagline from image */}
            <div className="hidden md:block text-slate-100 text-[18px] sm:text-[20px] font-normal tracking-wide">
              An Ofqual Recognised Awarding Organisation
            </div>

            {/* Mobile menu hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xs flex items-center gap-1.5 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <span className="text-xs uppercase font-bold tracking-wider text-slate-300">Menu</span>
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#f5af18]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Bottom Row: Navigation Menu - Exact layout from image */}
          <div className="hidden lg:block elementor-12343">
            <div className="elementor-element elementor-element-dbbf608">
              <nav className="elementor-nav-menu flex items-center justify-start gap-5 xl:gap-6">
                {navLinks.map((link) => {
                  const isActive = activeTab === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => onNavigateTab(link.id)}
                      style={isActive ? { color: '#c98d00' } : undefined}
                      className={`elementor-item transition-colors cursor-pointer text-left font-['Raleway',sans-serif] text-[12px] font-bold uppercase tracking-[0px] whitespace-nowrap py-1 ${
                        isActive
                          ? 'text-[#c98d00]'
                          : 'text-white hover:text-[#c98d00]'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#202020] text-white border-t border-[#333333] px-4 py-4 space-y-2 elementor-12343 animate-fadeIn">
          <div className="elementor-element elementor-element-dbbf608 elementor-nav-menu space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateTab(link.id);
                }}
                style={activeTab === link.id ? { backgroundColor: '#f5af18', color: '#222222' } : undefined}
                className={`elementor-item block py-2.5 px-3 text-left w-full rounded-xs transition-colors cursor-pointer font-['Raleway',sans-serif] text-[12px] font-bold uppercase tracking-[0px] ${
                  activeTab === link.id
                    ? 'font-bold'
                    : 'text-slate-200 hover:bg-white/5 hover:text-[#c98d00]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

