import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, Shield, Activity, Clock } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreApproach: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreApproach }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-18 lg:pb-28">
      {/* Subtle organic background gradient accents */}
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-[#2d6a4f]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 -z-10 h-80 w-80 rounded-full bg-[#b8623b]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#eaf1ed] px-3.5 py-1.5 text-xs font-semibold text-[#1b4332] mb-6 border border-[#2d6a4f]/15">
              <span className="h-2 w-2 rounded-full bg-[#2d6a4f] animate-pulse" />
              <span>Independent Outpatient Physiotherapy Clinic</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1c2826] leading-[1.18] mb-6">
              Thoughtful, evidence-informed physiotherapy designed around{' '}
              <span className="text-[#1b4332] italic font-normal">how you move</span> every day.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5e6c67] leading-relaxed max-w-2xl mb-8">
              Recovering from injury or managing persistent physical discomfort requires more than generic exercise sheets or passive machines. At Nivaan, we combine thorough biomechanical assessment with clear, progressive rehabilitation to help you rebuild function, physical confidence, and long-term independence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1b4332] hover:bg-[#122b21] text-white px-7 py-3.5 text-sm font-medium transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1b4332]/40"
              >
                <Calendar className="h-4 w-4 text-[#eaf1ed]" />
                <span>Request an Appointment</span>
              </button>

              <button
                onClick={onExploreApproach}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-[#f3efe6] text-[#1c2826] border border-[#e7e2d7] px-6 py-3.5 text-sm font-medium transition focus:outline-none"
              >
                <span>Explore Our Approach</span>
                <ArrowRight className="h-4 w-4 text-[#5e6c67]" />
              </button>
            </div>

            {/* Clinical Principles Row */}
            <div className="pt-6 border-t border-[#e7e2d7] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#5e6c67]">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-[#eaf1ed] text-[#1b4332]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium text-[#1c2826]">45–60 min evaluations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-[#eaf1ed] text-[#1b4332]">
                  <Activity className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium text-[#1c2826]">Individualised movement plans</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-[#eaf1ed] text-[#1b4332]">
                  <Shield className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium text-[#1c2826]">Guided self-management</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e7e2d7] bg-white">
                <img
                  src="https://images.pexels.com/photos/5793651/pexels-photo-5793651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                  alt="A physiotherapist performing a careful posture and movement assessment in a bright, modern clinical setting"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center"
                  loading="eager"
                />
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#122b21]/75 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#e7e2d7]">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-[#eaf1ed] flex items-center justify-center text-[#1b4332]">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#1c2826] leading-tight">
                        Assessment Before Intervention
                      </h4>
                      <p className="text-xs text-[#5e6c67] mt-1 leading-relaxed">
                        We identify the underlying biomechanical factors behind your symptoms before beginning active exercise therapy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2 rounded-2xl bg-[#faf8f5] px-4 py-2.5 shadow-md border border-[#e7e2d7] text-xs font-medium text-[#1c2826]">
                <Clock className="h-4 w-4 text-[#2d6a4f]" />
                <span>Dedicated 1-on-1 consultations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
