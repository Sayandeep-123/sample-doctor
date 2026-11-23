import React from 'react';
import { Award, GraduationCap, Stethoscope, Quote, Info, CheckCircle } from 'lucide-react';
import { PRACTITIONER_PROFILE } from '../data/clinicData';

export const PractitionerProfile: React.FC = () => {
  return (
    <section id="practitioner" className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3.5 py-1 text-xs font-semibold text-[#1b4332] mb-3">
            <Stethoscope className="h-3.5 w-3.5" />
            <span>Clinical Leadership</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1c2826] tracking-tight leading-snug mb-3">
            Meet Your Clinical Practitioner
          </h2>
          <p className="text-base text-[#5e6c67]">
            Care at Nivaan is delivered through dedicated, unhurried one-on-one evaluations.
          </p>

          {/* Explicit Illustrative Badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#f3efe6] px-4 py-2 text-xs text-[#5e6c67] border border-[#e7e2d7]">
            <Info className="h-4 w-4 text-[#b8623b] shrink-0" />
            <span>
              <strong>Concept Notice:</strong> Illustrative practitioner profile created to demonstrate how an independent clinic founder establishes credibility.
            </span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#e7e2d7] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Column */}
            <div className="lg:col-span-5 relative bg-[#f3efe6]">
              <img
                src={PRACTITIONER_PROFILE.image}
                alt={PRACTITIONER_PROFILE.name}
                className="w-full h-80 lg:h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <span className="text-xs uppercase tracking-wider text-[#eaf1ed]">
                  {PRACTITIONER_PROFILE.role}
                </span>
                <h3 className="font-serif text-xl font-semibold">
                  {PRACTITIONER_PROFILE.name}
                </h3>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between text-left">
              <div>
                <div className="hidden lg:block mb-4">
                  <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#2d6a4f] mb-1">
                    {PRACTITIONER_PROFILE.role}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1c2826]">
                    {PRACTITIONER_PROFILE.name}
                  </h3>
                </div>

                {/* Credentials Banner */}
                <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-[#5e6c67]">
                  <span className="flex items-center gap-1.5 font-medium text-[#1c2826] bg-[#faf8f5] px-3 py-1 rounded-lg border border-[#e7e2d7]">
                    <GraduationCap className="h-4 w-4 text-[#2d6a4f]" />
                    <span>{PRACTITIONER_PROFILE.credentials}</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#faf8f5] px-3 py-1 rounded-lg border border-[#e7e2d7]">
                    <Award className="h-4 w-4 text-[#b8623b]" />
                    <span>{PRACTITIONER_PROFILE.registration}</span>
                  </span>
                </div>

                {/* Narrative Bio */}
                <div className="space-y-3.5 text-xs sm:text-sm text-[#5e6c67] leading-relaxed mb-6">
                  {PRACTITIONER_PROFILE.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Clinical Areas of Interest */}
                <div className="mb-6 pt-4 border-t border-[#e7e2d7]">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#1c2826] mb-2.5">
                    Clinical Interests & Advanced Training (Illustrative):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1c2826]">
                    {PRACTITIONER_PROFILE.clinicalInterests.map((interest, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-[#2d6a4f] shrink-0 mt-0.5" />
                        <span>{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote Block */}
              <div className="rounded-2xl bg-[#f3efe6]/80 p-4 border border-[#e7e2d7] flex items-start gap-3">
                <Quote className="h-5 w-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <p className="font-serif italic text-xs sm:text-sm text-[#1c2826] leading-relaxed">
                  "{PRACTITIONER_PROFILE.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
