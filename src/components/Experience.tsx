import React from "react";
import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar, Building, School } from "lucide-react";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="py-20 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-brand-gold uppercase font-mono">
            ససృజన ప్రస్థానం / Career Timeline
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
            బోధనా అనుభవం
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-brand-gold" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-0.5 w-12 bg-brand-gold" />
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12">
          {/* Central Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 border-l-2 border-dashed border-slate-200 dark:border-slate-800 transform -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col sm:flex-row items-start sm:items-center relative ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge (Desktop: Centered, Mobile: Sticky Left) */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div 
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full bg-brand-blue dark:bg-slate-900 border-2 border-brand-gold flex items-center justify-center shadow-md shadow-brand-gold/20"
                    >
                      {idx === EXPERIENCE.length - 1 ? (
                        <School className="w-5 h-5 text-brand-gold" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-brand-gold" />
                      )}
                    </motion.div>
                  </div>

                  {/* Content Card Panel */}
                  <div className="w-full sm:w-[calc(50%-2rem)] ml-12 sm:ml-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-md hover:border-brand-gold/40 hover:shadow-lg transition-all"
                    >
                      {/* Floating Years Tag */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/10 text-brand-gold border border-brand-gold/20 mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.years}
                      </span>

                      {/* Job Title / Role */}
                      <h3 className="text-lg sm:text-xl font-bold text-brand-blue dark:text-white font-serif-telugu">
                        {item.role}
                      </h3>

                      {/* Educational Institution & Place */}
                      <div className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300 font-sans-telugu">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-brand-gold shrink-0" />
                          <span className="font-semibold">{item.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                    </motion.div>
                  </div>
                  
                  {/* Empty balance spacer for Desktop */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
