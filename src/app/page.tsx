import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Veriductus — Betrouwbare kwaliteit, gedreven professionals" },
  description:
    "Veriductus is een detacheringsorganisatie van software testers. Wij werken via het Ductus-gildemodel: zelfstandig en samen sterk.",
};

const STATS = [
  { label: "Gilde-ondernemers", value: "5", suffix: "+" },
  { label: "Klantplaatsingen", value: "100%", suffix: "" },
  { label: "Focus", value: "Software", suffix: "" },
  { label: "Testen", value: "Alleen", suffix: "" },
];

const GILDE_VOORDELEN = [
  {
    title: "Voor klanten",
    icon: "🏢",
    body: "U krijgt een gedreven, gespecialiseerde software tester met de kwaliteitsgarantie van het gilde — zonder de overhead van een groot bureau.",
  },
  {
    title: "Voor gilde-ondernemers",
    icon: "🧑‍💻",
    body: "U bent zelfstandig ondernemer, maar niet alleen. Het gilde biedt kennisdeling, samenwerking en opdrachten — vrijheid met rugdekking.",
  },
  {
    title: "Voor aspirant-leden",
    icon: "🚀",
    body: "Overweegt u het zelfstandig ondernemerschap? Het gildemodel biedt een zachte landing en een community die u sterk maakt.",
  },
];

const WERKWIJZE = [
  { stap: "01", titel: "Kennismaking", tekst: "We bespreken uw vraag of wens — als klant of als kandidaat-gildelid." },
  { stap: "02", titel: "Match", tekst: "We koppelen de juiste gilde-ondernemer aan uw project of context." },
  { stap: "03", titel: "Start", tekst: "De samenwerking start snel, met duidelijke afspraken en kwaliteitsborging." },
  { stap: "04", titel: "Gilde-keurmerk", tekst: "Onze ondernemers werken altijd volgens de gildenormen: vakkundig en transparant." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-20 px-6">
        <div
          className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
        />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 text-white"
              style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
            >
              Ductus Gildemodel
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1D1E4B] leading-tight mb-6">
              Betrouwbare kwaliteit,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4776A8, #5FC38E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                gedreven professionals
              </span>
            </h1>
            <p className="text-lg text-[#3A3B5C] leading-relaxed mb-8 max-w-lg">
              Veriductus is een detacheringsorganisatie van software testers. Wij werken
              via het Ductus-gildemodel: zelfstandig en samen sterk. Uitsluitend software
              testen — niets meer, niets minder.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                data-testid="hero-cta-klant"
                className="px-6 py-3 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
              >
                Tester zoeken
              </Link>
              <Link
                href="/word-gilde-lid"
                data-testid="hero-cta-gilde"
                className="px-6 py-3 rounded-lg font-semibold text-sm border-2 border-[#4776A8] text-[#4776A8] hover:bg-[#4776A8] hover:text-white transition-colors"
              >
                Word Gilde-lid
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#EAECF4]"
              >
                <div
                  className="text-3xl font-extrabold"
                  style={{
                    background: "linear-gradient(135deg, #4776A8, #5FC38E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}{s.suffix}
                </div>
                <div className="text-sm text-[#3A3B5C] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1D1E4B] mb-4">
              Voor wie is Veriductus?
            </h2>
            <p className="text-[#3A3B5C] max-w-xl mx-auto">
              Het gildemodel verbindt drie groepen. Iedereen wint.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {GILDE_VOORDELEN.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-8 border border-[#E2E4EC] bg-[#F4F6FA] hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-[#1D1E4B] mb-3">{v.title}</h3>
                <p className="text-sm text-[#3A3B5C] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="py-20 px-6 bg-[#F4F6FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1D1E4B] mb-4">
              Hoe werkt het?
            </h2>
            <p className="text-[#3A3B5C]">Van eerste contact tot kwalitatieve samenwerking.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {WERKWIJZE.map((w) => (
              <div key={w.stap} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
                >
                  {w.stap}
                </div>
                <h3 className="font-bold text-[#1D1E4B] mb-2">{w.titel}</h3>
                <p className="text-sm text-[#3A3B5C] leading-relaxed">{w.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONDERSCHEID */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1D1E4B] mb-4">
              Samenwerken aan zelfstandig ondernemerschap
            </h2>
            <p className="text-[#3A3B5C] max-w-2xl mx-auto">
              Geen anoniem detacheringsbureau. Geen eenzaam freelancerschap. Het gildemodel
              biedt het beste van beide werelden.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Groot bureau", text: "Hoge overhead, generalisten, weinig betrokkenheid", highlight: false },
              { label: "Veriductus gilde", text: "Specialist, gilde-keurmerk, persoonlijke betrokkenheid", highlight: true },
              { label: "Freelance platform", text: "Anoniem, geen kwaliteitsgarantie, solo", highlight: false },
              { label: "Veriductus gilde", text: "Vakgemeenschap, kennisdeling, samenwerking", highlight: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl p-5 border ${
                  item.highlight
                    ? "border-[#5FC38E] bg-[#5FC38E]/5"
                    : "border-[#E2E4EC] bg-[#F4F6FA]"
                }`}
              >
                <div className={`text-sm font-bold mb-1 ${item.highlight ? "text-[#4776A8]" : "text-[#6B6C7F]"}`}>
                  {item.label}
                </div>
                <div className="text-sm text-[#3A3B5C]">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, #1D1E4B, #4776A8)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Klaar om te starten?</h2>
          <p className="text-white/80 mb-8">
            Of u nu een betrouwbare tester zoekt of onderdeel wilt worden van het gilde —
            het gesprek begint hier.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              data-testid="cta-tester-zoeken"
              className="px-6 py-3 rounded-lg font-semibold text-[#1D1E4B] bg-white hover:bg-white/90 transition-colors text-sm"
            >
              Tester zoeken
            </Link>
            <Link
              href="/word-gilde-lid"
              data-testid="cta-gilde-lid"
              className="px-6 py-3 rounded-lg font-semibold text-white border-2 border-white/60 hover:bg-white/10 transition-colors text-sm"
            >
              Word Gilde-lid
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
