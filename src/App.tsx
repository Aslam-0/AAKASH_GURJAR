import { useState } from 'react';
import { initialTrainerProfile } from './data/trainerData';
import type { TrainerProfile } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Philosophy } from './components/Philosophy';
import { Transformations } from './components/Transformations';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';

export function App() {
  const [profile, setProfile] = useState<TrainerProfile>(initialTrainerProfile);
  const [selectedService, setSelectedService] = useState<string>('');

  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    caption: string;
  }>({
    isOpen: false,
    imageSrc: '',
    caption: '',
  });

  const handleOpenLightbox = (imageSrc: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      imageSrc,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleResetProfile = () => {
    setProfile(initialTrainerProfile);
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white selection:bg-[#FF3030] selection:text-white">
      {/* Navigation */}
      <Navbar profile={profile} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          profile={profile} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* About Me Section */}
        <About 
          profile={profile} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* Services & Coaching Offerings */}
        <Services 
          services={profile.services} 
          onSelectService={handleSelectService} 
        />

        {/* Training Methodology & Editorial Philosophy (Section / Page 4) */}
        <Philosophy 
          pillars={profile.philosophyPillars} 
          lifestyleImage={profile.philosophyImage || profile.lifestyleImage}
          trainerName={profile.name}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Visual Proof: Transformations & Coach Photo Gallery */}
        <Transformations 
          transformations={profile.transformations} 
          galleryImages={profile.galleryImages}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Awards, Medals & Fitness Certifications */}
        <Achievements 
          achievements={profile.achievements} 
          certifications={profile.certifications} 
          experienceYears={profile.experienceYears}
        />

        {/* Client Reviews */}
        <Testimonials testimonials={profile.testimonials} />

        {/* High-Impact Call To Action */}
        <CTASection profile={profile} />

        {/* Contact & Athlete Inquiry Form */}
        <Contact 
          profile={profile} 
          preselectedService={selectedService} 
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Lightbox Modal */}
      <LightboxModal 
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.imageSrc}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />

      {/* Live Profile Customizer Tool */}
      <ProfileCustomizerModal 
        profile={profile}
        onUpdateProfile={setProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}

export default App;
