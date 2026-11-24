import React, { useState } from 'react';
import { Info, Sparkles, X, ChevronRight } from 'lucide-react';

interface DemoBannerProps {
  onOpenStrategy: () => void;
}

export const DemoBanner: React.FC<DemoBannerProps> = ({ onOpenStrategy }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full bg-[#1b4332] px-3.5 py-2 text-xs font-medium text-white shadow-lg transition-transform hover:scale-105"
        title="View Concept Notes"
      >
        <Sparkles className="h-3.5 w-3.5 text-[#eaf1ed]" />
        <span>Concept Demo Info</span>
      </button>
    );
  }

  return (
    <aside aria-label="Demo notice" className="bg-[#122b21] text-[#eaf1ed] px-4 py-2.5 text-xs border-b border-[#2d6a4f]/30 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 rounded bg-[#2d6a4f]/40 px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase text-white">
            <Info className="h-3 w-3" /> Fictional Concept Demo
          </span>
          <span className="text-[#d8e3dc]">
            Demonstrating how an independent physiotherapy clinic can present evidence-informed care and convert patient enquiries online.
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenStrategy}
            className="inline-flex items-center gap-1 rounded-full bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 text-[11px] font-medium transition"
          >
            <span>Strategic Rationale</span>
            <ChevronRight className="h-3 w-3" />
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-[#d8e3dc] hover:text-white transition"
            aria-label="Dismiss banner"
            title="Dismiss banner"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
