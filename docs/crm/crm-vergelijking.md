# CRM-vergelijking voor Veriductus
> Opgesteld: maart 2026

## Conclusie vooraf

Voor Veriductus (kleine detacheringsorganisatie, B2B, focus op leads + klanten bijhouden):

**Aanbeveling**: Start met **HubSpot Free** — nul setup, direct bruikbaar, gratis voor altijd voor de kern.
**Open-source alternatief**: **Twenty CRM** — mooiste UI, volledig gratis, maar vereist zelf hosten.

---

## Vergelijking

| | HubSpot Free | Twenty CRM | Notion | Airtable |
|---|---|---|---|---|
| **Kosten** | Gratis (voor altijd) | Gratis (self-hosted) | Gratis (beperkt) | Gratis (beperkt) |
| **Setup** | 5 minuten | 1–2 uur (Docker) | 10 minuten | 10 minuten |
| **Pipeline** | ✅ Visueel Kanban | ✅ Visueel Kanban | ✅ Via database view | ⚠️ Basis |
| **E-mail integratie** | ✅ Gmail/Outlook sync | ✅ Gmail sync | ❌ Handmatig | ❌ Handmatig |
| **Lead capture** | ✅ Forms + API | ✅ API | ❌ Handmatig | ❌ Handmatig |
| **Rapportages** | ✅ Uitgebreid | ✅ Goed | ❌ Beperkt | ⚠️ Basis |
| **Mobiel** | ✅ App | ✅ Webapp | ✅ App | ✅ App |
| **Data bij jou** | ❌ HubSpot servers | ✅ Zelf hosten | ❌ Notion servers | ❌ Airtable servers |
| **Upsell-druk** | ⚠️ Flink | ✅ Geen | ✅ Geen | ⚠️ Beetje |
| **Supabase integratie** | Via Zapier/n8n | Via API | Via API | Via API |

---

## Optie 1: HubSpot Free

**Stappenplan:**

1. Ga naar [hubspot.com/products/crm](https://www.hubspot.com/products/crm) → "Get started free"
2. Maak account met pieter@debrabander.com
3. Instellingen → Company name: Veriductus, Timezone: Amsterdam, Currency: EUR
4. Maak pipeline aan: **Contacts → Deals → Pipeline**
   - Fases: Lead → Intake gepland → Offerte verstuurd → Gewonnen / Verloren
5. Importeer bestaande leads (CSV export uit Supabase)
6. Verbind Gmail: Settings → Integrations → Email → Connect Gmail
7. Stel notificaties in: follow-up herinnering 24u na inbound lead
8. Voeg "Veriductus — Intakeformulier" toe als bron bij nieuwe deals

**Wat je NIET nodig hebt in de gratis versie:**
- Marketing Hub, Sales Hub, Service Hub → laat staan op gratis tier
- Sequences, A/B testing, custom dashboards → betaald

**Let op:** HubSpot slaat data op in de VS. Stel DPA in via Settings → Privacy & Consent.

---

## Optie 2: Twenty CRM (open-source alternatief)

**Wat het is:** Open-source CRM, gebouwd als moderne Salesforce-vervanger. Prachtige UI.
GitHub: [twentyhq/twenty](https://github.com/twentyhq/twenty) — 23k+ sterren.

**Gratis self-host via Railway:**

1. Ga naar [railway.app](https://railway.app) → maak gratis account
2. Deploy template: zoek "Twenty CRM" in Railway templates
3. Railway deployt automatisch de database + backend + frontend
4. Eigen domein: koppel `crm.veriductus.nl` aan Railway project
5. Inloggen → zelfde pipeline-fases instellen als bij HubSpot

**Voordelen ten opzichte van HubSpot:**
- Data blijft bij jou (Railway/eigen server)
- Geen upsell-druk
- Koppelbaar met Supabase leads via API webhook

**Nadeel:** Railway free tier heeft slaapstand na inactiviteit → overweeg €5/mnd hobby plan.

---

## Optie 3: Notion als CRM (simpelste start)

Als je al Notion gebruikt voor documentatie:

1. Dupliceer template: [Notion CRM Template](https://www.notion.so/templates/simple-crm)
2. Database met kolommen: Naam, Bedrijf, Email, Status, Laatste contact, Notities
3. Views: Kanban (pipeline), Tabel (overzicht), Kalender (follow-ups)
4. Koppel automatisch vanuit Supabase via n8n webhook → Notion API

**Ideaal als:** je CRM-behoefte simpel is en je geen apart systeem wil beheren.

---

## Koppeling met veriductus.nl (automatisch leads doorsturen)

Ongeacht welk CRM je kiest, kun je leads automatisch doorsturen via een webhook in de intake-API:

```typescript
// In src/app/api/intake/route.ts — voeg toe na supabase.insert()
await fetch(process.env.CRM_WEBHOOK_URL ?? '', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ naam, email, bedrijf, rol, herkomst, bericht }),
})
```

- **HubSpot**: gebruik HubSpot Forms API of Zapier webhook
- **Twenty**: gebruik Twenty Metadata API (REST)
- **Notion**: gebruik Notion API (`databases/{id}/pages`)

---

## Mijn aanbeveling

| Situatie | Keuze |
|---|---|
| Snel starten, geen gedoe | HubSpot Free |
| Privacy-first, data bij jezelf | Twenty CRM op Railway |
| Al Notion-gebruiker, simpele pipeline | Notion CRM template |
