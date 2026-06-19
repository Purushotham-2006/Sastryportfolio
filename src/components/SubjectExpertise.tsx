import React from "react";
import { motion } from "motion/react";
import { Check, Highlighter, Glasses } from "lucide-react";
import { SUBJECT_EXPERTISE } from "../data";

export default function SubjectExpertise() {
  const icons = [
    <Highlighter className="h-6 w-6 text-brand-gold" />,
    <Glasses className="h-6 w-6 text-brand-gold" />
  ];

  return (
    <section 
      id="expertise" 
      className="py-20 bg-brand-ivory dark:bg-slate-900 border-t border-b border-brand-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-brand-gold uppercase font-mono">
            విషయ విస్తృతి / Academic Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
            ప్రత్యేక నైపుణ్యాలు
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-brand-gold" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-0.5 w-12 bg-brand-gold" />
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {SUBJECT_EXPERTISE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-xl border border-brand-gold/20 hover:border-brand-gold/45 hover:shadow-2xl transition-all group relative"
            >
              {/* Card Watermark */}
              <div className="absolute bottom-4 right-4 text-brand-gold/5 text-8xl font-serif-telugu select-none pointer-events-none">
                {idx === 0 ? "తె" : "సం"}
              </div>

              {/* Title Section */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="p-3 bg-brand-gold/10 rounded-xl">
                  {icons[idx]}
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
                    {item.subject}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">Language Scholar Domain</p>
                </div>
              </div>

              {/* Key Check Points */}
              <ul className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans-telugu leading-relaxed">
                {item.keyPoints.map((point, pIdx) => (
                  <motion.li 
                    key={pIdx} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + pIdx * 0.1 }}
                  >
                    <div className="p-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full shrink-0 mt-0.5 border border-green-500/20">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
