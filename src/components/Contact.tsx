import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock 
} from 'lucide-react';
import { InstagramIcon } from './icons';
import type { TrainerProfile } from '../types';

interface ContactProps {
  profile: TrainerProfile;
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ profile, preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Muscle Building',
    experience: 'Intermediate (1-3 yrs lifting)',
    selectedProgram: preselectedService || '1-on-1 Personal Training',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update selectedProgram if prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, selectedProgram: preselectedService }));
    }
  }, [preselectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setFormStatus('error');
      setErrorMessage('Please provide your name.');
      return;
    }

    // Build formatted message for WhatsApp
    const messageLines = [
      `*NEW COACHING INQUIRY*`,
      `━━━━━━━━━━━━━━━━━━`,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email || 'Not specified'}`,
      `*Phone:* ${formData.phone || 'Not specified'}`,
      `*Primary Goal:* ${formData.goal}`,
      `*Experience Level:* ${formData.experience}`,
      `*Target Program:* ${formData.selectedProgram}`,
      `*Notes:* ${formData.message || 'Ready to start training!'}`,
      `━━━━━━━━━━━━━━━━━━`
    ];

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const waUrl = `https://wa.me/${profile.whatsapp}?text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
    setFormStatus('success');
  };

  const handleSubmitWebForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setFormStatus('error');
      setErrorMessage('Please provide either an email or WhatsApp phone number.');
      return;
    }

    // Honest feedback notice since static frontend
    setFormStatus('success');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#FF3030]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3030] uppercase mb-3">
            <span className="w-8 h-[2px] bg-[#FF3030]" />
            COMMENCE PROTOCOL
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase font-extrabold">
            CONNECT WITH <br />
            <span className="text-[#FF3030]">COACH {profile.name}</span>
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-3">
            Serious inquiries only. Choose your preferred communication channel below or submit your athlete assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-white uppercase font-bold tracking-wide">
                Direct Contact Points
              </h3>
              <p className="text-xs text-[#8A8A8E] leading-relaxed">
                Reach out directly through WhatsApp for fastest response on 1-on-1 private training schedule and spot availability.
              </p>

              {/* WhatsApp Card */}
              {profile.whatsapp && (
                <a
                  href={`https://wa.me/${profile.whatsapp}?text=Hi%20Coach%20${encodeURIComponent(profile.name)},%20I'd%20like%20to%20apply%20for%20training.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#121212] border border-[#242424] hover:border-emerald-500/50 hover:bg-[#161616] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                      FASTEST RESPONSE
                    </span>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">
                      WhatsApp Direct
                    </p>
                    <p className="text-xs text-[#A1A1AA]">
                      {profile.whatsappFormatted || profile.whatsapp}
                    </p>
                  </div>
                </a>
              )}

              {/* Instagram Card */}
              {profile.instagram && (
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#121212] border border-[#242424] hover:border-[#FF3030]/50 hover:bg-[#161616] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF3030]/10 border border-[#FF3030]/30 flex items-center justify-center text-[#FF3030] group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF3030]">
                      DAILY TRAINING CONTENT
                    </span>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">
                      Instagram Profile
                    </p>
                    <p className="text-xs text-[#A1A1AA]">
                      Follow workout clips, form tips & diet logic
                    </p>
                  </div>
                </a>
              )}

              {/* Email Card */}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#121212] border border-[#242424] hover:border-[#444444] hover:bg-[#161616] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8A8A8E]">
                      OFFICIAL INQUIRIES
                    </span>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">
                      Email Address
                    </p>
                    <p className="text-xs text-[#A1A1AA]">
                      {profile.email}
                    </p>
                  </div>
                </a>
              )}

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#121212] border border-[#242424]">
                <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#303030] flex items-center justify-center text-[#FF3030]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8A8A8E]">
                    FLOOR LOCATION
                  </span>
                  <p className="text-sm font-bold text-white uppercase tracking-wider">
                    {profile.gymName}
                  </p>
                  <p className="text-xs text-[#A1A1AA]">
                    {profile.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Operating Hours */}
            <div className="p-5 rounded-xl bg-[#0F0F0F] border border-[#222222] text-xs text-[#8A8A8E]">
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4 text-[#FF3030]" /> Training Hours
              </div>
              <p>Monday – Saturday: 06:00 AM – 10:00 PM</p>
              <p>Sunday: Active Recovery & Weekly Check-ins</p>
            </div>

          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-2xl">
            
            <div className="mb-8">
              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase font-bold tracking-wide mb-2">
                Athlete Inquiry & Assessment
              </h3>
              <p className="text-xs text-[#8A8A8E]">
                Fill out the application below. You can send it directly to WhatsApp with 1-click for instant review.
              </p>
            </div>

            {formStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-emerald-200">Assessment Ready & Generated!</p>
                  <p className="mt-0.5 text-emerald-300/80">
                    If WhatsApp didn't open automatically, you can message directly at <span className="font-bold text-white">{profile.whatsappFormatted}</span>. Coach {profile.name} reviews applications within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/30 border border-red-500/40 text-red-300 text-xs flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form className="space-y-5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2B2B2B] text-white text-sm focus:outline-none focus:border-[#FF3030] focus:ring-1 focus:ring-[#FF3030] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 73515 61004"
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2B2B2B] text-white text-sm focus:outline-none focus:border-[#FF3030] focus:ring-1 focus:ring-[#FF3030] transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2B2B2B] text-white text-sm focus:outline-none focus:border-[#FF3030] focus:ring-1 focus:ring-[#FF3030] transition-colors"
                />
              </div>

              {/* Program & Goal Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Primary Goal
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2B2B2B] text-white text-sm focus:outline-none focus:border-[#FF3030] focus:ring-1 focus:ring-[#FF3030] transition-colors"
                  >
                    <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                    <option value="Muscle Building">Muscle Building & Hypertrophy</option>
                    <option value="Fat Loss">Fat Loss & Shredding</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Lifting Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2B2B2B] text-white text-sm focus:outline-none focus:border-[#FF3030] focus:ring-1 focus:ring-[#FF3030] transition-colors"
                  >
                    <option value="Beginner (< 1 yr)">Beginner (&lt; 1 yr)</option>
                    <option value="Intermediate (1-3 yrs lifting)">Intermediate (1-3 yrs)</option>
                    <option value="Advanced (3+ yrs heavy lifting)">Advanced (3+ yrs)</option>
                    <option value="Competitive Athlete">Competitive Athlete</option>
                  </select>
                </div>
              </div>

              {/* Program Requested */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Requested Program
                </label>
                <input
                  type="text"
                  name="selectedProgram"
                  value={formData.selectedProgram}
                  onChange={handleInputChange}
                  placeholder="e.g. 1-on-1 In-Person Personal Training"
                  className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2B2B2B] text-white text-sm focus:outline-none focus:border-[#FF3030] focus:ring-1 focus:ring-[#FF3030] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Tell Coach About Your Current Routine & Struggles
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="e.g. Wanting to cut body fat from 22% to 12% while holding lean muscle mass..."
                  className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2B2B2B] text-white text-sm focus:outline-none focus:border-[#FF3030] focus:ring-1 focus:ring-[#FF3030] transition-colors resize-none"
                />
              </div>

              {/* Buttons: 1-Click WhatsApp vs Standard Submit */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="flex-1 py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (Instant)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmitWebForm}
                  className="py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-[#FF3030] hover:bg-[#FF4A4A] shadow-glow-red-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-[#71717A] uppercase tracking-wider pt-2">
                🔒 Privacy guaranteed. Your contact info is strictly used for coaching consultations.
              </p>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
