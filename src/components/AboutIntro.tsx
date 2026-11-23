import React from 'react';
import { Target, Users, BookOpen, Compass, Check } from 'lucide-react';

export const AboutIntro: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#f3efe6]/60 border-y border-[#e7e2d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3 py-1 text-xs font-semibold text-[#1b4332] mb-3">
            <Compass className="h-3.5 w-3.5" />
            <span>Our Clinical Philosophy</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1c2826] tracking-tight leading-snug mb-5">
            Care that begins by understanding your daily movement demands.
          </h2>
          <p className="text-base sm:text-lg text-[#5e6c67] leading-relaxed">
            Two individuals presenting with the same clinical diagnosis—such as lumbar stiffness or shoulder impingement—rarely share the same life context. Your commute, work ergonomics, recreational habits, and recovery expectations shape how your body heals.
          </p>
        </div>

        {/* Narrative & Visual Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1c2826] leading-tight">
              Moving beyond standardized protocols and passive machines.
            </h3>
            <p className="text-sm sm:text-base text-[#5e6c67] leading-relaxed">
              While passive modalities (such as heat packs or simple electrotherapy) can sometimes provide brief symptom relief, sustainable physical recovery requires active, structured movement. At Nivaan, our priority is identifying why tissues are overloaded and progressively rebuilding your capacity to handle daily loads.
            </p>
            <p className="text-sm sm:text-base text-[#5e6c67] leading-relaxed">
              We take the time to evaluate joint mechanics, muscular coordination, and habitual movement patterns. Our goal is to replace temporary fixes with measurable physical capability that translates directly into your everyday routine.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <div className="mt-1 h-4 w-4 rounded-full bg-[#eaf1ed] text-[#1b4332] flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#1c2826]">
                  Dedicated one-on-one consultation time
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="mt-1 h-4 w-4 rounded-full bg-[#eaf1ed] text-[#1b4332] flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#1c2826]">
                  Thorough physical & movement testing
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="mt-1 h-4 w-4 rounded-full bg-[#eaf1ed] text-[#1b4332] flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#1c2826]">
                  Calibrated home movement guidance
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="mt-1 h-4 w-4 rounded-full bg-[#eaf1ed] text-[#1b4332] flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#1c2826]">
                  Transparent milestones & regular review
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e7e2d7] bg-white">
              <img
                src="https://images.pexels.com/photos/20860617/pexels-photo-20860617.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000"
                alt="Physiotherapist actively guiding a patient through targeted rehabilitation exercises"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="p-5 bg-white border-t border-[#e7e2d7]">
                <p className="font-serif italic text-sm text-[#1c2826]">
                  "Rehabilitation succeeds when the patient understands the purpose of every movement and feels confident applying it at home."
                </p>
                <span className="block mt-2 text-xs font-semibold text-[#5e6c67] uppercase tracking-wider">
                  — Nivaan Clinical Guideline
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#faf8f5] rounded-2xl p-6 sm:p-7 border border-[#e7e2d7] shadow-sm hover:border-[#1b4332]/30 transition">
            <div className="h-11 w-11 rounded-xl bg-[#eaf1ed] text-[#1b4332] flex items-center justify-center mb-4">
              <Target className="h-5 w-5" />
            </div>
            <h4 className="font-serif text-lg font-semibold text-[#1c2826] mb-2.5">
              1. Biomechanical Precision
            </h4>
            <p className="text-xs sm:text-sm text-[#5e6c67] leading-relaxed">
              We look past isolated pain points to assess how your joints, kinetic chains, and movement habits interact under load during everyday tasks.
            </p>
          </div>

          <div className="bg-[#faf8f5] rounded-2xl p-6 sm:p-7 border border-[#e7e2d7] shadow-sm hover:border-[#1b4332]/30 transition">
            <div className="h-11 w-11 rounded-xl bg-[#eaf1ed] text-[#1b4332] flex items-center justify-center mb-4">
              <Users className="h-5 w-5" />
            </div>
            <h4 className="font-serif text-lg font-semibold text-[#1c2826] mb-2.5">
              2. Active Collaboration
            </h4>
            <p className="text-xs sm:text-sm text-[#5e6c67] leading-relaxed">
              Care is a cooperative partnership. We explain clinical findings in plain language so you understand the logic behind each exercise and progression.
            </p>
          </div>

          <div className="bg-[#faf8f5] rounded-2xl p-6 sm:p-7 border border-[#e7e2d7] shadow-sm hover:border-[#1b4332]/30 transition">
            <div className="h-11 w-11 rounded-xl bg-[#eaf1ed] text-[#1b4332] flex items-center justify-center mb-4">
              <BookOpen className="h-5 w-5" />
            </div>
            <h4 className="font-serif text-lg font-semibold text-[#1c2826] mb-2.5">
              3. Sustainable Independence
            </h4>
            <p className="text-xs sm:text-sm text-[#5e6c67] leading-relaxed">
              Our measure of clinical success is your ability to manage your movement health independently, without reliance on long-term clinic visits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
