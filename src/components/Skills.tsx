import React from "react";
import { motion } from "motion/react";
import { BookOpen, Laptop, CheckCircle2 } from "lucide-react";
import { PEDAGOGICAL_SKILLS, TECHNICAL_SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-brand-gold uppercase font-mono">
            విజ్ఞాన నైపుణ్యాలు / Areas of Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
            నైపుణ్యాలు
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-brand-gold" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-0.5 w-12 bg-brand-gold" />
          </div>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          
          {/* Pedagogical / Teaching Skills Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 dark:bg-slate-900/60 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-md"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-slate-200/50 dark:border-slate-800 pb-4">
              <div className="p-2.5 bg-brand-gold/10 text-brand-gold rounded-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-blue dark:text-white font-serif-telugu">
                  బోధనా నైపుణ్యాలు
                </h3>
                <p className="text-xs text-slate-400 font-mono">Pedagogical Competencies</p>
              </div>
            </div>

            <div className="space-y-6">
              {PEDAGOGICAL_SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-sans-telugu text-slate-700 dark:text-slate-200">
                    <span className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                      {skill.name}
                    </span>
                    <span className="font-mono font-bold text-brand-gold">{skill.level}%</span>
                  </div>
                  {/* Progress bar tracks */}
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: idx * 0.05 }}
                      className="h-full bg-gradient-to-r from-brand-gold to-yellow-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical / Tech Tool Skills Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 dark:bg-slate-900/60 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-md"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-slate-200/50 dark:border-slate-800 pb-4">
              <div className="p-2.5 bg-brand-gold/10 text-brand-gold rounded-lg">
                <Laptop className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-blue dark:text-white font-serif-telugu">
                  సాంకేతిక నైపుణ్యాలు
                </h3>
                <p className="text-xs text-slate-400 font-mono text-left">Technical & Educational Technology</p>
              </div>
            </div>

            <div className="space-y-6">
              {TECHNICAL_SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-sans-telugu text-slate-700 dark:text-slate-200">
                    <span className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                      {skill.name}
                    </span>
                    <span className="font-mono font-bold text-brand-gold">{skill.level}%</span>
                  </div>
                  {/* Progress bar tracks */}
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: idx * 0.05 }}
                      className="h-full bg-gradient-to-r from-brand-gold to-yellow-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
