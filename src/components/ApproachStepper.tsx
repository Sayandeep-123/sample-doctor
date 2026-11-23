import React from 'react';
import { Route, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { PATIENT_JOURNEY } from '../data/clinicData';

interface ApproachStepperProps {
  onOpenEnquiry: () => void;
}

export const ApproachStepper: React.FC<ApproachStepperProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="our-approach" className="py-16 sm:py-24 bg-[#f3efe6]/50 border-t border-[#e7e2d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3.5 py-1 text-xs font-semibold text-[#1b4332] mb-3">
            <Route className="h-3.5 w-3.5" />
            <span>The Patient Journey</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1c2826] tracking-tight leading-snug mb-4">
            A clear, collaborative pathway from assessment to independence.
          </h2>
          <p className="text-base sm:text-lg text-[#5e6c67] leading-relaxed">
            Rehabilitation should never feel ambiguous. From your first consultation, you will understand what we are testing, why specific movements are chosen, and how we measure meaningful progress.
          </p>
        </div>

        {/* Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PATIENT_JOURNEY.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-3xl bg-white p-7 border border-[#e7e2d7] shadow-sm hover:shadow-md transition text-left"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#2d6a4f]/40 tracking-tight">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-[#eaf1ed] px-2.5 py-0.5 text-[11px] font-semibold text-[#1b4332]">
                    {item.duration}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#1c2826] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-[#b8623b] mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#5e6c67] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Deliverable Box */}
              <div className="pt-4 border-t border-[#e7e2d7]/70">
                <div className="flex items-start gap-2 bg-[#faf8f5] p-3 rounded-xl border border-[#e7e2d7]">
                  <CheckCircle2 className="h-4 w-4 text-[#2d6a4f] shrink-0 mt-0.5" />
                  <span className="text-[11px] font-medium text-[#1c2826] leading-tight">
                    {item.deliverable}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner with CTA */}
        <div className="mt-14 rounded-3xl bg-[#1b4332] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-wider text-[#eaf1ed] font-semibold mb-2">
              Our Commitment to You
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-snug">
              No open-ended visits. We measure success by your functional capability.
            </h3>
            <p className="text-sm text-[#d8e3dc] mt-2 leading-relaxed">
              Every phase of your care is tied to observable physical goals. When you are ready to manage your movement health independently, we ensure you have the tools to do so.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#faf8f5] text-[#1b4332] px-6 py-3.5 text-sm font-semibold transition shadow-md"
          >
            <Calendar className="h-4 w-4 text-[#2d6a4f]" />
            <span>Book Initial Assessment</span>
            <ArrowRight className="h-4 w-4 text-[#2d6a4f]" />
          </button>
        </div>
      </div>
    </section>
  );
};
