import React from "react";
import { motion } from "motion/react";
import { Award, BookOpen, Users, Compass } from "lucide-react";
import { ABOUT_CONTENT } from "../data";

export default function About() {
  const highlights = [
    {
      title: "సంప్రదాయ విలువల బోధన",
      desc: "నైతిక మరియు సాంస్కృతిక విలువలతో కూడిన సమగ్ర విద్యను అందించడం.",
      icon: <Compass className="h-5 w-5 text-brand-gold" />
    },
    {
      title: "భాషా నైపుణ్యాల పెంపొందింపు",
      desc: "విద్యార్థులలో వ్యాకరణం, భావ వ్యక్తీకరణ మరియు సృజనాత్మకత పెంపొందించడం.",
      icon: <BookOpen className="h-5 w-5 text-brand-gold" />
    },
    {
      title: "పరిపాలనా నైపుణ్యం (HOD)",
      desc: "తెలుగు విభాగ నిర్వహణ మరియు ఉపాధ్యాయుల సమన్వయంలో దశాబ్దాల అనుభవం.",
      icon: <Award className="h-5 w-5 text-brand-gold" />
    },
    {
      title: "ఉత్తమ మార్గదర్శకత్వం",
      desc: "వెనుకబడిన విద్యార్థులపై ప్రత్యేక శ్రద్ధ వహిస్తూ ఉన్నత ఫలితాల సాధన.",
      icon: <Users className="h-5 w-5 text-brand-gold" />
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-brand-ivory dark:bg-slate-900 border-t border-b border-brand-gold/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-brand-gold uppercase font-mono">
            పరిచయం / Profile
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
            నా గురించి
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-brand-gold" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-0.5 w-12 bg-brand-gold" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Statement card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-950 p-8 sm:p-10 rounded-2xl shadow-xl border border-brand-gold/20 relative"
            >
              {/* Corner decorative design */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 rotate-45 w-16 h-1 bg-brand-gold/40" />
                <div className="absolute top-0 right-0 transform translate-x-7 -translate-y-2 rotate-45 w-16 h-1 bg-brand-gold/20" />
              </div>

              <p className="text-lg sm:text-xl text-brand-blue dark:text-slate-200 font-sans-telugu leading-relaxed mb-6 italic">
                "{ABOUT_CONTENT}"
              </p>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-brand-blue dark:text-white font-serif-telugu">
                    చల్లా కుక్కుట సర్వేశ్వర శాస్త్రి
                  </h4>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 bg-brand-blue dark:bg-slate-800 text-white hover:bg-brand-gold text-xs font-semibold rounded-lg transition-all border border-transparent hover:border-brand-gold cursor-pointer text-center font-sans-telugu"
                >
                  సంప్రదించండి (Contact Me)
                </button>
              </div>
            </motion.div>
          </div>

          {/* Quick Pillars/Highlights cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white dark:bg-slate-950 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-800 hover:border-brand-gold/30 hover:shadow-lg transition-all"
              >
                <div className="p-3 bg-brand-gold/10 rounded-lg inline-block mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-blue dark:text-white font-serif-telugu mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-sans-telugu leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
