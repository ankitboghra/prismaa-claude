import type { IconName } from "@/components/ui/icons";

/**
 * Every scan the centre offers.
 *
 * One record drives three surfaces, so the copy has to work at three lengths:
 *   1. the homepage card            → `name` + `summary`
 *   2. the "quick look" modal       → everything except `body`
 *   3. the /services/[slug] page    → everything, plus `body` and FAQs
 *
 * Written for a patient or a relative with no medical background. Where a
 * clinical term is unavoidable it is defined in the same sentence.
 */

export type ServiceCategoryId =
  | "oncology"
  | "molecular"
  | "neurology"
  | "cardiology"
  | "inflammation"
  | "procedures";

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  /** Shown above the filtered grid — sets patient expectations. */
  blurb: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  /** The tracer / radiopharmaceutical, if this is a PET study. */
  tracer?: string;
  category: ServiceCategoryId;
  icon: IconName;
  /** One line, ~90 characters. Appears on the card. */
  summary: string;
  /** Shown as a pill on the card. */
  duration: string;
  /** True for the gallium-68 / advanced tracer family. */
  isMolecular?: boolean;
  /** Surfaces this on the homepage grid above the fold. */
  featured?: boolean;
  /** Plain-language "what question does this scan answer?" */
  answers: string[];
  /** Who is usually referred for it. */
  whoItsFor: string[];
  /** 2–4 sentences a patient can actually follow. */
  explainer: string;
  /** What Prismaa's digital detector adds specifically for this study. */
  prismaaEdge: string;
  preparation: string[];
  faqs?: ServiceFaq[];
  /** Long-form paragraphs for the dedicated service page. */
  body?: string[];
  /** Terms real patients type into Google for this study. */
  keywords: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "oncology",
    label: "Cancer (Oncology)",
    blurb:
      "Finding cancer, seeing exactly how far it has spread, and checking whether treatment is working.",
  },
  {
    id: "molecular",
    label: "Advanced Molecular",
    blurb:
      "Gallium-68 and next-generation tracers that lock on to one specific target on the tumour cell. Not available at most centres in South Gujarat.",
  },
  {
    id: "neurology",
    label: "Brain & Nerves",
    blurb:
      "PET is not only for cancer. It shows how brain cells are actually functioning — often years before an MRI looks abnormal.",
  },
  {
    id: "cardiology",
    label: "Heart",
    blurb:
      "Telling living-but-sleeping heart muscle apart from scar tissue, so surgery is done only when it will help.",
  },
  {
    id: "inflammation",
    label: "Infection & Inflammation",
    blurb:
      "For long-standing fever or inflammation with no cause found, PET/CT can point directly to the hidden source.",
  },
  {
    id: "procedures",
    label: "CT & Procedures",
    blurb:
      "High-resolution diagnostic CT and image-guided sampling on the same 160-slice scanner.",
  },
];

export const services: Service[] = [
  /* ------------------------------------------------------------------ */
  /* Oncology                                                            */
  /* ------------------------------------------------------------------ */
  {
    slug: "whole-body-fdg-pet-ct",
    name: "Whole-Body PET/CT (FDG)",
    tracer: "18F-FDG",
    category: "oncology",
    icon: "bodyScan",
    featured: true,
    summary:
      "The complete head-to-thigh cancer survey — the single most useful scan in oncology.",
    duration: "≈ 15 min on the scanner",
    answers: [
      "Is this lump or shadow actually cancer, or something harmless?",
      "Has the cancer spread anywhere else in the body?",
      "What stage is it, and does that change the treatment plan?",
      "Is the chemotherapy or immunotherapy working?",
    ],
    whoItsFor: [
      "Newly diagnosed cancer, before treatment is planned (staging)",
      "Mid-treatment and end-of-treatment response checks",
      "Rising tumour markers with normal CT or ultrasound",
      "Cancer found in a lymph node when nobody knows where it started",
    ],
    explainer:
      "Cancer cells are greedy — they burn far more sugar than normal cells. We attach a tiny, safe radioactive tag to a sugar molecule and inject it into a vein. Over the next hour that tagged sugar collects wherever cells are working hardest. The scanner then photographs where the tag went and overlays it on a detailed CT picture, so your doctor sees both what the disease is doing and exactly where it sits.",
    prismaaEdge:
      "Our digital detectors capture far more of the signal, so small deposits — the 4–6 mm nodes that conventional scanners can smudge into the background — are picked up while you lie on the table for about a quarter of the usual time.",
    preparation: [
      "Fast for 6 hours. Plain water is allowed and encouraged.",
      "No strenuous exercise, gym or long walks for 24 hours before the scan — working muscles eat sugar and confuse the picture.",
      "Diabetics: tell us your medicines when booking. We will schedule your slot and advise on insulin timing.",
      "Carry all previous scans, reports, biopsy slides and discharge summaries.",
      "Plan for about 2.5 hours in the centre. The scan itself is a small part of that.",
    ],
    faqs: [
      {
        question: "Is the injection dangerous? Will I be radioactive?",
        answer:
          "The dose is small and clears from your body within a few hours, mostly through urine. As a precaution we ask you to drink plenty of water and to keep a little distance from pregnant women and small children for the rest of the day. Because our scanner is digital and far more sensitive, we can often use a lower dose than a conventional PET/CT needs.",
      },
      {
        question: "Does a PET/CT hurt?",
        answer:
          "No. There is one small needle prick for the injection. After that you rest quietly, and then lie still on a padded table. The scanner is a short, open ring — not a long closed tunnel like MRI.",
      },
      {
        question: "Why do I have to wait an hour after the injection?",
        answer:
          "That waiting time is when the tracer travels through your bloodstream and gathers in active cells. Scanning too early would give a faint, unreliable picture. You rest in a quiet room during this period.",
      },
    ],
    body: [
      "A whole-body FDG PET/CT is usually the first scan an oncologist orders once cancer is confirmed, because it answers the two questions that decide everything else: how far has it gone, and is it behaving aggressively? A CT scan alone shows shape and size. PET adds metabolism — how hard the cells are working — which is often abnormal long before shape changes.",
      "In practice this changes treatment more often than patients expect. Published series repeatedly find that PET/CT alters the intended management in roughly one in four to one in three cancer patients: an operation avoided because disease was found elsewhere, or an operation made possible because a suspicious spot turned out to be benign.",
      "For response assessment, we report using internationally standardised criteria — RECIST 1.1, PERCIST, and Deauville scoring for lymphoma — so your scan can be compared like-for-like against the previous one, even if that one was done elsewhere.",
    ],
    keywords: [
      "PET CT scan Surat",
      "whole body PET scan cost Surat",
      "FDG PET CT",
      "cancer staging scan Surat",
    ],
  },
  {
    slug: "psma-pet-ct",
    name: "PSMA PET/CT",
    tracer: "68Ga-PSMA / 18F-PSMA",
    category: "molecular",
    icon: "target",
    featured: true,
    isMolecular: true,
    summary:
      "The gold standard for prostate cancer — finds disease that bone scans and CT miss.",
    duration: "≈ 15 min on the scanner",
    answers: [
      "Has my prostate cancer spread to bones or lymph nodes?",
      "My PSA is rising after surgery or radiation — where is the disease?",
      "Am I suitable for targeted radioligand therapy?",
    ],
    whoItsFor: [
      "Newly diagnosed intermediate- or high-risk prostate cancer",
      "Rising PSA after prostatectomy or radiotherapy (biochemical recurrence)",
      "Before deciding between surgery, radiation and hormone therapy",
      "Screening suitability for Lu-177 PSMA therapy",
    ],
    explainer:
      "Prostate cancer cells carry a distinctive protein on their surface called PSMA. We use a molecule that fits that protein like a key in a lock, tagged with gallium-68. Wherever prostate cancer cells are hiding — even a single small lymph node — the tracer sticks to them and lights up on the scan.",
    prismaaEdge:
      "PSMA lesions can be tiny. Digital detectors with 300-picosecond time-of-flight place each signal far more precisely, which is exactly what you need when the finding that changes your treatment is a 5 mm node next to a blood vessel.",
    preparation: [
      "No fasting needed — eat normally.",
      "Drink water and empty your bladder just before scanning; the tracer is excreted in urine and a full bladder can hide nearby disease.",
      "Carry your PSA trend, biopsy or Gleason report, and any earlier scans.",
      "Tell us if you are on hormone therapy (ADT) and when it was started.",
    ],
    faqs: [
      {
        question: "How is this better than a bone scan?",
        answer:
          "A bone scan only shows the bone's reaction to a tumour, and only in bone. PSMA PET/CT sees the cancer cells themselves, in bone and in soft tissue and lymph nodes, and it does so at much lower PSA levels. It routinely finds disease at PSA values where conventional imaging is still completely normal.",
      },
      {
        question: "My PSA is only 0.3. Is a scan worth doing?",
        answer:
          "Often yes. PSMA PET/CT has a meaningful detection rate even below PSA 0.5 ng/mL, which is precisely the window where finding a single recurrence site can mean curative targeted radiotherapy instead of lifelong hormone therapy. Your urologist or oncologist will weigh this with you.",
      },
    ],
    body: [
      "PSMA — prostate-specific membrane antigen — is expressed on the surface of the great majority of prostate cancer cells, and expression tends to rise as the disease becomes more aggressive. That makes it an almost ideal imaging target, and PSMA PET/CT has now replaced the CT-plus-bone-scan combination in international guidelines for staging higher-risk disease.",
      "The other half of the story is therapy. The same PSMA molecule can carry a therapeutic isotope instead of an imaging one. A diagnostic PSMA PET/CT is therefore also the gatekeeper scan that shows whether a patient's disease would take up Lu-177 PSMA therapy — a treat-what-you-see approach known as theranostics.",
    ],
    keywords: [
      "PSMA PET CT Surat",
      "Gallium 68 PSMA scan Gujarat",
      "prostate cancer PET scan",
      "rising PSA scan",
    ],
  },
  {
    slug: "dotanoc-pet-ct",
    name: "DOTA-TATE / DOTA-NOC PET/CT",
    tracer: "68Ga-DOTA-TATE / TOC / NOC",
    category: "molecular",
    icon: "molecule",
    featured: true,
    isMolecular: true,
    summary:
      "For neuroendocrine tumours — pinpoints slow-growing tumours other scans overlook.",
    duration: "≈ 15 min on the scanner",
    answers: [
      "Where is the neuroendocrine tumour, and has it spread?",
      "My symptoms suggest a hormone-producing tumour but nothing shows on CT — where is it?",
      "Would I respond to PRRT (Lu-177 DOTA-TATE) therapy?",
    ],
    whoItsFor: [
      "Confirmed or suspected neuroendocrine tumour (NET) of gut, pancreas or lung",
      "Carcinoid syndrome — flushing, chronic diarrhoea, wheezing",
      "Pheochromocytoma and paraganglioma",
      "Meningioma planning, and unknown-primary NET",
    ],
    explainer:
      "Neuroendocrine tumours are often small and grow slowly, so a routine CT can miss them completely. But their cells are studded with receptors for a hormone called somatostatin. DOTA-TATE is a lookalike of that hormone carrying a gallium-68 tag, so it fastens on to these tumours and makes them glow — sometimes revealing a primary tumour that has been hunted for years.",
    prismaaEdge:
      "NET deposits are frequently sub-centimetre and sit in the mesentery among bowel loops. Higher spatial resolution and the sharper contrast of digital PET are what separate a confidently reported lesion from an equivocal one.",
    preparation: [
      "Fasting is not required.",
      "If you are on long-acting octreotide/lanreotide injections, tell us — the scan is usually timed just before your next dose.",
      "Short-acting octreotide is normally stopped 24 hours before.",
      "Carry your chromogranin-A levels and previous scans.",
    ],
    body: [
      "Somatostatin-receptor PET/CT has become the reference standard for neuroendocrine tumour imaging, with sensitivity substantially higher than the older Octreotide (SPECT) scan and than conventional contrast CT. It is also the scan that decides eligibility for peptide receptor radionuclide therapy.",
      "In selected aggressive or dedifferentiated NETs we may recommend pairing it with an FDG PET/CT. Tumours that light up on FDG but not on DOTA behave very differently from the reverse — this dual read genuinely alters prognosis and treatment.",
    ],
    keywords: [
      "DOTANOC PET CT Surat",
      "Ga-68 DOTATATE scan",
      "neuroendocrine tumour scan Gujarat",
    ],
  },
  {
    slug: "fapi-pet-ct",
    name: "FAPI PET/CT",
    tracer: "68Ga-FAPI",
    category: "molecular",
    icon: "spark",
    isMolecular: true,
    summary:
      "For breast cancer and solid tumours FDG struggles with — and it needs no fasting.",
    answers: [
      "Is there tumour where FDG PET was unclear or negative?",
      "Is the abdominal or peritoneal disease more extensive than CT suggests?",
      "Is this a scar from old treatment, or live tumour?",
    ],
    duration: "≈ 15 min on the scanner",
    whoItsFor: [
      "Breast cancer, including lobular carcinoma, which FDG under-reads",
      "Pancreatic, gastric, liver, bile duct and peritoneal cancers",
      "Head-and-neck and sarcoma cases where FDG is equivocal",
      "Brain tumours, where normal brain's own sugar uptake masks FDG",
      "Diabetics and anyone in whom sugar-based imaging is unreliable",
    ],
    explainer:
      "Rather than targeting the cancer cell itself, FAPI targets the supportive scaffolding that tumours build around themselves. That scaffolding is abundant in exactly the cancers FDG finds hardest — pancreas, stomach, liver, and thin sheets of disease lining the abdomen. Background uptake is very low, so tumours stand out with striking clarity.",
    prismaaEdge:
      "FAPI is only offered where the physics and the reporting expertise are both in place. We run it on digital PET and report it against the standardised criteria used in the published FAPI literature.",
    preparation: [
      "No fasting. No blood sugar restrictions — a real advantage for diabetic patients.",
      "Drink water normally.",
      "Carry all prior imaging, particularly any recent FDG PET/CT.",
    ],
    body: [
      "FAPI stands for fibroblast activation protein inhibitor. Fibroblast activation protein is switched on in cancer-associated fibroblasts, which can make up the majority of a solid tumour's bulk in cancers such as pancreatic adenocarcinoma.",
      "Because normal organs — including brain, liver and healthy muscle — express very little of it, tumour-to-background contrast is often superior to FDG, and peritoneal deposits that CT calls indeterminate become obvious. Availability in India is still limited, which is part of why patients travel for it.",
    ],
    keywords: ["FAPI PET CT India", "Ga-68 FAPI scan Surat", "pancreatic cancer PET scan"],
  },
  {
    slug: "f-dopa-pet-ct",
    name: "F-DOPA PET/CT",
    tracer: "18F-DOPA",
    category: "molecular",
    icon: "brain",
    isMolecular: true,
    summary:
      "Maps the dopamine pathway — for brain tumours, movement disorders and neuroendocrine tumours.",
    duration: "≈ 20 min on the scanner",
    answers: [
      "Is this brain lesion live tumour or treatment-related change?",
      "Is the tremor Parkinson's disease, or something that mimics it?",
      "Where is the neuroendocrine tumour that other scans cannot find?",
    ],
    whoItsFor: [
      "Glioma grading, and telling recurrence from radiation necrosis",
      "Parkinsonian syndromes and other movement disorders",
      "Neuroendocrine tumours, phaeochromocytoma and paraganglioma",
      "Congenital hyperinsulinism in children",
      "Medullary thyroid carcinoma with rising calcitonin",
    ],
    explainer:
      "F-DOPA is a tagged version of the amino acid your body uses to make dopamine. Tumour cells and certain nerve cells take it up far more avidly than the tissue around them. In the brain that matters enormously: normal brain burns so much sugar that ordinary FDG scans are nearly useless there, whereas F-DOPA shows tumour against an almost blank background.",
    prismaaEdge:
      "F-DOPA is available at very few centres in India. Combined with digital detector resolution, it makes the difference between grading a glioma confidently and reporting an equivocal study.",
    preparation: [
      "Fast for 4–6 hours. Plain water is allowed.",
      "Avoid foods rich in protein on the morning of the scan.",
      "Tell us about levodopa, carbidopa and any Parkinson's medication — timing may need adjusting.",
      "Tracer is produced to order, so booking needs a few days' notice.",
    ],
    body: [
      "In neuro-oncology, F-DOPA PET/CT has become one of the most useful problem-solving studies available. After radiotherapy, an enhancing lesion on MRI can be recurrent tumour or radiation necrosis — two conditions with opposite treatments and identical appearances. F-DOPA uptake distinguishes them, and it also guides biopsy toward the most malignant part of a heterogeneous glioma.",
      "Outside the brain, F-DOPA images the amine precursor uptake pathway shared by neuroendocrine tissue, which makes it complementary to DOTA-TATE — some tumours are seen far better on one than the other.",
    ],
    keywords: [
      "F-DOPA PET CT India",
      "FDOPA scan Surat",
      "brain tumour PET scan",
      "Parkinson's PET scan",
    ],
  },
  {
    slug: "specialised-tracers",
    name: "Rare & Research Tracers",
    tracer: "68Ga-Exendin-4, 68Ga-Trivehexin, and others",
    category: "molecular",
    icon: "flask",
    isMolecular: true,
    summary:
      "Exendin-4 for insulinoma, Trivehexin and other targeted studies, arranged on request.",
    duration: "Protocol-dependent",
    answers: [
      "I have unexplained low blood sugar attacks — where is the insulinoma?",
      "Is there a targeted tracer better suited to my specific tumour type?",
    ],
    whoItsFor: [
      "Suspected insulinoma / nesidioblastosis with recurrent hypoglycaemia",
      "Selected αvβ6-integrin-expressing tumours",
      "Complex cases discussed in a tumour board where standard tracers fell short",
    ],
    explainer:
      "Some tumours have their own unique signature. Insulin-producing tumours of the pancreas, for example, can be as small as a grain of rice and invisible on CT — but they carry GLP-1 receptors, which the Exendin-4 tracer is built to find. These studies are arranged case by case after discussion with your treating doctor.",
    prismaaEdge:
      "Dr. Keyur Mandaliya has hands-on reporting experience with Exendin-4 and Trivehexin studies, which very few centres in the region can say.",
    preparation: [
      "Protocols differ by tracer — our team will brief you in detail when the scan is scheduled.",
      "These tracers are produced to order, so booking usually needs a few days' notice.",
    ],
    keywords: ["Exendin-4 PET scan India", "insulinoma localisation scan", "Trivehexin PET"],
  },
  {
    slug: "lymphoma-response-pet-ct",
    name: "Lymphoma Staging & Response PET/CT",
    tracer: "18F-FDG",
    category: "oncology",
    icon: "chart",
    summary:
      "Deauville-scored interim and end-of-treatment scans that guide chemotherapy decisions.",
    duration: "≈ 15 min on the scanner",
    answers: [
      "What stage is the lymphoma?",
      "Is the chemotherapy working after 2 cycles, or should the regimen change?",
      "Is there any active disease left at the end of treatment?",
    ],
    whoItsFor: [
      "Hodgkin and non-Hodgkin lymphoma at diagnosis",
      "Interim response assessment (typically after 2 cycles)",
      "End-of-treatment assessment and surveillance",
    ],
    explainer:
      "Lymphoma is one of the cancers PET changed the most. Chemotherapy can shrink a lymph node while live disease persists inside it, and it can leave a lump of harmless scar tissue behind after a cure. PET tells the two apart by showing whether anything in that lump is still metabolically alive.",
    prismaaEdge:
      "We report every lymphoma study with a Deauville 5-point score against the mediastinal blood pool and liver reference — the exact language haematologists use to decide whether to escalate or de-escalate treatment.",
    preparation: [
      "Fast for 6 hours; water is fine.",
      "Avoid exertion for 24 hours before the scan.",
      "Ideally scan at least 10 days after your last chemotherapy cycle, and 2 weeks after G-CSF injections, unless your doctor says otherwise.",
    ],
    keywords: ["lymphoma PET CT Surat", "Deauville score PET", "interim PET lymphoma"],
  },
  {
    slug: "radiotherapy-planning-pet-ct",
    name: "Radiotherapy Planning PET/CT",
    category: "oncology",
    icon: "crosshair",
    summary:
      "Flat-couch, laser-aligned scans that let the radiation oncologist target only what matters.",
    duration: "≈ 25 min including positioning",
    answers: [
      "Exactly which tissue should the radiation beam treat?",
      "Which nearby healthy organs must be spared?",
    ],
    whoItsFor: [
      "Patients planned for radical radiotherapy, IMRT, SBRT or re-irradiation",
      "Head-and-neck, lung, oesophagus, cervix and prostate protocols",
    ],
    explainer:
      "For radiotherapy, a millimetre matters. This scan is done in the exact position you will be treated in — flat table top, same immobilisation devices, laser alignment marks — so the metabolic map from PET can be fused directly into the radiation planning software. The result is a beam shaped around live tumour and steered away from healthy lung, spinal cord or salivary glands.",
    prismaaEdge:
      "Sharper images mean tighter, more confident target volumes. Less guesswork in the margin is less dose to healthy tissue and fewer side effects.",
    preparation: [
      "Same fasting rules as a standard FDG scan.",
      "Wear the immobilisation devices your radiotherapy centre has provided, and bring your planning instructions.",
    ],
    keywords: ["radiotherapy planning PET CT Surat", "SBRT planning scan", "IMRT PET fusion"],
  },

  /* ------------------------------------------------------------------ */
  /* Neurology                                                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "brain-pet-ct-dementia",
    name: "Brain PET/CT — Memory & Dementia",
    tracer: "18F-FDG",
    category: "neurology",
    icon: "brain",
    featured: true,
    summary:
      "Distinguishes Alzheimer's from other dementias by mapping how brain cells are working.",
    duration: "≈ 15 min on the scanner",
    answers: [
      "Is this normal ageing, depression, or a real degenerative disease?",
      "Which type of dementia is it — Alzheimer's, frontotemporal, Lewy body?",
      "Is there a treatable cause behind the memory loss?",
    ],
    whoItsFor: [
      "Progressive memory loss or personality change, especially before age 65",
      "Cases where MRI is normal or non-specific",
      "Differentiating dementia subtypes so the family knows what to expect",
    ],
    explainer:
      "MRI shows the brain's structure — its shape. Brain PET shows its function — how hard each region is working. In degenerative disease, function falls first, sometimes years before any shrinkage is visible. Each dementia also has a characteristic pattern: Alzheimer's typically dims the parietal and temporal regions, frontotemporal dementia the front. That pattern is what guides the diagnosis.",
    prismaaEdge:
      "Brain reporting depends on fine cortical detail. Digital detector resolution of about 2.9 mm keeps the boundary between grey matter and white matter crisp, which is exactly where these patterns are read.",
    preparation: [
      "Fast for 6 hours; water is allowed.",
      "Take your regular medicines unless told otherwise.",
      "Avoid sedatives, alcohol and caffeine on the day — they alter brain metabolism.",
      "You will rest in a quiet, dimly lit room with eyes open after the injection. Please do not read or use your phone.",
      "A family member who knows the history well should accompany the patient.",
    ],
    keywords: ["brain PET scan Surat", "dementia PET CT", "Alzheimer's diagnosis scan India"],
  },
  {
    slug: "epilepsy-pet-ct",
    name: "Epilepsy Focus Localisation PET/CT",
    tracer: "18F-FDG",
    category: "neurology",
    icon: "pulse",
    summary:
      "Finds the seizure-generating zone in drug-resistant epilepsy, ahead of surgery.",
    duration: "≈ 15 min on the scanner",
    answers: [
      "Where exactly in the brain are the seizures starting?",
      "Could surgery cure this epilepsy?",
    ],
    whoItsFor: [
      "Seizures not controlled despite two or more appropriate drugs",
      "Pre-surgical work-up in an epilepsy programme",
      "MRI-negative focal epilepsy",
    ],
    explainer:
      "Between seizures, the misbehaving patch of brain uses less sugar than the tissue around it, and shows up as a cool spot on PET. That is often the only visible sign of a focus that MRI cannot see, and it can be the difference between lifelong medication and a curative operation.",
    prismaaEdge:
      "Subtle asymmetries are easily lost in a noisy image. Higher counts and better resolution make the comparison between the two sides genuinely reliable.",
    preparation: [
      "Fast for 6 hours.",
      "Continue your anti-epileptic medication exactly as prescribed — do not stop it.",
      "Tell us the time of your most recent seizure; a very recent one changes how the scan is interpreted.",
    ],
    keywords: ["epilepsy PET scan India", "seizure focus localisation", "refractory epilepsy imaging"],
  },

  /* ------------------------------------------------------------------ */
  /* Cardiology                                                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "cardiac-viability-pet-ct",
    name: "Cardiac Viability PET/CT",
    tracer: "18F-FDG",
    category: "cardiology",
    icon: "heart",
    featured: true,
    summary:
      "Answers the question before bypass surgery: is this heart muscle still alive?",
    duration: "≈ 30 min including preparation",
    answers: [
      "After a heart attack, is this weakened muscle dead scar or living-but-starved tissue?",
      "Will bypass surgery or angioplasty actually improve my heart's pumping?",
    ],
    whoItsFor: [
      "Low ejection fraction after myocardial infarction",
      "Patients being considered for CABG or angioplasty in weak hearts",
      "Deciding between revascularisation and medical management",
    ],
    explainer:
      "When an artery narrows, heart muscle can go into a kind of hibernation — alive, but too starved of blood to contract. On an echo it looks the same as dead scar tissue, yet the two demand opposite decisions. Hibernating muscle still consumes sugar, so it lights up on PET; scar does not. Muscle that lights up will usually recover its strength once blood flow is restored — which makes surgery worth its risk.",
    prismaaEdge:
      "Cardiac imaging is unforgiving of motion. A short digital acquisition means fewer breathing artefacts and a cleaner, more decisive study.",
    preparation: [
      "A specific glucose-and-insulin preparation is used for this study — our technologist will call you the day before with exact instructions.",
      "Bring your echo report, ejection fraction, angiography films and ECGs.",
      "Diabetic patients need individually adjusted preparation; please tell us when booking.",
    ],
    keywords: ["cardiac PET Surat", "myocardial viability scan India", "hibernating myocardium PET"],
  },

  /* ------------------------------------------------------------------ */
  /* Infection & inflammation                                            */
  /* ------------------------------------------------------------------ */
  {
    slug: "puo-infection-pet-ct",
    name: "PET/CT for Fever of Unknown Origin",
    tracer: "18F-FDG",
    category: "inflammation",
    icon: "thermometer",
    summary:
      "Weeks of fever with every test normal? PET/CT searches the whole body in one pass.",
    duration: "≈ 15 min on the scanner",
    answers: [
      "Where is the hidden infection or inflammation causing this fever?",
      "Is there an occult cancer behind it?",
      "Which site should be biopsied?",
    ],
    whoItsFor: [
      "Fever above 38.3 °C for more than three weeks with no diagnosis",
      "Persistently raised ESR/CRP with no identified cause",
      "Suspected deep-seated abscess, spinal or prosthetic joint infection",
      "Suspected tuberculosis at an unclear site",
    ],
    explainer:
      "White blood cells rushing to fight an infection burn sugar just as fast as tumour cells do. That makes FDG PET/CT an unusually effective search tool when a fever has no obvious source: instead of testing one organ at a time, it screens the whole body in a single scan and shows the treating physician exactly where to look — and where to take a biopsy from.",
    prismaaEdge:
      "In these patients the finding is often a single small node or one segment of a blood vessel wall. Resolution and contrast decide whether it is seen or not.",
    preparation: [
      "Fast for 6 hours; water is allowed.",
      "Tell us about recent antibiotics, steroids and any surgery in the last 6 weeks — all of these change the picture.",
      "Bring your fever chart, blood culture results and previous imaging.",
    ],
    keywords: ["PUO PET CT", "fever of unknown origin scan Surat", "infection PET scan India"],
  },
  {
    slug: "vasculitis-sarcoidosis-pet-ct",
    name: "Vasculitis & Sarcoidosis PET/CT",
    tracer: "18F-FDG",
    category: "inflammation",
    icon: "shield",
    summary:
      "Maps inflammation in blood vessels and organs, and tracks whether steroids are working.",
    duration: "≈ 15 min on the scanner",
    answers: [
      "Are the large blood vessels inflamed (Takayasu, giant cell arteritis)?",
      "How many organs does the sarcoidosis involve?",
      "Is the inflammation settling on treatment?",
    ],
    whoItsFor: [
      "Suspected large-vessel vasculitis",
      "Sarcoidosis staging, including cardiac sarcoidosis",
      "IgG4-related disease and other systemic inflammatory conditions",
    ],
    explainer:
      "Inflamed tissue is metabolically busy tissue. PET/CT shows which arteries or organs are actively inflamed right now, rather than the permanent damage inflammation has already left behind. That distinction matters when the decision is whether to keep a patient on steroids or safely taper them off.",
    prismaaEdge:
      "Vessel-wall uptake is subtle and graded against liver background. Consistent, quantitative digital images make follow-up comparisons meaningful.",
    preparation: [
      "Fasting for 6 hours; for suspected cardiac sarcoidosis a special high-fat, no-carbohydrate diet is required for 24 hours beforehand — we will provide the diet sheet.",
      "Tell us your current steroid dose; ideally the scan is done before steroids are started or increased.",
    ],
    keywords: ["vasculitis PET CT India", "cardiac sarcoidosis PET", "Takayasu arteritis scan"],
  },

  /* ------------------------------------------------------------------ */
  /* CT & procedures                                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "diagnostic-ct",
    name: "160-Slice CT & Ultra-Low-Dose CT",
    category: "procedures",
    icon: "layers",
    summary:
      "Contrast, HRCT and ultra-low-dose protocols for chest, abdomen, brain and more.",
    duration: "5 – 10 min",
    answers: [
      "What does the anatomy look like in fine detail?",
      "Has anything changed since the last scan?",
    ],
    whoItsFor: [
      "Routine contrast CT of chest, abdomen and pelvis",
      "HRCT chest for lung disease",
      "CT brain, neck, spine and musculoskeletal studies",
      "Follow-up scans between PET/CT studies",
    ],
    explainer:
      "The CT built into our PET/CT is a full diagnostic 160-slice scanner with a 0.3-second rotation, not a low-grade unit meant only for attenuation correction. It can be booked on its own, and produces thin-slice images that can be reconstructed in any plane.",
    prismaaEdge:
      "A fast rotation means fewer breathing and pulsation artefacts — useful in breathless patients, children and the elderly. AI-assisted reconstruction supports genuine ultra-low-dose protocols, which matters most for young patients and for anyone being scanned repeatedly.",
    preparation: [
      "Fast for 4 hours for contrast studies.",
      "Bring a recent serum creatinine report if intravenous contrast is planned.",
      "Tell us about any previous contrast reaction, asthma, or kidney disease.",
    ],
    keywords: ["CT scan Surat", "HRCT chest Surat", "contrast CT scan near me"],
  },
  {
    slug: "ct-coronary-angiography",
    name: "160-Slice CT Coronary Angiography",
    category: "cardiology",
    icon: "heart",
    summary:
      "Checks the heart's arteries for blockages — without a catheter in your groin or wrist.",
    duration: "10 – 15 min",
    answers: [
      "Are the arteries supplying my heart narrowed or blocked?",
      "Is my chest pain coming from my heart at all?",
      "Do I actually need an invasive angiogram?",
    ],
    whoItsFor: [
      "Chest pain where the cause is uncertain",
      "Intermediate risk of coronary artery disease",
      "An inconclusive or equivocal treadmill test",
      "Follow-up after bypass grafts or stents",
      "Pre-operative cardiac assessment",
    ],
    explainer:
      "A conventional angiogram means threading a catheter through an artery to the heart. A CT coronary angiogram gets much of the same information from an injection in your arm and a scan lasting a few seconds. The scanner freezes the heart between beats and builds a three-dimensional picture of every coronary artery, showing both narrowing and the soft plaque in the vessel wall that has not yet narrowed anything.",
    prismaaEdge:
      "A 0.3-second rotation is what makes this study reliable — it freezes cardiac motion cleanly, and ultra-low-dose reconstruction keeps the radiation well below what these scans traditionally required.",
    preparation: [
      "Fast for 4 hours. Plain water is allowed.",
      "Avoid caffeine — tea, coffee, cola, energy drinks — for 12 hours beforehand.",
      "Bring a recent serum creatinine report; contrast is used.",
      "Continue your regular heart medication. You may be given a tablet to slow your heart rate before the scan.",
      "Tell us about asthma, kidney disease, or any previous reaction to contrast dye.",
    ],
    keywords: [
      "CT coronary angiography Surat",
      "CT angiography cost Surat",
      "160 slice CT Surat",
      "heart CT scan near me",
    ],
  },
  {
    slug: "image-guided-biopsy",
    name: "Image-Guided Biopsy & FNAC",
    category: "procedures",
    icon: "needle",
    summary:
      "CT-guided sampling of deep lesions — a definitive diagnosis without open surgery.",
    duration: "30 – 45 min",
    answers: [
      "What exactly is this mass — and what is its tissue type?",
      "Can we get a diagnosis without an operation?",
    ],
    whoItsFor: [
      "Deep chest, abdominal, retroperitoneal or soft-tissue masses",
      "Suspicious lymph nodes needing tissue confirmation",
      "Sampling a PET-positive site chosen specifically because it is most active",
    ],
    explainer:
      "Instead of an open operation, a fine needle is guided to the target under live CT imaging through a small skin puncture with local anaesthetic. Because we can see the PET images alongside, we can steer the needle into the most metabolically active part of a mass — the part most likely to yield a usable diagnosis rather than dead tissue.",
    prismaaEdge:
      "PET-guided target selection meaningfully reduces the chance of a non-diagnostic sample and a repeat procedure.",
    preparation: [
      "Fast for 6 hours.",
      "Bring recent coagulation reports (PT/INR, platelet count).",
      "Blood thinners usually need to be stopped in advance — please confirm timing with your treating doctor and with us.",
      "Arrange for someone to accompany you home.",
    ],
    keywords: ["CT guided biopsy Surat", "FNAC Surat", "image guided biopsy Gujarat"],
  },
  {
    slug: "second-opinion-reporting",
    name: "Second-Opinion Onco-Imaging Review",
    category: "procedures",
    icon: "document",
    summary:
      "A specialist re-read of scans done elsewhere, with a structured, comparable report.",
    duration: "Report within 24 – 48 hours",
    answers: [
      "Was my scan from another centre reported correctly?",
      "Has the disease genuinely progressed, or does it only look that way?",
    ],
    whoItsFor: [
      "Patients carrying scans from other cities or centres",
      "Referring oncologists wanting a subspecialty onco-radiology opinion",
      "Response assessment where prior and current scans were done at different places",
    ],
    explainer:
      "Bring the scan files on a CD or a link and we will re-read them from scratch, side by side with your earlier studies, and issue a structured report using standardised response criteria. It is often the fastest way to settle a disagreement about whether treatment is working.",
    prismaaEdge:
      "Fellowship-trained onco-radiology reporting with routine use of RECIST 1.1, PERCIST, mRECIST, Choi and RANO criteria — the same language your oncologist's protocols are written in.",
    preparation: [
      "Carry the raw DICOM files (CD, DVD or download link) — not just printed films.",
      "Bring every previous report, however old.",
    ],
    keywords: [
      "PET CT second opinion India",
      "onco radiology second opinion Surat",
      "RECIST reporting",
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);
export const molecularServices = services.filter((s) => s.isMolecular);

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const servicesByCategory = (id: ServiceCategoryId) =>
  services.filter((service) => service.category === id);
