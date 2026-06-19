import React from "react";
import { motion } from "motion/react";
import { HelpCircle, Star, Music, Award } from "lucide-react";
import { EXTRACURRICULAR_ACTIVITIES } from "../data";

export default function Extracurricular() {
  const icons = [
    <Star className="h-6 w-6 text-brand-gold" />,
    <HelpCircle className="h-6 w-6 text-brand-gold" />,
    <Music className="h-6 w-6 text-brand-gold" />,
    <Award className="h-6 w-6 text-brand-gold" />
  ];

  return (
    <section 
      id="extracurricular" 
      className="py-20 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-brand-gold uppercase font-mono">
            సహ పాఠ్య ప్రవృత్తి / Co-Curricular & Cultural
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
            సహ పాఠ్య కార్యక్రమాలు
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-brand-gold" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-0.5 w-12 bg-brand-gold" />
          </div>
        </div>

        {/* Dynamic Activity List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {EXTRACURRICULAR_ACTIVITIES.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-brand-gold/30 hover:shadow-md transition-all flex items-center gap-5 text-left group"
            >
              <div className="p-3.5 bg-brand-gold/10 inline-flex rounded-xl shrink-0 group-hover:bg-brand-gold text-brand-gold group-hover:text-brand-blue transition-all">
                {icons[idx] || <Star className="h-6 w-6" />}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  ACTIVITY 0{idx + 1}
                </span>
                <p className="text-base font-semibold text-brand-blue dark:text-slate-200 font-sans-telugu leading-relaxed">
                  {act}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
