import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, ArrowUp, Moon, Sun, Award } from "lucide-react";

// Import custom sections
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import SubjectExpertise from "./components/SubjectExpertise";
import Responsibilities from "./components/Responsibilities";
import Achievements from "./components/Achievements";
import Extracurricular from "./components/Extracurricular";
import LanguagesAndPersonal from "./components/LanguagesAndPersonal";
import Contact from "./components/Contact";
import PrintResume from "./components/PrintResume";

import { TEACHER_NAME, TEACHER_TITLE } from "./data";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Loading Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Monitor Scroll for Go-To-Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePrintResume = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-350 ${darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}>
      
      {/* 1. Animated Traditional Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-blue"
          >
            {/* Spinning Mandala Mandala Ornament Backdrop */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
              <span className="text-[20vw] select-none text-brand-gold font-serif-telugu animate-[spin_120s_linear_infinite]">
                ఓం
              </span>
            </div>

            <div className="relative text-center flex flex-col items-center px-4">
              {/* Spinner core icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full border-4 border-dashed border-brand-gold/30 animate-[spin_15s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-brand-gold animate-pulse" />
                </div>
              </div>

              {/* Loader typography */}
              <h2 className="text-2xl font-bold text-white font-serif-telugu tracking-tight mb-2">
                {TEACHER_NAME}
              </h2>
              <p className="text-xs text-brand-gold/90 font-sans-telugu tracking-wide animate-pulse">
                {TEACHER_TITLE}
              </p>
              
              {/* Simple elegant loaded gold progress indicator */}
              <div className="w-48 h-0.5 bg-slate-800 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-brand-gold"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Web Layout Content */}
      <div className="no-print">
        {/* Navigation Head */}
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          onPrintResume={handlePrintResume} 
        />

        {/* Content sections stack */}
        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Qualifications />
          <Skills />
          <SubjectExpertise />
          <Responsibilities />
          <Achievements />
          <Extracurricular />
          <LanguagesAndPersonal />
          <Contact />
        </main>

        {/* Footer info card */}
        <footer className="bg-brand-blue dark:bg-slate-950 text-slate-300 py-12 border-t border-brand-gold/20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-white font-serif-telugu">{TEACHER_NAME}</h4>
                <p className="text-xs text-brand-gold font-mono tracking-wider mt-1">DEPARTMENT HEAD • SENIOR TELUGU TEACHER</p>
              </div>
              
              {/* Quick links footer */}
              <div className="flex flex-wrap justify-center gap-4 text-xs font-sans-telugu text-slate-400">
                <a href="#about" className="hover:text-brand-gold transition-colors">నా గురించి</a>
                <span className="text-slate-800">•</span>
                <a href="#experience" className="hover:text-brand-gold transition-colors">అనుభవం</a>
                <span className="text-slate-800">•</span>
                <a href="#skills" className="hover:text-brand-gold transition-colors">నైపుణ్యాలు</a>
                <span className="text-slate-800">•</span>
                <a href="#contact" className="hover:text-brand-gold transition-colors">సంప్రదించండి</a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-sans-telugu pt-8">
              <p>© 2026 {TEACHER_NAME}. సర్వ హక్కులూ కేటాయించబడినవి.</p>
              <p className="font-mono mt-2 sm:mt-0">Designed elegantly • Telugu Linguistic Heritage</p>
            </div>
          </div>
        </footer>

        {/* Floating Go To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 p-3 rounded-full bg-brand-gold text-brand-blue hover:text-white hover:bg-brand-gold-dark shadow-2xl transition-all cursor-pointer border border-brand-gold z-40"
              aria-label="Scroll back to top of the page"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>

      {/* 3. Printable CV Resume (Hidden globally, triggers on native window print) */}
      <div className="hidden print:block print-only">
        <PrintResume />
      </div>

    </div>
  );
}
