-- ============================================================
-- Veriductus — initieel database schema
-- Migratie: 20260318000001
-- ============================================================

-- Intakeformulieren (leads)
CREATE TABLE IF NOT EXISTS public.leads (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  naam          TEXT        NOT NULL,
  email         TEXT        NOT NULL,
  bedrijf       TEXT,
  rol           TEXT,           -- 'CTO' | 'QA Lead' | 'IT Manager' | 'anders'
  bericht       TEXT,
  herkomst      TEXT,           -- 'website' | 'linkedin' | 'referral' | 'whitepaper'
  consent_at    TIMESTAMPTZ NOT NULL,  -- AVG Art. 6: tijdstip expliciete toestemming
  aangemaakt_op TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.leads IS 'Retentie: 24 maanden of tot verwijderingsverzoek (AVG Art. 17)';
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
-- Alleen service role mag lezen/schrijven — geen publiek leesrecht
CREATE POLICY "service_role_only" ON public.leads
  USING (false)
  WITH CHECK (false);

-- Whitepaper-downloads (lead capture)
CREATE TABLE IF NOT EXISTS public.whitepaper_downloads (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  email         TEXT        NOT NULL,
  consent_at    TIMESTAMPTZ NOT NULL,
  aangemaakt_op TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.whitepaper_downloads IS 'Retentie: 24 maanden of tot verwijderingsverzoek (AVG Art. 17)';
ALTER TABLE public.whitepaper_downloads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_only" ON public.whitepaper_downloads
  USING (false)
  WITH CHECK (false);

-- Nieuwsbrief-abonnees
CREATE TABLE IF NOT EXISTS public.nieuwsbrief_abonnees (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  email           TEXT        NOT NULL UNIQUE,
  consent_at      TIMESTAMPTZ NOT NULL,
  uitgeschreven_op TIMESTAMPTZ,          -- null = actief abonnee
  aangemaakt_op   TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.nieuwsbrief_abonnees IS 'Retentie: tot uitschrijving + 30 dagen (AVG Art. 17)';
ALTER TABLE public.nieuwsbrief_abonnees ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_only" ON public.nieuwsbrief_abonnees
  USING (false)
  WITH CHECK (false);

-- Gilde-kandidaten (aanmeldingen)
CREATE TABLE IF NOT EXISTS public.gilde_kandidaten (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  email         TEXT        NOT NULL,
  naam          TEXT,
  motivatie     TEXT,
  consent_at    TIMESTAMPTZ NOT NULL,
  aangemaakt_op TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.gilde_kandidaten IS 'Retentie: 6 maanden of tot beslissing (AVG Art. 17)';
ALTER TABLE public.gilde_kandidaten ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_only" ON public.gilde_kandidaten
  USING (false)
  WITH CHECK (false);
