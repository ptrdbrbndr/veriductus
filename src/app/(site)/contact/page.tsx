import type { Metadata } from "next";
import { IntakeFormulier } from "@/components/IntakeFormulier";

export const metadata: Metadata = {
  title: "Contact — Gesprek aanvragen",
  description:
    "Vraag een vrijblijvend gesprek aan met Veriductus. Wij helpen u de juiste software tester te vinden via het Ductus-gildemodel.",
};

const IconKlok = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const IconNederland = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    {/* Windmolen — verwijzing naar Nederland */}
    <line x1="12" y1="11" x2="12" y2="22"/>
    <circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none"/>
    <path d="M12 10 L6 4 L10 9"/>
    <path d="M12 10 L18 4 L14 9"/>
    <path d="M12 10 L6 16 L10 11"/>
    <path d="M12 10 L18 16 L14 11"/>
  </svg>
);

const VERTROUWEN = [
  {
    icon: <IconKlok />,
    titel: "Binnen 1 werkdag",
    tekst: "U ontvangt altijd binnen één werkdag een reactie.",
  },
  {
    icon: <IconCheck />,
    titel: "Volledig vrijblijvend",
    tekst: "Geen verplichtingen. Gewoon kennismaken en kijken of er een match is.",
  },
  {
    icon: <IconNederland />,
    titel: "Door heel Nederland",
    tekst: "Gilde-ondernemers werken bij klanten in de hele Randstad en daarbuiten.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-6 text-center bg-white border-b border-[#E2E4EC]">
        <div className="max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Vrijblijvend kennismaken
          </div>
          <h1 className="text-4xl font-extrabold text-[#1D1E4B] mb-4">
            Gesprek aanvragen
          </h1>
          <p className="text-[#3A3B5C] text-lg">
            Vrijblijvend kennismakingsgesprek. We reageren binnen 1 werkdag.
          </p>
        </div>
      </section>

      {/* Vertrouwenstegels */}
      <section className="py-12 px-6 bg-[#F4F6FA]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {VERTROUWEN.map((v) => (
            <div key={v.titel} className="bg-white rounded-2xl p-6 border border-[#E2E4EC] flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
              >
                {v.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1D1E4B] mb-1 text-sm">{v.titel}</h3>
                <p className="text-xs text-[#3A3B5C] leading-relaxed">{v.tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <IntakeFormulier />
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-t border-[#E2E4EC]">
        <div className="max-w-2xl mx-auto text-center text-sm text-[#3A3B5C]">
          <p>Liever direct mailen?</p>
          <a
            href="mailto:info@veriductus.nl"
            className="font-semibold text-[#4776A8] hover:text-[#5FC38E] transition-colors"
          >
            info@veriductus.nl
          </a>
        </div>
      </section>
    </>
  );
}
