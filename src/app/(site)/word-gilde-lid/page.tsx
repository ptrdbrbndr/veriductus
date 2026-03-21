import type { Metadata } from "next";
import { AanmeldFormulier } from "@/components/AanmeldFormulier";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Word Gilde-lid",
  description:
    "Meld u aan als kandidaat-gildelid bij Veriductus. Samenwerken aan zelfstandig ondernemerschap als software tester.",
};

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconBoek = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const IconWind = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
  </svg>
);

type VoordeelItem = { icon: ReactNode; titel: string; tekst: string };

const VOORDELEN: VoordeelItem[] = [
  {
    icon: <IconUsers />,
    titel: "Niet alleen",
    tekst: "Een vakgemeenschap van gedreven software testers om op terug te vallen.",
  },
  {
    icon: <IconBoek />,
    titel: "Kennisdeling",
    tekst: "Leer van collega-ondernemers, deel ervaringen en groei samen.",
  },
  {
    icon: <IconBriefcase />,
    titel: "Opdrachten",
    tekst: "Het gilde brengt opdrachten aan via het Veriductus-netwerk.",
  },
  {
    icon: <IconWind />,
    titel: "Vrijheid",
    tekst: "U blijft zelfstandig ondernemer. Het gilde geeft rugdekking, geen beperkingen.",
  },
];

export default function WordGildeLidPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 px-6 text-center bg-white border-b border-[#E2E4EC]">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Ductus Gildemodel
          </div>
          <h1 className="text-4xl font-extrabold text-[#1D1E4B] mb-4">
            Word Gilde-lid
          </h1>
          <p className="text-[#3A3B5C] text-lg max-w-xl mx-auto">
            Zelfstandig ondernemer als software tester — maar niet alleen. Het Veriductus-gilde
            biedt u een vakgemeenschap, opdrachten en kennisdeling.
          </p>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16 px-6 bg-[#F4F6FA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VOORDELEN.map((v) => (
            <div key={v.titel} className="bg-white rounded-2xl p-6 border border-[#E2E4EC] flex flex-col items-start gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
              >
                {v.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1D1E4B] mb-1">{v.titel}</h3>
                <p className="text-sm text-[#3A3B5C] leading-relaxed">{v.tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulier */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1D1E4B] mb-3 text-center">
            Meld u aan als kandidaat
          </h2>
          <p className="text-[#3A3B5C] text-center mb-10 text-sm">
            Vul uw gegevens in. We nemen binnen 2 werkdagen contact met u op voor een
            vrijblijvend kennismakingsgesprek.
          </p>
          <AanmeldFormulier />
        </div>
      </section>
    </>
  );
}
