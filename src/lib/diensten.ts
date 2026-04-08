import type { LucideIcon } from "lucide-react";
import {
  Cog,
  LayoutDashboard,
  Activity,
  GitBranch,
  Users,
  ShieldCheck,
} from "lucide-react";

export interface Dienst {
  slug: string;
  titel: string;
  korte_beschrijving: string;
  beschrijving: string;
  foto: string;
  fotoAlt: string;
  accentKleur: string;
  icon: LucideIcon;
  heroSubtitel: string;
  details: string[];
  voordelen: string[];
  tools: string[];
  caseVoorbeeld: string;
  metaTitle: string;
  metaDescription: string;
}

export const DIENSTEN: Dienst[] = [
  {
    slug: "test-automatisering",
    titel: "Test Automatisering",
    korte_beschrijving: "Geautomatiseerde testsuites die bugs vangen voor productie.",
    beschrijving:
      "Onze gilde-ondernemers bouwen robuuste geautomatiseerde testsuites — van unit- en integratietests tot volledige E2E-pijplijnen. Frameworks: Playwright, Cypress, Selenium, Jest, pytest.",
    foto: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=700&q=80&auto=format&fit=crop",
    fotoAlt: "Developer schrijft code op een laptop",
    accentKleur: "#4776A8",
    icon: Cog,
    heroSubtitel:
      "Van handmatig testen naar een volledig geautomatiseerde pipeline — in weken, niet maanden.",
    details: [
      "Analyse van uw huidige testlandschap en identificatie van automatiseringskansen",
      "Opzet van een testframework dat past bij uw tech stack (Playwright, Cypress, Selenium, Jest, pytest)",
      "Implementatie van unit-, integratie- en end-to-end tests",
      "Integratie met uw CI/CD pipeline voor continue kwaliteitsbewaking",
      "Kennisoverdracht aan uw team zodat u zelfstandig verder kunt",
    ],
    voordelen: [
      "Tot 80% snellere feedbackloop bij code-wijzigingen",
      "Regressiebugs worden automatisch onderschept",
      "Meer vertrouwen bij deployments naar productie",
      "Uw team houdt meer tijd over voor nieuwe features",
    ],
    tools: ["Playwright", "Cypress", "Selenium", "Jest", "pytest", "GitHub Actions", "GitLab CI"],
    caseVoorbeeld:
      "Een fintech scale-up had 2 weken doorlooptijd per release door handmatige regressietests. Na automatisering: releases binnen 1 dag, 94% minder productie-incidenten.",
    metaTitle: "Test Automatisering — Veriductus",
    metaDescription:
      "Geautomatiseerde testsuites die bugs vangen voor productie. Playwright, Cypress, Selenium en meer. Vraag een vrijblijvend gesprek aan.",
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
    icon: LayoutDashboard,
    heroSubtitel:
      "Een teststrategie die past bij uw organisatie — niet andersom.",
    details: [
      "Assessment van uw huidige QA-volwassenheid en gewenste doelstellingen",
      "Ontwerp van een testpiramide afgestemd op uw applicatiearchitectuur",
      "Definitie van kwaliteitspoorten per fase van uw SDLC",
      "Selectie en evaluatie van tools en frameworks",
      "Roadmap voor implementatie in beheersbare stappen",
    ],
    voordelen: [
      "Structuur en richting voor uw gehele QA-aanpak",
      "Geen overlappende of ontbrekende testlagen meer",
      "Meetbare kwaliteitsdoelen per sprint of release",
      "Schaalbaarheid: de architectuur groeit mee met uw team",
    ],
    tools: ["TestRail", "Zephyr", "Xray", "Azure Test Plans", "Allure", "SonarQube"],
    caseVoorbeeld:
      "Een SaaS-bedrijf met 8 teams had geen gedeelde teststrategie. Na het ontwerp van een QA-architectuur: 60% minder dubbel testwerk, eenduidig kwaliteitsdashboard voor management.",
    metaTitle: "QA Architectuur — Veriductus",
    metaDescription:
      "Een schaalbaar testkader dat past bij uw tech stack. QA-strategie op maat, geen generieke aanpak. Vraag een vrijblijvend gesprek aan.",
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
    icon: Activity,
    heroSubtitel:
      "Weet op elk moment hoe het staat met de kwaliteit van uw software.",
    details: [
      "Opzet van kwaliteitsdashboards met real-time metrieken",
      "Configuratie van alerts bij kwaliteitsdrempels (code coverage, bug density, lead time)",
      "Periodieke kwaliteitsrapportages voor management en stakeholders",
      "Trend-analyse: zien waar kwaliteit verbetert of verslechtert",
      "Integratie met bestaande tooling (Jira, SonarQube, Grafana)",
    ],
    voordelen: [
      "Problemen vroeg signaleren in plaats van laat ontdekken",
      "Datagedreven beslissingen over kwaliteitsinvesteringen",
      "Transparantie naar stakeholders over softwarekwaliteit",
      "Objectieve maatstaven in plaats van onderbuikgevoel",
    ],
    tools: ["SonarQube", "Grafana", "Datadog", "Jira", "Azure DevOps", "Allure"],
    caseVoorbeeld:
      "Een e-commerce platform had geen inzicht in regressietrends. Na implementatie van kwaliteitsmonitoring: proactieve bugfixes, 45% minder productie-incidenten per kwartaal.",
    metaTitle: "Kwaliteitsmonitoring — Veriductus",
    metaDescription:
      "Continue zichtbaarheid op softwarekwaliteit. Dashboards, alerting en rapportages. Vraag een vrijblijvend gesprek aan.",
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
    icon: GitBranch,
    heroSubtitel:
      "Kwaliteitscontroles die automatisch meedraaien bij elke code-wijziging.",
    details: [
      "Integratie van testsuites in uw bestaande CI/CD pipeline",
      "Quality gates: builds falen automatisch bij kwaliteitsdrempels",
      "Parallelle testuitvoering voor snelle feedback",
      "Code quality checks (linting, static analysis, security scanning)",
      "Deployment safeguards: canary releases, feature flags, rollback-mechanismen",
    ],
    voordelen: [
      "Gebroken code bereikt nooit meer productie",
      "Snellere feedback voor developers bij pull requests",
      "Consistente kwaliteitsstandaard over alle teams",
      "Minder handmatig werk bij releases",
    ],
    tools: ["GitHub Actions", "GitLab CI", "Azure DevOps", "Jenkins", "ArgoCD", "Tekton"],
    caseVoorbeeld:
      "Een healthtech-startup had geen quality gates in hun pipeline. Na CI/CD-integratie: van 3 uur handmatige checks naar 12 minuten geautomatiseerd, nul productie-rollbacks in 6 maanden.",
    metaTitle: "CI/CD Integratie — Veriductus",
    metaDescription:
      "Kwaliteitspoorten in uw CI/CD pipeline. GitHub Actions, GitLab CI, Azure DevOps en meer. Vraag een vrijblijvend gesprek aan.",
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
    icon: Users,
    heroSubtitel:
      "Uw team leert zelf kwaliteit borgen — wij maken onszelf overbodig.",
    details: [
      "Assessment van huidige testkennnis en -vaardigheden in het team",
      "Hands-on workshops: TDD, BDD, testontwerp, exploratief testen",
      "Pair testing en code review sessies met uw developers",
      "Coaching on the job: begeleiding tijdens sprints",
      "Opzetten van interne quality champions die het team zelfstandig verder helpen",
    ],
    voordelen: [
      "Structurele verbetering in plaats van eenmalige interventie",
      "Developers schrijven zelf betere tests",
      "Minder afhankelijkheid van externe QA-specialisten",
      "Quality-first cultuur die beklijft na het traject",
    ],
    tools: ["Cucumber", "SpecFlow", "JUnit", "NUnit", "Mocha", "Testing Library"],
    caseVoorbeeld:
      "Een team van 12 developers schreef geen tests. Na 3 maanden coaching: 70% code coverage, TDD als standaard in alle sprints, en het team draait nu zelfstandig.",
    metaTitle: "Team Coaching — Veriductus",
    metaDescription:
      "Ontwikkelteams leren denken in kwaliteit. TDD, BDD, testontwerp en quality-first coaching. Vraag een vrijblijvend gesprek aan.",
  },
  {
    slug: "security-testing",
    titel: "Security Testing",
    korte_beschrijving: "OWASP-gebaseerde kwetsbaarheidstests.",
    beschrijving:
      "Penetratietests, vulnerability scanning en security code reviews. Wij vinden kwetsbaarheden voor aanvallers dat doen.",
    foto: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=700&q=80&auto=format&fit=crop",
    fotoAlt: "Beveiligingsanalyse en cybersecurity",
    accentKleur: "#4776A8",
    icon: ShieldCheck,
    heroSubtitel:
      "Kwetsbaarheden vinden voor aanvallers dat doen — gebaseerd op OWASP Top 10.",
    details: [
      "Penetratietests op web- en mobiele applicaties (OWASP ASVS)",
      "Geautomatiseerde vulnerability scanning van uw codebase en dependencies",
      "Security code reviews: handmatige analyse van kritieke codepaden",
      "Compliance checks: NIS2, AVG/GDPR, ISO 27001",
      "Rapportage met risicobeoordeling en geprioriteerde aanbevelingen",
    ],
    voordelen: [
      "Kwetsbaarheden gevonden en verholpen voor ze uitgebuit worden",
      "Compliance met NIS2, AVG en branche-specifieke normen",
      "Vertrouwen van klanten en partners in uw beveiliging",
      "Lagere kosten: preventie is goedkoper dan incidentrespons",
    ],
    tools: ["OWASP ZAP", "Burp Suite", "Snyk", "Trivy", "SonarQube", "Semgrep"],
    caseVoorbeeld:
      "Een overheidsinstelling liet een security audit uitvoeren op hun burgerportaal. Resultaat: 14 kwetsbaarheden gevonden (waarvan 3 kritiek), alle verholpen voor de livegang, NIS2-compliance behaald.",
    metaTitle: "Security Testing — Veriductus",
    metaDescription:
      "OWASP-gebaseerde penetratietests en kwetsbaarheidstests. Security code reviews en compliance checks. Vraag een vrijblijvend gesprek aan.",
  },
];

export function getDienstBySlug(slug: string): Dienst | undefined {
  return DIENSTEN.find((d) => d.slug === slug);
}
