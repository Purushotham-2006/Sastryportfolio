import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, GraduationCap } from "lucide-react";
import { TEACHER_NAME } from "../data";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onPrintResume: () => void;
}

export default function Header({ darkMode, toggleDarkMode, onPrintResume }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "హోమ్" },
    { id: "about", label: "నా గురించి" },
    { id: "experience", label: "అనుభవం" },
    { id: "qualifications", label: "విద్యార్హతలు" },
    { id: "skills", label: "నైపుణ్యాలు" },
    { id: "expertise", label: "ప్రత్యేకతలు" },
    { id: "achievements", label: "విజయాలు" },
    { id: "contact", label: "సంప్రదించండి" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? "bg-brand-blue/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-brand-gold/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Head HOD Title */}
          <div 
            onClick={() => handleNavClick("hero")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="p-2 bg-brand-gold/10 rounded-lg border border-brand-gold/40 group-hover:bg-brand-gold/20 transition-all">
              <GraduationCap className="h-6 w-6 text-brand-gold" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-slate-100 font-serif-telugu tracking-tight group-hover:text-brand-gold transition-colors">
                {TEACHER_NAME}
              </h1>
              <p className="text-[10px] text-slate-300 tracking-wide uppercase font-mono">
                HOD • SENIOR TELUGU TEACHER
              </p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md font-sans-telugu transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "text-brand-gold bg-brand-gold/10 border border-brand-gold/20"
                    : "text-slate-200 hover:text-brand-gold hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Utility Buttons (DarkMode, Mobile Menu Toggle) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-200 hover:text-brand-gold hover:bg-white/5 transition-all cursor-pointer border border-slate-700/50"
              aria-label="Toggle theme mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-brand-gold" /> : <Moon className="h-5 w-5 text-slate-300" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-200 hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-gold border border-slate-700"
              aria-expanded="false"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-brand-blue/98 dark:bg-slate-950/98 backdrop-blur-lg border-b border-brand-gold/30 py-4 px-4 shadow-xl">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium font-sans-telugu transition-all ${
                  activeSection === item.id
                    ? "text-brand-blue bg-brand-gold font-semibold"
                    : "text-slate-200 hover:text-brand-gold hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
