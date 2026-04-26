# Architectuur — Veriductus

> **Doc-revalidatie — 2026-04-26.** Dit document was laatst bijgewerkt op 2026-03-16 (commit ea7620e). Sindsdien zijn 52 commits gepushed die de publieke en lead-pipeline-laag invullen — onderstaande tekening blijft het juiste mentale model, maar concrete componenten zijn nu in code:
>
> - **Publieke site** (`src/app/(site)/`) — landing, 6 dienstpagina's, over-pagina, privacy, whitepaper-download (commits 1f818b5, d9101d2, 4b43799)
> - **Quick-scan-formulier** + intake-flow → portaal-leads-CRM (commit d9101d2)
> - **Portaal** (`src/app/portaal/`) — interne tooling-route voor leads
> - **Coming-soon-rerouting** op `main` (commits 98f6180, bea1c19) — staging blijft de volledige app
> - **Structured data** + assets (favicon, apple-icon, LinkedIn-banner) gepushed
>
> Bevestig de huidige tekening tegen de live build vóór externe pre-flight.

---

## Systeemoverzicht

Veriductus is een QA-consultancybedrijf — geen SaaS-product. De "architectuur" beschrijft de digitale infrastructuur die de bedrijfsvoering ondersteunt: de publieke website, het CRM-systeem, marketing-automatisering, contentbeheer en de interne tooling die consultants gebruiken bij klanttrajecten.

```
┌─────────────────────────────────────────────────────────────────┐
│                     VERIDUCTUS DIGITALE INFRA                   │
│                                                                 │
│  Publiek                    Intern                              │
│  ┌────────────────┐         ┌──────────────────────────────┐   │
│  │ veriductus.nl  │         │ CRM (HubSpot / Notion)       │   │
│  │ (Next.js)      │────────▶│ Leads, pipeline, contracten  │   │
│  │ - Landingspag. │         └──────────────────────────────┘   │
│  │ - Diensten     │                                             │
│  │ - Cases        │         ┌──────────────────────────────┐   │
│  │ - Intake form  │         │ E-mail (Resend / Mailchimp)  │   │
│  └────────────────┘         │ Nieuwsbrief, nurturing       │   │
│          │                  └──────────────────────────────┘   │
│          │ Formulier                                            │
│          ▼                  ┌──────────────────────────────┐   │
│  ┌────────────────┐         │ LinkedIn (organisch + ads)   │   │
│  │  Analytics     │         │ Thought leadership           │   │
│  │  (Plausible)   │         └──────────────────────────────┘   │
│  └────────────────┘                                             │
│                             ┌──────────────────────────────┐   │
│                             │ Klantportal (toekomst)       │   │
│                             │ Documentatie, templates      │   │
│                             └──────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech stack

### Publieke website (`veriductus.nl`)

| Component | Technologie | Motivatie |
|---|---|---|
| Framework | Next.js 15 (App Router) | Server-side rendering voor SEO; eenvoudig te hosten op Vercel |
| Styling | Tailwind CSS + shadcn/ui | Snelle ontwikkeling; consistente huisstijl |
| Formulieren | React Hook Form + Zod | Type-safe validatie; native integratie met Next.js Server Actions |
| Analytics | Plausible (EU-hosted, cookieloos) | AVG-compliant zonder consent-banner; privacy by design |
| Hosting | Vercel | Preview-deployments per PR; Frankfurt edge |
| CMS | Markdown (Git-based) of Contentlayer | Blog en cases beheren zonder extern CMS; eenvoudig te onderhouden |
| E-mail (leads) | Resend | Transactionele e-mail bij intakeformulier; bestaand in portfolio |
| DNS | mijn.host (centrale API) | Consistentie met ductus-ecosysteem |

### CRM en salesproces

| Component | Technologie | Motivatie |
|---|---|---|
| CRM | HubSpot Free (of Notion-database) | Gratis instapniveau; pipeline-beheer; integratie met formulieren |
| Pipeline | Lead → Gekwalificeerd → Intake → Offerte → Gewonnen/Verloren | Standaard B2B-salesproces |
| Offertes | Notion of PandaDoc | Snelle opmaak; digitale ondertekening |

### Marketing-automatisering

| Component | Technologie |
|---|---|
| Nieuwsbrief | Mailchimp of Resend (Broadcast) |
| Lead-nurturing | 5-e-mailssequentie na whitepaper-download (HubSpot workflows of Mailchimp automation) |
| LinkedIn Ads | LinkedIn Campaign Manager |

---

## Database schema (SQL)

Veriductus heeft geen complexe productiedatabase. De website heeft een minimale dataopslag voor:

```sql
-- Intakeformulieren (leads)
-- Opgeslagen in Supabase of rechtstreeks doorgestuurd naar CRM
CREATE TABLE public.leads (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  naam         TEXT NOT NULL,
  email        TEXT NOT NULL,
  bedrijf      TEXT,
  rol          TEXT,           -- 'CTO' | 'QA Lead' | 'IT Manager' | 'anders'
  bericht      TEXT,
  herkomst     TEXT,           -- 'website' | 'linkedin' | 'referral' | 'whitepaper'
  aangemaakt_op TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.leads IS 'Retentie: 24 maanden of tot verwijderingsverzoek';
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
-- Alleen service role mag lezen (geen publieks leesrecht)

-- Whitepaper-downloads (lead capture)
CREATE TABLE public.whitepaper_downloads (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email        TEXT NOT NULL,
  whitepaper   TEXT NOT NULL,  -- 'staat-van-qa-2026' | 'security-testing'
  aangemaakt_op TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.whitepaper_downloads IS 'Retentie: 24 maanden';
ALTER TABLE public.whitepaper_downloads ENABLE ROW LEVEL SECURITY;

-- Nieuwsbrief-abonnees
CREATE TABLE public.nieuwsbrief_abonnees (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email        TEXT NOT NULL UNIQUE,
  actief       BOOLEAN DEFAULT TRUE,
  aangemeld_op TIMESTAMPTZ DEFAULT now(),
  afgemeld_op  TIMESTAMPTZ
);
COMMENT ON TABLE public.nieuwsbrief_abonnees IS 'Retentie: tot afmelding + 30 dagen';
ALTER TABLE public.nieuwsbrief_abonnees ENABLE ROW LEVEL SECURITY;
```

---

## Applicatiestructuur

```
veriductus/
├── src/
│   └── app/
│       ├── page.tsx                # Homepage
│       ├── diensten/
│       │   ├── page.tsx            # Diensten-overzicht
│       │   ├── test-automatisering/page.tsx
│       │   ├── qa-architectuur/page.tsx
│       │   ├── kwaliteitsmonitoring/page.tsx
│       │   ├── cicd-integratie/page.tsx
│       │   ├── team-coaching/page.tsx
│       │   └── security-testing/page.tsx
│       ├── cases/
│       │   ├── page.tsx            # Overzicht klantcases
│       │   └── [slug]/page.tsx     # Individuele case
│       ├── blog/
│       │   ├── page.tsx
│       │   └── [slug]/page.tsx
│       ├── over/page.tsx           # Over Veriductus
│       ├── contact/page.tsx        # Intake formulier
│       └── api/
│           ├── intake/route.ts     # Formulier → CRM + e-mail
│           └── nieuwsbrief/route.ts # Abonnement
├── content/
│   ├── blog/                       # Markdown blogposts
│   └── cases/                      # Markdown klantcases
├── public/
│   ├── whitepapers/                # PDF downloads
│   └── images/
├── src/components/
│   ├── ui/                         # shadcn/ui
│   ├── IntakeFormulier.tsx
│   ├── DienstCard.tsx
│   └── CaseCard.tsx
└── src/lib/
    ├── supabase/
    │   └── server.ts
    └── resend.ts
```

---

## Beveiliging

### Website
- **Geen gebruikersaccounts** in Fase 1–3: geen authenticatie, geen gevoelige gebruikersdata
- **Formulier-spam bescherming**: Cloudflare Turnstile of hCaptcha op intakeformulier
- **Rate limiting**: Vercel middleware op `/api/intake` en `/api/nieuwsbrief` (max 5 req/min per IP)
- **HTTPS**: TLS 1.2+ via Vercel, HSTS-header ingesteld
- **Security headers**: CSP, X-Frame-Options: DENY, X-Content-Type-Options: nosniff

### Leaddata en AVG
- E-mailadressen en contactgegevens zijn persoonsgegevens (AVG art. 6(1)(b) en (f))
- Supabase-tabel `leads` heeft RLS: alleen service role kan lezen
- Retentiebeleid gedocumenteerd per tabel (zie database schema)
- Afmeldmogelijkheid voor nieuwsbrief verplicht in elke e-mail
- DPA afsluiten met Resend, Supabase en HubSpot vóór eerste leadopslag

### Klantomgevingen (tijdens consultancytrajecten)
Consultants werken in klantomgevingen en hanteren:
- Geen gevoelige klantdata opslaan op persoonlijke apparaten
- VPN-gebruik verplicht bij toegang tot klant-productieomgevingen
- Geheimhoudingsverklaring (NDA) standaard onderdeel van contracten
- OWASP-methodieken gedocumenteerd in interne playbooks

---

## Privacy & AVG

| Gegeven | Locatie | Retentie | Grondslag |
|---|---|---|---|
| Leads (naam, e-mail, bedrijf) | Supabase + CRM | 24 maanden | Gerechtvaardigd belang (opvolging) |
| Whitepaper-downloads (e-mail) | Supabase | 24 maanden | Toestemming |
| Nieuwsbrief-abonnees | Supabase + Mailchimp | Tot afmelding + 30 dagen | Toestemming |
| Websitebezoekdata | Plausible (anoniem) | 24 maanden | Gerechtvaardigd belang (geen cookies) |

- Geen persoonsdata in URL's
- Cookiebeleid: alleen functionele cookies (geen tracking cookies, geen consent-banner nodig bij Plausible)
- Privacyverklaring op veriductus.nl verplicht vóór lancering
- Recht op verwijdering: e-mail naar info@veriductus.nl → handmatige verwijdering binnen 30 dagen

---

*Versie 1.0 — 2026-03-15*
