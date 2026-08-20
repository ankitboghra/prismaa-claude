/**
 * The forthcoming nuclear medicine wing. Framed as a promise being built, not
 * a marketing claim — no dates are given because none were confirmed.
 */

export const comingSoon = {
  eyebrow: "Next at Prismaa",
  title: "A complete theranostics centre",
  lede: "Imaging tells you where the disease is. The next step is treating it with the very same molecule — and we are building it.",
  body: "We are commissioning a dual-head gamma camera and a dedicated radionuclide therapy suite. Together with our digital PET/CT, that will let one centre find the disease, confirm the target, and deliver the therapy — without patients travelling to another city between each step.",
  items: [
    {
      title: "Dual-head gamma camera & SPECT/CT",
      description:
        "Bone scans, thyroid and renal studies, cardiac perfusion, sentinel node mapping and DMSA — the everyday nuclear medicine that Surat currently sends patients out of the city for.",
      icon: "gamma" as const,
    },
    {
      title: "Radionuclide therapy suite",
      description:
        "Shielded therapy rooms for I-131 for thyroid cancer, Lu-177 PSMA for advanced prostate cancer, and Lu-177 DOTA-TATE (PRRT) for neuroendocrine tumours.",
      icon: "atom" as const,
    },
    {
      title: "Theranostics, end to end",
      description:
        "Scan with gallium-68, confirm the target lights up, then treat with lutetium-177 attached to the same molecule. See it, then treat exactly what you saw.",
      icon: "cycle" as const,
    },
  ],
  cta: {
    label: "Ask us about theranostics",
    note: "Tell us your diagnosis and we will let you know as soon as the relevant service opens.",
  },
} as const;
