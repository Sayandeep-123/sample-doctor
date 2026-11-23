import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/clinicData';

interface FAQSectionProps {
  onOpenEnquiry: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnquiry }) => {
  const [openId, setOpenId] = useState<string | null>('first-appointment');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'first-visit' | 'appointments' | 'rehabilitation'>('all');

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory === 'all') return true;
    return faq.category === selectedCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#f3efe6]/50 border-t border-[#e7e2d7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3.5 py-1 text-xs font-semibold text-[#1b4332] mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1c2826] tracking-tight leading-snug mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5e6c67] max-w-2xl mx-auto">
            Practical details on what to anticipate, how consultations are structured, and our clinical workflow.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
              selectedCategory === 'all'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : 'bg-white text-[#5e6c67] border border-[#e7e2d7] hover:bg-[#f3efe6]'
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => setSelectedCategory('first-visit')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
              selectedCategory === 'first-visit'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : 'bg-white text-[#5e6c67] border border-[#e7e2d7] hover:bg-[#f3efe6]'
            }`}
          >
            First Consultation
          </button>
          <button
            onClick={() => setSelectedCategory('appointments')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
              selectedCategory === 'appointments'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : 'bg-white text-[#5e6c67] border border-[#e7e2d7] hover:bg-[#f3efe6]'
            }`}
          >
            Referrals & Booking
          </button>
          <button
            onClick={() => setSelectedCategory('rehabilitation')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
              selectedCategory === 'rehabilitation'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : 'bg-white text-[#5e6c67] border border-[#e7e2d7] hover:bg-[#f3efe6]'
            }`}
          >
            Rehab Expectations
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#e7e2d7] overflow-hidden transition shadow-2xs hover:border-[#1b4332]/25"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#1c2826]">
                    {faq.question}
                  </span>
                  <div
                    className={`h-7 w-7 rounded-full bg-[#f3efe6] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#eaf1ed] text-[#1b4332]' : 'text-[#5e6c67]'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5e6c67] leading-relaxed border-t border-[#e7e2d7]/50 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 rounded-2xl bg-white p-6 border border-[#e7e2d7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#eaf1ed] text-[#1b4332] flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-[#1c2826]">
                Have a specific question not covered here?
              </h4>
              <p className="text-xs text-[#5e6c67]">
                We welcome prospective enquiries regarding whether physiotherapy is appropriate for your symptoms.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="shrink-0 rounded-full bg-[#1b4332] text-white px-4 py-2 text-xs font-medium hover:bg-[#122b21] transition"
          >
            Send Quick Enquiry
          </button>
        </div>
      </div>
    </section>
  );
};
