import React from 'react';
import { Trophy, ShieldCheck } from 'lucide-react';
import type { Achievement, Certification } from '../types';

interface AchievementsProps {
  achievements: Achievement[];
  certifications: Certification[];
  experienceYears: string | number;
}

export const Achievements: React.FC<AchievementsProps> = ({
  achievements,
  certifications,
  experienceYears,
}) => {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-[#0C0C0C] relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Red Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF3030]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3030] uppercase mb-3">
            <span className="w-8 h-[2px] bg-[#FF3030]" />
            CREDENTIALS & TRACK RECORD
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase font-extrabold">
            CERTIFIED KNOWLEDGE. <br />
            <span className="text-[#FF3030]">COMPETITIVE EXCELLENCE.</span>
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-3">
            Backed by accredited sports science certifications, podium competition finishes, and continuous professional mastery.
          </p>
        </div>

        {/* Highlight Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 rounded-2xl bg-[#121212] border border-[#222222] text-center">
            <p className="font-display text-4xl sm:text-5xl font-bold text-white mb-1">{experienceYears}</p>
            <p className="text-xs text-[#8A8A8E] uppercase tracking-wider font-semibold">Lifting & Coaching</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#121212] border border-[#222222] text-center">
            <p className="font-display text-4xl sm:text-5xl font-bold text-[#FF3030] mb-1">100%</p>
            <p className="text-xs text-[#8A8A8E] uppercase tracking-wider font-semibold">Evidence-Based</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#121212] border border-[#222222] text-center">
            <p className="font-display text-4xl sm:text-5xl font-bold text-white mb-1">4+</p>
            <p className="text-xs text-[#8A8A8E] uppercase tracking-wider font-semibold">Core Certifications</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#121212] border border-[#222222] text-center">
            <p className="font-display text-4xl sm:text-5xl font-bold text-[#FF3030] mb-1">Top Tier</p>
            <p className="text-xs text-[#8A8A8E] uppercase tracking-wider font-semibold">Podium Finishes</p>
          </div>
        </div>

        {/* Dual Grid: Competition Milestones vs Accredited Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Achievements & Competition Honors */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#FF3030]/10 border border-[#FF3030]/30 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-[#FF3030]" />
              </div>
              <h3 className="font-display text-2xl text-white uppercase font-bold tracking-wide">
                Competitive Milestones & Awards
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className={`p-6 rounded-2xl bg-[#141414] border transition-all duration-300 ${
                    ach.highlight
                      ? 'border-[#FF3030]/50 shadow-[0_0_15px_rgba(255,48,48,0.1)]'
                      : 'border-[#242424] hover:border-[#383838]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF3030]">
                        {ach.category}
                      </span>
                      <h4 className="font-display text-xl text-white uppercase font-bold tracking-wide mt-0.5">
                        {ach.title}
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1F1F1F] text-[#E4E4E7] border border-[#333333] shrink-0">
                      {ach.year}
                    </span>
                  </div>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {ach.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Fitness Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#333333] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#FF3030]" />
              </div>
              <h3 className="font-display text-2xl text-white uppercase font-bold tracking-wide">
                Accredited Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#FF3030]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h4 className="font-display text-lg text-white uppercase font-bold tracking-wide group-hover:text-[#FF3030] transition-colors">
                      {cert.title}
                    </h4>
                    {cert.year && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5555]">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-[#8A8A8E] uppercase tracking-wider mb-2">
                    {cert.issuer}
                  </p>

                  {cert.description && (
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
