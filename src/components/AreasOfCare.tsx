import React, { useState } from 'react';
import { 
  Activity, 
  ShieldAlert, 
  HeartPulse, 
  Smile, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  Layers,
  HelpCircle
} from 'lucide-react';
import { AreaOfCare } from '../types';
import { AREAS_OF_CARE } from '../data/clinicData';
import { AreaDetailModal } from './AreaDetailModal';

interface AreasOfCareProps {
  onOpenEnquiry: () => void;
}

export const AreasOfCare: React.FC<AreasOfCareProps> = ({ onOpenEnquiry }) => {
  const [selectedArea, setSelectedArea] = useState<AreaOfCare | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'musculoskeletal' | 'post-op' | 'desk'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="h-6 w-6 text-[#1b4332]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="h-6 w-6 text-[#1b4332]" />;
      case 'HeartPulse':
        return <HeartPulse className="h-6 w-6 text-[#1b4332]" />;
      case 'Smile':
        return <Smile className="h-6 w-6 text-[#1b4332]" />;
      case 'Compass':
        return <Compass className="h-6 w-6 text-[#1b4332]" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-[#1b4332]" />;
      default:
        return <Activity className="h-6 w-6 text-[#1b4332]" />;
    }
  };

  const filteredAreas = AREAS_OF_CARE.filter((area) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'musculoskeletal') {
      return area.id === 'musculoskeletal' || area.id === 'orthopaedic';
    }
    if (activeFilter === 'post-op') {
      return area.id === 'post-operative' || area.id === 'clinical-techniques';
    }
    if (activeFilter === 'desk') {
      return area.id === 'posture-movement' || area.id === 'pain-mobility';
    }
    return true;
  });

  return (
    <section id="areas-of-care" className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3.5 py-1 text-xs font-semibold text-[#1b4332] mb-3">
            <Layers className="h-3.5 w-3.5" />
            <span>Scope of Clinical Care</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1c2826] tracking-tight leading-snug mb-4">
            Evidence-informed rehabilitation tailored to your situation.
          </h2>
          <p className="text-base sm:text-lg text-[#5e6c67] leading-relaxed">
            We provide structured, milestone-based physiotherapy across key rehabilitation domains. Each pathway integrates functional assessment, active re-conditioning, and patient education.
          </p>
          <p className="text-xs text-[#5e6c67]/80 mt-2 italic">
            *Note: Illustrative service categories designed for this independent practice concept.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition ${
              activeFilter === 'all'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'bg-white text-[#5e6c67] border border-[#e7e2d7] hover:bg-[#f3efe6]'
            }`}
          >
            All Clinical Areas
          </button>
          <button
            onClick={() => setActiveFilter('musculoskeletal')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition ${
              activeFilter === 'musculoskeletal'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'bg-white text-[#5e6c67] border border-[#e7e2d7] hover:bg-[#f3efe6]'
            }`}
          >
            Joint & Muscle Health
          </button>
          <button
            onClick={() => setActiveFilter('post-op')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition ${
              activeFilter === 'post-op'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'bg-white text-[#5e6c67] border border-[#e7e2d7] hover:bg-[#f3efe6]'
            }`}
          >
            Post-Operative Recovery
          </button>
          <button
            onClick={() => setActiveFilter('desk')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition ${
              activeFilter === 'desk'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'bg-white text-[#5e6c67] border border-[#e7e2d7] hover:bg-[#f3efe6]'
            }`}
          >
            Posture, Ergonomics & Pain
          </button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-white p-7 sm:p-8 border border-[#e7e2d7] shadow-sm hover:shadow-md hover:border-[#1b4332]/30 transition-all duration-200 text-left"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-[#eaf1ed] flex items-center justify-center transition group-hover:scale-105">
                    {getIcon(area.icon)}
                  </div>
                  {area.badge && (
                    <span className="rounded-full bg-[#f3efe6] px-2.5 py-1 text-[11px] font-semibold text-[#1b4332] border border-[#e7e2d7]">
                      {area.badge}
                    </span>
                  )}
                </div>

                {/* Card Title & Tagline */}
                <h3 className="font-serif text-xl font-semibold text-[#1c2826] mb-2 leading-snug group-hover:text-[#1b4332] transition">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#2d6a4f] mb-3">
                  {area.tagline}
                </p>

                {/* Brief description */}
                <p className="text-xs sm:text-sm text-[#5e6c67] leading-relaxed mb-5 line-clamp-3">
                  {area.description}
                </p>

                {/* Typical Concerns Tags */}
                <div className="mb-6 pt-4 border-t border-[#e7e2d7]/60">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#5e6c67] mb-2">
                    Common Presentations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.typicalConcerns.slice(0, 3).map((concern, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-md bg-[#faf8f5] px-2 py-1 text-[11px] text-[#1c2826] border border-[#e7e2d7]"
                      >
                        {concern}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedArea(area)}
                  className="w-full inline-flex items-center justify-between rounded-xl bg-[#faf8f5] group-hover:bg-[#eaf1ed] px-4 py-2.5 text-xs font-semibold text-[#1b4332] transition border border-[#e7e2d7]"
                >
                  <span>Explore Scope & Approach</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Callout */}
        <div className="mt-12 rounded-2xl bg-[#f3efe6] p-6 sm:p-8 border border-[#e7e2d7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white text-[#1b4332] flex items-center justify-center shrink-0 shadow-xs">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#1c2826]">
                Not sure which category fits your symptoms?
              </h4>
              <p className="text-xs sm:text-sm text-[#5e6c67] mt-0.5">
                During your initial evaluation, we perform a holistic movement check to clarify which areas require attention.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="shrink-0 rounded-full bg-[#1b4332] text-white px-5 py-2.5 text-xs font-medium hover:bg-[#122b21] transition shadow-xs"
          >
            Ask a Question First
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <AreaDetailModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onEnquire={() => {
          setSelectedArea(null);
          onOpenEnquiry();
        }}
      />
    </section>
  );
};
