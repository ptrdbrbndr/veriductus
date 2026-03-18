# De staat van QA in Nederlandse softwareteams

**Een whitepaper over softwarekwaliteit, testautomatisering en de weg vooruit**

_Veriductus | Maart 2026_

---

> _Dit whitepaper is beschikbaar als gated PDF op veriductus.nl. De lezer dient een zakelijk e-mailadres in te vullen om het document te ontvangen. Leads worden geregistreerd in het CRM._

---

## Voorwoord

Software is overal. Het stuurt ziekenhuizen, beheert pensioenfondsen, verbindt mensen en drijft de productiviteit van miljoenen professionals. Maar de kwaliteit van die software — hoe betrouwbaar, veilig en onderhoudbaar zij is — loopt sterk uiteen.

In dit whitepaper presenteert Veriductus een beeld van de staat van softwarekwaliteit in Nederlandse teams. Gebaseerd op meer dan twaalf jaar ervaring in QA-consultancy, honderdvijftig-plus afgeronde projecten en gesprekken met CTOs, QA Leads en ontwikkelteams door heel Nederland.

Geen theoretische beschouwing. Maar een praktisch overzicht van wat werkt, wat ontbreekt, en wat u nu kunt doen.

---

## 1. De QA-markt in Nederland: groei en urgentie

De Nederlandse markt voor IT-dienstverlening groeide in 2025 naar circa €18 miljard (CBS/IDC). Het segment softwaretesting en kwaliteitsborging groeit naar schatting 12–18% per jaar — sneller dan de bredere IT-markt.

Waarom die groei?

**DevOps en CI/CD-adoptie** versnellen de deploymentfrequentie, maar vergroten ook het risico als kwaliteitspoorten ontbreken. Organisaties die maandelijks deployen, kunnen dat niet meer doen zonder geautomatiseerde kwaliteitscontrole.

**Stijgende softwarecomplexiteit** — microservices, cloud-native architecturen, API-first systemen — maakt handmatig testen ondoenlijk. Een applicatie van honderd microservices testen via een Excel-lijst is geen optie meer.

**Regeldruk neemt toe.** De NIS2-richtlijn (2024) verplicht aantoonbare beveiligingsmaatregelen voor organisaties in kritieke sectoren. De AVG vereist privacy by design. In de zorgsector gelden NEN 7510-normen. Security testing is geen luxe meer — het is compliance.

**Tekort aan intern QA-talent.** De krappe arbeidsmarkt maakt het voor organisaties moeilijk om senior QA-engineers aan te trekken. Externe expertise vult dit gat.

### De keerzijde: kwaliteit wordt onderschat

Ondanks de groei zien wij in de praktijk dat kwaliteitsborging in veel Nederlandse softwareteams nog steeds een bijrol speelt. Testen gebeurt aan het einde van de sprint. Testautomatisering wordt "later" opgepakt. QA is een afdeling, geen cultuur.

De gevolgen zijn meetbaar:
- Gemiddeld 23% van softwareprojecten wordt niet op tijd opgeleverd door kwaliteitsproblemen (Standish Group, 2024)
- Bugs die in productie worden gevonden, kosten gemiddeld 100 keer meer om te repareren dan bugs die vroeg worden gevonden
- 68% van datalekken in Europa is te herleiden naar softwarekwetsbaarheden die voorkomen hadden kunnen worden (ENISA, 2025)

---

## 2. Vijf hardnekkige knelpunten in de praktijk

Op basis van onze projectervaring zien wij vijf knelpunten die keer op keer terugkomen.

### Knelpunt 1: Testen aan het einde

De meest voorkomende testantipatroon: handmatig testen als laatste stap voor de release. Het gevolg: bugs worden laat gevonden, de release wordt uitgesteld of gaat met bekende risico's live.

De oplossing is shift-left: kwaliteitsborging beginnen bij de requirements, niet bij de acceptatietest. Unit tests door developers. Integratie tests in de pipeline. E2E tests als vangnet, niet als hoofdmotor.

### Knelpunt 2: Geen eigenaarschap

"Wie is verantwoordelijk voor kwaliteit?" Bij veel teams is het antwoord: iedereen — wat in de praktijk niemand betekent.

Kwaliteit heeft een eigenaar nodig. Niet als controleur, maar als facilitator: iemand die de testarchitectuur bewaakt, de testdekking bewaakt en het team coacht. In kleinere teams is dat een rol die ontwikkelaars kunnen invullen met de juiste begeleiding.

### Knelpunt 3: Flaky tests

Onbetrouwbare tests — tests die soms slagen en soms falen zonder dat er iets veranderd is — zijn een van de grootste bronnen van vertrouwensverlies in testautomatisering. Teams leren de rode CI-pipeline te negeren. Dat is het moment waarop automatisering niet meer beschermt.

Flaky tests hebben altijd een oorzaak: race conditions, timing-afhankelijkheden, externe systemen, gedeelde testdata. Ze zijn te repareren — maar vereisen gerichte aandacht.

### Knelpunt 4: Security als nagedachte

Security testing wordt in de meeste teams behandeld als een externe activiteit: een jaarlijkse pentest door een extern bureau, niet als onderdeel van het dagelijkse ontwikkelproces.

Maar de OWASP Top 10 — de meest voorkomende kwetsbaarheden — zijn te detecteren met relatief eenvoudige geautomatiseerde tools. SAST (Static Application Security Testing) en DAST (Dynamic Application Security Testing) zijn integreerbaar in elke CI/CD-pipeline.

De kosten van een lek zijn vele malen hoger dan de investering in security testing.

### Knelpunt 5: Geen meetbare kwaliteitsindicatoren

"Hoe gaat het met de kwaliteit?" — een vraag die veel QA Leads niet kunnen beantwoorden met harde cijfers.

Testdekking (code coverage) is een indicator, maar niet de enige. Defect density (bugs per sprint), time-to-detect (hoe snel worden bugs gevonden?), en mean time to repair geven een completer beeld. Zonder meting is verbetering niet aantoonbaar.

---

## 3. Trends die de agenda bepalen

### Shift-left en shift-right

Shift-left: kwaliteitsborging vroeg in het proces integreren. Shift-right: kwaliteitsmonitoring na de release (canary deployments, observability, gebruiksmonitoring). De beste teams doen beide.

### AI-ondersteund testen

AI-tools beginnen hun intrede te doen in het testlandschap: gegenereerde testcases, intelligente testdata, en anomaly-detectie in productie. Deze tools zijn veelbelovend maar vereisen een solide testfundament om effectief te zijn. AI versterkt een goede testarchitectuur — het vervangt haar niet.

### Platform engineering en interne developer portals

De opkomst van platform engineering (het bouwen van interne platforms voor ontwikkelteams) creëert nieuwe kansen voor geïntegreerde kwaliteitspoorten. QA-architecten spelen een steeds belangrijkere rol in de inrichting van deze platforms.

### NIS2 en AVG: compliance dwingt kwaliteit

De NIS2-richtlijn verplicht organisaties in kritieke sectoren (energie, transport, digitale infrastructuur, gezondheidszorg) tot aantoonbare beveiligingsmaatregelen. Auditors vragen steeds vaker naar testdocumentatie, penetratietestresultaten en risicoanalyses. Kwaliteitsborging is compliance geworden.

---

## 4. Wat werkt: bewezen aanpakken

### De testpiramide

Een goed gebalanceerde testpiramide heeft veel unit tests (snel, goedkoop), minder integratietests (middelmatig snel), en weinig E2E-tests (traag, maar waardevol als eindbevestiging). De meeste teams hebben de piramide omgekeerd: veel handmatige E2E-tests, weinig automatisering onderaan.

**Actie:** Inventariseer uw huidige testverhouding en stel een migratieplan op naar een evenwichtige piramide.

### CI/CD kwaliteitspoorten

Elke CI/CD-pipeline verdient minimaal:
1. Geautomatiseerde unit tests (falen = build stopt)
2. Statische code-analyse (linting, SAST)
3. Integratie tests
4. Security scan (bijv. OWASP Dependency Check, Snyk)

**Actie:** Auditeer uw huidige pipeline en voeg ontbrekende poorten toe.

### Definition of Done uitbreiden

Voeg aan uw Definition of Done toe: "Geautomatiseerde tests geschreven en geslaagd" en "Geen nieuwe kritieke bevindingen in security scan." Dit maakt kwaliteit onderdeel van elke story, niet een aparte activiteit.

### Testdata management

Herbruikbare, realistische testdata is een onderschatte investering. Teams die investeren in goede testdata-management tools (bijv. Faker-bibliotheken, database fixtures, test containers) besteden minder tijd aan het opzetten van testomgevingen en meer tijd aan daadwerkelijk testen.

---

## 5. NIS2, AVG en compliance: wat betekent dit voor uw testproces?

### NIS2 (Network and Information Security Directive 2)

Van kracht in Nederland per oktober 2024. Verplicht voor organisaties in kritieke sectoren. Kernvereisten relevant voor QA:
- Risicoanalyse en beveiligingsmaatregelen
- Incidentdetectie en -rapportage
- Testen van beveiligingsmaatregelen (minimaal jaarlijkse penetratietest)

**Praktische impact:** U moet kunnen aantonen dat u uw software test op beveiligingskwetsbaarheden. Documenteer uw testactiviteiten en bewaar resultaten.

### AVG (Algemene Verordening Gegevensbescherming)

Relevant voor elk systeem dat persoonsgegevens verwerkt. QA-implicaties:
- Gebruik geen echte persoonsgegevens in testomgevingen (tenzij geanonimiseerd/gemaskeerd)
- Leg vast welke gegevens verwerkt worden en met welk doel
- Test toegangsbeveiliging en rollen expliciet

**Praktische impact:** Implementeer testdata-masking en documenteer uw privacyborging in uw testplan.

### BIO (Baseline Informatiebeveiliging Overheid)

Voor overheidsorganisaties verplicht. Vereist aantoonbare kwaliteitsborging van informatiesystemen. Veriductus heeft ervaring met BIO-compliante testtrajecten.

---

## 6. Praktisch stappenplan: van hier naar beter

Ongeacht uw huidige volwassenheidsniveau, zijn er drie stappen die u direct kunt zetten.

### Stap 1: Doe een nulmeting (1 dag)

Beantwoord de volgende vragen:
- Hoeveel percent van uw code is gedekt door geautomatiseerde tests?
- Hoeveel bugs bereiken productie per sprint?
- Hoe lang duurt uw huidige testcyclus?
- Wie is eigenaar van kwaliteitsborging?
- Wanneer heeft u voor het laatst een security test uitgevoerd?

Sla de uitkomsten op. Dit is uw baseline.

### Stap 2: Kies één verbeterinitiatief (4–8 weken)

Begin niet met alles tegelijk. Kies het knelpunt met de hoogste impact:
- Veel handmatige tests? → Start met unit test automatisering voor de kern-modules
- Trage CI/CD-pipeline? → Auditeer en optimaliseer de pipeline-structuur
- Geen security testing? → Voeg een SAST-tool toe aan de pipeline

### Stap 3: Maak kwaliteit meetbaar (continu)

Stel een kwaliteitsdashboard in (bijv. in SonarQube, Grafana of zelfs een simpele spreadsheet) met vier metrics:
1. Testdekking (%)
2. Defect density (bugs/sprint)
3. Time-to-detect (gem. tijd van introductie bug tot detectie)
4. Pipeline-slaagpercentage (%)

Meet wekelijks. Deel met het team. Stuur bij op basis van de data.

---

## 7. Hoe Veriductus helpt

Veriductus biedt drie instapniveaus:

### Quick Scan (1–2 dagdelen, €1.500–€2.500)

Wij doorlichten uw huidige testproces, tooling en team. U ontvangt een schriftelijk rapport met:
- Huidige kwaliteitsstand (score per dimensie)
- Top-3 risico's
- Concrete aanbevelingen met prioritering

Het Quick Scan-bedrag wordt verrekend bij een vervolgtraject.

### Projecttraject (4–16 weken, op maat)

Samen bouwen we de oplossing: van testarchitectuur tot automatisering, van coaching tot implementatie. Altijd gericht op kennisoverdracht — wij maken onszelf overbodig.

### Retainer (doorlopend, vanaf €2.500/mnd)

Voor organisaties die structurele QA-ondersteuning willen: monitoring, coaching, maandelijkse rapportage en directe toegang tot een senior QA-consultant.

---

## Conclusie

Softwarekwaliteit in Nederland is in beweging. De druk vanuit compliance, markt en technologie neemt toe. Organisaties die nu investeren in structurele kwaliteitsborging, bouwen een concurrentievoordeel dat moeilijk te kopiëren is.

De weg is niet ingewikkeld — maar vereist focus, eigenaarschap en de bereidheid om kwaliteit niet als bijzaak te behandelen.

Veriductus staat klaar om u daarbij te helpen.

---

## Over Veriductus

Veriductus is een gespecialiseerde QA- en software testingconsultancy, werkzaam via het Ductus-gildemodel. Onze gilde-ondernemers zijn zelfstandige testers die samenwerken als vakgemeenschap — zodat u altijd een gedreven specialist krijgt met de kracht van een team erachter.

12+ jaar ervaring | 150+ projecten | 98% klantbehoud

**Contact:** info@veriductus.nl | veriductus.nl | +31 (0)85 7444 544

---

_© 2026 Veriductus. Alle rechten voorbehouden. Reproductie met bronvermelding toegestaan._
_Dit document is uitsluitend bestemd voor informatiedoeleinden en vormt geen juridisch advies._
