import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Smartphone, Copy, ExternalLink } from "lucide-react";
import { CONTACT_INFO, TEACHER_NAME } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    association: "Student", // Student, Parent, Institution, Other
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    association: string;
    message: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const data = { ...formData };
    setSubmittedData(data);
    setIsSubmitted(true);

    const subject = `Challa Sastry Garu - message from ${data.name}`;
    const body = `పేరు (Name): ${data.name}\nసంబంధం (Association): ${data.association}\n\nసందేశం (Message):\n${data.message}\n\n---\nఈ సందేశం చల్లా సర్వేశ్వర శాస్త్రి గారి వెబ్‌సైట్ ద్వారా పంపబడింది.`;
    
    // Construct mailto link
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Auto-open mail client
    window.location.href = mailtoUrl;

    // Clear form
    setFormData({ name: "", association: "Student", message: "" });
  };

  const handleCopy = () => {
    if (!submittedData) return;
    const body = `పేరు (Name): ${submittedData.name}\nసంబంధం (Association): ${submittedData.association}\n\nసందేశం (Message):\n${submittedData.message}\n\n---\nఈ సందేశం చల్లా సర్వేశ్వర శాస్త్రి గారి వెబ్‌సైట్ ద్వారా పంపబడింది.`;
    navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2005);
  };

  const triggerMailtoAgain = () => {
    if (!submittedData) return;
    const subject = `Challa Sastry Garu - message from ${submittedData.name}`;
    const body = `పేరు (Name): ${submittedData.name}\nసంబంధం (Association): ${submittedData.association}\n\nసందేశం (Message):\n${submittedData.message}\n\n---\nఈ సందేశం చల్లా సర్వేశ్వర శాస్త్రి గారి వెబ్‌సైట్ ద్వారా పంపబడింది.`;
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const associationOptions = [
    { value: "Student", label: "విద్యార్థి (Student)" },
    { value: "Parent", label: "తల్లిదండ్రులు (Parent)" },
    { value: "Institution", label: "విద్యా సంస్థ (Institution)" },
    { value: "Other", label: "ఇతర (Other)" }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-brand-gold uppercase font-mono">
            సంప్రదించండి / Contact Me
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-white font-serif-telugu">
            సంప్రదించండి
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-brand-gold" />
            <div className="h-2 w-2 rounded-full bg-brand-gold" />
            <div className="h-0.5 w-12 bg-brand-gold" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Contact Details Card (Actions) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-brand-gold/30 p-8 rounded-2xl shadow-xl flex flex-col justify-between text-slate-100 h-full text-left relative overflow-hidden"
            >
              {/* Background gradient highlights */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                <h3 className="text-2xl font-extrabold text-brand-gold font-serif-telugu mb-4">
                  కలుద్దాంరండి / Direct Contact
                </h3>
                <p className="text-sm text-slate-300 font-sans-telugu leading-relaxed mb-8">
                  తరగతులు, సందేహ నివృత్తి, తెలుగు మరియు సంస్కృత సాహిత్య ప్రసంగాలు లేదా విద్యా వ్యవస్థాపక సలహాల కొరకు క్రింది మార్గాలలో నన్ను నేరుగా సంప్రదించవచ్చు.
                </p>

                {/* Info List */}
                <div className="space-y-6 text-sm sm:text-base">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-gold/10 rounded-xl border border-brand-gold/25 text-brand-gold mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 font-mono">ఫోన్ నంబర్ (Phone)</span>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="font-bold text-white hover:text-brand-gold transition-colors block">
                        +91 {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-gold/10 rounded-xl border border-brand-gold/25 text-brand-gold mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 font-mono">ఇమెయిల్ (Email)</span>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold text-white hover:text-brand-gold transition-colors block break-all">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-gold/10 rounded-xl border border-brand-gold/25 text-brand-gold mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 font-mono">చిరునామా (Location)</span>
                      <p className="font-bold text-slate-200 font-sans-telugu leading-relaxed">
                        {CONTACT_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Call, Mail, WhatsApp Action Buttons */}
              <div className="mt-12 space-y-3 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-400 font-mono font-semibold uppercase tracking-wider mb-2">
                  త్వరిత సందేశ మార్గాలు / Quick Connect Actions
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-blue hover:text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer text-center font-sans-telugu"
                  >
                    <Smartphone className="h-4 w-4" />
                    ఫోన్ చేయండి
                  </a>
                  
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 hover:bg-slate-705 text-white border border-slate-700 hover:border-brand-gold/50 font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer text-center"
                  >
                    <Mail className="h-4 w-4 text-brand-gold" />
                    ఇమెయిల్
                  </a>

                  <a
                    href={`https://wa.me/91${CONTACT_INFO.phone}?text=%E0%B0%A8%E0%B0%AE%E0%B0%B8%E0%B1%8D%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B0%82%20%E0%B0%B6%E0%B0%BE%E0%B0%B8%E0%B1%8D%E0%B0%A4%E0%B1%8D%E0%B0%B0%E0%B0%BF%20%E0%B0%97%E0%B0%BE%E0%B0%B0%E0%B1%81...`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer text-center font-sans-telugu"
                  >
                    <MessageSquare className="h-4 w-4" />
                    వాట్సాప్
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Interactive Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-extrabold text-brand-blue dark:text-white font-serif-telugu mb-2 text-left">
                  మమ్మల్ని సంప్రదించండి
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-350 font-sans-telugu mb-6 text-left">
                  క్యాంపస్ వివరాలు, సందేశం పంపడం కొరకు ఈ క్రింది ఫారమ్‌ను పూరించండి.
                </p>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-300 p-6 rounded-xl text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400 stroke-[1.5] animate-[bounce_2s_infinite]" />
                    <h4 className="text-lg font-bold font-serif-telugu text-green-800 dark:text-green-200">ఇమెయిల్ అప్లికేషన్ తెరవబడింది!</h4>
                    <p className="text-xs sm:text-sm font-sans-telugu leading-relaxed max-w-md text-slate-700 dark:text-slate-300">
                      ఇమెయిల్ పంపడానికి మీ ఇమెయిల్ యాప్ స్వయంచాలకంగా తెరవబడుతుంది. అందులో "Send" బటన్ నొక్కడం ద్వారా ఈ క్రింది సందేశం <strong>{CONTACT_INFO.email}</strong> కి పంపబడుతుంది.
                    </p>
                    
                    {/* Display submitted message so they can copy it manually if mailto failed */}
                    <div className="w-full text-left bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-xl space-y-2 mt-2">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400"><span className="font-mono text-brand-gold">To:</span> {CONTACT_INFO.email}</p>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400"><span className="font-mono text-brand-gold">Subject:</span> Challa Sastry Garu - message from {submittedData?.name}</p>
                      <div className="border-t border-slate-100 dark:border-slate-800/80 my-2" />
                      <p className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap font-sans-telugu font-medium max-h-32 overflow-y-auto">
                        {submittedData?.message}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-4">
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        <Copy className="h-3.5 w-3.5 text-brand-gold" />
                        {copied ? "సందేశం కాపీ చేయబడింది!" : "సందేశాన్ని కాపీ చేయండి"}
                      </button>

                      <button
                        type="button"
                        onClick={triggerMailtoAgain}
                        className="flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-blue hover:text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        మళ్లీ ఇమెయిల్ కి వెళ్ళండి
                      </button>
                    </div>

                    <button 
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs underline text-slate-500 hover:text-brand-blue dark:hover:text-white transition-colors mt-4 block"
                    >
                      మరో కొత్త సందేశాన్ని వ్రాయండి
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    {/* User Full Name */}
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-bold text-slate-400 font-mono tracking-widest uppercase mb-2">
                        మీ పేరు (Full Name) *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="ఉదా: రాము గారు"
                        className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all text-sm font-sans-telugu text-slate-900 dark:text-white"
                      />
                    </div>

                    {/* Association Category Selector */}
                    <div>
                      <label htmlFor="association-select" className="block text-xs font-bold text-slate-400 font-mono tracking-widest uppercase mb-2">
                        మీరు ఎవరు? (Your Association)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {associationOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, association: opt.value })}
                            className={`p-3 text-xs sm:text-sm font-semibold rounded-xl border transition-all text-left font-sans-telugu ${
                              formData.association === opt.value
                                ? "bg-brand-gold/15 border-brand-gold text-brand-gold"
                                : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-brand-gold/30"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label htmlFor="message-textarea" className="block text-xs font-bold text-slate-400 font-mono tracking-widest uppercase mb-2">
                        మీ సందేశం (Message Details) *
                      </label>
                      <textarea
                        id="message-textarea"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="ఉదా: శాస్త్రి గారు, మీ సీనియర్ తెలుగు క్లాసుల సమయాల గురించి తెలియజేయగలరు..."
                        className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all text-sm font-sans-telugu text-slate-900 dark:text-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand-blue hover:bg-brand-blue/90 border border-transparent hover:border-brand-gold text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer font-sans-telugu shimmer-effect relative overflow-hidden"
                    >
                      <Send className="h-4 w-4 text-brand-gold" />
                      సందేశాన్ని పంపండి (Submit Message)
                    </button>
                  </form>
                )}
              </div>

              {/* Trust Badge footer */}
              <div className="text-center font-mono text-[10px] text-slate-400 mt-6 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
                SECURE EDUCATION CHANNEL • CH-SASTRY OFFICE
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
