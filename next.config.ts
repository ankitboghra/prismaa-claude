import type { NextConfig } from "next";

/**
 * Security headers.
 *
 * A diagnostic centre's site is a credible target for cloning into a phishing
 * page, so framing is denied and referrers are trimmed on cross-origin
 * navigation. No CSP is set here: the site loads a Google Maps iframe and
 * YouTube embeds, and a CSP that has to be widened for both is best written
 * once at the hosting edge with the real domains in hand.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    // Photography is landscape and rendered at most at container width;
    // these breakpoints match the layout rather than Next's wider defaults.
    imageSizes: [64, 96, 128, 256, 384],
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
