/**
 * Homepage FAQs. These are emitted as FAQPage JSON-LD, which is how they can
 * win an expandable rich result in Google — so keep answers self-contained,
 * factual and under about 300 words.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const homepageFaqs: Faq[] = [
  {
    question: "What is a PET/CT scan, in simple words?",
    answer:
      "It is two scans done at once. The CT half photographs your anatomy — the shape and position of every organ. The PET half shows which cells are working hardest, using a small amount of a tagged sugar injected into a vein. Overlaid on each other, they show your doctor not only where something is, but whether it is active. That is why PET/CT is the standard scan for staging cancer and for checking whether treatment is working.",
  },
  {
    question: "What makes a digital PET/CT better than a conventional one?",
    answer:
      "Conventional scanners use photomultiplier tubes — analogue vacuum tubes that lose a lot of the signal on the way to the image. Our uMI Vista uses silicon photomultipliers, which count light photon by photon. In practice that means about 2.9 mm resolution instead of 4–5 mm, roughly 15 minutes on the table instead of 25–30, and the ability to use a lower injected dose. Smaller lesions are found, and they are found with less radiation and less time lying still.",
  },
  {
    question: "Does a digital PET/CT cost more?",
    answer:
      "No. Prismaa charges the same as conventional PET/CT scans in Surat. We invested in the newer scanner rather than in a price premium, because there is no good reason for a patient to accept an older-generation scan simply to save money.",
  },
  {
    question: "How long does the whole appointment take?",
    answer:
      "Plan for about two and a half hours in the centre. Most of that is the quiet resting hour after the injection, while the tracer distributes. The scan itself is around fifteen minutes.",
  },
  {
    question: "Is the radiation dangerous?",
    answer:
      "The dose from a PET/CT is roughly comparable to a few years of natural background radiation. It is a real but small risk, and it is weighed against the much larger risk of planning cancer treatment without accurate information. Because our detector is more sensitive, we can often use less tracer than a conventional scanner would need for the same image quality.",
  },
  {
    question: "Do I need a doctor's prescription to book a PET/CT?",
    answer:
      "Yes. A PET/CT should be requested by a treating doctor, because the right tracer and the right protocol depend on the clinical question. If you are unsure whether a scan is appropriate, call us and we will discuss it with your doctor.",
  },
  {
    question: "Which scans do you offer besides cancer imaging?",
    answer:
      "PET/CT is also used for brain conditions such as dementia and drug-resistant epilepsy, for cardiac viability assessment before bypass surgery, and for tracking down hidden infection or inflammation in patients with prolonged unexplained fever. We also perform diagnostic 160-slice CT and CT-guided biopsies.",
  },
  {
    question: "What advanced tracers are available at Prismaa?",
    answer:
      "Alongside standard 18F-FDG, we offer gallium-68 based molecular studies: PSMA for prostate cancer, DOTA-TATE/TOC/NOC for neuroendocrine tumours, and FAPI for cancers that FDG images poorly, such as pancreatic and peritoneal disease. Rarer tracers including Exendin-4 and Trivehexin can be arranged on request.",
  },
  {
    question: "How soon will I get my report?",
    answer:
      "Most structured reports are released within 24 hours, and urgent studies faster. Reports use the standardised criteria your oncologist works with — RECIST 1.1, PERCIST, Deauville and others — so they can be compared directly against your previous scans.",
  },
  {
    question: "Where exactly are you, and is parking available?",
    answer:
      "We are on the ground floor of the Zenon Building, opposite Unique Hospital, Surat-395002. Access is step-free from the street, and parking is available. Call +91 93169 25516 and we will guide you in.",
  },
];
