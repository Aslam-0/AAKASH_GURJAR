import React from 'react';
import { Dumbbell, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './icons';
import type { TrainerProfile } from '../types';

interface FooterProps {
  profile: TrainerProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#060606] border-t border-[#1C1C1C] text-[#8A8A8E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start justify-between pb-12 border-b border-[#1A1A1A]">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#2B2B2B] flex items-center justify-center text-[#FF3030]">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-white uppercase block leading-none">
                  {profile.name}
                </span>
                <span className="text-[10px] tracking-widest text-[#71717A] uppercase font-semibold">
                  {profile.title}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A1A1AA] max-w-sm leading-relaxed">
              High-performance bodybuilding, biomechanics, and aesthetic physique coaching. Built on consistency, science, and relentless discipline.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {profile.instagram && (
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FF3030] hover:text-[#FF3030] text-[#A1A1AA] flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {profile.whatsapp && (
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#141414] border border-[#262626] hover:border-emerald-500 hover:text-emerald-400 text-[#A1A1AA] flex items-center justify-center transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="w-9 h-9 rounded-lg bg-[#141414] border border-[#262626] hover:border-white hover:text-white text-[#A1A1AA] flex items-center justify-center transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Nav Links (4 cols) */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              QUICK NAVIGATION
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#8A8A8E] hover:text-[#FF3030] transition-colors py-1 uppercase tracking-wider font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Status (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              GYM BASE
            </p>
            <p className="text-xs text-white font-semibold uppercase tracking-wider">
              {profile.gymName}
            </p>
            <p className="text-xs text-[#8A8A8E]">
              {profile.location}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Accepting New Athletes
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-[#FF3030] transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-lg bg-[#141414] border border-[#2B2B2B] group-hover:border-[#FF3030] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
