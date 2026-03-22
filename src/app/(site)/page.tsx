import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Veriductus — Betrouwbare kwaliteit, gedreven professionals",
  description:
    "Veriductus is een detacheringsorganisatie van software testers die werken via het Ductus-gildemodel. Binnenkort live.",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#F4F6FA]">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-8">
        <Image
          src="/logo.png"
          alt="Veriductus"
          width={220}
          height={72}
          priority
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-extrabold text-[#1D1E4B]">
            Binnenkort live
          </h1>
          <p className="text-[#3A3B5C] leading-relaxed">
            We werken hard aan de lancering van Veriductus. Neem alvast contact
            op als u meer wilt weten.
          </p>
        </div>

        <a
          href="mailto:info@veriductus.nl"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
        >
          Neem contact op
        </a>

        <p className="text-xs text-[#9A9BB8]">© {new Date().getFullYear()} Veriductus</p>
      </div>
    </main>
  );
}
