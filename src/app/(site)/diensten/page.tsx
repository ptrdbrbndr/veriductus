import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Veriductus levert gespecialiseerde software testers via het Ductus-gildemodel. Ontdek onze diensten: testautomatisering, QA-architectuur, security testing en meer.",
};

const DIENSTEN = [
  {
    slug: "test-automatisering",
    titel: "Test Automatisering",
    korte_beschrijving: "Geautomatiseerde testsuites die bugs vangen vóór productie.",
    beschrijving:
      "Onze gilde-ondernemers bouwen robuuste geautomatiseerde testsuites — van unit- en integratietests tot volledige E2E-pijplijnen. Frameworks: Playwright, Cypress, Selenium, Jest, pytest.",
    foto: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=700&q=80&auto=format&fit=crop",
    fotoAlt: "Developer schrijft code op een laptop",
    accentKleur: "#4776A8",
  },
  {
    slug: "qa-architectuur",
    titel: "QA Architectuur",
    korte_beschrijving: "Een schaalbaar testkader dat past bij uw tech stack.",
    beschrijving:
      "Geen generieke methodiek over uw organisatie leggen. Wij ontwerpen een QA-strategie die aansluit op uw teams, tools en doelstellingen — en die met u meegroeit.",
    foto: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format&fit=crop",
    fotoAlt: "Team bespreekt architectuur op een whiteboard",
    accentKleur: "#5FC38E",
  },
  {
    slug: "kwaliteitsmonitoring",
    titel: "Kwaliteitsmonitoring",
    korte_beschrijving: "Continue zichtbaarheid op softwarekwaliteit.",
    beschrijving:
      "Dashboards, rapportages en signalering bij kwaliteitsafwijkingen. Problemen worden vroeg gesignaleerd, niet laat ontdekt.",
    foto: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop",
    fotoAlt: "Analytics dashboard met kwaliteitsmetrieken",
    accentKleur: "#4776A8",
  },
  {
    slug: "cicd-integratie",
    titel: "CI/CD Integratie",
    korte_beschrijving: "Kwaliteitspoorten in uw bestaande pipeline.",
    beschrijving:
      "GitHub Actions, GitLab CI, Azure DevOps, Jenkins — wij bouwen kwaliteitscontroles in uw leverstraat zodat gebroken code nooit productie bereikt.",
    foto: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format&fit=crop",
    fotoAlt: "Serverinfrastructuur en deployment pipeline",
    accentKleur: "#1D1E4B",
  },
  {
    slug: "team-coaching",
    titel: "Team Coaching",
    korte_beschrijving: "Ontwikkelteams leren denken in kwaliteit.",
    beschrijving:
      "Van mindset tot tooling. Wij trainen en begeleiden teams in TDD, BDD en quality-first denken. Kennisoverdracht is altijd ons doel.",
    foto: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80&auto=format&fit=crop",
    fotoAlt: "Team samenwerking in een kantooromgeving",
    accentKleur: "#5FC38E",
  },
  {
    slug: "security-testing",
    titel: "Security Testing",
    korte_beschrijving: "OWASP-gebaseerde kwetsbaarheidstests.",
    beschrijving:
      "Penetratietests, vulnerability scanning en security code reviews. Wij vinden kwetsbaarheden vóór aanvallers dat doen.",
    foto: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=700&q=80&auto=format&fit=crop",
    fotoAlt: "Beveiligingsanalyse en cybersecurity",
    accentKleur: "#4776A8",
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 px-6 text-center bg-white border-b border-[#E2E4EC]">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Uitsluitend software testen
          </div>
          <h1 className="text-4xl font-extrabold text-[#1D1E4B] mb-4">
            Onze diensten
          </h1>
          <p className="text-[#3A3B5C] text-lg">
            Gespecialiseerde software testers via het Ductus-gildemodel. Geen andere
            disciplines — alleen het beste op het gebied van software testen.
          </p>
        </div>
      </section>

      {/* Diensten grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIENSTEN.map((d) => (
            <div
              key={d.slug}
              data-testid={`dienst-${d.slug}`}
              className="bg-white rounded-2xl border border-[#E2E4EC] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Foto header */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={d.foto}
                  alt={d.fotoAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${d.accentKleur}E6 0%, ${d.accentKleur}55 50%, transparent 100%)`,
                  }}
                />
                {/* Titel op de foto */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-lg font-extrabold text-white drop-shadow-sm leading-tight">
                    {d.titel}
                  </h2>
                  <p className="text-xs text-white/90 font-medium mt-0.5">
                    {d.korte_beschrijving}
                  </p>
                </div>
              </div>

              {/* Kaartinhoud */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-[#3A3B5C] leading-relaxed flex-1">
                  {d.beschrijving}
                </p>
                <Link
                  href="/contact"
                  data-testid={`dienst-${d.slug}-cta`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: d.accentKleur }}
                >
                  Meer weten → gesprek aanvragen
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #1D1E4B, #4776A8)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-3">Welke dienst past bij u?</h2>
          <p className="text-white/80 mb-6 text-sm">
            We denken graag mee. Een vrijblijvend gesprek kost niets.
          </p>
          <Link
            href="/contact"
            data-testid="diensten-cta"
            className="inline-flex px-6 py-3 rounded-lg font-semibold text-[#1D1E4B] bg-white hover:bg-white/90 transition-colors text-sm"
          >
            Gesprek aanvragen
          </Link>
        </div>
      </section>
    </>
  );
}
