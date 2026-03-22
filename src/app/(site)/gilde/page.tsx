import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Het Ductus Gildemodel | Veriductus",
  description:
    "Leer meer over het Ductus-gildemodel: zelfstandig ondernemerschap in een sterke community van software testers.",
};

const GILDE_WAARDEN = [
  {
    src: "/images/gilde/vakmanschap.jpg",
    alt: "Software tester die nauwkeurig en professioneel aan het werk is",
    titel: "Vakmanschap",
    tekst: "Elk gildelid is specialist in software testen. Geen generalisten, geen bijklussers.",
  },
  {
    src: "/images/gilde/samenwerking.jpg",
    alt: "Nederlandse IT-professionals in overleg aan tafel",
    titel: "Samenwerking",
    tekst: "Zelfstandig ondernemen is geen eenzame strijd. Het gilde deelt kennis, werk en ervaringen.",
  },
  {
    src: "/images/gilde/transparantie.jpg",
    alt: "Open communicatie en duidelijke afspraken met klanten",
    titel: "Transparantie",
    tekst: "Duidelijke afspraken met klanten. Eerlijk over wat we kunnen en waar onze grenzen liggen.",
  },
  {
    src: "/images/gilde/keurmerk.jpg",
    alt: "Kwaliteitscontrole en professionele standaarden bij Veriductus",
    titel: "Kwaliteitskeurmerk",
    tekst: "Gilde-ondernemers voldoen aan de Veriductus-normen. Dat is de belofte aan elke klant.",
  },
];

const VOORDELEN_VOOR_TESTERS = [
  "Opdrachten via het gildekanaal",
  "Kennisdelingsbijeenkomsten",
  "Gedeelde tools & templates",
  "Rugdekking bij vragen over facturatie of klantrelaties",
  "Community van vakgenoten",
  "Veriductus-naam als kwaliteitskeurmerk",
];

const STAPPEN = [
  { stap: "01", titel: "Aanmelding", tekst: "Vul het aanmeldformulier in. We lezen uw motivatie en nemen contact op." },
  { stap: "02", titel: "Kennismaking", tekst: "Een gesprek om te kijken of er een match is — voor u en voor het gilde." },
  { stap: "03", titel: "Onboarding", tekst: "U wordt opgenomen in het gilde en krijgt toegang tot de community en opdrachten." },
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
              <div key={w.titel} className="rounded-2xl overflow-hidden bg-[#F4F6FA] border border-[#E2E4EC] flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={w.src}
                    alt={w.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1E4B]/60 to-transparent" />
                  <div className="absolute bottom-3 left-5">
                    <span className="text-white font-bold text-lg drop-shadow">{w.titel}</span>
                  </div>
                </div>
                <div className="p-6">
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
            <p className="text-[#3A3B5C]">U bent vrij, maar niet alleen.</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {VOORDELEN_VOOR_TESTERS.map((v) => (
              <li
                key={v}
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-[#E2E4EC]"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
                />
                <span className="text-sm text-[#3A3B5C]">{v}</span>
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
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
                >
                  {s.stap}
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
