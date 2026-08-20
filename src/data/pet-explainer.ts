/**
 * The single most important piece of copy on the site.
 *
 * Most people arriving here have just been handed a prescription that says
 * "PET-CT whole body" and have no idea what that means. They are frightened.
 * Everything below is written at roughly an 8th-grade reading level, in short
 * sentences, with no unexplained jargon.
 */

export const petInOneLine =
  "A PET/CT is a scan that shows how the cells inside your body are behaving — not just what they look like.";

export const petAnalogy = {
  heading: "The simplest way to think about it",
  body: "An X-ray or a CT scan is like a photograph of a city: you can see the buildings and the roads. A PET scan is like the same city photographed at night — now you can see which buildings still have their lights on. Cancer cells are the ones burning the most energy, so they light up brightest.",
};

export interface JourneyStep {
  step: number;
  /** Short imperative title. */
  title: string;
  /** How long this part takes. */
  duration: string;
  body: string;
  /** The thing patients most want to know at this stage. */
  reassurance?: string;
  icon:
    | "clipboard"
    | "droplet"
    | "clock"
    | "bodyScan"
    | "document"
    | "chat";
}

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Check in and get ready",
    duration: "15 min",
    body: "You come in having fasted for about six hours — water is fine and we want you to drink it. We check your blood sugar with a finger-prick, confirm your history and answer your questions.",
    reassurance: "Bring a relative. They can stay with you until the injection.",
    icon: "clipboard",
  },
  {
    step: 2,
    title: "A small injection",
    duration: "2 min",
    body: "A tiny amount of a tracer — usually a sugar molecule carrying a safe, short-lived radioactive tag — goes into a vein in your arm. It is a single needle prick. You will not feel anything from the tracer itself: no warmth, no taste, no reaction.",
    reassurance: "The dose is small, and it clears from your body within hours.",
    icon: "droplet",
  },
  {
    step: 3,
    title: "Rest quietly while it works",
    duration: "45 – 60 min",
    body: "You rest in a quiet room while the tracer travels through your bloodstream and collects in the cells that are working hardest. Staying still and relaxed matters here — moving muscles absorb tracer too, and that can blur the picture.",
    reassurance: "You can lie down. Most people doze off.",
    icon: "clock",
  },
  {
    step: 4,
    title: "The scan itself",
    duration: "≈ 15 min",
    body: "You lie on a padded table that moves slowly through a wide, short ring. It is open at both ends — nothing closes over your face. There is no noise beyond a soft hum, and no pain at all. On a conventional scanner this part takes 25–30 minutes; our digital scanner does it in about fifteen.",
    reassurance: "You can talk to the technologist at any moment. They can see and hear you throughout.",
    icon: "bodyScan",
  },
  {
    step: 5,
    title: "Go home",
    duration: "Same day",
    body: "You eat normally straight afterwards and go home. We ask you to drink plenty of water to flush the tracer out, and to keep a little distance from pregnant women and young children for the rest of the day — a precaution, not a danger.",
    icon: "document",
  },
  {
    step: 6,
    title: "Your report",
    duration: "Usually within 24 hours",
    body: "A fellowship-trained onco-radiologist reads your scan and issues a structured report written in the response criteria your oncologist uses. If you would like the findings explained face to face, we will sit down with you and your family and go through the images.",
    reassurance: "Ask us. Nobody should leave holding a report they cannot read.",
    icon: "chat",
  },
];

export interface WhyReason {
  title: string;
  body: string;
  icon: "search" | "map" | "chart" | "shield";
}

export const whyPetIsNeeded: WhyReason[] = [
  {
    icon: "search",
    title: "To find out if it is cancer at all",
    body: "A lump on a CT scan may be a tumour, or scar tissue, or an old infection. PET shows whether it is metabolically active — and often spares people an unnecessary biopsy or operation.",
  },
  {
    icon: "map",
    title: "To see how far it has spread",
    body: "Treatment for cancer confined to one organ is completely different from treatment for cancer that has travelled. One whole-body scan answers that in a single pass, instead of six separate tests.",
  },
  {
    icon: "chart",
    title: "To check if treatment is working",
    body: "A tumour can shrink and still be alive, or stay the same size and already be dead. PET shows which — usually months before size alone would tell you, so a failing regimen can be changed early.",
  },
  {
    icon: "shield",
    title: "To check for recurrence",
    body: "After treatment ends, PET/CT can distinguish harmless scar tissue from disease that has come back, and can find recurrence while it is still small enough to treat aggressively.",
  },
];

/** Answers to the things patients are actually anxious about. */
export const petMyths: { myth: string; truth: string }[] = [
  {
    myth: "A PET scan will give me cancer.",
    truth:
      "The radiation from a PET/CT is comparable to a few years of the natural background radiation everyone receives from soil, food and cosmic rays. The risk from a scan is very small, and it is weighed against the far larger risk of treating a cancer blind. Our digital scanner lets us use lower doses than a conventional one requires.",
  },
  {
    myth: "It is painful, or I will be trapped in a tunnel.",
    truth:
      "There is one needle prick for the injection and nothing after that. The PET/CT ring is short and wide, open at both ends, and your face stays clear. It is nothing like an MRI tunnel.",
  },
  {
    myth: "I will be radioactive and dangerous to my family.",
    truth:
      "The tracer decays and washes out within hours. Ordinary contact with adults is safe the same day. We simply ask you to avoid prolonged close contact with pregnant women and infants until the next morning.",
  },
  {
    myth: "A PET scan is only for cancer patients.",
    truth:
      "It is also routinely used for dementia and epilepsy, for deciding whether weakened heart muscle is worth operating on, and for tracking down hidden infection in patients with weeks of unexplained fever.",
  },
  {
    myth: "Any PET scan is the same as any other.",
    truth:
      "The scanner generation matters. A digital detector resolves smaller lesions, needs less tracer and takes half the time — and what is found or missed on that scan determines the treatment you are offered.",
  },
];
