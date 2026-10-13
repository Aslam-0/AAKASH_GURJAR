import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './icons';
import type { TrainerProfile } from '../types';

interface NavbarProps {
  profile: TrainerProfile;
}

export const Navbar: React.FC<NavbarProps> = ({ profile }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090909]/90 backdrop-blur-md border-b border-[#262626] py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Home"
          >
            <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#333333] group-hover:border-[#FF3030] flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(255,48,48,0.4)]">
              <Dumbbell className="w-5 h-5 text-[#FF3030] group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl tracking-wider text-white uppercase group-hover:text-[#FF3030] transition-colors leading-none">
                {profile.name}
              </span>
              <span className="text-[10px] tracking-widest text-[#8A8A8E] uppercase font-semibold">
                {profile.nickname || 'ELITE COACHING'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#A3A3A8] hover:text-white transition-colors uppercase tracking-wider relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF3030] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Social + CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {profile.instagram && (
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-[#8A8A8E] hover:text-[#FF3030] hover:bg-[#181818] transition-all"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}
            
            {profile.whatsapp && (
              <a
                href={`https://wa.me/${profile.whatsapp}?text=Hi%20Coach,%20I'd%20like%20to%20inquire%20about%20your%20training%20programs.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-[#8A8A8E] hover:text-emerald-400 hover:bg-[#181818] transition-all"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            )}

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 bg-[#FF3030] hover:bg-[#FF4A4A] rounded-md shadow-glow-red hover:shadow-glow-red-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Train With Me
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-bold tracking-wider text-white uppercase bg-[#FF3030] rounded-md shadow-glow-red-sm"
            >
              Train
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#151515] text-[#A3A3A8] hover:text-white border border-[#262626] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#262626] px-6 pt-4 pb-8 transition-all animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#D1D1D6] hover:text-[#FF3030] transition-colors uppercase tracking-wider py-2 border-b border-[#1C1C1C]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-bold tracking-widest text-white uppercase bg-[#FF3030] hover:bg-[#FF4A4A] rounded-md shadow-glow-red"
              >
                START YOUR JOURNEY
              </a>

              <div className="flex items-center justify-center gap-6 pt-2">
                {profile.instagram && (
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-[#A3A3A8] hover:text-[#FF3030]"
                  >
                    <InstagramIcon className="w-4 h-4" /> Instagram
                  </a>
                )}
                {profile.whatsapp && (
                  <a
                    href={`https://wa.me/${profile.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-[#A3A3A8] hover:text-emerald-400"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
