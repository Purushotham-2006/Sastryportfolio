import { 
  ExperienceItem, 
  QualificationItem, 
  SkillItem, 
  SubjectExpertiseItem, 
  StatCard, 
  PersonalDetail 
} from "./types";

export const TEACHER_NAME = "చల్లా కుక్కుట సర్వేశ్వర శాస్త్రి";
export const TEACHER_NAME_EN = "Challa Kukkuta Sarveswara Sastry";
export const TEACHER_TITLE = "తెలుగు విభాగాధిపతి (HOD) & సీనియర్ తెలుగు ఉపాధ్యాయుడు";
export const TEACHER_SUBTITLE = "27+ సంవత్సరాల విశిష్ట బోధనా ప్రస్థానం";

export const CONTACT_INFO = {
  phone: "8688619646",
  email: "challasastry7@gmail.com",
  location: "యనమదల, రామచంద్రపురం, ఆంధ్రప్రదేశ్",
  locationEn: "Yanamadala, Ramachandrapuram, Andhra Pradesh",
};

export const QUOTE = "భాష మన సంస్కృతికి ప్రతిబింబం; విద్య మన భవిష్యత్తుకు పునాది.";

export const STATS: StatCard[] = [
  {
    value: "27+",
    label: "బోధనా అనుభవం (సంవత్సరాలు)",
    description: "27+ Years of Rich Teaching Legacy"
  },
  {
    value: "1000+",
    label: "విద్యార్థులకు మార్గదర్శకత్వం",
    description: "1000+ Aspiring Students Mentored Personally"
  },
  {
    value: "90%+",
    label: "డిస్టింక్షన్ ఫలితాలు",
    description: "90%+ Overall Distinction Results in Board Exams"
  },
  {
    value: "4",
    label: "విద్యా సంస్థలు",
    description: "4 Respected Educational Institutions Served"
  }
];

export const ABOUT_CONTENT = 
  "27 సంవత్సరాల విశిష్ట బోధనా అనుభవం కలిగిన తెలుగు ఉపాధ్యాయునిగా మరియు తెలుగు విభాగాధిపతిగా (HOD) విద్యార్థులలో భాషా ప్రావీణ్యం, నైతిక విలువలు మరియు సృజనాత్మక ఆలోచనా శక్తిని పెంపొందించడంలో విశేష కృషి చేశాను. తెలుగు మరియు సంస్కృత వ్యాకరణంపై సమగ్ర అవగాహనతో విద్యార్థులకు నాణ్యమైన విద్యను అందిస్తూ, వారి విద్యా పురోగతికి మరియు వ్యక్తిత్వ వికాసానికి తోడ్పడటమే నా ప్రధాన లక్ష్యం.";

export const QUALIFICATIONS: QualificationItem[] = [
  {
    degree: "SSC (పదో తరగతి)",
    institution: "మోడరన్ రెసిడెన్షియల్ స్కూల్",
    location: "రామచంద్రపురం"
  },
  {
    degree: "ఇంటర్మీడియట్ (CEC)",
    institution: "జూనియర్ కాలేజ్",
    location: "రామచంద్రపురం"
  },
  {
    degree: "బి.ఏ (B.A.)",
    stream: "చరిత్ర, రాజకీయ శాస్త్రం, సామాజిక శాస్త్రం (History, Political Science, Sociology)",
    institution: "వి.ఎస్.ఎం కళాశాల",
    location: "రామచంద్రపురం"
  }
];

export const PEDAGOGICAL_SKILLS: SkillItem[] = [
  { name: "తరగతి గది నిర్వహణ (Classroom Management)", level: 98 },
  { name: "విద్యార్థుల మూల్యాంకనం (Student Assessment)", level: 95 },
  { name: "పాఠ్య ప్రణాళిక తయారీ (Lesson Planning)", level: 97 },
  { name: "పాఠ్యాంశాల అభివృద్ధి (Curriculum Development)", level: 94 },
  { name: "వ్యక్తిగత అభ్యాస ప్రణాళికలు (Differentiated Learning)", level: 92 },
  { name: "ఆన్లైన్ బోధన (Online Teaching)", level: 90 },
  { name: "పరీక్షల సన్నద్ధత (Board Exam Preparation)", level: 99 }
];

export const TECHNICAL_SKILLS: SkillItem[] = [
  { name: "Microsoft Word (తెలుగు టైపింగ్ & డ్యాక్యుమెంట్లు)", level: 88 },
  { name: "Microsoft PowerPoint (డిజిటల్ ప్రెజెంటేషన్లు)", level: 85 },
  { name: "Google Classroom", level: 90 },
  { name: "Zoom Video Communications", level: 92 },
  { name: "Google Meet", level: 92 },
  { name: "Educational Technology Tools (బోధనా సాంకేతిక సాధనాలు)", level: 86 }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    years: "1998 – 2001",
    role: "తెలుగు ఉపాధ్యాయుడు",
    institution: "లిటిల్ రోజ్ ఈ.ఎం. స్కూల్",
    location: "ద్రాక్షారామం"
  },
  {
    years: "2001 – 2018",
    role: "సీనియర్ తెలుగు ఉపాధ్యాయుడు",
    institution: "వివేకానంద ఈ.ఎం. స్కూల్",
    location: "రామచంద్రపురం"
  },
  {
    years: "2018 – 2020",
    role: "తెలుగు విభాగాధిపతి (HOD)",
    institution: "క్యాంప్ ఈ.ఎం. స్కూల్",
    location: "రామచంద్రపురం"
  },
  {
    years: "2020 – ప్రస్తుతం",
    role: "తెలుగు విభాగాధిపతి (HOD) & సీనియర్ తెలుగు ఉపాధ్యాయుడు",
    institution: "శ్రీ చైతన్య టెక్నో ఈ.ఎం. స్కూల్",
    location: "రామచంద్రపురం"
  }
];

export const RESPONSIBILITIES: string[] = [
  "6వ తరగతి నుండి 10వ తరగతి వరకు తెలుగు బోధన",
  "పాఠ్య ప్రణాళికలు మరియు అధ్యయన సామగ్రి తయారీ",
  "క్రమం తప్పకుండా పరీక్షలు మరియు మూల్యాంకనాలు నిర్వహించడం",
  "విద్యార్థుల వ్యక్తిగత అవసరాలకు అనుగుణంగా బోధన అందించడం",
  "బోర్డు పరీక్షలకు ప్రత్యేక శిక్షణ ఇవ్వడం",
  "తెలుగు విభాగ నిర్వహణ మరియు ఉపాధ్యాయుల సమన్వయం"
];

export const SUBJECT_EXPERTISE: SubjectExpertiseItem[] = [
  {
    subject: "తెలుగు (Telugu)",
    keyPoints: [
      "తెలుగు వ్యాకరణంపై సంపూర్ణ పట్టు (Deep Mastery of Telugu Grammar)",
      "భాషా బోధనలో విశేష అనుభవం (Ample Expertise in Language Pedagogy)",
      "సాహిత్య విశ్లేషణ మరియు రచనా నైపుణ్యాలు (Literary Analysis and Creative Writing)"
    ]
  },
  {
    subject: "సంస్కృతం (Sanskrit)",
    keyPoints: [
      "సంస్కృత వ్యాకరణంపై సమగ్ర అవగాహన (Thorough Knowledge of Sanskrit Vyakarana)",
      "సంధులు, సమాసములు మరియు శ్లోక తాత్పర్య సులువైన వివరణలు",
      "అనువాదం మరియు దేవనాగరి లిపి పఠనా సన్నద్ధత శిక్షణ"
    ]
  }
];

export const STUDENT_ACHIEVEMENTS: string[] = [
  "90% కంటే ఎక్కువ మంది విద్యార్థులు డిస్టింక్షన్ సాధించారు",
  "బోర్డు పరీక్షలకు వందలాది మంది విద్యార్థులకు విజయవంతమైన శిక్షణ",
  "ప్రత్యేక సందేహ నివృత్తి తరగతులు నిర్వహించడం",
  "వెనుకబడిన విద్యార్థుల విద్యా ప్రగతిని మెరుగుపరచడం",
  "100 మందికి పైగా విద్యార్థులకు మార్గదర్శకత్వం అందించడం",
  "తల్లిదండ్రుల నుండి అత్యుత్తమ అభిప్రాయాలను పొందడం"
];

export const EXTRACURRICULAR_ACTIVITIES: string[] = [
  "విద్యా కార్యక్రమాల నిర్వహణ",
  "క్విజ్ పోటీల నిర్వహణ",
  "విజ్ఞాన ప్రదర్శనలలో పాల్గొనడం మరియు నిర్వహించడం",
  "విద్యార్థులకు మార్గదర్శకత్వం అందించడం"
];

export const LANGUAGES: string[] = [
  "తెలుగు (Telugu) - మాతృభాష (Native Proficiency)",
  "ఆంగ్లం (English) - వృత్తిపరమైన వివరణలు (Professional Working)"
];

export const PERSONAL_DETAILS: PersonalDetail[] = [
  { label: "పుట్టిన తేదీ", value: "01-06-1972" },
  { label: "లింగం", value: "పురుషుడు (Male)" },
  { label: "జాతీయత", value: "భారతీయుడు (Indian)" },
  { label: "వైవాహిక స్థితి", value: "వివాహితుడు (Married)" },
];

export const DECLARATION = 
  "నేను పై పేర్కొన్న వివరాలు నా జ్ఞానం మరియు నమ్మకం మేరకు సత్యమని, సరైనవని ఇక్కడ ప్రకటిస్తున్నాను.";
