/**
 * The clinical and operational team.
 *
 * Names and qualifications are transcribed exactly as printed on the centre's
 * own material. Role titles for everyone other than Dr. Keyur Mandaliya (whose
 * full CV was supplied) are inferred from those qualifications and are marked
 * below — TODO(prismaa): confirm each person's exact designation, and add
 * portraits at /public/images/team/<slug>.jpg, then set `photo` on the record.
 * Members without a photo render a brand monogram, so the grid stays even.
 */

export type TeamGroup = "clinical" | "management";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  /** Exactly as printed — e.g. "MD, DNB, DMRE". */
  qualifications: string;
  /** Sub-specialty focus, shown as pills. */
  focusAreas: string[];
  group: TeamGroup;
  /** Extra credential line, e.g. training institution. */
  note?: string;
  experienceYears?: number;
  /** Path under /public/images/team — undefined shows the monogram fallback. */
  photo?: string;
  bio?: string[];
  /** Only the lead doctor is featured on the homepage. */
  isLead?: boolean;
  affiliations?: string[];
  education?: { qualification: string; institution: string }[];
}

export const team: TeamMember[] = [
  /* ---- Radiology & nuclear medicine ----------------------------------- */
  {
    slug: "dr-hemant-patel",
    name: "Dr. Hemant Patel",
    role: "Consultant Radiologist",
    qualifications: "MD, DNB, DMRE",
    focusAreas: ["Diagnostic radiology", "Cross-sectional imaging"],
    group: "clinical",
  },
  {
    slug: "dr-keyur-mandaliya",
    name: "Dr. Keyur Mandaliya",
    role: "Founder, Managing Director & Lead Consultant Onco-Radiologist",
    qualifications: "MBBS, DNB (Radio-Diagnosis), Fellowship in Onco-Radiology",
    focusAreas: [
      "Digital PET/CT",
      "Molecular imaging (PSMA, FAPI, DOTA)",
      "Body & neuro-MSK MRI",
      "Image-guided biopsy",
      "Tumour board consultation",
    ],
    group: "clinical",
    experienceYears: 5,
    isLead: true,
    bio: [
      "Dr. Keyur Mandaliya is an onco-radiology and molecular imaging specialist who founded Prismaa to bring current-generation digital PET/CT to Surat, so patients no longer need to travel to Ahmedabad or Mumbai for it.",
      "He trained at Gujarat Imaging Centre (GIC PRIME), Ahmedabad, reporting on both conventional and digital PET/CT systems — experience that directly shaped Prismaa's decision to run a digital scanner. His practice covers cancer staging and response assessment (RECIST, PERCIST and related criteria), advanced tracer studies including PSMA, FAPI and DOTA-TATE, and image-guided biopsies, and he leads Prismaa's weekly tumour board.",
    ],
    education: [
      {
        qualification: "MBBS",
        institution: "SMIMER, Surat",
      },
      {
        qualification: "DNB, Radio-Diagnosis",
        institution: "Gujarat Imaging Centre",
      },
      {
        qualification: "Fellowship in Onco-Radiology",
        institution: "Gujarat Imaging Centre (GIC PRIME), Ahmedabad",
      },
    ],
    affiliations: [
      "Indian Radiological & Imaging Association (IRIA)",
      "Indian Medical Association (IMA) – Surat Branch",
      "Indian Society of Head and Neck Radiology (ISHNR)",
    ],
    photo: "/images/team/dr-keyur-mandaliya.jpg",
  },
  {
    slug: "dr-gaurav-rawal",
    name: "Dr. Gaurav Rawal",
    role: "Consultant Onco-Radiologist",
    qualifications: "DNB (Radio-Diagnosis)",
    note: "Master in Oncologic Imaging, Italy",
    focusAreas: ["Oncologic imaging", "PET/CT reporting"],
    group: "clinical",
  },
  {
    slug: "dr-k-k-agrawal",
    name: "Dr. K. K. Agrawal",
    role: "Consultant, Nuclear Medicine",
    qualifications: "MD (Nuclear Medicine)",
    note: "AIIMS",
    focusAreas: ["Nuclear medicine", "Radiopharmaceuticals", "Theranostics"],
    group: "clinical",
  },
  {
    slug: "dr-manas-mayank",
    name: "Dr. Manas Mayank",
    role: "Consultant, Nuclear Medicine",
    qualifications: "MD, DRM",
    focusAreas: ["Nuclear medicine", "PET/CT reporting"],
    group: "clinical",
  },
  {
    slug: "dr-drushi-patel",
    name: "Dr. Drushi Patel",
    role: "Consultant Radiologist",
    qualifications: "MD (Radio-Diagnosis)",
    focusAreas: ["Diagnostic radiology", "Cross-sectional imaging"],
    group: "clinical",
  },
  {
    slug: "dr-shikha-khandelwal",
    name: "Dr. Shikha Khandelwal",
    role: "Consultant Radiologist",
    qualifications: "DMRE, DNB",
    focusAreas: ["Diagnostic radiology", "CT & MRI"],
    group: "clinical",
  },
  {
    slug: "dr-dhara-patel",
    name: "Dr. Dhara Patel",
    role: "Consultant Radiologist",
    qualifications: "MD (Radio-Diagnosis)",
    focusAreas: ["Diagnostic radiology", "Cross-sectional imaging"],
    group: "clinical",
  },
  {
    slug: "dr-shibiraj-patel",
    name: "Dr. Shibiraj Patel",
    role: "Nuclear Medicine Specialist",
    qualifications: "Nuclear Medicine Specialist",
    focusAreas: ["Nuclear medicine", "Radiation safety"],
    group: "clinical",
  },

  /* ---- Management & operations ---------------------------------------- */
  {
    slug: "dr-kalpesh-kaswala",
    name: "Dr. Kalpesh Kaswala",
    role: "Chief Operating Officer",
    qualifications: "Chief Operating Officer",
    focusAreas: ["Operations", "Patient services"],
    group: "management",
  },
  {
    slug: "dr-bhargavi-raval",
    name: "Dr. Bhargavi Raval",
    role: "Hospital Management",
    qualifications: "DCH, MBA (Hospital Management)",
    focusAreas: ["Hospital administration", "Quality"],
    group: "management",
  },
  {
    slug: "dr-anokhi-patel",
    name: "Dr. Anokhi Patel",
    role: "Management",
    qualifications: "Master in Management",
    focusAreas: ["Administration", "Coordination"],
    group: "management",
  },
];

export const leadDoctor = team.find((member) => member.isLead)!;
export const teamSize = team.length;

export const clinicalTeam = team.filter(
  (member) => member.group === "clinical" && !member.isLead,
);
export const managementTeam = team.filter(
  (member) => member.group === "management",
);

export const getTeamMemberBySlug = (slug: string) =>
  team.find((member) => member.slug === slug);
