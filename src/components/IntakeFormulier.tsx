"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ROLLEN = ["CTO / VP Engineering", "Hoofd QA / Lead Tester", "IT Manager", "Anders"] as const;
const HERKOMSTEN = ["Website", "LinkedIn", "Aanbeveling", "Anders"] as const;

const schema = z.object({
  naam: z.string().min(2, "Vul uw naam in"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  bedrijf: z.string().min(2, "Vul uw bedrijfsnaam in"),
  rol: z.enum(ROLLEN, { message: "Selecteer uw rol" }),
  herkomst: z.enum(HERKOMSTEN, { message: "Hoe heeft u ons gevonden?" }),
  bericht: z.string().min(10, "Beschrijf kort uw vraag of behoefte"),
});

type FormData = z.infer<typeof schema>;

export function IntakeFormulier() {
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
      const res = await fetch("/api/intake", {
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
      data-testid="contact-form"
      className="space-y-6 bg-[#F4F6FA] rounded-2xl p-8 border border-[#1D1E4B]/8"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="contact-naam">Naam *</Label>
          <Input
            id="contact-naam"
            data-testid="contact-naam"
            placeholder="Uw volledige naam"
            className="mt-1"
            {...register("naam")}
          />
          {errors.naam && <p className="text-red-600 text-sm mt-1">{errors.naam.message}</p>}
        </div>
        <div>
          <Label htmlFor="contact-email">E-mailadres *</Label>
          <Input
            id="contact-email"
            data-testid="contact-email"
            type="email"
            placeholder="u@bedrijf.nl"
            className="mt-1"
            {...register("email")}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="contact-bedrijf">Bedrijf *</Label>
          <Input
            id="contact-bedrijf"
            data-testid="contact-bedrijf"
            placeholder="Uw bedrijfsnaam"
            className="mt-1"
            {...register("bedrijf")}
          />
          {errors.bedrijf && <p className="text-red-600 text-sm mt-1">{errors.bedrijf.message}</p>}
        </div>
        <div>
          <Label htmlFor="contact-rol">Uw rol *</Label>
          <select
            id="contact-rol"
            data-testid="contact-rol"
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("rol")}
          >
            <option value="">Selecteer uw rol</option>
            {ROLLEN.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          {errors.rol && <p className="text-red-600 text-sm mt-1">{errors.rol.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="contact-herkomst">Hoe heeft u ons gevonden? *</Label>
        <select
          id="contact-herkomst"
          data-testid="contact-herkomst"
          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          {...register("herkomst")}
        >
          <option value="">Selecteer een optie</option>
          {HERKOMSTEN.map((h) => <option key={h} value={h}>{h}</option>)}
        </select>
        {errors.herkomst && <p className="text-red-600 text-sm mt-1">{errors.herkomst.message}</p>}
      </div>

      <div>
        <Label htmlFor="contact-bericht">Uw vraag of behoefte *</Label>
        <Textarea
          id="contact-bericht"
          data-testid="contact-bericht"
          placeholder="Beschrijf kort wat u zoekt of wilt bespreken..."
          rows={5}
          className="mt-1"
          {...register("bericht")}
        />
        {errors.bericht && (
          <p className="text-red-600 text-sm mt-1">{errors.bericht.message}</p>
        )}
      </div>

      {status === "ok" && (
        <div
          role="status"
          className="rounded-lg bg-green-50 border border-green-200 text-green-800 p-4 text-sm"
        >
          Bericht ontvangen! We nemen binnen 1 werkdag contact met u op.
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg bg-red-50 border border-red-200 text-red-800 p-4 text-sm"
        >
          Er is iets misgegaan. Probeer het later opnieuw of mail naar info@veriductus.nl.
        </div>
      )}

      <Button
        type="submit"
        data-testid="contact-submit"
        disabled={status === "loading"}
        className="w-full text-white font-semibold"
        style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
      >
        {status === "loading" ? "Versturen..." : "Gesprek aanvragen"}
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
