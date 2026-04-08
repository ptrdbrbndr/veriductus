import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, TrendingUp, ShieldCheck, Target, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Veriductus",
  description:
    "12+ jaar ervaring, 150+ projecten, 98% klantbehoud. Veriductus is de detacheringsorganisatie van software testers via het Ductus-gildemodel.",
  alternates: { canonical: "https://veriductus.nl/over" },
};

const STATS = [
  { getal: "12+", label: "Jaar ervaring in software testing", icon: Award },
  { getal: "150+", label: "Projecten succesvol afgerond", icon: Target },
  { getal: "98%", label: "Klantbehoud — partners voor de lange termijn", icon: Handshake },
  { getal: "6", label: "Gespecialiseerde diensten", icon: ShieldCheck },
];

const WAARDEN = [
  {
    titel: "Vakmanschap boven volume",
    tekst: "Wij leveren geen generieke testers. Elke gilde-ondernemer is een specialist met bewezen ervaring in software testing.",
    icon: Award,
    kleur: "#4776A8",
  },
  {
    titel: "Kennisdeling als fundament",
    tekst: "Het gildemodel betekent dat onze professionals continu van elkaar leren. Peer review, kennissessies en gezamenlijke standaarden maken iedereen beter.",
    icon: Users,
    kleur: "#5FC38E",
  },
  {
    titel: "Meetbare resultaten",
    tekst: "Geen vage beloftes. Wij werken met concrete KPI's: bugreductie, testdekking, releasesnelheid. U ziet het verschil in de cijfers.",
    icon: TrendingUp,
    kleur: "#4776A8",
  },
  {
    titel: "Security en compliance",
    tekst: "OWASP, NIS2, AVG — compliance is geen bijzaak. Onze testers kennen de normen en integreren ze in hun dagelijkse werk.",
    icon: ShieldCheck,
    kleur: "#5FC38E",
  },
];

const TIJDLIJN = [
  { jaar: "2014", tekst: "Start als zelfstandig QA-consultant in Nederlandse softwareteams" },
  { jaar: "2018", tekst: "Eerste samenwerkingen met scale-ups en mid-market IT-organisaties" },
  { jaar: "2022", tekst: "Oprichting Ductus Holding — gildemodel als organisatieprincipe" },
  { jaar: "2024", tekst: "150e project afgerond, start specialisatie in security testing" },
  { jaar: "2026", tekst: "Lancering Veriductus als dedicated detacheringsorganisatie voor software testers" },
];

export default function OverPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-6 bg-white border-b border-[#E2E4EC]">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Over Veriductus
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#1D1E4B] mb-4 leading-tight"
            data-testid="over-titel"
          >
            Betrouwbare kwaliteit,<br />gedreven professionals
          </h1>
          <p className="text-[#3A3B5C] text-lg max-w-2xl mx-auto">
            Veriductus is de detacheringsorganisatie van software testers die samenwerken als
            zelfstandig ondernemers binnen het Ductus-gildemodel. Geen generieke uitzendkrachten
            — vakspecialisten met een gedeelde standaard.
          </p>
        </div>
      </section>

      {/* Social proof stats */}
      <section className="py-16 px-6 bg-[#F4F6FA]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ getal, label, icon: Icon }) => (
              <div
                key={label}
                data-testid={`stat-${getal.replace("+", "plus").replace("%", "pct")}`}
                className="bg-white rounded-2xl border border-[#E2E4EC] p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 bg-gradient-to-br from-[#4776A8] to-[#5FC38E]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
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

      {/* Het gildemodel */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1D1E4B] mb-4">Het Ductus-gildemodel</h2>
              <p className="text-[#3A3B5C] leading-relaxed mb-4">
                In het traditionele detacheringsmodel zijn testers werknemers van een bureau.
                Bij Veriductus zijn testers <strong>gilde-ondernemers</strong>: zelfstandig
                ondernemen met de kracht van een vakgemeenschap.
              </p>
              <p className="text-[#3A3B5C] leading-relaxed mb-4">
                Dat betekent voor u als klant: een professional die intrinsiek gemotiveerd is,
                eigen verantwoordelijkheid draagt, en tegelijk toegang heeft tot de kennis en
                kwaliteitsstandaarden van het hele gilde.
              </p>
              <p className="text-[#3A3B5C] leading-relaxed">
                Geen overhead van een groot bureau. Geen risico van een solo-freelancer.
                Het beste van twee werelden.
              </p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80&auto=format&fit=crop"
                alt="Team van professionals in samenwerking"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #1D1E4BE6 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-sm">
                  Zelfstandig, maar samen sterk
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze waarden */}
      <section className="py-16 px-6 bg-[#F4F6FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1D1E4B] mb-8 text-center">Onze waarden</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {WAARDEN.map(({ titel, tekst, icon: Icon, kleur }) => (
              <div
                key={titel}
                className="bg-white rounded-2xl border border-[#E2E4EC] p-6"
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                  style={{ backgroundColor: `${kleur}15` }}
                >
                  <Icon className="h-5 w-5" style={{ color: kleur }} />
                </div>
                <h3 className="font-bold text-[#1D1E4B] mb-2">{titel}</h3>
                <p className="text-sm text-[#3A3B5C] leading-relaxed">{tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1D1E4B] mb-8 text-center">Onze geschiedenis</h2>
          <div className="space-y-0">
            {TIJDLIJN.map(({ jaar, tekst }, i) => (
              <div key={jaar} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
                  >
                    {jaar.slice(2)}
                  </div>
                  {i < TIJDLIJN.length - 1 && (
                    <div className="w-px h-full min-h-8 bg-[#E2E4EC]" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-bold text-[#1D1E4B]">{jaar}</p>
                  <p className="text-sm text-[#3A3B5C]">{tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #1D1E4B, #4776A8)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-3">Samenwerken?</h2>
          <p className="text-white/80 mb-6 text-sm">
            Vertel ons over uw uitdaging. Een vrijblijvend gesprek kost niets.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              data-testid="over-contact-cta"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-[#1D1E4B] bg-white hover:bg-white/90 transition-colors text-sm"
            >
              Gesprek aanvragen
            </Link>
            <Link
              href="/word-gilde-lid"
              data-testid="over-gilde-cta"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors text-sm"
            >
              Word Gilde-lid
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
