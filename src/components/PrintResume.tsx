import React from "react";
import { 
  TEACHER_NAME, 
  TEACHER_NAME_EN,
  TEACHER_TITLE, 
  CONTACT_INFO, 
  EXPERIENCE, 
  QUALIFICATIONS, 
  RESPONSIBILITIES, 
  SUBJECT_EXPERTISE, 
  STUDENT_ACHIEVEMENTS, 
  EXTRACURRICULAR_ACTIVITIES, 
  LANGUAGES, 
  PERSONAL_DETAILS, 
  DECLARATION 
} from "../data";

interface PrintResumeProps {
  forPdf?: boolean;
}

export default function PrintResume({ forPdf = false }: PrintResumeProps) {
  return (
    <div 
      className={`${forPdf ? "" : "hidden print:block print-only"} mx-auto my-0 p-8 text-xs font-sans max-w-[210mm] min-h-[297mm] shadow-none`}
      style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
    >
      {/* High-fidelity PDF non-oklch styles */}
      <style>{`
        .pdf-text-dark-950 {
          color: #030712 !important;
        }
        .pdf-text-dark {
          color: #0f172a !important;
        }
        .pdf-text-muted-dark {
          color: #1e293b !important;
        }
        .pdf-text-muted {
          color: #475569 !important;
        }
        .pdf-text-light {
          color: #64748b !important;
        }
        .pdf-text-brand-teal {
          color: #115e59 !important;
        }
      `}</style>

      {/* Header Profile Info */}
      <div 
        className="pb-4 mb-4 text-center" 
        style={{ borderBottom: "2px solid #d4af37" }}
      >
        <h1 className="text-2xl font-bold font-serif pdf-text-dark leading-tight">
          {TEACHER_NAME}
        </h1>
        <p className="text-xs font-semibold pdf-text-light uppercase tracking-widest mt-1">
          {TEACHER_NAME_EN}
        </p>
        <p className="text-sm font-bold pdf-text-brand-teal mt-2 font-serif-telugu">
          {TEACHER_TITLE}
        </p>
        
        {/* Contacts Grid */}
        <div className="grid grid-cols-2 gap-2 mt-4 text-[10px] pdf-text-muted">
          <div>
            <p><strong>ఫోన్ (Phone):</strong> +91 {CONTACT_INFO.phone}</p>
            <p><strong>ఇమెయిల్ (Email):</strong> {CONTACT_INFO.email}</p>
          </div>
          <div>
            <p><strong>చిరునామా (Address):</strong> {CONTACT_INFO.locationEn}</p>
            <p><strong>స్థలం (Location):</strong> {CONTACT_INFO.location}</p>
          </div>
        </div>
      </div>

      {/* Main Grid Structure */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column (Main timelines & facts) */}
        <div className="col-span-8 space-y-4">
          
          {/* Section: Experience */}
          <div>
            <h2 
              className="text-xs font-extrabold uppercase tracking-wider pdf-text-dark pb-1 mb-2 font-serif"
              style={{ borderBottom: "1px solid #d4af37" }}
            >
              బోధనా అనుభవం (Teaching Experience)
            </h2>
            <div className="space-y-3">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="text-[11px]">
                  <div className="flex justify-between items-start font-bold pdf-text-dark">
                    <span>{exp.role}</span>
                    <span className="pdf-text-muted font-mono text-[10px]">{exp.years}</span>
                  </div>
                  <p className="pdf-text-muted font-medium font-sans-telugu">
                    {exp.institution} — <span className="text-[10px] pdf-text-light">{exp.location}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Responsibilities */}
          <div>
            <h2 
              className="text-xs font-extrabold uppercase tracking-wider pdf-text-dark pb-1 mb-2 font-serif"
              style={{ borderBottom: "1px solid #d4af37" }}
            >
              ప్రధాన బాధ్యతలు (Core HOD Duties)
            </h2>
            <ul className="list-disc list-inside space-y-1 text-[11px] pdf-text-muted-dark font-sans-telugu">
              {RESPONSIBILITIES.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>

          {/* Section: Student Results & Milestones */}
          <div>
            <h2 
              className="text-xs font-extrabold uppercase tracking-wider pdf-text-dark pb-1 mb-2 font-serif"
              style={{ borderBottom: "1px solid #d4af37" }}
            >
              విద్యార్థుల ఫలితాలు & విజయాలు (Student Outcomes)
            </h2>
            <ul className="list-disc list-inside space-y-1 text-[11px] pdf-text-muted-dark font-sans-telugu">
              {STUDENT_ACHIEVEMENTS.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right Column (Qualifications, Skills, Personal details) */}
        <div 
          className="col-span-4 space-y-4 pl-4"
          style={{ borderLeft: "1px solid #e2e8f0" }}
        >
          
          {/* Section: Education */}
          <div>
            <h2 
              className="text-xs font-extrabold uppercase tracking-wider pdf-text-dark pb-1 mb-2 font-serif"
              style={{ borderBottom: "1px solid #d4af37" }}
            >
              విద్యార్హతలు (Qualifications)
            </h2>
            <div className="space-y-2">
              {QUALIFICATIONS.map((qual, idx) => (
                <div key={idx} className="text-[11px]">
                  <p className="font-bold pdf-text-dark-950">{qual.degree}</p>
                  <p className="pdf-text-muted text-[10px] leading-snug">{qual.institution}</p>
                  {qual.stream && <p className="text-[9px] pdf-text-light font-serif-telugu">{qual.stream}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Section: Subject Domains */}
          <div>
            <h2 
              className="text-xs font-extrabold uppercase tracking-wider pdf-text-dark pb-1 mb-2 font-serif"
              style={{ borderBottom: "1px solid #d4af37" }}
            >
              ప్రత్యేక నైపుణ్యాలు (Expertise)
            </h2>
            <div className="space-y-2 text-[10px] pdf-text-muted-dark">
              {SUBJECT_EXPERTISE.map((sub, idx) => (
                <div key={idx}>
                  <p className="font-bold pdf-text-dark-950">{sub.subject}</p>
                  <p className="font-sans-telugu text-[9px] leading-relaxed pdf-text-muted">
                    {sub.keyPoints[0].replace("✔ ", "")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Languages */}
          <div>
            <h2 
              className="text-xs font-extrabold uppercase tracking-wider pdf-text-dark pb-1 mb-2 font-serif"
              style={{ borderBottom: "1px solid #d4af37" }}
            >
              భాషలు (Languages Spoken)
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-[10px] pdf-text-muted-dark font-sans-telugu">
              {LANGUAGES.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
          </div>

          {/* Section: Co-curricular */}
          <div>
            <h2 
              className="text-xs font-extrabold uppercase tracking-wider pdf-text-dark pb-1 mb-2 font-serif"
              style={{ borderBottom: "1px solid #d4af37" }}
            >
              సహ కార్యక్రమాలు (Cultural)
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-[10px] pdf-text-muted-dark font-sans-telugu">
              {EXTRACURRICULAR_ACTIVITIES.map((act, idx) => (
                <li key={idx}>{act.replace(/\s*\(.*?\)\s*/g, "")}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Page Break for Personal details and declaration to look perfect */}
      <div 
        className="mt-8 pt-4 grid grid-cols-12 gap-8"
        style={{ borderTop: "1px solid #e2e8f0" }}
      >
        
        {/* Personal Details */}
        <div className="col-span-6 text-[10px]">
          <h3 className="font-bold pdf-text-dark-950 mb-1">వ్యక్తిగత వివరాలు (Personal Demographics)</h3>
          <div className="grid grid-cols-2 gap-1 pdf-text-muted">
            {PERSONAL_DETAILS.map((det, idx) => (
              <p key={idx}><strong>{det.label}:</strong> {det.value}</p>
            ))}
          </div>
        </div>

        {/* Signed Declaration area */}
        <div 
          className="col-span-6 flex flex-col justify-between items-end pl-4"
          style={{ borderLeft: "1px solid #f1f5f9" }}
        >
          <p className="text-[9px] pdf-text-muted italic leading-normal text-right">
            "{DECLARATION}"
          </p>
          <div className="text-right mt-4 leading-snug">
            <p className="font-bold font-serif text-[10px] pdf-text-muted-dark">Challa K.S. Sastry</p>
            <p className="text-[10px] pdf-text-dark-950 font-bold font-serif-telugu">({TEACHER_NAME})</p>
            <p className="text-[9px] pdf-text-light font-mono">Date: 18-06-2026</p>
          </div>
        </div>

      </div>
    </div>
  );
}
