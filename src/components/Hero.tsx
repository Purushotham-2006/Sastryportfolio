import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Award, Calendar, BookOpen, School, Quote } from "lucide-react";
import { 
  TEACHER_NAME, 
  TEACHER_TITLE, 
  TEACHER_SUBTITLE, 
  CONTACT_INFO, 
  QUOTE, 
  STATS 
} from "../data";

export default function Hero() {
  const icons = [
    <Calendar className="h-6 w-6 text-brand-gold" />,
    <BookOpen className="h-6 w-6 text-brand-gold" />,
    <Award className="h-6 w-6 text-brand-gold" />,
    <School className="h-6 w-6 text-brand-gold" />
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-gradient-to-br from-brand-blue via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Decorative Traditional Calligraphy & Mandala Background Overlays */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
        <span className="text-[25vw] font-bold font-serif-telugu">భారత్</span>
      </div>
      
      {/* Floating Sparkle Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />

      {/* Garland Traditional Border Effect at Top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold via-yellow-500 to-brand-gold no-print" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Text and Title Container */}
          <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/10 text-brand-gold border border-brand-gold/30 mb-4">
                <Award className="h-3.5 w-3.5" />
                27+ సంవత్సరాల నిబద్ధత గల విద్యా సేవ
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif-telugu mb-3">
                {TEACHER_NAME}
              </h1>
              
              <p className="text-xl sm:text-2xl font-semibold text-brand-gold font-sans-telugu mb-4">
                {TEACHER_TITLE}
              </p>
              
              <p className="text-base sm:text-lg text-slate-300 font-sans-telugu max-w-2xl mb-8">
                {TEACHER_SUBTITLE} • యనమదల, రామచంద్రపురం గ్రామీణ మరియు పట్టణ ప్రాంతాల్లో ఎందరో విద్యార్థుల బంగారు భవిష్యత్తుకు మార్గదర్శకులు.
              </p>
            </motion.div>

            {/* Quote block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-900/60 backdrop-blur-sm border-l-4 border-brand-gold p-5 rounded-r-xl w-full max-w-2xl mb-8 shadow-lg"
            >
              <div className="flex gap-3 text-left">
                <Quote className="h-8 w-8 text-brand-gold/40 shrink-0 transform -scale-x-100" />
                <p className="text-base sm:text-lg text-slate-100 font-serif-telugu italic leading-relaxed">
                  "{QUOTE}"
                </p>
              </div>
            </motion.div>

            {/* Quick Contacts Pill Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center text-xs sm:text-sm text-slate-300 w-full"
            >
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-slate-700/50 hover:border-brand-gold/30 transition-all cursor-pointer"
              >
                <Phone className="h-4 w-4 text-brand-gold" />
                <span>+91 {CONTACT_INFO.phone}</span>
              </a>
              
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-slate-700/50 hover:border-brand-gold/30 transition-all cursor-pointer"
              >
                <Mail className="h-4 w-4 text-brand-gold" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-lg border border-slate-700/50">
                <MapPin className="h-4 w-4 text-brand-gold" />
                <span className="font-sans-telugu text-left">{CONTACT_INFO.location}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-20">
          <h3 className="text-center text-xs tracking-widest font-semibold text-brand-gold uppercase mb-8">
            విద్యా విజయాల మైలురాళ్ళు / Academic Indicators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-md p-6 rounded-xl border border-slate-800/80 hover:border-brand-gold/40 hover:bg-slate-900/80 transition-all text-center group"
              >
                <div className="inline-flex p-3 rounded-full bg-brand-gold/10 text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                  {icons[idx]}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                  <span className="text-brand-gold">{stat.value}</span>
                </div>
                <div className="text-sm font-semibold text-slate-200 font-sans-telugu mb-1 leading-snug">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-[11px] text-slate-400 font-mono">
                    {stat.description}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
