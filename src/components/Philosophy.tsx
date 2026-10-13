import React from 'react';
import { Quote } from 'lucide-react';
import type { PhilosophyPillar } from '../types';

interface PhilosophyProps {
  pillars: PhilosophyPillar[];
  lifestyleImage: string;
  trainerName: string;
  onOpenLightbox?: (imgSrc: string, caption: string) => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({
  pillars,
  lifestyleImage,
  trainerName,
  onOpenLightbox
}) => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#0C0C0C] relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#FF3030]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3030] uppercase mb-3">
            <span className="w-8 h-[2px] bg-[#FF3030]" />
            THE METHODOLOGY
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase font-extrabold leading-[0.95] mb-6">
            DISCIPLINE BEATS MOTIVATION. <br />
            <span className="text-[#FF3030]">EVERY SINGLE TIME.</span>
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            Real physical change isn't an accident. It's the byproduct of consistent execution, measured intensity, and respect for the biological fundamentals.
          </p>
        </div>

        {/* Editorial Layout: Pillars on Left, Lifestyle Photography on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: 4 Core Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group p-6 sm:p-7 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#FF3030]/50 transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_20px_rgba(255,48,48,0.12)]"
              >
                {/* Decorative subtle numbering in corner */}
                <div className="absolute top-4 right-6 font-display text-4xl sm:text-5xl font-extrabold text-[#1F1F1F] group-hover:text-[#FF3030]/20 transition-colors select-none">
                  {pillar.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FF3030]">
                      PILLAR {pillar.number}
                    </span>
                    <span className="text-[#3F3F46]">•</span>
                    <span className="text-xs text-[#71717A] uppercase tracking-wider font-semibold">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-white uppercase font-bold tracking-wide mb-3 group-hover:text-[#FF3030] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  {pillar.quote && (
                    <div className="flex items-center gap-2 pt-2 border-t border-[#1C1C1C] text-xs font-semibold text-[#D4D4D8] italic">
                      <Quote className="w-3.5 h-3.5 text-[#FF3030] shrink-0" />
                      <span>"{pillar.quote}"</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Editorial Lifestyle Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-28">
            <div 
              className="relative rounded-2xl overflow-hidden border border-[#2B2B2B] bg-[#141414] shadow-2xl cursor-pointer group"
              onClick={() => onOpenLightbox && onOpenLightbox(lifestyleImage, `${trainerName} - Focus & Relentless Drive`)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={lifestyleImage}
                  alt={`${trainerName} lifestyle and focus`}
                  className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#FF3030] text-white px-2.5 py-1 rounded shadow-glow-red-sm mb-2 inline-block">
                  THE ATHLETE CODE
                </span>
                <p className="font-display text-2xl text-white uppercase font-bold tracking-wide leading-tight mb-1">
                  NO DAYS WASTED.
                </p>
                <p className="text-xs text-[#A1A1AA]">
                  Strength is forged inside the gym and tested everywhere else.
                </p>
              </div>
            </div>

            {/* Quick Principles Banner */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#222222] space-y-3">
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                THE 3 UNBREAKABLE RULES:
              </p>
              <div className="space-y-2 text-xs text-[#A1A1AA]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF3030]" />
                  <span>Never compromise lifting form for ego weight.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF3030]" />
                  <span>Match protein & caloric targets with religious precision.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF3030]" />
                  <span>Treat sleep and muscular recovery with the same seriousness as training.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
