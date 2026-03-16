"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z.object({
  naam: z.string().min(2, "Vul uw naam in"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  linkedin: z.string().url("Vul een geldige LinkedIn-URL in").optional().or(z.literal("")),
  motivatie: z.string().min(20, "Beschrijf kort uw motivatie (minimaal 20 tekens)"),
});

type FormData = z.infer<typeof schema>;

export function AanmeldFormulier() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/aanmelden", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-testid="aanmeld-form"
      className="space-y-6 bg-[#F4F6FA] rounded-2xl p-8 border border-[#1D1E4B]/8"
    >
      <div>
        <Label htmlFor="aanmeld-naam">Naam *</Label>
        <Input
          id="aanmeld-naam"
          data-testid="aanmeld-naam"
          placeholder="Uw volledige naam"
          className="mt-1"
          {...register("naam")}
        />
        {errors.naam && <p className="text-red-600 text-sm mt-1">{errors.naam.message}</p>}
      </div>

      <div>
        <Label htmlFor="aanmeld-email">E-mailadres *</Label>
        <Input
          id="aanmeld-email"
          data-testid="aanmeld-email"
          type="email"
          placeholder="u@bedrijf.nl"
          className="mt-1"
          {...register("email")}
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="aanmeld-linkedin">LinkedIn-profiel (optioneel)</Label>
        <Input
          id="aanmeld-linkedin"
          data-testid="aanmeld-linkedin"
          type="url"
          placeholder="https://linkedin.com/in/uwprofiel"
          className="mt-1"
          {...register("linkedin")}
        />
        {errors.linkedin && <p className="text-red-600 text-sm mt-1">{errors.linkedin.message}</p>}
      </div>

      <div>
        <Label htmlFor="aanmeld-motivatie">Waarom wilt u Gilde-lid worden? *</Label>
        <Textarea
          id="aanmeld-motivatie"
          data-testid="aanmeld-motivatie"
          placeholder="Vertel kort over uw achtergrond als tester en uw interesse in het gildemodel..."
          rows={5}
          className="mt-1"
          {...register("motivatie")}
        />
        {errors.motivatie && (
          <p className="text-red-600 text-sm mt-1">{errors.motivatie.message}</p>
        )}
      </div>

      {status === "ok" && (
        <div
          role="status"
          className="rounded-lg bg-green-50 border border-green-200 text-green-800 p-4 text-sm"
        >
          Aanmelding ontvangen! We nemen binnen 2 werkdagen contact met u op.
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg bg-red-50 border border-red-200 text-red-800 p-4 text-sm"
        >
          Er is iets misgegaan. Probeer het later opnieuw of mail ons op info@veriductus.nl.
        </div>
      )}

      <Button
        type="submit"
        data-testid="aanmeld-submit"
        disabled={status === "loading"}
        className="w-full text-white font-semibold"
        style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
      >
        {status === "loading" ? "Versturen..." : "Aanmelding versturen"}
      </Button>

      <p className="text-xs text-[#3A3B5C]/60 text-center">
        Uw gegevens worden vertrouwelijk behandeld. Zie onze{" "}
        <a href="/privacy" className="underline hover:text-[#4776A8]">
          privacyverklaring
        </a>
        .
      </p>
    </form>
  );
}
