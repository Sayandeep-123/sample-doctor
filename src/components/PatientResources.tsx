import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { PATIENT_ARTICLES } from '../data/clinicData';
import { PatientArticle } from '../types';
import { ArticleModal } from './ArticleModal';

export const PatientResources: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<PatientArticle | null>(null);

  return (
    <section id="resources" className="py-16 sm:py-24 bg-[#f3efe6]/40 border-t border-[#e7e2d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3.5 py-1 text-xs font-semibold text-[#1b4332] mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Patient Education</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1c2826] tracking-tight leading-snug mb-3">
            Resources for Everyday Movement Health
          </h2>
          <p className="text-base text-[#5e6c67]">
            Clear, evidence-grounded perspectives on recovery, movement habits, and active rehabilitation.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATIENT_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group cursor-pointer flex flex-col justify-between rounded-3xl bg-white border border-[#e7e2d7] shadow-sm hover:shadow-md hover:border-[#1b4332]/30 transition-all duration-200 overflow-hidden text-left"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#f3efe6]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-[#1b4332] shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#5e6c67] mb-2.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#1c2826] group-hover:text-[#1b4332] transition leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5e6c67] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Read CTA */}
              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#1b4332] group-hover:text-[#122b21]">
                  <span>Read Article Preview</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Cautious Editorial Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#5e6c67]/80 inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#b8623b]" />
            <span>These educational overviews are illustrative previews and do not replace personalized clinical assessment.</span>
          </p>
        </div>
      </div>

      {/* Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
};
