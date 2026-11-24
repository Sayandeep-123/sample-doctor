import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Lightweight scroll-spy: highlight the section currently in view
      const ids = ['about', 'areas-of-care', 'our-approach', 'practitioner', 'resources', 'faq', 'contact'];
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) current = `#${id}`;
        }
      }
      setActiveHref(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Areas of Care', href: '#areas-of-care' },
    { label: 'Our Approach', href: '#our-approach' },
    { label: 'Practitioner', href: '#practitioner' },
    { label: 'Resources', href: '#resources' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveHref(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 transition-all">
      {/* Top Clinical Quick Bar — desktop only to reduce clutter */}
      <div className="bg-[#f3efe6] border-b border-[#e7e2d7] py-1.5 px-4 text-xs text-[#5e6c67] hidden lg:block">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#2d6a4f]" />
              <span>Central Suburbs, Mumbai</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#2d6a4f]" />
              <span>Mon – Sat: By prior appointment</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919820000000"
              className="flex items-center gap-1.5 font-medium text-[#1b4332] hover:underline"
            >
              <Phone className="h-3 w-3 text-[#2d6a4f]" />
              <span>{CLINIC_INFO.displayPhone}</span>
            </a>
            <span className="text-[#c5beb2]">|</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#1b4332] bg-[#eaf1ed] px-2 py-0.5 rounded-full">
              Dedicated 1-on-1 Sessions
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`bg-[#faf8f5]/95 backdrop-blur-md transition-shadow duration-200 border-b border-[#e7e2d7] ${
          scrolled ? 'shadow-[0_2px_16px_rgba(27,67,50,0.08)]' : ''
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 xl:px-8 h-[76px] flex items-center gap-6">
          {/* Brand — fixed width so nav stays centred */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 rounded-xl p-1 -ml-1 focus:outline-none focus:ring-2 focus:ring-[#1b4332]/20"
            aria-label="Nivaan Physiotherapy — back to top"
          >
            <Logo />
          </a>

          {/* Desktop Navigation — only at xl+ where 7 links fit comfortably */}
          <div className="hidden xl:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-1 bg-white/60 border border-[#e7e2d7]/70 rounded-full px-1.5 py-1.5">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      aria-current={isActive ? 'true' : undefined}
                      className={[
                        'whitespace-nowrap rounded-full px-3.5 py-2 text-[13.5px] font-medium tracking-[-0.01em] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4332]/30',
                        isActive
                          ? 'bg-[#1b4332] text-white shadow-sm'
                          : 'text-[#1c2826]/75 hover:text-[#1b4332] hover:bg-[#eaf1ed]',
                      ].join(' ')}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right cluster — divider creates clear separation from nav */}
          <div className="flex items-center gap-4 sm:gap-5 shrink-0 ml-auto">
            <span className="hidden xl:block w-px h-9 bg-[#e7e2d7]" aria-hidden="true" />

            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 rounded-full bg-[#1b4332] hover:bg-[#122b21] text-white font-medium pl-4 pr-5 py-3 text-[13px] transition shadow-sm hover:shadow-md hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]/40 whitespace-nowrap"
            >
              <Calendar className="h-4 w-4 text-[#95d5b2] shrink-0" />
              <span className="hidden min-[420px]:inline">Request an Appointment</span>
              <span className="min-[420px]:hidden">Book Visit</span>
            </button>

            {/* Mobile / tablet menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 -mr-1 text-[#1c2826] hover:bg-[#f3efe6] rounded-xl transition"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#faf8f5] border-t border-[#e7e2d7] px-4 sm:px-6 pt-3 pb-6 shadow-xl max-h-[calc(100vh-76px)] overflow-y-auto">
            <ul className="flex flex-col gap-1 pb-4">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={[
                        'w-full text-left py-3 px-4 rounded-xl text-[15px] font-medium transition',
                        isActive
                          ? 'bg-[#eaf1ed] text-[#1b4332]'
                          : 'text-[#1c2826] hover:bg-[#f3efe6] hover:text-[#1b4332]',
                      ].join(' ')}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="pt-4 border-t border-[#e7e2d7] flex flex-col gap-2.5 text-[13px] text-[#5e6c67]">
              <div className="flex items-center gap-2 px-1">
                <MapPin className="h-4 w-4 text-[#2d6a4f]" />
                <span>Central Suburbs, Mumbai</span>
              </div>
              <div className="flex items-center gap-2 px-1">
                <Clock className="h-4 w-4 text-[#2d6a4f]" />
                <span>Consultations by prior appointment</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 text-center rounded-xl bg-[#1b4332] text-white py-3.5 text-sm font-medium shadow-sm"
              >
                <Calendar className="h-4 w-4 text-[#95d5b2]" />
                Request an Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
