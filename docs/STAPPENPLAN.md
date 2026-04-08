# Stappenplan — Veriductus

> Status per 2026-04-08

---

## Wat al gebouwd/live is

- Productvision vastgesteld v2.0 — gildemodel-framing (`PRODUCT-VISION.md`)
- Business Model Canvas uitgewerkt (`business-model-canvas.md`)
- Marketing- en businessplan 2026 geschreven (`marketingplan.md`)
- Diensten gedefinieerd: Test Automatisering, QA Architectuur, Kwaliteitsmonitoring, CI/CD Integratie, Team Coaching, Security Testing
- SECURITY-BASELINE.md aanwezig (privacy-niveau Midden)
- Next.js 16 website gebouwd en live op veriductus.nl (2026-03-16)
  - Homepage, Diensten (met foto-headers), Word Gilde-lid, Contact, Privacy
  - API routes: /api/intake en /api/aanmelden
  - Supabase tabellen: leads, gilde_kandidaten (RLS ingeschakeld)
  - Vercel deployment actief, env vars ingesteld
- **Intern portaal** (`/portaal`) live achter Supabase login (2026-03-19)
  - Login, dashboard, en 4 doc-pagina's: LinkedIn, CRM, Whitepaper, Quick Scan
  - Account: tester@ductus.nl

Veriductus is een **detacheringsorganisatie van software testers** via het Ductus-gildemodel.

---

## FASE 1 — Fundament (Q1 2026)

### Stap 1 — Website live en SEO-gereed
Lanceer `veriductus.nl` met:
- Homepage met heldere waardepropositie: "Software die werkt. Beyond the Bug."
- Aparte landingspagina per dienst (6 pagina's): Test Automatisering, QA Architectuur, Kwaliteitsmonitoring, CI/CD Integratie, Team Coaching, Security Testing
- Over-pagina met 12+ jaar ervaring, 150+ projecten, 98% klantbehoud als social proof
- Contactformulier + intakepagina ("Vrijblijvend gesprek aanvragen")
- Technische SEO: structured data (LocalBusiness, Service), pagespeed ≥ 90, meta-optimalisatie
- `data-testid` op alle formulieren voor eventuele E2E-tests

Prioritaire zoektermen:
- "QA consultancy nederland"
- "test automatisering consultancy"
- "software kwaliteitsborging"
- "CI/CD testautomatisering"

### Stap 2 — LinkedIn-aanwezigheid inrichten
- Bedrijfspagina volledig ingevuld: logo, banner, beschrijving, diensten
- Contentkalender opzetten: 3–4 posts/week (mix inzichten, tips, resultaten, cases)
- LinkedIn-profiel directeur bijwerken met Veriductus als huidige functie
- Eerste 10 posts gepland en gepubliceerd voor de lancering

### Stap 3 — CRM en salesproces inrichten
Stel een eenvoudig CRM in (HubSpot Free of Notion-database) voor:
- Leadregistratie: contactgegevens, segment, herkomst, status
- Pipeline-fases: Lead → Gekwalificeerd → Intake → Offerte → Gewonnen / Verloren
- Standaard follow-up-templates per fase
- Herinneringen voor follow-up (max. 24 uur na inbound lead)

### Stap 4 — Whitepaper "De staat van QA in Nederlandse softwareteams"
Schrijf, ontwerp en publiceer:
- Omvang: 12–16 pagina's (PDF)
- Inhoud: marktonderzoek, trends, OWASP/NIS2 implicaties, praktische aanbevelingen
- Gated: e-mailadres vereist voor download → leads in CRM
- Promotie: LinkedIn, e-mail, TestNet-community

KPI: 200+ downloads in kwartaal na publicatie.

### Stap 5 — Quick Scan-aanbod standaardiseren
Ontwikkel een vaste Quick Scan-methodiek:
- Duur: 1–2 dagdelen
- Output: schriftelijk rapport met huidige kwaliteitsstand, top-3 risico's, aanbevelingen
- Prijs: €1.500–€2.500 (verrekend bij vervolgopdracht)
- Template rapport gereed
- Procedure voor offerte en planning vastgelegd

---

## FASE 2 — Eerste klanten en bewijsmateriaal (Q2 2026)

### Stap 6 — 5 nieuwe klanten onboarden
Via het salesproces (intake → quick scan → offerte → kick-off):
- Doelgroep prioriteit: tech scale-ups (50–250 mw) en mid-market IT
- Minimaal 2 klanten via referral/netwerk, 3 via inbound of LinkedIn
- Elk nieuw traject: heldere kickoff, doelstellingen, meetpunten vastgelegd

### Stap 7 — Webinar: "Test Automatisering in 90 dagen"
Organiseer een live webinar (45–60 min + Q&A):
- Platform: Zoom of Hopin
- Inhoud: praktisch traject van 0 naar geautomatiseerde testpipeline
- Registratie via landingspagina op veriductus.nl
- Replay beschikbaar als gated content

KPI: 100+ registraties, 40% live aanwezigheid.

### Stap 8 — Eerste klantcase publiceren
Documenteer een succesvol afgerond traject als case study:
- Geanonimiseerde sector en bedrijfsgrootte
- Probleem, aanpak, resultaat (meetbaar: bugreductie %, snellere releases)
- PDF + webpagina
- Promotie via LinkedIn en nieuwsbrief

### Stap 9 — LinkedIn Ads campagne starten
- Budget: €1.000/mnd
- Doelgroep: CTO, Head of Engineering, QA Lead in NL bij bedrijven 50–1.000 mw
- Advertentietype: Lead Gen Form (directe intakeaanvraag)
- A/B-test: twee varianten van de waardepropositie

### Stap 10 — Retainer-aanbod formaliseren
Ontwikkel een vaste retainer-structuur voor doorlopende samenwerking:
- Starterstier: €2.500/mnd (4 dagdelen coaching + monitoring)
- Groeitier: €5.000/mnd (8 dagdelen + security check + rapportage)
- Contractduur: minimaal 3 maanden
- Voordelen voor klant: prioriteit in planning, kwartaalrapportage, directe lijn

---

## FASE 3 — Marktpositie versterken (Q3 2026)

### Stap 11 — Security Testing whitepaper publiceren
- Titel: "Security Testing voor niet-security-specialisten"
- OWASP Top 10 vertaald naar praktische checklijst voor ontwikkelteams
- Gated content → leads in CRM

### Stap 12 — Referral-programma formaliseren
- Incentive voor bestaande klanten: gratis workshopdag (waarde €2.500) bij succesvolle introductie
- Procedure: introductie-e-mail template, follow-up door toegewezen consultant
- Tracking: registreer herkomst in CRM

### Stap 13 — TestNet-aanwezigheid
- Registreer als exhibitor of vraag spreekslot aan voor TestNet-evenement
- Presentatieonderwerp: "Kwaliteitsborging voor CMMN-processen" of "40% minder bugs: een praktijkcase"
- Leads verzamelen via badge-scan of visitekaartjes

### Stap 14 — Overheid/zorg-segment activeren
- Identificeer 20 relevante aanbestedingen (TenderNed) in zorg en overheid voor QA-diensten
- Bouw track record op met één publieke-sector klant als referentie
- Zorg voor ISO 27001 / BIO-kennis bij consultants die dit segment bedienen

---

## FASE 4 — Schaal en structuur (Q4 2026)

### Stap 15 — Veriductus Meetup organiseren
- Drempelvrij netwerkevenement voor QA-professionals in Nederland
- Locatie: Amsterdam of Utrecht, max. 50 deelnemers
- Programma: 2 presentaties + netwerktijd
- Doel: community building + zichtbaarheid

### Stap 16 — Jaarrapportage en benchmark publiceren
- "Staat van softwarekwaliteit in Nederland 2026" — benchmarkrapport op basis van eigen projectdata
- PR-moment: persberichten naar vakbladen (Computable, Tweakers Pro)
- Uitgebreide LinkedIn-campagne

### Stap 17 — Plan 2027 opstellen
Review alle KPI's 2026:
- Omzetgroei vs. doel (+30%)
- Nieuwe klanten vs. doel (20)
- Retainer-aandeel vs. doel (>25%)
- NPS meting uitvoeren bij alle actieve klanten

Op basis van resultaten: bepaal capaciteitsuitbreiding (freelancers, vaste medewerkers), nieuwe diensten (bijv. AI Testing als apart aanbod), en geografische uitbreiding.

---

## STATUS OVERZICHT

> Legenda: ✅ Volledig klaar | 🔄 Deliverable gereed, handmatige actie open | ❌ Nog niet gestart

| Stap | Fase | Prioriteit | Status | Toelichting |
|---|---|---|---|---|
| 1. Website live + SEO | 1 | Kritiek | ✅ | Live op veriductus.nl, 6 dienstpagina's, over-pagina, structured data (LocalBusiness+Service), portaal, foto-headers, Quick Scan formulier |
| 2. LinkedIn-aanwezigheid | 1 | Kritiek | ✅ | Pagina live: linkedin.com/company/veriductus — content + 10 posts klaar in `docs/linkedin/` |
| 3. CRM + salesproces | 1 | Kritiek | ✅ | Templates + pipeline-opzet klaar in `docs/crm/` — CRM leadoverzicht in portaal (`/portaal/leads`) met Supabase-tabel |
| 4. Whitepaper QA-staat | 1 | Hoog | ✅ | Gated pagina live op `/whitepaper`, PDF gegenereerd (`public/whitepaper-qa-staat-nl.pdf`, 280 KB), download via e-mail gate + Resend |
| 5. Quick Scan standaardiseren | 1 | Hoog | ✅ | Methodiek, rapport-template, offerteprocedure + publieke aanvraagpagina (`/quick-scan`) met Turnstile CAPTCHA |
| 6. 5 nieuwe klanten | 2 | Kritiek | ❌ | |
| 7. Webinar testautomatisering | 2 | Hoog | ❌ | |
| 8. Klantcase publiceren | 2 | Hoog | ❌ | |
| 9. LinkedIn Ads | 2 | Middel | ❌ | |
| 10. Retainer-aanbod formaliseren | 2 | Hoog | ❌ | |
| 11. Security whitepaper | 3 | Middel | ❌ | |
| 12. Referral-programma | 3 | Middel | ❌ | |
| 13. TestNet-aanwezigheid | 3 | Middel | ❌ | |
| 14. Overheid/zorg-segment | 3 | Laag | ❌ | |
| 15. Veriductus Meetup | 4 | Middel | ❌ | |
| 16. Jaarrapportage | 4 | Middel | ❌ | |
| 17. Plan 2027 | 4 | Hoog | ❌ | |

## OPENSTAANDE ACTIES (handmatig)

| Prioriteit | Actie |
|---|---|
| ~~Kritiek~~ | ~~LinkedIn bedrijfspagina aanmaken + eerste 10 posts publiceren~~ ✅ linkedin.com/company/veriductus |
| ~~Kritiek~~ | ~~HubSpot Free account aanmaken + pipeline inrichten~~ ✅ CRM leadoverzicht nu in portaal (`/portaal/leads`) |
| ~~Hoog~~ | ~~Whitepaper als PDF opmaken → sla op als `public/whitepaper-qa-staat-nl.pdf` → deploy naar Vercel~~ ✅ PDF gegenereerd via Playwright script |

## NIEUW GEBOUWD (2026-04-08)

- 6 aparte landingspagina's per dienst (`/diensten/[slug]`) met hero, details, voordelen, tools, praktijkvoorbeeld en CTA
- Over-pagina (`/over`) met social proof: 12+ jaar, 150+  projecten, 98% klantbehoud, gildemodel-uitleg, tijdlijn
- Structured data (JSON-LD): ProfessionalService + OfferCatalog met 6 diensten
- Quick Scan aanvraagformulier (`/quick-scan`) met Turnstile CAPTCHA → leads tabel (herkomst: quick-scan)
- CRM leadoverzicht in portaal (`/portaal/leads`) — tabel met naam, bedrijf, e-mail, herkomst, datum
- Portaal dashboard uitgebreid met Leads-card
- Nav bijgewerkt met "Over ons" link
- Footer bijgewerkt met "Over ons" link
- Gedeelde diensten-data (`src/lib/diensten.ts`) voor consistentie tussen overzicht en detailpagina's
- Whitepaper PDF gegenereerd (`public/whitepaper-qa-staat-nl.pdf`, 280 KB) via `scripts/generate-whitepaper-pdf.ts`
