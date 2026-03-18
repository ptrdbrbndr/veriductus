# Quick Scan Rapport — [Bedrijfsnaam]

**Opgesteld door:** [Naam consultant], Veriductus
**Datum:** [Datum]
**Versie:** 1.0 — Vertrouwelijk

---

## Managementsamenvatting

[2–3 alinea's. Beschrijf kort: wie is de organisatie, wat was de aanleiding voor de scan, wat is de hoofdconclusie, en wat is de meest urgente aanbeveling.]

**Totaalscore kwaliteitsborging:** [X.X / 5.0]

| Dimensie | Score | Toelichting |
|---|---|---|
| Testproces | [1–5] | |
| Testautomatisering | [1–5] | |
| CI/CD-integratie | [1–5] | |
| Security testing | [1–5] | |
| Meetbaarheid | [1–5] | |
| Teamcultuur | [1–5] | |

---

## 1. Organisatiecontext

**Organisatie:** [Naam]
**Sector:** [Bijv. tech scale-up, zorg, overheid]
**Teamgrootte ontwikkeling:** [Aantal]
**Teamgrootte QA/testing:** [Aantal of "geen dedicated QA"]
**Applicatiescope:** [Korte beschrijving van het softwareproduct]
**Deploymentsfrequentie:** [Bijv. wekelijks, per sprint, continue]
**Gebruikte tech stack:** [Bijv. React, Node.js, PostgreSQL, AWS]

---

## 2. Bevindingen per dimensie

### 2.1 Testproces

**Score: [1–5]**

**Sterktes:**
- [Sterk punt 1]
- [Sterk punt 2]

**Knelpunten:**
- [Knelpunt 1]
- [Knelpunt 2]

**Detail:**
[Paragraaf met bevindingen uit documentenreview en interviews]

---

### 2.2 Testautomatisering

**Score: [1–5]**

**Sterktes:**
- [Sterk punt 1]

**Knelpunten:**
- [Knelpunt 1]
- [Knelpunt 2]

**Huidige tooling:**
| Tool | Gebruik | Status |
|---|---|---|
| [Bijv. Playwright] | [E2E tests] | [Actief / Verouderd / Niet gebruikt] |
| [Bijv. Jest] | [Unit tests] | |

**Testdekking (indien beschikbaar):** [X%] overall, [X%] kritieke paden

**Detail:**
[Paragraaf met bevindingen]

---

### 2.3 CI/CD-integratie

**Score: [1–5]**

**Huidige pipeline:**
```
[Schematische weergave van de pipeline-stappen]
Bijv.: Code commit → Linting → Unit tests → Build → Deploy staging → (handmatig) → Deploy productie
```

**Aanwezige kwaliteitspoorten:**
- [ ] Geautomatiseerde unit tests
- [ ] Statische code-analyse (linting / SAST)
- [ ] Integratietests
- [ ] Security scan
- [ ] Performance test (smoke)
- [ ] Geautomatiseerde E2E-tests

**Knelpunten:**
- [Knelpunt 1]

**Detail:**
[Paragraaf met bevindingen]

---

### 2.4 Security testing

**Score: [1–5]**

**Huidige aanpak:**
[Beschrijf wat de organisatie nu doet op security testing gebied]

**OWASP Top 10 — aandachtsgebieden:**
| Kwetsbaarheid | Status | Prioriteit |
|---|---|---|
| A01 Broken Access Control | [Getest / Onbekend / Risico] | [Hoog / Midden / Laag] |
| A02 Cryptographic Failures | | |
| A03 Injection | | |
| A04 Insecure Design | | |
| A05 Security Misconfiguration | | |
| A06 Vulnerable Components | | |
| A07 Auth Failures | | |
| A08 Software/Data Integrity | | |
| A09 Logging/Monitoring Failures | | |
| A10 Server-Side Request Forgery | | |

**Knelpunten:**
- [Knelpunt 1]

**Detail:**
[Paragraaf met bevindingen]

---

### 2.5 Meetbaarheid

**Score: [1–5]**

**Huidige kwaliteitsmetrieken:**
| Metriek | Wordt gemeten? | Frequentie | Waarde (indien bekend) |
|---|---|---|---|
| Testdekking (%) | Ja / Nee | | |
| Defect density (bugs/sprint) | Ja / Nee | | |
| Time-to-detect | Ja / Nee | | |
| Pipeline-slaagpercentage | Ja / Nee | | |

**Detail:**
[Paragraaf met bevindingen]

---

### 2.6 Teamcultuur

**Score: [1–5]**

**Sterktes:**
- [Sterk punt 1]

**Knelpunten:**
- [Knelpunt 1]

**Detail:**
[Paragraaf met bevindingen]

---

## 3. Top-3 risico's

### Risico 1 — [Naam risico]

**Ernst:** Hoog / Midden / Laag
**Kans:** Hoog / Midden / Laag
**Impact:** [Beschrijf de mogelijke gevolgen: bijv. "productiestoring, datalek, uitgestelde release"]
**Oorzaak:** [Beschrijf de onderliggende oorzaak]

---

### Risico 2 — [Naam risico]

**Ernst:** Hoog / Midden / Laag
**Kans:** Hoog / Midden / Laag
**Impact:** [...]
**Oorzaak:** [...]

---

### Risico 3 — [Naam risico]

**Ernst:** Hoog / Midden / Laag
**Kans:** Hoog / Midden / Laag
**Impact:** [...]
**Oorzaak:** [...]

---

## 4. Aanbevelingen

### Prioriteit 1 — Direct (binnen 4 weken)

**Aanbeveling:** [Concrete actie, bijv. "Voeg een SAST-tool (Snyk of SonarQube) toe aan de CI-pipeline"]
**Waarom:** [Onderbouwing]
**Inspanning:** [Klein / Middel / Groot]
**Verwacht resultaat:** [Bijv. "Kwetsbare dependencies automatisch gedetecteerd bij elke commit"]

---

### Prioriteit 2 — Korte termijn (1–3 maanden)

**Aanbeveling:** [Bijv. "Bouw de testdekking van de betalingsmodule op van 12% naar minimaal 60%"]
**Waarom:** [...]
**Inspanning:** [...]
**Verwacht resultaat:** [...]

---

### Prioriteit 3 — Middellange termijn (3–6 maanden)

**Aanbeveling:** [Bijv. "Structureer het testproces met een Definition of Done die kwaliteitscriteria bevat"]
**Waarom:** [...]
**Inspanning:** [...]
**Verwacht resultaat:** [...]

---

## 5. Vervolgstap

Op basis van de bevindingen in dit rapport adviseren wij:

☐ **Projecttraject** — [Korte beschrijving van de aanbevolen aanpak, scope en doorlooptijd]
☐ **Retainer** — [Beschrijving van doorlopende ondersteuning die past bij de situatie]
☐ **Nader overleg** — Wij plannen een gesprek om de opties te bespreken

Het Quick Scan-bedrag van €[bedrag] wordt volledig verrekend bij het starten van een vervolgtraject.

---

## 6. Methodologische noten

- Dit rapport is gebaseerd op [X] interviews, documentenreview en [wel/geen] live observatie van de CI/CD-pipeline
- De bevindingen reflecteren de situatie op [datum van de scan]
- Scores zijn gebaseerd op het Veriductus Kwaliteitsvolwassenheidsmodel v1.0
- Dit rapport is vertrouwelijk en uitsluitend bestemd voor [Bedrijfsnaam]

---

_© [Jaar] Veriductus | info@veriductus.nl | veriductus.nl_
