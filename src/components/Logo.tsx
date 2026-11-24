import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  compact?: boolean;
}

/**
 * Nivaan brand mark — "Movement in Balance"
 * Abstract figure in forward motion rising over a ground arc.
 * Two-tone: warm white figure + mint motion trail.
 */
export const Logo: React.FC<LogoProps> = ({ variant = 'dark', compact = false }) => {
  const isLight = variant === 'light';

  return (
    <span className="flex items-center gap-3 group">
      {/* Mark */}
      <span
        className={[
          'relative flex items-center justify-center shrink-0 rounded-2xl transition-all duration-200',
          'h-11 w-11 shadow-[0_2px_10px_rgba(27,67,50,0.25)] ring-1 ring-inset',
          isLight
            ? 'bg-white/[0.08] ring-white/20 group-hover:bg-white/[0.14]'
            : 'bg-gradient-to-br from-[#1b4332] via-[#1e4d3a] to-[#2d6a4f] ring-[#1b4332]/10 group-hover:shadow-[0_4px_16px_rgba(27,67,50,0.35)] group-hover:-translate-y-[1px]',
        ].join(' ')}
      >
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          {/* Head */}
          <circle cx="19" cy="7.2" r="3.1" fill="#FFFFFF" />
          {/* Torso — forward-leaning S curve suggesting spine in motion */}
          <path
            d="M18.6 12.2C16.2 14 14 16.4 13.4 19.6"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Extended arm — reach / progress */}
          <path
            d="M15.3 15.4L22.6 13.9"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.95"
          />
          {/* Ground / motion trail */}
          <path
            d="M8.2 22.6C11.8 25.4 17.4 26.4 24.2 23.2"
            stroke="#95D5B2"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          {/* Origin dot */}
          <circle cx="8.2" cy="22.6" r="1.5" fill="#95D5B2" />
        </svg>
      </span>

      {/* Wordmark */}
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={[
              'font-serif font-semibold tracking-tight text-[22px] leading-[1.1]',
              isLight ? 'text-white' : 'text-[#1b4332]',
            ].join(' ')}
          >
            Nivaan
          </span>
          <span
            className={[
              'mt-[3px] text-[9.5px] font-sans font-semibold uppercase tracking-[0.16em]',
              isLight ? 'text-[#a4b8af]' : 'text-[#5e6c67]',
            ].join(' ')}
          >
            Physiotherapy & Movement
          </span>
        </span>
      )}
    </span>
  );
};
