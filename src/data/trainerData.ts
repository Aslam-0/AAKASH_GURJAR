import type { TrainerProfile } from '../types';

/**
 * =========================================================================
 * AAKASH GURJAR - OFFICIAL ATHLETE & TRAINER PORTFOLIO DATA
 * =========================================================================
 * Personal Trainer | Professional Bodybuilder | Fitness Influencer
 * Phone / WhatsApp: +91 73515 61004
 * Instagram: @fitwith_akki
 * =========================================================================
 */
export const initialTrainerProfile: TrainerProfile = {
  // 1. Core Personal Details
  name: "AAKASH GURJAR",
  nickname: "FIT WITH AKKI",
  title: "PERSONAL TRAINER • PROFESSIONAL BODYBUILDER • FITNESS INFLUENCER",
  tagline: "BUILD YOUR STRONGEST SELF.",
  
  experienceYears: "3-5 Years",
  athletesCoached: "75+",
  location: "India",
  gymName: "Elite Performance Training",
  
  // Contact & Social Links
  instagram: "https://instagram.com/fitwith_akki",
  whatsapp: "917351561004",
  whatsappFormatted: "+91 73515 61004",
  email: "aakashgurjar.fitness@gmail.com",

  // Real photos of Aakash Gurjar supplied
  heroImage: "/images/trainer-gym-fullbody.png",
  fullBodyImage: "/images/trainer-gym-fullbody.png",
  philosophyImage: "/images/trainer-philosophy.jpg",
  redAthleticImage: "/images/trainer-red-athletic.jpg",
  physiqueImage: "/images/trainer-physique.jpg",
  aboutImage: "/images/trainer-about.jpg",
  lifestyleImage: "/images/trainer-lifestyle.jpg",
  
  galleryImages: [
    {
      src: "/images/trainer-gym-fullbody.png",
      title: "Full-Body Gym Stance",
      caption: "On the gym floor with dumbbells and heavy equipment. Real athlete presence.",
      tag: "COACH ON FLOOR"
    },
    {
      src: "/images/trainer-red-athletic.jpg",
      title: "Signature Red Apparel & Peak Focus",
      caption: "High-intensity tunnel vision, peak arm conditioning, and dedicated workout standard.",
      tag: "ATHLETE FOCUS"
    },
    {
      src: "/images/trainer-philosophy.jpg",
      title: "Iron Discipline & Heavy Lifts",
      caption: "Heavy training sessions in the iron dungeon pushing past every limit.",
      tag: "HARDCORE"
    },
    {
      src: "/images/trainer-physique.jpg",
      title: "Physique & Biomechanics",
      caption: "Strict form, maximal mechanical tension, and dedicated gym ethic.",
      tag: "PHYSIQUE"
    },
    {
      src: "/images/trainer-about.jpg",
      title: "Athletic Conditioning",
      caption: "Functional strength and lean aesthetic conditioning year-round.",
      tag: "LIFESTYLE"
    },
    {
      src: "/images/trainer-lifestyle.jpg",
      title: "Drive & Relentless Energy",
      caption: "Living the fitness lifestyle with high motivation and unwavering focus.",
      tag: "DISCIPLINE"
    }
  ],

  bioHeadline: "PURE DISCIPLINE. SCULPTED PHYSIQUE. REAL RESULTS.",
  bioParagraphs: [
    "I am Aakash Gurjar—Personal Trainer, Professional Bodybuilder, and Fitness Influencer (@fitwith_akki). With 3 to 5 years of intense training experience under the iron and coaching clients, my mission is to help people construct strong, athletic, and muscular physiques without gimmicks.",
    "Whether your focus is stripping body fat, packing on lean dense muscle, or receiving high-intensity 1-on-1 personal guidance, I bring direct accountability, proper lifting form, and relentless energy to every single session."
  ],

  // 2. Certifications
  certifications: [
    {
      id: "cert-1",
      title: "Certified Personal Trainer",
      issuer: "Professional Fitness Coaching Accreditation",
      year: "Certified",
      description: "Movement mechanics, hypertrophy periodization, and customized workout programming."
    },
    {
      id: "cert-2",
      title: "Hypertrophy & Strength Specialist",
      issuer: "Advanced Resistance Training Protocols",
      year: "Specialist",
      description: "Progressive overload, muscle fiber recruitment, and joint-friendly lifting execution."
    },
    {
      id: "cert-3",
      title: "Metabolic Conditioning & Fat Loss Coach",
      issuer: "Athletic Performance Coaching",
      year: "Certified",
      description: "Evidence-based caloric expenditure and metabolic rate optimization."
    }
  ],

  // 3. Achievements & Awards
  achievements: [
    {
      id: "ach-1",
      title: "Professional Bodybuilder & Competitive Athlete",
      category: "Physique & Bodybuilding",
      year: "Active Athlete",
      detail: "Dedicated competitive bodybuilding athlete maintaining peak muscular conditioning and stage-level discipline.",
      highlight: true
    },
    {
      id: "ach-2",
      title: "Fitness Influencer & Community Mentor (@fitwith_akki)",
      category: "Digital Impact",
      year: "Present",
      detail: "Inspiring thousands of fitness enthusiasts daily through real workout breakdowns, technique guidance, and motivation.",
      highlight: true
    },
    {
      id: "ach-3",
      title: "3-5 Years of Elite Iron Experience",
      category: "Training Experience",
      year: "Milestone",
      detail: "Years of dedicated daily training, perfecting compound movements and guiding individuals to transform their bodies.",
      highlight: false
    }
  ],

  // 4. Exact Services Offered by Aakash Gurjar:
  // [x] Muscle Building
  // [x] Fat Loss
  // [x] Personal Training
  services: [
    {
      id: "service-pt",
      title: "1-on-1 Personal Training",
      tagline: "Dedicated hands-on guidance on the gym floor.",
      description: "Direct one-on-one personal coaching focused on mastering lifting mechanics, progressive overload, exercise intensity, and consistent accountability.",
      features: [
        "In-person form correction & safe execution",
        "Targeted weekly progressive overload tracking",
        "High-intensity coaching to push past plateaus",
        "Personalized accountability & guidance"
      ],
      recommendedFor: "Anyone wanting direct mentorship, perfect lifting form, and fast progress",
      badge: "MOST POPULAR",
      popular: true
    },
    {
      id: "service-muscle",
      title: "Muscle Building & Hypertrophy",
      tagline: "Build dense, powerful, and aesthetic muscle mass.",
      description: "Targeted resistance routines engineered to maximize mechanical tension, mind-muscle connection, and muscular volume for rapid growth and shape.",
      features: [
        "Specialized hypertrophy workout splits",
        "Progressive weight & repetition logging",
        "Compound barbell & dumbbell technique refinement",
        "Shoulder-to-waist aesthetic V-taper development"
      ],
      recommendedFor: "Lifters looking to add lean size, increase strength, and build a powerful physique",
      badge: "STRENGTH & SIZE",
      popular: false
    },
    {
      id: "service-fatloss",
      title: "Targeted Fat Loss & Shredding",
      tagline: "Drop stubborn body fat while keeping lean muscle.",
      description: "Strategic high-yield strength work combined with metabolic conditioning to burn stubborn fat, increase definition, and reveal sharp muscle contours.",
      features: [
        "High-metabolic resistance training circuits",
        "Calorie burning & conditioning routines",
        "Full body toning & midsection conditioning",
        "Regular body measurement & visual check-ins"
      ],
      recommendedFor: "Individuals aiming to cut body fat percentage, tone up, and achieve sharp definition",
      badge: "LEAN DEFINITION",
      popular: false
    }
  ],

  // 5. Training Philosophy Pillars
  philosophyPillars: [
    {
      number: "01",
      title: "Progressive Overload",
      subtitle: "The Foundation of Muscle Growth",
      description: "Muscle will only grow when challenged to do more than yesterday. We track every repetition, set, and weight increment to guarantee continuous physical adaptation.",
      quote: "Track your lifts, respect the process, and break personal records."
    },
    {
      number: "02",
      title: "Strict Lifting Form",
      subtitle: "Quality Over Ego",
      description: "Lifting with sloppy form harms joints and robs muscle activation. We focus on controlled eccentrics, full range of motion, and maximizing tension directly on target muscles.",
      quote: "Form first, weight second. Build muscle for longevity."
    },
    {
      number: "03",
      title: "Relentless Discipline",
      subtitle: "The Bodybuilder Mindset",
      description: "Motivation comes and goes, but daily discipline stays. Showing up even when you don't feel like it is what separates those who dream from those who achieve results.",
      quote: "Consistency is your greatest superpower."
    }
  ],

  // 6. Transformations Gallery
  transformations: [
    {
      id: "trans-1",
      clientName: "Client Physique Transformation",
      category: "Recomp",
      duration: "16 Weeks",
      stats: [
        { label: "Body Fat", value: "24% -> 11%" },
        { label: "Lean Muscle", value: "+4.5 kg" },
        { label: "Waist Size", value: "-5 Inches" }
      ],
      summary: "Structured progressive resistance training coupled with consistent discipline under Aakash Gurjar's protocol.",
      beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
      afterImg: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "trans-2",
      clientName: "Muscle Hypertrophy Client",
      category: "Muscle Gain",
      duration: "20 Weeks",
      stats: [
        { label: "Bodyweight", value: "62 kg -> 74 kg" },
        { label: "Strength", value: "+45% Gains" },
        { label: "Chest Size", value: "+4 Inches" }
      ],
      summary: "High volume hypertrophy split focusing on heavy compound movements and progressive overload.",
      beforeImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
      afterImg: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "trans-3",
      clientName: "Fat Loss & Shredding Client",
      category: "Fat Loss",
      duration: "12 Weeks",
      stats: [
        { label: "Weight Loss", value: "-12 kg" },
        { label: "Body Fat", value: "-8%" },
        { label: "Stamina", value: "+250%" }
      ],
      summary: "Intense metabolic strength training and continuous accountability for rapid fat shredding.",
      beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // 7. Testimonials
  testimonials: [
    {
      id: "test-1",
      name: "Rohan V.",
      role: "Gym Trainee",
      program: "Personal Training",
      quote: "Training under Aakash bhai completely elevated my lifting standards. He corrected my posture, taught me true intensity, and I added serious muscle while staying injury-free.",
      rating: 5,
      results: "+5 kg Muscle & Huge Strength Boost"
    },
    {
      id: "test-2",
      name: "Deepak S.",
      role: "Fitness Enthusiast",
      program: "Muscle Building Program",
      quote: "Followed Aakash on Instagram (@fitwith_akki) and joined his coaching. His energy, passion for bodybuilding, and workout guidance are unmatched. Results speak for themselves!",
      rating: 5,
      results: "Transformed Delts & Chest Shape"
    },
    {
      id: "test-3",
      name: "Kunal M.",
      role: "Corporate Executive",
      program: "Fat Loss Coaching",
      quote: "Aakash helped me drop 10 kg in under 3 months. He pushes you to your limit with genuine care and motivating energy. Best decision for my health.",
      rating: 5,
      results: "-10 kg Fat Loss & Visible Abs"
    }
  ]
};
