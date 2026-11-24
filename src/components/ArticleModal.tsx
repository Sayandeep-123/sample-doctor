import React from 'react';
import { X, Clock, BookOpen, CheckCircle2 } from 'lucide-react';
import { PatientArticle } from '../types';

interface ArticleModalProps {
  article: PatientArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#faf8f5] p-6 sm:p-8 shadow-2xl border border-[#e7e2d7] text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5e6c67] hover:text-[#1c2826] hover:bg-[#f3efe6] transition"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category & Read Time */}
        <div className="flex items-center gap-3 mb-3 text-xs text-[#5e6c67]">
          <span className="rounded-full bg-[#eaf1ed] px-3 py-1 font-semibold text-[#1b4332]">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{article.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h3 id="article-title" className="font-serif text-2xl sm:text-3xl font-semibold text-[#1c2826] mb-4 leading-tight">
          {article.title}
        </h3>

        {/* Article Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-[#e7e2d7]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-52 sm:h-64 object-cover"
          />
        </div>

        {/* Intro */}
        <p className="text-sm sm:text-base text-[#1c2826] font-medium leading-relaxed mb-6">
          {article.fullContent.intro}
        </p>

        {/* Key Takeaways Box */}
        <div className="mb-6 rounded-2xl bg-[#eaf1ed] p-5 border border-[#2d6a4f]/20">
          <div className="flex items-center gap-2 mb-2.5 text-xs font-bold uppercase tracking-wider text-[#1b4332]">
            <BookOpen className="h-4 w-4" />
            <span>Key Clinical Takeaways</span>
          </div>
          <ul className="space-y-2">
            {article.fullContent.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#122b21]">
                <CheckCircle2 className="h-4 w-4 text-[#2d6a4f] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-5 text-xs sm:text-sm text-[#5e6c67] leading-relaxed mb-6">
          {article.fullContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="font-serif text-base font-semibold text-[#1c2826]">
                {section.heading}
              </h4>
              <p>{section.body}</p>
            </div>
          ))}
        </div>

        {/* Conclusion / Disclaimer */}
        <div className="pt-4 border-t border-[#e7e2d7] bg-[#f3efe6]/60 p-4 rounded-xl text-xs text-[#5e6c67]">
          <p className="italic">{article.fullContent.conclusion}</p>
          <span className="block mt-2 font-medium text-[11px] text-[#b8623b]">
            *Educational overview for demo purposes. Not a substitute for formal clinical consultation.
          </span>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#1b4332] text-white text-xs font-medium hover:bg-[#122b21] transition shadow-xs"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
