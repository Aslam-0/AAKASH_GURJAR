import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import type { TestimonialItem } from '../types';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF3030]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3030] uppercase mb-3">
            <span className="w-6 h-[2px] bg-[#FF3030]" />
            CLIENT WORDS & OUTCOMES
            <span className="w-6 h-[2px] bg-[#FF3030]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-tight uppercase font-extrabold mb-4">
            REAL ATHLETES. <br />
            <span className="text-[#FF3030]">HONEST EXPERIENCES.</span>
          </h2>
          <p className="text-sm text-[#8A8A8E]">
            Verified feedback from clients who executed the nutrition, progressive lifting, and recovery protocols.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-[#121212] border border-[#242424] hover:border-[#FF3030]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,48,48,0.1)]"
            >
              <div>
                {/* Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FF3030]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF3030]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#2D2D2D] group-hover:text-[#FF3030]/40 transition-colors" />
                </div>

                {/* Program Tag */}
                <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1A1A1A] text-[#FF5555] border border-[#2B2B2B] mb-4">
                  {item.program}
                </span>

                {/* Testimonial Quote */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info & Specific Result */}
              <div className="pt-4 border-t border-[#1F1F1F]">
                <p className="font-display text-lg text-white uppercase font-bold tracking-wide">
                  {item.name}
                </p>
                <p className="text-[11px] text-[#71717A] uppercase font-semibold">
                  {item.role}
                </p>

                {item.results && (
                  <div className="mt-2.5 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/20 px-2.5 py-1 rounded border border-emerald-900/30">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.results}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Discreet Notice regarding real reviews */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-[#666666] uppercase tracking-wider">
            All reviews represent individual client journeys. Results vary based on commitment and protocol adherence.
          </p>
        </div>

      </div>
    </section>
  );
};
