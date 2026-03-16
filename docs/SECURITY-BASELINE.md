# Security Baseline — Veriductus

_Versie 1.0 | Maart 2026_

---

## Privacy-niveau

**Midden**

Motivatie: Veriductus verwerkt gewone persoonsgegevens (naam, e-mail, bedrijf, rol) van leads en gilde-leden. Geen bijzondere categorieen (gezondheid, religie, seksuele voorkeur). Geen betalingsdata in eigen systemen.

---

## Van toepassing zijnde normen

| Norm | Status | Toelichting |
|---|---|---|
| OWASP ASVS Level 1 | Verplicht | Alle formulieren en API-routes |
| ISO/IEC 25010 | Verplicht | Kwaliteitsattributen in vibe-tests |
| ISO/IEC 27001 | Richtlijn | Informatiebeveiliging algemeen |
| ISO/IEC 27701 / AVG | Verplicht | Persoonsgegevens leads + gilde-leden |
| ISO/IEC 27017 | Verplicht | Supabase + Vercel als cloudproviders |
| ISO/IEC 27018 | Verplicht | PII verwerking bij cloudproviders |
| WCAG 2.2 AA | Verplicht | Publieke website (EU Accessibility Act 2025) |
| DSA | Richtlijn | Indien gilde-leden content plaatsen (Fase 1+) |

**Niet van toepassing:**
- NEN 7510 (geen gezondheidsdata)
- ISO/IEC 29134 DPIA (geen bijzondere categorieen)

---

## Stakeholders & behoeften

| Stakeholder | Belang | Beveiligingsbehoefte |
|---|---|---|
| Klanten (opdrachtgevers) | Betrouwbaar contact, vertrouwelijkheid | Geen datalekken, correcte afhandeling contactgegevens |
| Gilde-ondernemers | Bescherming van hun profiel en opdrachten | Toegangscontrole per lid, geen kruisverontreiniging |
| Potentiele deelnemers | Veilige aanmelding, geen spam | Correcte verwerking e-mail, afmeldmogelijkheid |
| Ductus Holding | Reputatiebescherming | Compliance, geen incidenten |

---

## Verwerkte persoonsgegevens

| Gegeven | Locatie | Retentie | Grondslag AVG |
|---|---|---|---|
| Naam, e-mail, bedrijf, rol (leads) | Supabase + CRM | 24 maanden | Art. 6(1)(f) — gerechtvaardigd belang |
| E-mail whitepaper-downloads | Supabase | 24 maanden | Art. 6(1)(a) — toestemming |
| Nieuwsbrief-abonnees (e-mail) | Supabase + e-maildienst | Tot afmelding + 30 dagen | Art. 6(1)(a) — toestemming |
| Gilde-ondernemer profiel | Supabase | Actief lid + 12 maanden na uittreding | Art. 6(1)(b) — overeenkomst |
| Kandidaat-aanmeldingen | Supabase | 6 maanden of tot afwijzing/onboarding | Art. 6(1)(f) — gerechtvaardigd belang |
| Websitebezoekdata | Plausible (anoniem, EU-hosted) | 24 maanden | Geen — geen persoonsdata |

---

## OWASP ASVS Level 1 — Checklist

### Authenticatie (V2)
- [ ] Aanmelding gilde-portaal via Supabase Auth (wachtwoorden automatisch gehasht)
- [ ] Magic links verlopen binnen 15 minuten
- [ ] Geen wachtwoord of token in URL of logs
- [ ] Rate limiting op inlog- en aanmeldendpoints

### Sessies (V3)
- [ ] JWT tokens hebben `exp` claim
- [ ] Uitloggen invalideert sessie server-side (Supabase `signOut`)
- [ ] Geen sessie-ID in URL

### Toegangscontrole (V4)
- [ ] Elke server-side route/API verifieert authenticatie voor verwerking
- [ ] RLS actief op alle Supabase-tabellen met gebruikersdata
- [ ] Gilde-ondernemer A kan data van ondernemer B niet inzien

### Invoer & Output (V5)
- [ ] Geen SQL-string interpolatie — gebruik Supabase SDK
- [ ] HTML output geescaped — geen `dangerouslySetInnerHTML` zonder sanitization
- [ ] Formulier-validatie server-side (Zod schema's)

### Error handling (V7)
- [ ] Stack traces nooit naar de client — alleen server-side logs
- [ ] Security-events gelogd (mislukte logins, toegangsweigering)

### Communicatie (V9)
- [ ] HTTPS overal via Vercel (automatisch)
- [ ] HSTS-header actief

### API beveiliging (V13)
- [ ] CORS restrictief — geen wildcard `*`
- [ ] Formulier-endpoints beschermd met Cloudflare Turnstile of hCaptcha

---

## Cloudproviders & DPA-status

| Provider | Gebruik | DPA afgesloten | Regio |
|---|---|---|---|
| Supabase | Database, Auth | Te doen voor productie | EU (Frankfurt) |
| Vercel | Hosting, Edge Functions | Te doen bij persoonsdata | EU edge |
| Resend | Transactionele e-mail | Te doen voor productie | EU |
| Plausible | Analytics | Niet nodig (anoniem) | EU |

---

## Specifieke dreigingen voor dit domein

| Dreiging | Kans | Impact | Maatregel |
|---|---|---|---|
| Spam via intakeformulier | Hoog | Midden | Turnstile/hCaptcha + rate limiting |
| Datalekke leads-tabel | Midden | Hoog | RLS, service role only, DPA Supabase |
| XSS via gebruikersinput (Fase 1+) | Midden | Hoog | Output escaping, CSP headers |
| Ongeautoriseerde toegang gilde-portaal | Laag | Hoog | Auth check elke route + RLS |
| Phishing op naam van Veriductus | Midden | Midden | DKIM/SPF/DMARC instellen op domein |

---

## Incidentrespons

Bij een beveiligingsincident:
1. Isoleer de aangetaste omgeving (Vercel rollback of Supabase RLS aanscherpen)
2. Beoordeel welke data beinvloed is
3. Bij persoonsgegevens: binnen 72 uur melden bij Autoriteit Persoonsgegevens (AP) indien drempelwaarde bereikt
4. Betrokkenen informeren indien hoog risico
5. Documenteer incident en herstelmaatregelen

Contactpunt security: pieter@debrabander.com

---

## Leveranciersrisicos

| Leverancier | Risico bij uitval | Mitigatie |
|---|---|---|
| Vercel | Website onbeschikbaar | Statische fallback mogelijk |
| Supabase | Data onbereikbaar | Dagelijkse backup (Supabase Pro) |
| Resend | E-mails niet verstuurd | Fallback naar alternatieve SMTP |

---

## Status per item

| Item | Status |
|---|---|
| DPA Supabase | ❌ Nog niet afgesloten |
| DPA Vercel | ❌ Nog niet afgesloten |
| DPA Resend | ❌ Nog niet afgesloten |
| DKIM/SPF/DMARC veriductus.nl | ❌ Nog niet ingesteld |
| RLS op alle tabellen | ❌ Database nog niet ingericht |
| Turnstile/hCaptcha op formulieren | ❌ Nog niet geimplementeerd |
| Privacy-verklaring op website | ❌ Nog niet live |
| Retentiebeleid gedocumenteerd | ✅ Zie tabel hierboven |

---

*Versie 1.0 — 2026-03-16 | Eigenaar: Ductus Holding / Veriductus*
