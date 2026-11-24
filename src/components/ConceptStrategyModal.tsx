import React from 'react';
import { X, CheckCircle2, ShieldCheck, HeartHandshake, Eye, Sparkles } from 'lucide-react';

interface ConceptStrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConceptStrategyModal: React.FC<ConceptStrategyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#faf8f5] p-6 sm:p-8 shadow-2xl border border-[#e7e2d7] text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="strategy-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5e6c67] hover:text-[#1c2826] hover:bg-[#f3efe6] transition"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3 py-1 text-xs font-semibold text-[#1b4332]">
            <Sparkles className="h-3 w-3" /> Brand Strategy & Sales Demo Rationale
          </span>
        </div>

        <h3 id="strategy-title" className="font-serif text-2xl sm:text-3xl font-semibold text-[#1c2826] mb-2 leading-tight">
          How an Independent Clinic Stands Out Online
        </h3>
        <p className="text-xs sm:text-sm text-[#5e6c67] leading-relaxed mb-6">
          This concept is tailored specifically for independent urban physiotherapy practitioners launching or modernizing their practice. Here is how each strategic design decision builds patient trust:
        </p>

        <div className="space-y-4 mb-6 text-xs sm:text-sm">
          <div className="rounded-2xl bg-white p-4 border border-[#e7e2d7]">
            <div className="flex items-center gap-2 font-serif font-semibold text-[#1c2826] text-sm mb-1.5">
              <ShieldCheck className="h-4 w-4 text-[#2d6a4f]" />
              <span>1. Evidence-Informed vs. Hospital or Spa Clichés</span>
            </div>
            <p className="text-[#5e6c67] leading-relaxed">
              Multi-speciality hospitals feel impersonal and bureaucratic, while generic wellness centers look like cosmetic spas. An independent physiotherapy clinic thrives on clinical rigor balanced with human warmth—emphasizing biomechanical assessment, active movement, and guided autonomy.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-[#e7e2d7]">
            <div className="flex items-center gap-2 font-serif font-semibold text-[#1c2826] text-sm mb-1.5">
              <HeartHandshake className="h-4 w-4 text-[#2d6a4f]" />
              <span>2. De-Mystifying the First Consultation</span>
            </div>
            <p className="text-[#5e6c67] leading-relaxed">
              New patients often hesitate because they don't know what to expect, fear pain during tests, or worry they need an orthopaedic referral first. By highlighting the 4-step journey and transparent FAQs, we eliminate first-visit friction.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-[#e7e2d7]">
            <div className="flex items-center gap-2 font-serif font-semibold text-[#1c2826] text-sm mb-1.5">
              <Eye className="h-4 w-4 text-[#2d6a4f]" />
              <span>3. Conversational Enquiries Over Rigid Booking Forms</span>
            </div>
            <p className="text-[#5e6c67] leading-relaxed">
              In urban India, patients strongly prefer WhatsApp and brief preliminary coordination before paying upfront. Our enquiry flow captures essential context (broad reason, preferred time, contact channel) without violating medical privacy or overwhelming the patient.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-[#e7e2d7]">
            <div className="flex items-center gap-2 font-serif font-semibold text-[#1c2826] text-sm mb-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#2d6a4f]" />
              <span>4. Clear Boundary & Fictional Identity Protection</span>
            </div>
            <p className="text-[#5e6c67] leading-relaxed">
              This concept uses entirely original branding (Nivaan), original copy, and illustrative practitioner profiles. It respects professional privacy while demonstrating the exact quality standard a growing private practice could commission.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#e7e2d7] flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full bg-[#1b4332] text-white px-5 py-2.5 text-xs font-medium hover:bg-[#122b21] transition"
          >
            Close Strategy Notes
          </button>
        </div>
      </div>
    </div>
  );
};
