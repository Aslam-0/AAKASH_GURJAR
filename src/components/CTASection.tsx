import React from 'react';
import { MessageCircle, ArrowRight, Flame } from 'lucide-react';
import type { TrainerProfile } from '../types';

interface CTASectionProps {
  profile: TrainerProfile;
}

export const CTASection: React.FC<CTASectionProps> = ({ profile }) => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#090909] via-[#140A0A] to-[#090909] relative overflow-hidden border-t border-b border-[#241515]">
      {/* Background glow and athletic lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF3030]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Flame Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#201010] border border-[#FF3030]/40 text-xs font-bold uppercase tracking-widest text-[#FF5555] mb-6 shadow-glow-red-sm">
          <Flame className="w-4 h-4 text-[#FF3030]" />
          LIMITED CLIENT ROSTER OPEN FOR THIS QUARTER
        </div>

        {/* Powerful Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white uppercase font-extrabold tracking-tight leading-[0.95] mb-6">
          YOUR NEXT LEVEL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3030] via-[#FF6666] to-white">
            STARTS HERE.
          </span>
        </h2>

        {/* Motivational Description */}
        <p className="text-base sm:text-lg text-[#D4D4D8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Stop guessing in the gym. Get a tailored blueprint, real-time coaching accountability, and build the strongest physique and mindset of your life.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest text-white uppercase bg-[#FF3030] hover:bg-[#FF4A4A] rounded-xl shadow-glow-red hover:shadow-glow-red-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            LET'S TRAIN
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>

          {profile.whatsapp && (
            <a
              href={`https://wa.me/${profile.whatsapp}?text=Hi%20Coach%20${encodeURIComponent(profile.name)},%20I'm%20ready%20to%20start%20my%20fitness%20transformation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest text-[#E4E4E7] hover:text-white uppercase bg-[#181818] hover:bg-[#202020] border border-[#333333] hover:border-emerald-500/50 rounded-xl transition-all duration-300 gap-2.5"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              DIRECT WHATSAPP CHAT
            </a>
          )}
        </div>

        {/* Disclaimer / Standards */}
        <div className="mt-8 flex items-center justify-center gap-6 text-[11px] text-[#71717A] uppercase tracking-wider font-semibold">
          <span>✓ Custom Programming</span>
          <span>✓ Zero Generic Templates</span>
          <span>✓ Evidence-Based Only</span>
        </div>

      </div>
    </section>
  );
};
