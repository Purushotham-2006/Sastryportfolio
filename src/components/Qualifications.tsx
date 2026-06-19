import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, MapPin, Milestone } from "lucide-react";
import { QUALIFICATIONS } from "../data";

export default function Qualifications() {
  const icons = [
    <BookOpen className="h-6 w-6 text-brand-gold" />,
    <Milestone className="h-6 w-6 text-brand-gold" />,
    <GraduationCap className="h-7 w-7 text-brand-gold" />
  ];

  return (
    <section 
      id="qualifications" 
      className="py-20 bg-brand-ivory dark:bg-slate-900 border-t border-b border-brand-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-brand-gold uppercase font-mono">
            విద్యా అర్హతలు / Academic Background
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
            విద్యార్హతలు
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-brand-gold" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-0.5 w-12 bg-brand-gold" />
          </div>
        </div>

        {/* Bento/Grid style cards with sequential progress lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {QUALIFICATIONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-xl border border-brand-gold/20 hover:border-brand-gold/50 hover:shadow-2xl transition-all relative flex flex-col justify-between group"
            >
              {/* Badge Number Indicator */}
              <div className="absolute top-4 right-4 text-xs font-bold text-brand-gold/40 font-mono">
                0{idx + 1} / 03
              </div>

              <div>
                {/* Qualification Node Decorator */}
                <div className="p-4 bg-brand-gold/5 dark:bg-brand-gold/10 rounded-xl border border-brand-gold/30 inline-block mb-6 group-hover:bg-brand-gold/20 transition-all">
                  {icons[idx]}
                </div>

                {/* Degree Name */}
                <h3 className="text-xl font-extrabold text-brand-blue dark:text-white font-serif-telugu mb-3">
                  {item.degree}
                </h3>

                {/* Stream / Subjects if any */}
                {item.stream && (
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono tracking-wide uppercase mb-3 text-brand-gold">
                    {item.stream}
                  </p>
                )}

                {/* Institution & Location details */}
                <span className="block border-t border-slate-100 dark:border-slate-800/80 my-4" />

                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 font-sans-telugu">
                  <p className="font-bold">{item.institution}</p>
                  <p className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Card Footer accent line */}
              <div className="mt-8 h-1 w-full bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
