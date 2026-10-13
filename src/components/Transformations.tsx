import React, { useState } from 'react';
import { Eye, ArrowRight, ShieldCheck } from 'lucide-react';
import type { TransformationItem } from '../types';

interface TransformationsProps {
  transformations: TransformationItem[];
  galleryImages: {
    src: string;
    title: string;
    caption: string;
    tag: string;
  }[];
  onOpenLightbox: (imgSrc: string, caption: string) => void;
}

export const Transformations: React.FC<TransformationsProps> = ({
  transformations,
  galleryImages,
  onOpenLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<'transformations' | 'coachGallery'>('coachGallery');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fat Loss', 'Muscle Gain', 'Recomp', 'Contest Prep'];

  const filteredTransformations = selectedCategory === 'All'
    ? transformations
    : transformations.filter((t) => t.category === selectedCategory);

  return (
    <section id="transformations" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3030]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF3030] uppercase mb-3">
              <span className="w-8 h-[2px] bg-[#FF3030]" />
              VISUAL EVIDENCE & PROOF
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase font-extrabold">
              REAL WORK. <br />
              <span className="text-[#FF3030]">UNDENIABLE IMPACT.</span>
            </h2>
          </div>

          {/* Toggle View Tabs: Coach Visuals vs Client Transformations */}
          <div className="flex items-center p-1.5 rounded-xl bg-[#141414] border border-[#262626]">
            <button
              onClick={() => setActiveTab('coachGallery')}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'coachGallery'
                  ? 'bg-[#FF3030] text-white shadow-glow-red-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Coach Gallery
            </button>
            <button
              onClick={() => setActiveTab('transformations')}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'transformations'
                  ? 'bg-[#FF3030] text-white shadow-glow-red-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Client Transformations
            </button>
          </div>
        </div>

        {/* Tab 1: Coach Real Gallery (Featuring the 4 provided photos) */}
        {activeTab === 'coachGallery' && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs text-[#8A8A8E] uppercase tracking-wider font-semibold">
                Tap any photo to view full resolution
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#FF3030] font-bold">
                <ShieldCheck className="w-4 h-4" /> Real Athlete Photography
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenLightbox(img.src, `${img.title} - ${img.caption}`)}
                  className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#242424] hover:border-[#FF3030]/60 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(255,48,48,0.2)] hover:-translate-y-1.5"
                >
                  {/* Photo container */}
                  <div className="aspect-[3/4] overflow-hidden bg-[#181818]">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[10px] font-extrabold tracking-widest uppercase bg-[#FF3030] text-white px-2.5 py-1 rounded shadow-glow-red-sm">
                      {img.tag}
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-xl text-white uppercase font-bold tracking-wide leading-tight mb-1 group-hover:text-[#FF3030] transition-colors">
                      {img.title}
                    </p>
                    <p className="text-xs text-[#A1A1AA] line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Client Before & After Transformations */}
        {activeTab === 'transformations' && (
          <div>
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#FF3030] text-white shadow-glow-red-sm'
                      : 'bg-[#151515] text-[#A1A1AA] hover:text-white border border-[#262626]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid of Client Transformations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredTransformations.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#121212] border border-[#242424] overflow-hidden hover:border-[#FF3030]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-6">
                    {/* Header info */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-display text-2xl text-white uppercase font-bold tracking-wide">
                          {item.clientName}
                        </h3>
                        <span className="text-xs text-[#FF3030] font-bold uppercase tracking-wider">
                          {item.category} • {item.duration}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1B1B1B] text-[#D4D4D8] border border-[#333333]">
                        VERIFIED RESULT
                      </span>
                    </div>

                    {/* Stats Highlights Bar */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#0D0D0D] border border-[#1E1E1E] mb-5">
                      {item.stats.map((st, i) => (
                        <div key={i} className="text-center">
                          <p className="text-[10px] text-[#71717A] uppercase font-semibold">{st.label}</p>
                          <p className="font-display text-base font-bold text-white tracking-wide">{st.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>

                  {/* Transformation Comparison Imagery */}
                  {item.beforeImg && item.afterImg && (
                    <div className="grid grid-cols-2 gap-px bg-[#262626] border-t border-[#262626]">
                      <div
                        className="relative aspect-[4/5] overflow-hidden bg-[#181818] cursor-pointer group"
                        onClick={() => onOpenLightbox(item.beforeImg!, `${item.clientName} - Before (${item.category})`)}
                      >
                        <img
                          src={item.beforeImg}
                          alt="Before"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale-[40%]"
                        />
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-black/80 text-white border border-white/20">
                          BEFORE
                        </span>
                      </div>

                      <div
                        className="relative aspect-[4/5] overflow-hidden bg-[#181818] cursor-pointer group"
                        onClick={() => onOpenLightbox(item.afterImg!, `${item.clientName} - After (${item.category})`)}
                      >
                        <img
                          src={item.afterImg}
                          alt="After"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#FF3030] text-white shadow-glow-red-sm">
                          AFTER
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-[#141414] border-t border-[#1F1F1F] text-center">
                    <a
                      href="#contact"
                      className="text-xs font-bold uppercase tracking-widest text-[#FF3030] hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      START YOUR TRANSFORMATION <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#141414] border border-[#242424] text-center text-xs text-[#8A8A8E]">
              Note: Results depend on client adherence, nutritional compliance, and progressive resistance workload.
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
