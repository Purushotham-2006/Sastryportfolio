/**
 * Types and Interfaces for Telugu HOD Teacher Portfolio
 */

export interface ExperienceItem {
  years: string;
  role: string;
  institution: string;
  location: string;
}

export interface QualificationItem {
  degree: string;
  institution: string;
  location: string;
  stream?: string;
}

export interface SkillItem {
  name: string;
  level: number; // Percentage value (0-100)
}

export interface SubjectExpertiseItem {
  subject: string;
  keyPoints: string[];
}

export interface StatCard {
  value: string;
  label: string;
  description?: string;
}

export interface PersonalDetail {
  label: string;
  value: string;
}
