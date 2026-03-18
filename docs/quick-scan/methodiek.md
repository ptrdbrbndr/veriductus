# Quick Scan Methodiek — Veriductus

_Versie 1.0 | Maart 2026_

---

## Wat is de Quick Scan?

De Veriductus Quick Scan is een gestructureerde doorlichting van het softwaretestproces, de tooling en de teamstructuur van een organisatie. In 1–2 dagdelen leveren wij een schriftelijk rapport op met de huidige kwaliteitsstand, de top-3 risico's en concrete aanbevelingen.

**Doel:** Snel inzicht geven in de sterke punten en gaten in de kwaliteitsborging — zonder maandenlang engagement.

**Prijs:** €1.500–€2.500 (excl. btw), afhankelijk van teamgrootte en scope.
**Verrekening:** Wordt volledig verrekend bij een vervolgtraject.

---

## Scope en afbakening

De Quick Scan richt zich op:
- Het testproces (aanpak, eigenaarschap, fases)
- Testautomatisering (tooling, dekking, stabiliteit)
- CI/CD en kwaliteitspoorten
- Security testing (basis)
- Teamcultuur rond kwaliteit

**Buiten scope (tenzij expliciet afgesproken):**
- Volledige security penetratietest
- Codebase-audit of architectuurreview
- Prestatie/load testing

---

## Uitvoering — Dag 1

### Ochtend (3 uur): Documentenreview

De consultant analyseert vooraf (of on-site) de volgende documenten:
- [ ] Testplan / teststrategie (indien aanwezig)
- [ ] CI/CD-pipelineconfiguratie (bijv. GitHub Actions, GitLab CI, Jenkins)
- [ ] Testresultaten/rapportage van de afgelopen 3 sprints
- [ ] Overzicht van bekende bugs/incidenten (backlog of bugtracker)
- [ ] Architectuurschets van de applicatie (globaal)

Doel: beeld vormen vóór de gesprekken.

### Middag (3 uur): Interviews

Drie korte interviews (45–60 min elk):

| Interview | Gesprekspartner | Onderwerpen |
|---|---|---|
| 1. Management | CTO / IT Manager / QA Lead | Strategie, prioriteiten, risicobeleving, budget |
| 2. Ontwikkelteam | 2–3 developers | Dagelijkse testpraktijk, pijnpunten, tooling |
| 3. QA / Tester | Tester of testengineer | Testproces, dekking, tools, samenwerking met devs |

---

## Uitvoering — Dag 2 (optioneel bij grotere scope)

### Ochtend (2 uur): Live demo / observatie

- Walk-through van de CI/CD-pipeline (live)
- Bekijk een recente testrun: welke tests falen, hoe lang duurt het, wat is de dekking?
- Indien van toepassing: bekijk een recent incident en hoe het door het testproces is gekomen

### Middag (2 uur): Analyse en rapportconcept

De consultant werkt het rapport uit op basis van alle verzamelde informatie.

---

## Beoordelingsdimensies

Het rapport scoort de organisatie op 6 dimensies (score 1–5):

| Dimensie | Beschrijving |
|---|---|
| **Testproces** | Is er een helder, gedocumenteerd testproces? Wie is eigenaar? |
| **Testautomatisering** | Mate van automatisering, toolkwaliteit, stabiliteit |
| **CI/CD-integratie** | Kwaliteitspoorten in de pipeline, feedback-snelheid |
| **Security testing** | Aantoonbare security checks, OWASP-bewustzijn |
| **Meetbaarheid** | KPI's voor kwaliteit, rapportage, trendanalyse |
| **Teamcultuur** | Eigenaarschap, kwaliteitsbewustzijn, samenwerking dev-QA |

**Score-interpretatie:**
- 1–2: Kritiek risico — directe actie vereist
- 3: Basisniveau aanwezig, verbetering nodig
- 4: Goed niveau, optimalisatie mogelijk
- 5: Best practice

---

## Deliverable: Quick Scan Rapport

Zie `rapport-template.md` voor het volledige rapportformat.

Het rapport wordt binnen 3 werkdagen na de scan opgeleverd als PDF.

---

## Opvolging

Na oplevering van het rapport: presentatie van bevindingen (online, 30 min) met mogelijkheid voor vragen. Op basis van de uitkomsten wordt een voorstel voor vervolgstap aangeboden (projecttraject of retainer).
