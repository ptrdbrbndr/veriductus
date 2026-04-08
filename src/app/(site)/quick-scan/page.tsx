import type { Metadata } from "next";
import { QuickScanFormulier } from "@/components/QuickScanFormulier";
import { ClipboardCheck, Clock, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quick Scan — Softwarekwaliteit in kaart",
  description:
    "Laat Veriductus uw softwarekwaliteit doorlichten in 1-2 dagdelen. U ontvangt een helder rapport met de huidige stand, top-3 risico's en concrete aanbevelingen.",
  alternates: { canonical: "https://veriductus.nl/quick-scan" },
};

const STAPPEN = [
  {
    icon: ClipboardCheck,
    titel: "Aanvraag",
    tekst: "Vul het formulier in met uw bedrijfsgegevens en een korte omschrijving van uw situatie.",
  },
  {
    icon: Clock,
    titel: "Quick Scan (1-2 dagdelen)",
    tekst: "Een gilde-ondernemer analyseert uw testlandschap, processen en tooling op locatie of remote.",
  },
  {
    icon: FileText,
    titel: "Rapport & aanbevelingen",
    tekst: "U ontvangt een schriftelijk rapport met de huidige stand, top-3 risico's en geprioriteerde aanbevelingen.",
  },
  {
    icon: ArrowRight,
    titel: "Vervolggesprek",
    tekst: "Indien gewenst bespreken we vervolgstappen. De Quick Scan wordt verrekend bij een vervolgopdracht.",
  },
];

export default function QuickScanPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-6 bg-white border-b border-[#E2E4EC]">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Startpunt voor kwaliteitsverbetering
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#1D1E4B] mb-4 leading-tight"
            data-testid="quick-scan-titel"
          >
            Quick Scan
          </h1>
          <p className="text-[#3A3B5C] text-lg max-w-2xl mx-auto">
            In 1-2 dagdelen brengen we uw softwarekwaliteit in kaart. U ontvangt een helder
            rapport met concrete aanbevelingen — zonder verplichtingen.
          </p>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-16 px-6 bg-[#F4F6FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1D1E4B] mb-8 text-center">Hoe werkt het?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {STAPPEN.map(({ icon: Icon, titel, tekst }, i) => (
              <div key={titel} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br from-[#4776A8] to-[#5FC38E] text-white relative">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1D1E4B] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-[#1D1E4B] text-sm mb-2">{titel}</h3>
                <p className="text-sm text-[#3A3B5C] leading-relaxed">{tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulier + prijs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#1D1E4B] mb-4">Wat u krijgt</h2>
            <ul className="space-y-3 mb-8">
              {[
                "Analyse van uw huidige testlandschap en -processen",
                "Identificatie van de top-3 kwaliteitsrisico's",
                "Concrete, geprioriteerde aanbevelingen",
                "Schriftelijk rapport in heldere taal",
                "Vrijblijvend vervolggesprek",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#3A3B5C]">
                  <ClipboardCheck className="h-4 w-4 shrink-0 mt-0.5 text-[#5FC38E]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-[#F4F6FA] rounded-2xl border border-[#E2E4EC] p-6">
              <p className="text-sm text-[#3A3B5C] mb-1">Investering</p>
              <p className="text-2xl font-extrabold text-[#1D1E4B]">
                Vanaf €1.500
              </p>
              <p className="text-sm text-[#3A3B5C] mt-1">
                Wordt verrekend bij een vervolgopdracht.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F6FA] rounded-2xl border border-[#E2E4EC] p-8">
            <h2 className="text-xl font-bold text-[#1D1E4B] mb-2">
              Quick Scan aanvragen
            </h2>
            <p className="text-[#3A3B5C] text-sm mb-6">
              Vul uw gegevens in. We nemen binnen 1 werkdag contact op.
            </p>
            <QuickScanFormulier />
          </div>
        </div>
      </section>
    </>
  );
}
