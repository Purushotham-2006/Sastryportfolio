import React from "react";
import { motion } from "motion/react";
import { Languages, User, Compass, Signature, ShieldCheck } from "lucide-react";
import { LANGUAGES, PERSONAL_DETAILS, DECLARATION, TEACHER_NAME } from "../data";

export default function LanguagesAndPersonal() {
  return (
    <section 
      id="personal-details" 
      className="py-20 bg-brand-ivory dark:bg-slate-900 border-t border-b border-brand-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Languages & Personal Details Container */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            
            {/* Languages card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl shadow-lg border border-brand-gold/20 text-left"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                <Languages className="h-5 w-5 text-brand-gold" />
                <h3 className="text-xl font-bold text-brand-blue dark:text-white font-serif-telugu">
                  భాషలు (Languages)
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LANGUAGES.map((lang, lIdx) => (
                  <div 
                    key={lIdx}
                    className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 hover:border-brand-gold/30 transition-all font-sans-telugu text-sm font-semibold"
                  >
                    <div className="w-2.5 h-2.5 bg-brand-gold rounded-full shrink-0" />
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal Details card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl shadow-lg border border-brand-gold/20 text-left flex-grow"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                <User className="h-5 w-5 text-brand-gold" />
                <h3 className="text-xl font-bold text-brand-blue dark:text-white font-serif-telugu">
                  వ్యక్తిగత వివరాలు (Personal Details)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans-telugu">
                {PERSONAL_DETAILS.map((detail, dIdx) => (
                  <div 
                    key={dIdx}
                    className="flex flex-col p-3 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border border-slate-100/30 dark:border-slate-800/20"
                  >
                    <span className="text-xs text-slate-400 font-semibold mb-1 uppercase font-mono">
                      {detail.label}
                    </span>
                    <span className="font-bold text-brand-blue dark:text-slate-200">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Declaration Column */}
          <div className="lg:col-span-5 flex">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-lg border border-brand-gold/20 flex flex-col justify-between text-left relative overflow-hidden w-full"
            >
              {/* Background emblem stamp watermark */}
              <div className="absolute top-4 right-4 text-slate-100 dark:text-slate-900/80 pointer-events-none select-none">
                <ShieldCheck className="w-32 h-32 stroke-[0.5] text-brand-gold/5" />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <Compass className="h-5 w-5 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-blue dark:text-white font-serif-telugu">
                    ప్రకటన (Declaration)
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans-telugu leading-relaxed italic border-l-4 border-brand-gold/40 pl-4 py-2 my-6">
                  "{DECLARATION}"
                </p>
              </div>

              {/* Signature section */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-6 flex flex-col items-end">
                <div className="text-center font-serif text-brand-gold/80 flex items-center gap-1 mb-2 font-semibold">
                  <Signature className="w-4 h-4 shrink-0" />
                  <span className="font-serif italic text-base">C.K.S. Sastry</span>
                </div>
                <div className="text-right">
                  <h4 className="text-sm font-bold text-brand-blue dark:text-white font-serif-telugu">
                    ({TEACHER_NAME})
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">భారతీయ అధ్యాపక పక్ష సిఫార్సు</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
