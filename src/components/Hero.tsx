import React from 'react';
import { ChevronRight, Flame, ShieldCheck, ArrowDown, Eye } from 'lucide-react';
import type { TrainerProfile } from '../types';

interface HeroProps {
  profile: TrainerProfile;
  onOpenLightbox?: (imgSrc: string, caption: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenLightbox }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#090909] overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF3030]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FF3030]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF3030]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Athletic Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Coach Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#2E2E2E] text-xs font-semibold uppercase tracking-wider text-[#D4D4D8] mb-6 w-fit shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#FF3030] animate-pulse" />
              <span className="text-[#FF3030] font-bold">ELITE PERFORMANCE</span>
              <span className="text-[#52525B]">•</span>
              <span>{profile.gymName}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white uppercase font-extrabold mb-6">
              BUILD YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3030] via-[#FF5555] to-white">
                STRONGEST
              </span> <br />
              SELF.
            </h1>

            {/* Trainer Name & Title */}
            <div className="border-l-2 border-[#FF3030] pl-4 mb-6">
              <p className="text-lg sm:text-xl font-bold tracking-wider text-white uppercase">
                {profile.name}
              </p>
              <p className="text-sm font-semibold tracking-widest text-[#A1A1AA] uppercase">
                {profile.title}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed mb-8 font-normal">
              High-precision hypertrophy protocols, metabolic conditioning, and zero-compromise body transformations. Engineered for athletes and individuals who demand uncompromising results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest text-white uppercase bg-[#FF3030] hover:bg-[#FF4A4A] rounded-lg shadow-glow-red hover:shadow-glow-red-lg transition-all duration-300 group transform hover:-translate-y-0.5"
              >
                START YOUR JOURNEY
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#transformations"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest text-[#E4E4E7] hover:text-white uppercase bg-[#141414] hover:bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#404040] rounded-lg transition-all duration-300"
              >
                EXPLORE MY WORK
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1F1F1F] max-w-lg">
              <div>
                <p className="font-display text-3xl sm:text-4xl text-white tracking-wide font-bold">
                  {profile.experienceYears}
                </p>
                <p className="text-xs text-[#71717A] uppercase tracking-wider font-semibold">
                  Under The Bar
                </p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl text-[#FF3030] tracking-wide font-bold">
                  {profile.athletesCoached}
                </p>
                <p className="text-xs text-[#71717A] uppercase tracking-wider font-semibold">
                  Athletes Coached
                </p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl text-white tracking-wide font-bold">
                  100%
                </p>
                <p className="text-xs text-[#71717A] uppercase tracking-wider font-semibold">
                  Custom Protocols
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Single Hero Visual with Trainer's Red Hoodie Photo (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center mt-6 lg:mt-0">
            {/* Halo Backdrop Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3030]/20 via-transparent to-transparent rounded-2xl filter blur-2xl transform scale-95 pointer-events-none" />

            {/* Image Container Card */}
            <div 
              className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#121212] shadow-2xl group cursor-pointer"
              onClick={() => onOpenLightbox && onOpenLightbox(profile.heroImage, `${profile.name} - ${profile.title}`)}
            >
              
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#181818]">
                <img
                  src={profile.heroImage}
                  alt={`${profile.name} - ${profile.title}`}
                  className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlays for Cinematic Feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/40 via-transparent to-transparent" />
              </div>

              {/* Top Left Floating Pill */}
              <div className="absolute top-4 left-4 bg-[#0F0F0F]/90 backdrop-blur-md border border-[#2E2E2E] px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <Flame className="w-3.5 h-3.5 text-[#FF3030]" />
                <span className="text-[11px] font-bold tracking-wider text-white uppercase">
                  DISCIPLINE OVER MOTIVATION
                </span>
              </div>

              {/* Top Right Inspect Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Floating Badge Bottom Right: Location & Gym */}
              <div className="absolute bottom-5 inset-x-5 bg-[#141414]/90 backdrop-blur-md border border-[#2E2E2E] p-4 rounded-xl flex items-center justify-between shadow-2xl">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    {profile.gymName}
                  </p>
                  <p className="text-[11px] text-[#A1A1AA] uppercase">
                    {profile.location}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#FF3030]/10 border border-[#FF3030]/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#FF3030]" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 items-center gap-2 text-xs text-[#71717A] uppercase tracking-widest pointer-events-none">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FF3030]" />
      </div>
    </section>
  );
};
