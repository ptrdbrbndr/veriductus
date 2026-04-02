import React, { useState } from 'react';
import { ChevronDown, FileText, TrendingUp, Target, Users, Zap } from 'lucide-react';

export default function StrategyPage() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const Section = ({ id, title, children, icon: Icon }) => (
    <div className="border-l-4 border-blue-600 pl-6 py-6 mb-8">
      <button
        onClick={() => toggleSection(id)}
        className="flex items-center gap-3 w-full text-left group hover:opacity-70 transition"
      >
        <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 flex-shrink-0 ml-auto transition-transform ${
            expandedSections[id] ? 'rotate-180' : ''
          }`}
        />
      </button>
      {expandedSections[id] && (
        <div className="mt-4 text-gray-700 space-y-4">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Strategie Veriductus B.V. 2026
          </h1>
          <p className="text-lg text-gray-600">
            Productvision • Business Model Canvas • Marketingplan
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Versie 1.0 | Maart 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Executive Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-gray-700 mb-4">
            Veriductus B.V. is een gespecialiseerde QA- en softwarekwaliteitsconsultancy gevestigd in Nederland.
            Met <strong>12+ jaar ervaring</strong>, <strong>150+ afgeronde projecten</strong> en een <strong>klantbehoud van 98%</strong>
            biedt Veriductus een unieke combinatie van technische diepgang, strategisch advies en team coaching.
          </p>

          <div className="bg-white p-4 rounded border-l-4 border-blue-600 my-4">
            <p className="font-semibold text-gray-900">
              Kernbelofte: Veriductus zorgt dat uw software doet wat het moet doen — structureel, meetbaar en duurzaam.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-gray-900 mb-3">Ambitie 2026:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Omzetgroei van 30% ten opzichte van 2025</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Minimaal 20 nieuwe klantrelaties</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Uitbouw van retainer-portfolio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Sterke online zichtbaarheid op kernzoektermen</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Visie & Missie */}
        <Section id="visie" title="Visie & Missie" icon={Target}>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Visie-statement</h3>
              <div className="bg-gray-100 border-l-4 border-blue-600 p-4 italic text-gray-900 font-semibold">
                "Software die werkt. Beyond the Bug."
              </div>
              <p className="mt-4 text-gray-700">
                Veriductus maakt software kwalitatief betrouwbaar — structureel en schaalbaar. Wij zijn de partner
                voor organisaties die niet langer willen accepteren dat bugs en productieproblemen de norm zijn.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Missie</h3>
              <p className="text-gray-700">
                Elk softwareteam in Nederland de tools, architectuur en kennis geven om kwaliteit structureel te borgen.
              </p>
            </div>
          </div>
        </Section>

        {/* Diensten */}
        <Section id="diensten" title="Diensten & Waardepropositie" icon={Zap}>
          <div className="space-y-4">
            <div className="grid gap-4">
              {[
                { title: "Test Automatisering", desc: "Geautomatiseerde testsuites (unit, integratie, E2E)" },
                { title: "QA Architectuur", desc: "Ontwerp van schaalbaar testkader" },
                { title: "Kwaliteitsmonitoring", desc: "Continue monitoring met dashboards" },
                { title: "CI/CD Integratie", desc: "Kwaliteitspoorten in pipelines" },
                { title: "Team Coaching", desc: "Training in quality-first denken" },
                { title: "Security Testing", desc: "OWASP-gebaseerde assessments" }
              ].map((service, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-gray-900 mb-4">Value Propositions</h3>
              <div className="space-y-3">
                {[
                  "Minder bugs in productie (gemiddeld 40% reductie)",
                  "Hogere leveringssnelheid met CI/CD kwaliteitspoorten",
                  "Lagere risico's met security testing",
                  "Kennisoverdracht - teams worden zelf beter",
                  "Langdurige partner (98% klantbehoud)",
                  "Bewezen track record (150+ projecten)"
                ].map((prop, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg leading-none mt-1">✓</span>
                    <span className="text-gray-700">{prop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Revenue Streams */}
        <Section id="revenue" title="Revenue Streams" icon={TrendingUp}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left">Stroom</th>
                  <th className="p-3 text-left">Model</th>
                  <th className="p-3 text-right">Aandeel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stroom: "Consultancy & implementatie", model: "Uurtarief/fixed-price", aandeel: "~55%" },
                  { stroom: "Retainer/partnerschap", model: "Maandelijks vaste fee", aandeel: "~25%" },
                  { stroom: "Training & workshops", model: "Vaste prijzen per dag", aandeel: "~12%" },
                  { stroom: "Security testing", model: "Fixed-price assessment", aandeel: "~8%" }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium text-gray-900">{row.stroom}</td>
                    <td className="p-3 text-gray-700">{row.model}</td>
                    <td className="p-3 text-right font-bold text-blue-600">{row.aandeel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="font-bold text-gray-900 mb-2">Tariefindicatie (marktconform NL):</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Consultancy uurtarief: €115–€165 excl. btw</li>
              <li>• Dagrate: €920–€1.320 excl. btw</li>
              <li>• Retainer: vanaf €2.500/maand</li>
              <li>• Training (incompany dag): €2.500–€4.500</li>
            </ul>
          </div>
        </Section>

        {/* Doelen 2026 */}
        <Section id="doelen" title="Doelen & KPI's 2026" icon={Users}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Omzet & Groei</h3>
              <div className="space-y-3">
                {[
                  { label: "Omzetgroei YoY", value: "+30%" },
                  { label: "Nieuwe klanten", value: "20" },
                  { label: "Klantbehoud", value: ">96%" },
                  { label: "Gem. contractwaarde", value: ">€35.000" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-bold text-blue-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Marketing & Zichtbaarheid</h3>
              <div className="space-y-3">
                {[
                  { label: "LinkedIn-volgers", value: "+500" },
                  { label: "Website traffic", value: "500+/maand" },
                  { label: "Google-ranking", value: "Top 5" },
                  { label: "Leads via content", value: "60+/jaar" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-bold text-blue-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Roadmap */}
        <Section id="roadmap" title="Roadmap 2026" icon={FileText}>
          <div className="space-y-4">
            {[
              { q: "Q1", items: ["SEO-optimalisatie website", "LinkedIn-cadans", "Whitepaper 'Staat van QA'", "5 klantgesprekken"] },
              { q: "Q2", items: ["Webinar 'Test Automatisering'", "LinkedIn Ads campaign", "5 nieuwe klanten", "Eerste klantcase"] },
              { q: "Q3", items: ["Security Testing whitepaper", "Referral-programma", "TestNet-aanwezigheid", "Retainer-portfolio"] },
              { q: "Q4", items: ["Veriductus Meetup", "Jaarrapportage", "Review KPI's", "Plan 2027"] }
            ].map((quarter, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">{quarter.q} 2026</h4>
                <ul className="space-y-2">
                  {quarter.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="text-blue-600 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <div className="border-t-2 border-gray-200 pt-8 mt-12 text-center text-gray-600 text-sm">
          <p><strong>Veriductus B.V.</strong> | info@veriductus.nl | +31 (0)85 7444 544</p>
          <p>Versie 1.0 | Maart 2026</p>
        </div>
      </div>
    </div>
  );
}
