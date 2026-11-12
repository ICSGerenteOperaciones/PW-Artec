import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { VideoBackground } from "@/components/layout/video-background";
import { SITE } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ARTEC | Estrategia Digital, Tecnología y Soluciones Integradas",
    template: "%s | ARTEC",
  },
  description:
    "ARTEC integra marketing digital, tecnología, contact center, estrategias territoriales y soluciones BTL para conectar marcas y territorios a gran escala.",
  keywords: [
    "ARTEC",
    "marketing digital Colombia",
    "contact center BPO",
    "estrategias territoriales",
    "tecnología web Colombia",
    "BTL eventos corporativos",
    "publicidad ATL",
  ],
  authors: [{ name: "ARTEC" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE.url,
    siteName: "ARTEC",
    title: "ARTEC | Estrategia Digital, Tecnología y Soluciones Integradas",
    description:
      "ARTEC integra marketing digital, tecnología, contact center, estrategias territoriales y soluciones BTL para conectar marcas y territorios a gran escala.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTEC | Estrategia Digital, Tecnología y Soluciones Integradas",
    description:
      "ARTEC integra marketing digital, tecnología, contact center, estrategias territoriales y soluciones BTL para conectar marcas y territorios a gran escala.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff9f3" },
    { media: "(prefers-color-scheme: dark)", color: "#140d24" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address,
        addressLocality: "Bogotá D.C.",
        addressCountry: "CO",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#localbusiness`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address,
        addressLocality: "Bogotá D.C.",
        addressCountry: "CO",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${jakarta.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Saltar al contenido
          </a>
          <VideoBackground />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
