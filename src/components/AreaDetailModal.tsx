import React from 'react';
import { X, CheckCircle, Activity, Calendar } from 'lucide-react';
import { AreaOfCare } from '../types';

interface AreaDetailModalProps {
  area: AreaOfCare | null;
  onClose: () => void;
  onEnquire: () => void;
}

export const AreaDetailModal: React.FC<AreaDetailModalProps> = ({
  area,
  onClose,
  onEnquire,
}) => {
  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#faf8f5] p-6 sm:p-8 shadow-2xl border border-[#e7e2d7] text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5e6c67] hover:text-[#1c2826] hover:bg-[#f3efe6] transition"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3 py-0.5 text-xs font-semibold text-[#1b4332]">
            <Activity className="h-3 w-3" /> Area of Care (Illustrative Concept)
          </span>
          {area.badge && (
            <span className="rounded-full bg-[#f3efe6] px-2.5 py-0.5 text-[11px] font-medium text-[#1c2826] border border-[#e7e2d7]">
              {area.badge}
            </span>
          )}
        </div>

        <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-semibold text-[#1c2826] mb-2">
          {area.title}
        </h3>
        <p className="text-sm sm:text-base text-[#1b4332] font-medium mb-6">
          {area.tagline}
        </p>

        {/* Clinical Description */}
        <div className="mb-6 bg-white rounded-2xl p-5 border border-[#e7e2d7]">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5e6c67] mb-2">
            Clinical Overview
          </h4>
          <p className="text-sm text-[#1c2826] leading-relaxed">
            {area.description}
          </p>
        </div>

        {/* Two Column Details: Concerns & Approach */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5e6c67] mb-3">
              Typical Presentations We Assess
            </h4>
            <ul className="space-y-2.5">
              {area.typicalConcerns.map((concern, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1c2826]">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#b8623b] shrink-0" />
                  <span>{concern}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5e6c67] mb-3">
              Clinical Assessment & Focus
            </h4>
            <ul className="space-y-2.5">
              {area.clinicalFocus.map((focus, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1c2826]">
                  <CheckCircle className="mt-0.5 h-3.5 w-3.5 text-[#2d6a4f] shrink-0" />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Callout */}
        <div className="pt-5 border-t border-[#e7e2d7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5e6c67]">
            Not sure if this matches your concern? Discuss your situation with an enquiry.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-[#e7e2d7] text-xs font-medium text-[#5e6c67] hover:bg-[#f3efe6] transition w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire();
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1b4332] text-white px-5 py-2.5 text-xs font-medium hover:bg-[#122b21] transition shadow-sm w-full sm:w-auto"
            >
              <Calendar className="h-3.5 w-3.5 text-[#eaf1ed]" />
              <span>Enquire About This Area</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
