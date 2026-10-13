import React from 'react';
import { CheckCircle2, Award, Dumbbell, Target, MapPin } from 'lucide-react';
import type { TrainerProfile } from '../types';

interface AboutProps {
  profile: TrainerProfile;
  onOpenLightbox?: (imgSrc: string, caption: string) => void;
}

export const About: React.FC<AboutProps> = ({ profile, onOpenLightbox }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0C0C0C] relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF3030]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3030] uppercase mb-3">
            <span className="w-8 h-[2px] bg-[#FF3030]" />
            ABOUT THE COACH
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase font-extrabold max-w-2xl">
            FORGED IN IRON. <br />
            <span className="text-[#FF3030]">PROVEN BY RESULTS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase using Real Trainer Photos (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Trainer Photo: Physique & Gym barbell shot */}
              <div 
                className="relative rounded-2xl overflow-hidden border border-[#2B2B2B] bg-[#171717] shadow-2xl cursor-pointer group"
                onClick={() => onOpenLightbox && onOpenLightbox(profile.physiqueImage, `${profile.name} - Gym Training & Biomechanics`)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={profile.physiqueImage}
                    alt={`${profile.name} physique & coaching`}
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">{profile.name}</p>
                    <p className="text-xs text-[#A1A1AA] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FF3030]" /> {profile.location}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-[#FF3030] px-2.5 py-1 rounded text-white shadow-glow-red-sm">
                    VIEW PHOTO
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Card: Signature Red Athletic Photo */}
              <div 
                className="hidden sm:block absolute -bottom-8 -right-6 w-44 sm:w-48 rounded-xl overflow-hidden border-2 border-[#333333] bg-[#141414] shadow-2xl cursor-pointer group hover:border-[#FF3030] transition-colors"
                onClick={() => onOpenLightbox && onOpenLightbox(profile.redAthleticImage || profile.aboutImage, `${profile.name} - Athletic Standard & Red Series`)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={profile.redAthleticImage || profile.aboutImage}
                    alt={`${profile.name} athletic conditioning`}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 bg-[#121212] text-center border-t border-[#262626]">
                  <p className="text-[11px] font-bold text-[#FF5555] uppercase tracking-wider">ATHLETIC STANDARD</p>
                </div>
              </div>

              {/* Experience Badge Floating Top Left */}
              <div className="absolute -top-5 -left-4 bg-[#141414] border border-[#2E2E2E] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF3030]/10 border border-[#FF3030]/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#FF3030]" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white leading-none">{profile.experienceYears}</p>
                  <p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-semibold">EXPERIENCE</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Narrative, Principles & Credentials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase font-bold mb-4">
              {profile.bioHeadline}
            </h3>

            <div className="space-y-4 text-[#A1A1AA] text-base leading-relaxed mb-8">
              {profile.bioParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Core Training Pillars Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#383838] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-md bg-[#FF3030]/10 text-[#FF3030] flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Targeted Hypertrophy</h4>
                </div>
                <p className="text-xs text-[#8A8A8E]">
                  Maximizing muscle stimulus to fatigue ratios with biomechanically sound exercise selections.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#383838] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-md bg-[#FF3030]/10 text-[#FF3030] flex items-center justify-center">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Injury-Free Longevity</h4>
                </div>
                <p className="text-xs text-[#8A8A8E]">
                  Strict form execution, joint longevity, and deliberate warm-up and mobility conditioning.
                </p>
              </div>
            </div>

            {/* Coach Pillars / Values */}
            <div className="border-t border-[#222222] pt-6 mb-8">
              <p className="text-xs font-bold tracking-widest text-white uppercase mb-4">
                WHAT YOU CAN EXPECT:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Zero generic copy-paste routines',
                  'Bi-weekly progression & body metrics tracking',
                  'Macro-matched flexible nutrition plans',
                  'Direct 1-on-1 coach communication & accountability'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#D4D4D8]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF3030] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivational Quote Callout */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#171717] to-[#121212] border-l-4 border-[#FF3030] border-t border-r border-b border-[#262626]">
              <p className="italic text-sm text-[#E4E4E7] font-medium mb-1">
                "You don't need luck, you need consistency. Show up every day, execute the protocol, and let the numbers speak for themselves."
              </p>
              <p className="text-xs font-bold text-[#FF3030] uppercase tracking-wider">
                — {profile.name}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
