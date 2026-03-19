import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createServerClient } from "@/lib/supabase/server";

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESEND_API_URL = "https://api.resend.com/emails";
const PDF_URL = "https://veriductus.nl/whitepaper-qa-staat-nl.pdf";

const schema = z.object({
  naam: z.string().min(2),
  email: z.string().email(),
  bedrijf: z.string().min(2).optional(),
  consent: z.literal(true),
  consent_at: z.string().datetime(),
  turnstileToken: z.string().min(1),
});

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  const body = new URLSearchParams({ secret, response: token });
  const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

async function stuurWhitepaperMail(naam: string, email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[whitepaper] RESEND_API_KEY niet geconfigureerd");
    return;
  }

  const voornaam = naam.split(" ")[0];

  await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Veriductus <info@veriductus.nl>",
      to: [email],
      subject: "Uw whitepaper — De staat van QA in Nederlandse softwareteams",
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1D1E4B">
          <div style="background:linear-gradient(135deg,#1D1E4B,#4776A8);padding:32px;border-radius:12px 12px 0 0;text-align:center">
            <p style="color:rgba(255,255,255,0.7);font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px">Veriductus Whitepaper</p>
            <h1 style="color:white;font-size:20px;margin:0;line-height:1.3">De staat van QA in<br>Nederlandse softwareteams</h1>
          </div>
          <div style="background:#F4F6FA;padding:32px;border-radius:0 0 12px 12px">
            <p style="margin:0 0 16px">Beste ${voornaam},</p>
            <p style="margin:0 0 16px;color:#3A3B5C">Bedankt voor uw interesse. Hier is de link om de whitepaper te downloaden:</p>
            <div style="text-align:center;margin:24px 0">
              <a href="${PDF_URL}"
                style="display:inline-block;background:linear-gradient(135deg,#4776A8,#5FC38E);color:white;font-weight:600;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:15px">
                ↓ Download whitepaper (PDF)
              </a>
            </div>
            <p style="margin:16px 0 0;font-size:13px;color:#3A3B5C">
              Vragen? Mail ons op
              <a href="mailto:info@veriductus.nl" style="color:#4776A8">info@veriductus.nl</a>
            </p>
            <hr style="border:none;border-top:1px solid #E2E4EC;margin:24px 0">
            <p style="font-size:12px;color:#9CA3AF;margin:0">
              Veriductus — Betrouwbare kwaliteit, gedreven professionals<br>
              U ontvangt dit bericht omdat u de whitepaper heeft aangevraagd op veriductus.nl.
            </p>
          </div>
        </div>
      `,
    }),
  });
}

export async function POST(req: NextRequest) {
  if (req.headers.get("content-type") !== "application/json") {
    return NextResponse.json({ fout: "Ongeldig verzoek" }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ fout: "Ongeldig verzoek" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ fout: "Vul alle verplichte velden correct in" }, { status: 400 });
  }

  const { naam, email, bedrijf, consent_at, turnstileToken } = parsed.data;

  const turnstileOk = await verifyTurnstile(turnstileToken);
  if (!turnstileOk) {
    return NextResponse.json({ fout: "Spambeveiliging mislukt. Probeer het opnieuw." }, { status: 400 });
  }

  try {
    const supabase = createServerClient();
    const { error } = await supabase.from("leads").insert({
      naam,
      email,
      bedrijf: bedrijf ?? null,
      herkomst: "whitepaper",
      consent_at,
    });

    if (error) {
      console.error("[whitepaper] supabase fout:", error.message);
      return NextResponse.json({ fout: "Er is iets misgegaan. Probeer later opnieuw." }, { status: 500 });
    }

    // E-mail sturen (non-blocking — fout in e-mail mag lead niet blokkeren)
    stuurWhitepaperMail(naam, email).catch((err) =>
      console.error("[whitepaper] e-mail fout:", err)
    );

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[whitepaper] onverwachte fout:", err);
    return NextResponse.json({ fout: "Er is iets misgegaan. Probeer later opnieuw." }, { status: 500 });
  }
}
