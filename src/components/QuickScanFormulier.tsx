"use client";

import { useState, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle } from "lucide-react";

type Status = "idle" | "loading" | "ok" | "fout";

export function QuickScanFormulier() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bedrijf, setBedrijf] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [toelichting, setToelichting] = useState("");
  const [consent, setConsent] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [fout, setFout] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!turnstileToken) {
      setFout("Wacht even op de spambeveiliging.");
      return;
    }
    setStatus("loading");
    setFout("");

    const res = await fetch("/api/quick-scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        naam,
        email,
        bedrijf,
        telefoon: telefoon || undefined,
        toelichting: toelichting || undefined,
        consent: true,
        consent_at: new Date().toISOString(),
        turnstileToken,
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setStatus("fout");
      setFout(data.fout ?? "Er is iets misgegaan. Probeer het opnieuw.");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
      return;
    }

    setStatus("ok");
  }

  if (status === "ok") {
    return (
      <div className="text-center py-8 space-y-4" data-testid="quick-scan-succes">
        <CheckCircle className="mx-auto h-12 w-12 text-[#5FC38E]" />
        <div>
          <p className="text-xl font-bold text-[#1D1E4B] mb-2">
            Aanvraag ontvangen!
          </p>
          <p className="text-[#3A3B5C] text-sm">
            We nemen binnen 1 werkdag contact op om de Quick Scan in te plannen.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      data-testid="quick-scan-form"
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="qs-naam">Naam *</Label>
          <Input
            id="qs-naam"
            type="text"
            placeholder="Uw volledige naam"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            required
            minLength={2}
            data-testid="quick-scan-naam"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qs-email">E-mailadres *</Label>
          <Input
            id="qs-email"
            type="email"
            placeholder="naam@bedrijf.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-testid="quick-scan-email"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="qs-bedrijf">Bedrijfsnaam *</Label>
          <Input
            id="qs-bedrijf"
            type="text"
            placeholder="Uw bedrijfsnaam"
            value={bedrijf}
            onChange={(e) => setBedrijf(e.target.value)}
            required
            minLength={2}
            data-testid="quick-scan-bedrijf"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qs-telefoon">Telefoonnummer</Label>
          <Input
            id="qs-telefoon"
            type="tel"
            placeholder="Optioneel"
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value)}
            data-testid="quick-scan-telefoon"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="qs-toelichting">Korte toelichting</Label>
        <Textarea
          id="qs-toelichting"
          placeholder="Beschrijf kort uw huidige testsituatie of uitdaging..."
          rows={4}
          value={toelichting}
          onChange={(e) => setToelichting(e.target.value)}
          data-testid="quick-scan-toelichting"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="qs-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 accent-[#4776A8]"
          data-testid="quick-scan-consent"
        />
        <label htmlFor="qs-consent" className="text-sm text-[#3A3B5C]">
          Ik ga akkoord met de verwerking van mijn gegevens conform de{" "}
          <a href="/privacy" className="underline hover:text-[#4776A8]">
            privacyverklaring
          </a>
          .
        </label>
      </div>

      {siteKey && (
        <Turnstile
          ref={turnstileRef}
          siteKey={siteKey}
          onSuccess={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken(null)}
          data-testid="quick-scan-turnstile"
        />
      )}

      {fout && (
        <p className="text-red-600 text-sm" data-testid="quick-scan-fout">
          {fout}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading" || !consent || !turnstileToken}
        className="w-full bg-gradient-to-r from-[#4776A8] to-[#5FC38E] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        data-testid="quick-scan-submit"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Quick Scan aanvragen"
        )}
      </Button>
    </form>
  );
}
