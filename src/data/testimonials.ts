import { siteConfig } from "./site";

/**
 * Patient video testimonials.
 *
 * TODO(prismaa): add your YouTube videos here. `youtubeId` is the part of the
 * URL after `v=` (e.g. for youtube.com/watch?v=AbC123xyz the id is
 * "AbC123xyz"). Thumbnails are pulled from YouTube automatically — nothing
 * else to upload.
 *
 * The section is written to look complete with an empty list: it falls back
 * to the Google reviews panel. Never pad it with invented quotes.
 */

export interface VideoTestimonial {
  youtubeId: string;
  /** Short headline — what this patient's story is about. */
  title: string;
  /** Patient or relative name, as they consented to be credited. */
  attribution: string;
  /** e.g. "Lymphoma — response assessment" */
  context?: string;
  /** Spoken language, shown as a pill so viewers pick the right one. */
  language?: "Gujarati" | "Hindi" | "English";
}

export const videoTestimonials: VideoTestimonial[] = [
  // {
  //   youtubeId: "REPLACE_ME",
  //   title: "“The scan took fifteen minutes and the report came the same evening.”",
  //   attribution: "Rameshbhai P.",
  //   context: "Lymphoma — interim response scan",
  //   language: "Gujarati",
  // },
];

export const googleReviews = {
  url: siteConfig.mapsReviewsUrl,
  /** TODO(prismaa): update from your Google Business Profile. */
  rating: 4.9,
  count: 120,
} as const;
