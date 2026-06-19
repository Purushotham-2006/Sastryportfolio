import React from "react";
import { motion } from "motion/react";
import { Trophy, CheckCircle, GraduationCap, Users, Calendar } from "lucide-react";
import { STUDENT_ACHIEVEMENTS } from "../data";

export default function Achievements() {
  const stats = [
    {
      value: "90%+",
      label: "డిస్టింక్షన్ ఫలితాలు",
      desc: "90%+ Distinction in Boards",
      icon: <Trophy className="h-6 w-6 text-brand-gold" />
    },
    {
      value: "1000+",
      label: "విద్యార్థులకు మార్గదర్శకత్వం",
      desc: "1000+ Active Student Mentorships",
      icon: <Users className="h-6 w-6 text-brand-gold" />
    },
    {
      value: "27+",
      label: "సంవత్సరాల అనుభవం",
      desc: "27+ Years Academic Legacy",
      icon: <Calendar className="h-6 w-6 text-brand-gold" />
    }
  ];

  return (
    <section 
      id="achievements" 
      className="py-20 bg-brand-ivory dark:bg-slate-900 border-t border-b border-brand-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-brand-gold uppercase font-mono">
            విజయం మరియు ఫలితాలు / Milestones & Outcomes
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
            విద్యార్థుల ఫలితాలు & విజయాలు
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-brand-gold" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-0.5 w-12 bg-brand-gold" />
          </div>
        </div>

        {/* Counter Block Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-brand-gold/25 shadow-xl text-center group hover:border-brand-gold/50 transition-all"
            >
              <div className="p-3 bg-brand-gold/10 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-brand-blue dark:text-white font-sans tracking-tight mb-2">
                <span className="text-brand-gold">{stat.value}</span>
              </h3>
              <p className="text-base font-bold text-slate-800 dark:text-slate-200 font-sans-telugu leading-snug mb-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-400 font-mono italic">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* bullet achievements detail list */}
        <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-xl border border-brand-gold/15 p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
            <GraduationCap className="h-6 w-6 text-brand-gold" />
            <h3 className="text-xl font-bold text-brand-blue dark:text-white font-serif-telugu">
              ప్రధాన విద్యా విజయాలు (Key Achievements)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans-telugu">
            {STUDENT_ACHIEVEMENTS.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 hover:border-brand-gold/20 transition-all text-left"
              >
                <div className="p-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle className="h-4.5 w-4.5 stroke-[2.5]" />
                </div>
                <p className="font-semibold leading-relaxed">
                  {ach}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
