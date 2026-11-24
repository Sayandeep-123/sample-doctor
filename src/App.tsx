import React, { useState } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutIntro } from './components/AboutIntro';
import { AreasOfCare } from './components/AreasOfCare';
import { ClinicEnvironment } from './components/ClinicEnvironment';
import { ApproachStepper } from './components/ApproachStepper';
import { PractitionerProfile } from './components/PractitionerProfile';
import { PatientResources } from './components/PatientResources';
import { EnquirySection } from './components/EnquirySection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ConceptStrategyModal } from './components/ConceptStrategyModal';
import { MessageSquare, Calendar } from 'lucide-react';

export const App: React.FC = () => {
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [whatsappToast, setWhatsappToast] = useState(false);

  const scrollToEnquiry = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToApproach = () => {
    const approachSection = document.getElementById('our-approach');
    if (approachSection) {
      approachSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsappClick = () => {
    setWhatsappToast(true);
    setTimeout(() => setWhatsappToast(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c2826] font-sans antialiased selection:bg-[#2d6a4f]/15 selection:text-[#1b4332] flex flex-col justify-between">
      {/* Top Demo Notice Banner */}
      <DemoBanner onOpenStrategy={() => setStrategyOpen(true)} />

      {/* Main Header & Nav */}
      <Header onOpenEnquiry={scrollToEnquiry} />

      {/* Homepage Sections */}
      <main>
        {/* Section B: Hero */}
        <Hero
          onOpenEnquiry={scrollToEnquiry}
          onExploreApproach={scrollToApproach}
        />

        {/* Section C: Introduction / About */}
        <AboutIntro />

        {/* Section D: Areas of Care */}
        <AreasOfCare onOpenEnquiry={scrollToEnquiry} />

        {/* Dedicated Clinic Space & Hygiene Preview */}
        <ClinicEnvironment />

        {/* Section E: Our Approach (4-Step Stepper) */}
        <ApproachStepper onOpenEnquiry={scrollToEnquiry} />

        {/* Section F: Meet the Practitioner (Illustrative) */}
        <PractitionerProfile />

        {/* Section G: Patient Education / Resources */}
        <PatientResources />

        {/* Section H: Appointment Enquiry Form */}
        <EnquirySection />

        {/* Section I: Practical FAQs */}
        <FAQSection onOpenEnquiry={scrollToEnquiry} />
      </main>

      {/* Section J: Footer */}
      <Footer
        onOpenEnquiry={scrollToEnquiry}
        onOpenStrategy={() => setStrategyOpen(true)}
      />

      {/* Concept Strategy & Sales Pitch Modal */}
      <ConceptStrategyModal
        isOpen={strategyOpen}
        onClose={() => setStrategyOpen(false)}
      />

      {/* Floating Demo WhatsApp / Quick Enquiry Trigger */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        {whatsappToast && (
          <div className="rounded-2xl bg-[#1b4332] text-white p-3 text-xs shadow-xl max-w-xs animate-in slide-in-from-bottom-2 duration-200">
            <span className="font-semibold block mb-0.5">Demo WhatsApp Integration</span>
            In a live clinic deployment, this opens a pre-filled WhatsApp conversation directly with clinic reception.
          </div>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={handleWhatsappClick}
            className="flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 text-xs font-semibold shadow-lg hover:shadow-xl transition-all"
            title="Simulate WhatsApp Enquiry"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Enquiry</span>
          </button>
          <button
            onClick={scrollToEnquiry}
            className="flex items-center gap-2 rounded-full bg-[#1b4332] hover:bg-[#122b21] text-white px-4 py-2.5 text-xs font-semibold shadow-lg hover:shadow-xl transition-all"
            title="Book Consultation"
          >
            <Calendar className="h-4 w-4 text-[#eaf1ed]" />
            <span>Book Assessment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
