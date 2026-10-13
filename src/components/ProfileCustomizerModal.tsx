import React, { useState } from 'react';
import { Settings, X, Save, Check, RefreshCw, Copy } from 'lucide-react';
import type { TrainerProfile } from '../types';

interface ProfileCustomizerModalProps {
  profile: TrainerProfile;
  onUpdateProfile: (updated: TrainerProfile) => void;
  onReset: () => void;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  profile,
  onUpdateProfile,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: profile.name,
    nickname: profile.nickname || '',
    title: profile.title,
    gymName: profile.gymName,
    location: profile.location,
    experienceYears: profile.experienceYears,
    whatsapp: profile.whatsapp,
    whatsappFormatted: profile.whatsappFormatted,
    instagram: profile.instagram,
    email: profile.email,
  });

  React.useEffect(() => {
    setFormData({
      name: profile.name,
      nickname: profile.nickname || '',
      title: profile.title,
      gymName: profile.gymName,
      location: profile.location,
      experienceYears: profile.experienceYears,
      whatsapp: profile.whatsapp,
      whatsappFormatted: profile.whatsappFormatted,
      instagram: profile.instagram,
      email: profile.email,
    });
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      ...profile,
      ...formData,
    });
    setIsOpen(false);
  };

  const handleCopyCodeSnippet = () => {
    const snippet = `// Updated in trainerData.ts:
name: "${formData.name}",
title: "${formData.title}",
experienceYears: "${formData.experienceYears}",
location: "${formData.location}",
gymName: "${formData.gymName}",
whatsapp: "${formData.whatsapp}",
whatsappFormatted: "${formData.whatsappFormatted}",
instagram: "${formData.instagram}",
email: "${formData.email}",`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Discreet floating trigger in bottom corner */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#161616]/90 backdrop-blur-md border border-[#333333] hover:border-[#FF3030] text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:shadow-glow-red-sm transition-all group"
          title="Customize Trainer Details Live"
        >
          <Settings className="w-4 h-4 text-[#FF3030] group-hover:rotate-90 transition-transform duration-300" />
          <span className="hidden sm:inline">Customize Info</span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-[#121212] border border-[#2D2D2D] rounded-2xl shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
              <div>
                <h3 className="font-display text-2xl text-white uppercase font-bold tracking-wide">
                  Customize Trainer Information
                </h3>
                <p className="text-xs text-[#8A8A8E]">
                  Update details live to preview your friend's portfolio in real time.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-[#1A1A1A] text-[#8A8A8E] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleApply} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                    Trainer Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                    Moniker / Subtitle
                  </label>
                  <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    placeholder="e.g. IRON FORGED"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                  Professional Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                    Gym Name
                  </label>
                  <input
                    type="text"
                    name="gymName"
                    value={formData.gymName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                    Location (City, Country)
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleChange}
                    placeholder="e.g. 6+ Years"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                    WhatsApp (Digits with country code)
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="e.g. 919876543210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                    WhatsApp Display Formatted
                  </label>
                  <input
                    type="text"
                    name="whatsappFormatted"
                    value={formData.whatsappFormatted}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-1">
                  Instagram URL
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="https://instagram.com/username"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#FF3030]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-lg bg-[#FF3030] hover:bg-[#FF4A4A] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-red-sm"
                >
                  <Save className="w-4 h-4" /> Apply Changes Live
                </button>

                <button
                  type="button"
                  onClick={handleCopyCodeSnippet}
                  className="py-3 px-4 rounded-lg bg-[#1C1C1C] hover:bg-[#282828] border border-[#333333] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>

                <button
                  type="button"
                  onClick={onReset}
                  className="py-3 px-4 rounded-lg bg-[#181818] hover:bg-[#222222] text-[#8A8A8E] hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
};
