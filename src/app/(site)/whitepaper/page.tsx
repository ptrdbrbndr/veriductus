import type { Metadata } from "next";
import { WhitepaperFormulier } from "@/components/WhitepaperFormulier";
import { FileText, TrendingUp, Shield, Zap, Users, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Whitepaper — De staat van QA in Nederlandse softwareteams",
  description:
    "Download gratis onze whitepaper over softwarekwaliteit, testautomatisering en de weg vooruit voor Nederlandse softwareteams.",
};

const highlights = [
  {
    icon: TrendingUp,
    titel: "QA-markt groeit 12–18% per jaar",
    tekst: "Waarom kwaliteitsborging onontkoombaar wordt in het Nederlandse IT-landschap.",
  },
  {
    icon: Shield,
    titel: "NIS2 en AVG-risico's",
    tekst: "68% van datalekken is terug te leiden naar vermijdbare softwarefouten.",
  },
  {
    icon: Zap,
    titel: "5 hardnekkige knelpunten",
    tekst: "De meest voorkomende oorzaken van trage, dure en foutgevoelige software.",
  },
  {
    icon: BarChart2,
    titel: "Testautomatisering stappenplan",
    tekst: "Van nul naar een geautomatiseerde testpipeline in 90 dagen — praktisch en haalbaar.",
  },
  {
    icon: Users,
    titel: "Gildemodel als oplossing",
    tekst: "Waarom dedicated QA-professionals meer opleveren dan een generieke consultant.",
  },
  {
    icon: FileText,
    titel: "12–16 pagina's, direct toepasbaar",
    tekst: "Gebaseerd op 12+ jaar ervaring en 150+ projecten bij Nederlandse softwareteams.",
  },
];

export default function WhitepaperPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-6 bg-white border-b border-[#E2E4EC]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#5FC38E] mb-4">
            Gratis whitepaper
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1D1E4B] mb-4 leading-tight">
            De staat van QA in<br />Nederlandse softwareteams
          </h1>
          <p className="text-[#3A3B5C] text-lg max-w-2xl mx-auto">
            Een praktische gids over softwarekwaliteit, testautomatisering en de weg vooruit
            — gebaseerd op 12+ jaar en 150+ projecten.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 bg-[#F4F6FA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Left: what's inside */}
          <div>
            {/* Cover mock */}
            <div
              className="rounded-2xl p-8 mb-10 text-white shadow-xl"
              style={{ background: "linear-gradient(135deg, #1D1E4B, #4776A8)" }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-3">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Whitepaper 2026</p>
                  <p className="font-bold text-lg leading-tight">De staat van QA in<br />Nederlandse softwareteams</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4 flex justify-between text-sm text-white/70">
                <span>12–16 pagina&apos;s</span>
                <span>Maart 2026</span>
                <span>Veriductus</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1D1E4B] mb-6">Wat je leert</h2>
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, titel, tekst }) => (
                <div key={titel} className="flex gap-4">
                  <div className="mt-0.5 shrink-0 bg-gradient-to-br from-[#4776A8] to-[#5FC38E] rounded-lg p-2">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D1E4B] text-sm">{titel}</p>
                    <p className="text-[#3A3B5C] text-sm">{tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl border border-[#E2E4EC] p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#1D1E4B] mb-2">
              Direct downloaden
            </h2>
            <p className="text-[#3A3B5C] text-sm mb-6">
              Vul uw gegevens in en download de whitepaper gratis. Geen spam.
            </p>
            <WhitepaperFormulier />
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 px-6 bg-white border-t border-[#E2E4EC]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { getal: "150+", label: "projecten als basis" },
              { getal: "12+", label: "jaar QA-ervaring" },
              { getal: "98%", label: "klantbehoud" },
            ].map(({ getal, label }) => (
              <div key={label}>
                <p
                  className="text-3xl font-extrabold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #4776A8, #5FC38E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {getal}
                </p>
                <p className="text-sm text-[#3A3B5C]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
