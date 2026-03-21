"use client";

import { useState, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Loader2, CheckCircle } from "lucide-react";

type Status = "idle" | "loading" | "ok" | "fout";

export function WhitepaperFormulier() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bedrijf, setBedrijf] = useState("");
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

    const res = await fetch("/api/whitepaper", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        naam,
        email,
        bedrijf: bedrijf || undefined,
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
      <div
        className="text-center py-8 space-y-6"
        data-testid="whitepaper-succes"
      >
        <CheckCircle className="mx-auto h-12 w-12 text-[#5FC38E]" />
        <div>
          <p className="text-xl font-bold text-[#1D1E4B] mb-2">
            Bedankt, {naam.split(" ")[0]}!
          </p>
          <p className="text-[#3A3B5C] text-sm mb-6">
            Je ontvangt ook een e-mail met de downloadlink.
          </p>
        </div>
        <a
          href="/whitepaper-qa-staat-nl.pdf"
          download
          data-testid="whitepaper-download-link"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4776A8] to-[#5FC38E] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download className="h-4 w-4" />
          Download whitepaper (PDF)
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      data-testid="whitepaper-form"
    >
      <div className="space-y-1.5">
        <Label htmlFor="wp-naam">Naam *</Label>
        <Input
          id="wp-naam"
          type="text"
          placeholder="Uw volledige naam"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          required
          minLength={2}
          data-testid="whitepaper-naam"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="wp-email">Zakelijk e-mailadres *</Label>
        <Input
          id="wp-email"
          type="email"
          placeholder="naam@bedrijf.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          data-testid="whitepaper-email"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="wp-bedrijf">Bedrijfsnaam</Label>
        <Input
          id="wp-bedrijf"
          type="text"
          placeholder="Optioneel"
          value={bedrijf}
          onChange={(e) => setBedrijf(e.target.value)}
          data-testid="whitepaper-bedrijf"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="wp-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 accent-[#4776A8]"
          data-testid="whitepaper-consent"
        />
        <label htmlFor="wp-consent" className="text-sm text-[#3A3B5C]">
          Ik ga akkoord met het opslaan van mijn gegevens conform de{" "}
          <a href="/privacy" className="underline hover:text-[#4776A8]">
            privacyverklaring
          </a>
          . Geen spam, alleen relevante updates.
        </label>
      </div>

      {siteKey && (
        <Turnstile
          ref={turnstileRef}
          siteKey={siteKey}
          onSuccess={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken(null)}
          data-testid="whitepaper-turnstile"
        />
      )}

      {fout && (
        <p className="text-red-600 text-sm" data-testid="whitepaper-fout">
          {fout}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading" || !consent || !turnstileToken}
        className="w-full bg-gradient-to-r from-[#4776A8] to-[#5FC38E] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        data-testid="whitepaper-submit"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <Download className="h-4 w-4 mr-2" />
            Whitepaper gratis downloaden
          </>
        )}
      </Button>
    </form>
  );
}
