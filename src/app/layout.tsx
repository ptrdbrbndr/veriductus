import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Veriductus — Betrouwbare kwaliteit, gedreven professionals",
    template: "%s | Veriductus",
  },
  description:
    "Veriductus is een detacheringsorganisatie van software testers die werken via het Ductus-gildemodel. Betrouwbare kwaliteit, gedreven professionals.",
  keywords: [
    "software tester detachering",
    "software testing",
    "testautomatisering",
    "QA detachering",
    "gilde model",
    "Nederland",
  ],
  authors: [{ name: "Veriductus" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://veriductus.nl",
    siteName: "Veriductus",
    title: "Veriductus — Betrouwbare kwaliteit, gedreven professionals",
    description:
      "Detacheringsorganisatie van software testers via het Ductus-gildemodel.",
  },
  twitter: {
    card: "summary",
    title: "Veriductus — Betrouwbare kwaliteit, gedreven professionals",
    description:
      "Detacheringsorganisatie van software testers via het Ductus-gildemodel.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://veriductus.nl" },
};

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://veriductus.nl/#organization",
  name: "Veriductus",
  url: "https://veriductus.nl",
  logo: "https://veriductus.nl/logo.png",
  description:
    "Detacheringsorganisatie van software testers via het Ductus-gildemodel. Betrouwbare kwaliteit, gedreven professionals.",
  foundingDate: "2026",
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  email: "info@veriductus.nl",
  sameAs: ["https://www.linkedin.com/company/veriductus"],
  knowsAbout: [
    "Software Testing",
    "Test Automatisering",
    "QA Architectuur",
    "Security Testing",
    "CI/CD Integratie",
    "Kwaliteitsmonitoring",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Testing Diensten",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Test Automatisering",
        description:
          "Geautomatiseerde testsuites die bugs vangen voor productie. Playwright, Cypress, Selenium.",
      },
      {
        "@type": "OfferCatalog",
        name: "QA Architectuur",
        description:
          "Een schaalbaar testkader dat past bij uw tech stack.",
      },
      {
        "@type": "OfferCatalog",
        name: "Kwaliteitsmonitoring",
        description:
          "Continue zichtbaarheid op softwarekwaliteit via dashboards en alerting.",
      },
      {
        "@type": "OfferCatalog",
        name: "CI/CD Integratie",
        description:
          "Kwaliteitspoorten in uw bestaande deployment pipeline.",
      },
      {
        "@type": "OfferCatalog",
        name: "Team Coaching",
        description:
          "Ontwikkelteams leren denken in kwaliteit. TDD, BDD en quality-first coaching.",
      },
      {
        "@type": "OfferCatalog",
        name: "Security Testing",
        description:
          "OWASP-gebaseerde penetratietests en kwetsbaarheidstests.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_JSONLD),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#F4F6FA] text-[#3A3B5C]`}>
        {children}
      </body>
    </html>
  );
}
