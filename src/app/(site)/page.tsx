import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { DIENSTEN } from "@/lib/diensten";

export const metadata: Metadata = {
  title: "Veriductus — Betrouwbare kwaliteit, gedreven professionals",
  description:
    "Detacheringsorganisatie van software testers via het Ductus-gildemodel. 12+ jaar ervaring, 150+ projecten, 98% klantbehoud.",
  alternates: { canonical: "https://veriductus.nl" },
};

const STATS = [
  { getal: "12+", label: "Jaar ervaring", icon: Award },
  { getal: "150+", label: "Projecten afgerond", icon: TrendingUp },
  { getal: "98%", label: "Klantbehoud", icon: Users },
  { getal: "6", label: "Gespecialiseerde diensten", icon: ShieldCheck },
];

const WAAROM = [
  {
    titel: "Vakmanschap boven volume",
    tekst:
      "Geen generieke uitzendkrachten — vakspecialisten met bewezen ervaring in software testing.",
  },
  {
    titel: "Gildemodel",
    tekst:
      "Onze testers leren continu van elkaar via peer review, kennissessies en gezamenlijke standaarden.",
  },
  {
    titel: "Meetbare resultaten",
    tekst:
      "Concrete KPI's: bugreductie, testdekking, releasesnelheid. U ziet het verschil in de cijfers.",
  },
  {
    titel: "Compliance ingebakken",
    tekst:
      "OWASP, NIS2, AVG — onze testers kennen de normen en passen ze dagelijks toe.",
  },
];

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white border-b border-[#E2E4EC]">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5 text-white"
          style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
        >
          Detacheringsorganisatie software testers
        </div>
        <h1
          className="text-4xl md:text-6xl font-extrabold text-[#1D1E4B] mb-5 leading-tight"
          data-testid="home-titel"
        >
          Betrouwbare kwaliteit,
          <br />
          gedreven professionals
        </h1>
        <p className="text-[#3A3B5C] text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Veriductus levert software testers via het Ductus-gildemodel.
          Specialisten die uw kwaliteit meetbaar verbeteren — van
          testautomatisering tot security testing.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            data-testid="home-cta-contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Gesprek aanvragen <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/quick-scan"
            data-testid="home-cta-quickscan"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#1D1E4B] text-sm bg-white border border-[#E2E4EC] hover:border-[#4776A8] transition-colors"
          >
            Doe de quick scan
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-14 px-6 bg-[#F4F6FA] border-b border-[#E2E4EC]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div
            key={s.label}
            data-testid={`home-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-center flex flex-col items-center gap-2"
          >
            <s.icon className="w-7 h-7 text-[#4776A8]" aria-hidden="true" />
            <div className="text-3xl font-extrabold text-[#1D1E4B]">{s.getal}</div>
            <div className="text-xs text-[#3A3B5C]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DienstenPreview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D1E4B] mb-3">
            Onze diensten
          </h2>
          <p className="text-[#3A3B5C] max-w-2xl mx-auto">
            Zes specialisaties — uitsluitend software testing. Geen omwegen.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIENSTEN.map((d) => (
            <Link
              key={d.slug}
              href={`/diensten/${d.slug}`}
              data-testid={`home-dienst-${d.slug}`}
              className="bg-[#F4F6FA] rounded-xl p-6 border border-[#E2E4EC] hover:border-[#4776A8] hover:shadow-md transition-all flex flex-col gap-3"
            >
              <d.icon className="w-8 h-8" style={{ color: d.accentKleur }} aria-hidden="true" />
              <h3 className="font-bold text-[#1D1E4B] text-lg">{d.titel}</h3>
              <p className="text-sm text-[#3A3B5C] leading-relaxed flex-1">
                {d.korte_beschrijving}
              </p>
              <span className="text-sm font-semibold" style={{ color: d.accentKleur }}>
                Meer informatie →
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/diensten"
            data-testid="home-alle-diensten"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#4776A8] hover:underline"
          >
            Bekijk alle diensten <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Waarom() {
  return (
    <section className="py-20 px-6 bg-[#F4F6FA] border-y border-[#E2E4EC]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D1E4B] mb-3">
            Waarom Veriductus
          </h2>
          <p className="text-[#3A3B5C] max-w-2xl mx-auto">
            Het verschil tussen een tester en een vakspecialist.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {WAAROM.map((w) => (
            <div
              key={w.titel}
              data-testid={`home-waarom-${w.titel.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-white rounded-xl p-6 border border-[#E2E4EC] flex gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-[#5FC38E] flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-[#1D1E4B] mb-1">{w.titel}</h3>
                <p className="text-sm text-[#3A3B5C] leading-relaxed">{w.tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      className="py-20 px-6 text-center text-white"
      style={{ background: "linear-gradient(135deg, #1D1E4B, #4776A8)" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Klaar om uw kwaliteit te verhogen?
        </h2>
        <p className="text-white/80 mb-8">
          Een vrijblijvend gesprek kost niets en levert direct inzicht op in waar
          uw testpraktijk staat — en waar het beter kan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            data-testid="home-cta-bottom-contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#1D1E4B] bg-white hover:bg-white/90 transition-colors text-sm"
          >
            Gesprek aanvragen
          </Link>
          <Link
            href="/whitepaper"
            data-testid="home-cta-bottom-whitepaper"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors text-sm"
          >
            Download whitepaper
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <DienstenPreview />
      <Waarom />
      <CTA />
    </>
  );
}
