import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Het Ductus Gildemodel | Veriductus",
  description:
    "Leer meer over het Ductus-gildemodel: zelfstandig ondernemerschap in een sterke community van software testers.",
};

const IconVakmanschap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
  </svg>
);

const IconSamenwerking = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconTransparantie = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconKeurmerk = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const IconBoek = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const IconTools = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconSchild = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconCommunity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconBadge = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const IconFormulier = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="9" y1="13" x2="15" y2="13"/>
    <line x1="9" y1="17" x2="12" y2="17"/>
  </svg>
);

const IconGesprek = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const IconSleutel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="7.5" cy="15.5" r="5.5"/>
    <path d="m21 2-9.6 9.6"/>
    <path d="m15.5 7.5 3 3L22 7l-3-3"/>
  </svg>
);

type WaardeItem = { titel: string; tekst: string; icon: ReactNode };
type VoordeelItem = { tekst: string; icon: ReactNode };

const GILDE_WAARDEN: WaardeItem[] = [
  {
    titel: "Vakmanschap",
    tekst: "Elk gildelid is specialist in software testen. Geen generalisten, geen bijklussers.",
    icon: <IconVakmanschap />,
  },
  {
    titel: "Samenwerking",
    tekst: "Zelfstandig ondernemen is geen eenzame strijd. Het gilde deelt kennis, werk en ervaringen.",
    icon: <IconSamenwerking />,
  },
  {
    titel: "Transparantie",
    tekst: "Duidelijke afspraken met klanten. Eerlijk over wat we kunnen en waar onze grenzen liggen.",
    icon: <IconTransparantie />,
  },
  {
    titel: "Kwaliteitskeurmerk",
    tekst: "Gilde-ondernemers voldoen aan de Veriductus-normen. Dat is de belofte aan elke klant.",
    icon: <IconKeurmerk />,
  },
];

const VOORDELEN_VOOR_TESTERS: VoordeelItem[] = [
  { tekst: "Opdrachten via het gildekanaal", icon: <IconBriefcase /> },
  { tekst: "Kennisdelingsbijeenkomsten", icon: <IconBoek /> },
  { tekst: "Gedeelde tools & templates", icon: <IconTools /> },
  { tekst: "Rugdekking bij vragen over facturatie of klantrelaties", icon: <IconSchild /> },
  { tekst: "Community van vakgenoten", icon: <IconCommunity /> },
  { tekst: "Veriductus-naam als kwaliteitskeurmerk", icon: <IconBadge /> },
];

const STAPPEN = [
  {
    stap: "01",
    titel: "Aanmelding",
    tekst: "Vul het aanmeldformulier in. We lezen uw motivatie en nemen contact op.",
    icon: <IconFormulier />,
  },
  {
    stap: "02",
    titel: "Kennismaking",
    tekst: "Een gesprek om te kijken of er een match is — voor u en voor het gilde.",
    icon: <IconGesprek />,
  },
  {
    stap: "03",
    titel: "Onboarding",
    tekst: "U wordt opgenomen in het gilde en krijgt toegang tot de community en opdrachten.",
    icon: <IconSleutel />,
  },
];

export default function GildePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-[#F4F6FA]">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Ductus Gildemodel
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1D1E4B] leading-tight mb-6">
            Samenwerken aan{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4776A8, #5FC38E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              zelfstandig ondernemerschap
            </span>
          </h1>
          <p className="text-lg text-[#3A3B5C] leading-relaxed max-w-2xl mx-auto">
            Het Ductus-gildemodel is een moderne vorm van samenwerking: zelfstandige ondernemers
            die als gilde opereren. Iedereen behoudt zijn vrijheid, maar niemand staat er alleen voor.
          </p>
        </div>
      </section>

      {/* WAARDEN */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1D1E4B] mb-4">
              De vier gildewaarden
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {GILDE_WAARDEN.map((w) => (
              <div
                key={w.titel}
                className="rounded-2xl p-8 bg-[#F4F6FA] border border-[#E2E4EC] flex gap-5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
                >
                  {w.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D1E4B] mb-2">{w.titel}</h3>
                  <p className="text-sm text-[#3A3B5C] leading-relaxed">{w.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOORDELEN */}
      <section className="py-20 px-6 bg-[#F4F6FA]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1D1E4B] mb-4">
              Wat biedt het gilde u als tester?
            </h2>
            <p className="text-[#3A3B5C]">
              U bent vrij, maar niet alleen.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {VOORDELEN_VOOR_TESTERS.map((v) => (
              <li
                key={v.tekst}
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-[#E2E4EC]"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
                >
                  {v.icon}
                </div>
                <span className="text-sm text-[#3A3B5C]">{v.tekst}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOE WORD JE LID */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1D1E4B] mb-4">
              Hoe word je gildelid?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STAPPEN.map((s) => (
              <div key={s.stap} className="text-center p-6 rounded-2xl bg-[#F4F6FA] border border-[#E2E4EC]">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3"
                  style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
                >
                  {s.stap}
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#4776A8] bg-white border border-[#E2E4EC]"
                >
                  {s.icon}
                </div>
                <h3 className="font-bold text-[#1D1E4B] mb-2">{s.titel}</h3>
                <p className="text-sm text-[#3A3B5C] leading-relaxed">{s.tekst}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/word-gilde-lid"
              data-testid="gilde-cta-aanmelden"
              className="inline-flex px-8 py-3 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
            >
              Aanmelden als kandidaat-gildelid
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
