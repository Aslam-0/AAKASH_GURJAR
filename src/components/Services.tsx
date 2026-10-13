import React from 'react';
import { Dumbbell, Flame, TrendingUp, Globe, Apple, Trophy, Check, ArrowRight } from 'lucide-react';
import type { Service } from '../types';

interface ServicesProps {
  services: Service[];
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  // Map icons dynamically
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'service-pt':
        return <Dumbbell className="w-6 h-6 text-[#FF3030]" />;
      case 'service-muscle':
        return <TrendingUp className="w-6 h-6 text-[#FF3030]" />;
      case 'service-fatloss':
        return <Flame className="w-6 h-6 text-[#FF3030]" />;
      case 'service-online':
        return <Globe className="w-6 h-6 text-[#FF3030]" />;
      case 'service-nutrition':
        return <Apple className="w-6 h-6 text-[#FF3030]" />;
      case 'service-contest':
        return <Trophy className="w-6 h-6 text-[#FF3030]" />;
      default:
        return <Dumbbell className="w-6 h-6 text-[#FF3030]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF3030]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3030] uppercase mb-3">
              <span className="w-8 h-[2px] bg-[#FF3030]" />
              PROGRAMS & SPECIALIZATIONS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase font-extrabold">
              ELITE TRAINING <br />
              <span className="text-[#FF3030]">DESIGNED FOR IMPACT</span>
            </h2>
          </div>
          <p className="text-sm text-[#8A8A8E] max-w-md">
            Every program is calibrated to your physical starting point, metabolic profile, and ultimate physique ambitions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl bg-[#121212] border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                service.popular
                  ? 'border-[#FF3030]/60 shadow-[0_0_25px_rgba(255,48,48,0.15)] bg-gradient-to-b from-[#181212] to-[#121212]'
                  : 'border-[#222222] hover:border-[#FF3030]/50 hover:shadow-[0_0_20px_rgba(255,48,48,0.1)]'
              }`}
            >
              {/* Badge if available */}
              {service.badge && (
                <div className="absolute -top-3 right-6">
                  <span
                    className={`text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full border shadow-sm ${
                      service.popular
                        ? 'bg-[#FF3030] text-white border-[#FF4A4A]'
                        : 'bg-[#1C1C1C] text-[#D4D4D8] border-[#333333]'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>
              )}

              <div className="p-7">
                {/* Icon & Title */}
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2D2D2D] group-hover:border-[#FF3030]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                  {getServiceIcon(service.id)}
                </div>

                <h3 className="font-display text-2xl text-white uppercase font-bold tracking-wide mb-2 group-hover:text-[#FF3030] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-[#FF5555] uppercase tracking-wider mb-4">
                  {service.tagline}
                </p>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="border-t border-[#1F1F1F] pt-4 mb-6 space-y-2.5">
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">
                    WHAT'S INCLUDED:
                  </p>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#C4C4C8]">
                      <Check className="w-3.5 h-3.5 text-[#FF3030] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Best For Note */}
                <div className="p-3 rounded-lg bg-[#0E0E0E] border border-[#1E1E1E] text-[11px] text-[#8A8A8E]">
                  <span className="font-bold text-[#D4D4D8]">Best For:</span> {service.recommendedFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-[#1C1C1C] mt-2">
                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className={`w-full py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                    service.popular
                      ? 'bg-[#FF3030] hover:bg-[#FF4A4A] text-white shadow-glow-red-sm'
                      : 'bg-[#181818] hover:bg-[#FF3030] text-white hover:text-white border border-[#2B2B2B] hover:border-[#FF3030]'
                  }`}
                >
                  <span>INQUIRE FOR PROGRAM</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
