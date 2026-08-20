import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Matches the geometric, single-storey letterforms of the Prismaa wordmark. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Digital PET/CT Scan Centre in Surat`,
    template: `%s | ${siteConfig.name} Surat`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "PET CT scan Surat",
    "digital PET CT Surat",
    "PET scan centre near me",
    "PSMA PET CT Surat",
    "Gallium 68 DOTANOC Surat",
    "FAPI PET CT Gujarat",
    "cancer scan Surat",
    "PET CT cost Surat",
    "oncology imaging South Gujarat",
    "uMI Vista PET CT",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "Health",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Digital PET/CT Scan Centre in Surat`,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfaf4" },
    { media: "(prefers-color-scheme: dark)", color: "#17100a" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-dvh antialiased">
        <SiteHeader />
        {/* Bottom padding clears the fixed mobile action bar. */}
        <main id="main" className="pb-24 md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <FloatingActions />

        {/* Site-wide graph — page-level schema references these by @id. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
