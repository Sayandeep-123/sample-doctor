import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenEnquiry: () => void;
  onOpenStrategy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onOpenStrategy }) => {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122b21] text-[#eaf1ed] pt-16 pb-12 border-t border-[#2d6a4f]/20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2d6a4f]/30">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />

            <p className="text-xs sm:text-sm text-[#d8e3dc] leading-relaxed max-w-sm">
              An independent, evidence-informed outpatient physiotherapy practice focused on individualised biomechanical assessment, functional restoration, and guided independence.
            </p>

            <div className="pt-2">
              <span className="inline-block rounded-full bg-[#2d6a4f]/40 px-3 py-1 text-[11px] font-medium text-[#eaf1ed] border border-[#2d6a4f]/40">
                Fictional Concept & Sales Demo
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#d8e3dc]">
              <li>
                <button
                  onClick={() => handleNavClick('#about')}
                  className="hover:text-white transition"
                >
                  About the Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#areas-of-care')}
                  className="hover:text-white transition"
                >
                  Areas of Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#our-approach')}
                  className="hover:text-white transition"
                >
                  4-Step Patient Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#practitioner')}
                  className="hover:text-white transition"
                >
                  Clinical Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#resources')}
                  className="hover:text-white transition"
                >
                  Patient Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#faq')}
                  className="hover:text-white transition"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Areas of Care Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Clinical Areas (Illustrative)
            </h4>
            <ul className="space-y-2 text-xs text-[#d8e3dc]">
              <li>Musculoskeletal Rehabilitation</li>
              <li>Orthopaedic Rehabilitation</li>
              <li>Post-Operative Movement Protocols</li>
              <li>Persistent Pain & Mobility Pacing</li>
              <li>Workplace Ergonomics & Posture</li>
              <li>Supportive Manual Modalities</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Location & Enquiries
            </h4>
            <div className="space-y-2.5 text-xs text-[#d8e3dc]">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#2d6a4f] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#2d6a4f] shrink-0" />
                <span>Mon – Sat: By prior appointment</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#2d6a4f] shrink-0" />
                <span>{CLINIC_INFO.displayPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#2d6a4f] shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full text-center rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white py-2 text-xs font-medium transition shadow-xs"
              >
                Request an Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer & Legal Callout */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a4b8af]">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#2d6a4f] shrink-0" />
            <p className="max-w-2xl text-[11px] leading-relaxed">
              <strong>Medical & Presentation Disclaimer:</strong> This website is an independent fictional concept created exclusively for sales demonstration and design presentation purposes. It does not represent an operating clinic, nor does it provide personal medical advice. For acute conditions or emergency care, please consult a registered medical physician.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-[11px]">
            <button
              onClick={onOpenStrategy}
              className="text-white hover:underline font-medium"
            >
              Strategy Notes
            </button>
            <span>•</span>
            <span>Fictional Concept © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
