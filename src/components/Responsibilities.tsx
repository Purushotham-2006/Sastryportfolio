import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  BookOpen, 
  Scale, 
  Heart, 
  Target, 
  Layers 
} from "lucide-react";
import { RESPONSIBILITIES } from "../data";

export default function Responsibilities() {
  const icons = [
    <BookOpen className="h-6 w-6 text-brand-gold" />,
    <Layers className="h-6 w-6 text-brand-gold" />,
    <Scale className="h-6 w-6 text-brand-gold" />,
    <Heart className="h-6 w-6 text-brand-gold" />,
    <Target className="h-6 w-6 text-brand-gold" />,
    <Users className="h-6 w-6 text-brand-gold" />
  ];

  return (
    <section 
      id="responsibilities" 
      className="py-20 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-brand-gold uppercase font-mono">
            బాధ్యతలు / Core Duties
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
            ప్రధాన బాధ్యతలు
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-brand-gold" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-0.5 w-12 bg-brand-gold" />
          </div>
        </div>

        {/* Core Duties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {RESPONSIBILITIES.map((duty, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-brand-gold/40 shadow-sm hover:shadow-md transition-all flex gap-4 text-left group"
            >
              <div className="p-3 bg-brand-gold/10 inline-flex rounded-xl shrink-0 group-hover:bg-brand-gold text-brand-gold group-hover:text-brand-blue transition-all h-fit">
                {icons[idx]}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  DUTY 0{idx + 1}
                </span>
                <p className="text-sm sm:text-base font-semibold text-brand-blue dark:text-slate-200 font-sans-telugu leading-relaxed">
                  {duty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
