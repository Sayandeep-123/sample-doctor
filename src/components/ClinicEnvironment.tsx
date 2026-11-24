import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const ClinicEnvironment: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#e7e2d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e7e2d7] h-52 sm:h-64">
              <img
                src="https://images.pexels.com/photos/20860622/pexels-photo-20860622.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                alt="Patient receiving guided mobility exercises in clean clinical studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e7e2d7] h-52 sm:h-64 mt-6">
              <img
                src="https://images.pexels.com/photos/4506110/pexels-photo-4506110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                alt="Close-up examination of spinal posture and joint alignment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3.5 py-1 text-xs font-semibold text-[#1b4332]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>The Clinic Environment</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1c2826] leading-tight">
              A private, focused space designed for unhurried recovery.
            </h3>

            <p className="text-sm sm:text-base text-[#5e6c67] leading-relaxed">
              Unlike busy hospital outpatient departments where practitioners manage multiple beds simultaneously, Nivaan operates on a strict by-appointment model. During your time, your physiotherapist is 100% focused on your movement and questions.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#2d6a4f] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#1c2826]">
                  <strong>Strict one-on-one sessions:</strong> No divided attention or parallel bed management.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#2d6a4f] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#1c2826]">
                  <strong>Clean, sanitised equipment:</strong> Fresh linens and clinical-grade equipment disinfection between every visit.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#2d6a4f] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#1c2826]">
                  <strong>Functional exercise zone:</strong> Open space to practice squatting, stepping, and everyday lifting mechanics.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs text-[#5e6c67]">
              <div className="flex items-center gap-1.5 font-medium text-[#1b4332]">
                <ShieldCheck className="h-4 w-4 text-[#2d6a4f]" />
                <span>Sanitised Environment</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 font-medium text-[#1b4332]">
                <HeartHandshake className="h-4 w-4 text-[#2d6a4f]" />
                <span>Patient-First Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
