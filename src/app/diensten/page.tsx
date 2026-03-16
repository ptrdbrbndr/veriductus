import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Veriductus levert gespecialiseerde software testers via het Ductus-gildemodel. Ontdek onze diensten: testautomatisering, QA-architectuur, security testing en meer.",
};

const DIENSTEN = [
  {
    slug: "test-automatisering",
    titel: "Test Automatisering",
    icon: "⚙️",
    korte_beschrijving: "Geautomatiseerde testsuites die bugs vangen vóór productie.",
    beschrijving:
      "Onze gilde-ondernemers bouwen robuuste geautomatiseerde testsuites — van unit- en integratietests tot volledige E2E-pijplijnen. Frameworks: Playwright, Cypress, Selenium, Jest, pytest.",
  },
  {
    slug: "qa-architectuur",
    titel: "QA Architectuur",
    icon: "🏗️",
    korte_beschrijving: "Een schaalbaar testkader dat past bij uw tech stack.",
    beschrijving:
      "Geen generieke methodiek over uw organisatie leggen. Wij ontwerpen een QA-strategie die aansluit op uw teams, tools en doelstellingen — en die met u meegroeit.",
  },
  {
    slug: "kwaliteitsmonitoring",
    titel: "Kwaliteitsmonitoring",
    icon: "📊",
    korte_beschrijving: "Continue zichtbaarheid op softwarekwaliteit.",
    beschrijving:
      "Dashboards, rapportages en signalering bij kwaliteitsafwijkingen. Problemen worden vroeg gesignaleerd, niet laat ontdekt.",
  },
  {
    slug: "cicd-integratie",
    titel: "CI/CD Integratie",
    icon: "🔗",
    korte_beschrijving: "Kwaliteitspoorten in uw bestaande pipeline.",
    beschrijving:
      "GitHub Actions, GitLab CI, Azure DevOps, Jenkins — wij bouwen kwaliteitscontroles in uw leverstraat zodat gebroken code nooit productie bereikt.",
  },
  {
    slug: "team-coaching",
    titel: "Team Coaching",
    icon: "🎓",
    korte_beschrijving: "Ontwikkelteams leren denken in kwaliteit.",
    beschrijving:
      "Van mindset tot tooling. Wij trainen en begeleiden teams in TDD, BDD en quality-first denken. Kennisoverdracht is altijd ons doel.",
  },
  {
    slug: "security-testing",
    titel: "Security Testing",
    icon: "🔒",
    korte_beschrijving: "OWASP-gebaseerde kwetsbaarheidstests.",
    beschrijving:
      "Penetratietests, vulnerability scanning en security code reviews. Wij vinden kwetsbaarheden vóór aanvallers dat doen.",
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIENSTEN.map((d) => (
            <div
              key={d.slug}
              data-testid={`dienst-${d.slug}`}
              className="bg-white rounded-2xl p-8 border border-[#E2E4EC] hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="text-4xl mb-4">{d.icon}</div>
              <h2 className="text-xl font-bold text-[#1D1E4B] mb-2">{d.titel}</h2>
              <p className="text-sm font-medium text-[#4776A8] mb-3">{d.korte_beschrijving}</p>
              <p className="text-sm text-[#3A3B5C] leading-relaxed flex-1">{d.beschrijving}</p>
              <Link
                href="/contact"
                data-testid={`dienst-${d.slug}-cta`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#4776A8] hover:text-[#5FC38E] transition-colors"
              >
                Meer weten → gesprek aanvragen
              </Link>
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
