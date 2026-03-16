import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans antialiased bg-[#F4F6FA] text-[#3A3B5C]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
