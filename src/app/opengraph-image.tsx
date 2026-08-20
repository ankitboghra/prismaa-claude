import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";
export const alt = `${siteConfig.name} — digital PET/CT scan centre in Surat`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The social share card. Generated rather than designed as a static asset so
 * it stays in sync with the brand and the centre's positioning line. Uses only
 * system-available fonts so the build never depends on a font fetch.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #17100a 0%, #2a1507 58%, #4a2810 100%)",
          padding: "68px 78px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="72" height="87" viewBox="0 0 100 121">
            <path d="M0 57.7 L100 0 L65.9 58.5 Z" fill="#159fc0" />
            <path d="M0 57.7 L65.9 58.5 L100 121 Z" fill="#ee3b33" />
            <path d="M100 0 L65.9 58.5 L100 121 Z" fill="#f9b315" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "white", fontSize: 46, fontWeight: 700 }}>
              Prismaa
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 19,
                fontWeight: 600,
                letterSpacing: 1,
                marginTop: 2,
              }}
            >
              oncoimaging surat
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "white",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 950,
            }}
          >
            South Gujarat&apos;s first high-resolution digital PET/CT
          </div>
          <div
            style={{
              color: "#fcc64d",
              fontSize: 28,
              fontWeight: 600,
              maxWidth: 920,
            }}
          >
            Increased sensitivity · Reduced scan time · Ultra-low dose radiation
            — at conventional PET/CT prices
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              height: 6,
              width: 250,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <div style={{ flex: 1, background: "#159fc0" }} />
            <div style={{ flex: 1, background: "#f9b315" }} />
            <div style={{ flex: 1, background: "#ee3b33" }} />
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            A unit of Gujarat Imaging Centre · +91 93169 25516
          </div>
        </div>
      </div>
    ),
    size,
  );
}
