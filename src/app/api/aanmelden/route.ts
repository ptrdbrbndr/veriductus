import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createServerClient } from "@/lib/supabase/server";

const schema = z.object({
  naam: z.string().min(2),
  email: z.string().email(),
  linkedin: z.string().url().optional().or(z.literal("")),
  motivatie: z.string().min(20),
});

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

  const { naam, email, linkedin, motivatie } = parsed.data;

  try {
    const supabase = createServerClient();
    const { error } = await supabase.from("gilde_kandidaten").insert({
      naam,
      email,
      linkedin: linkedin || null,
      motivatie,
    });

    if (error) {
      console.error("[aanmelden] supabase fout:", error.message);
      return NextResponse.json({ fout: "Er is iets misgegaan. Probeer later opnieuw." }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[aanmelden] onverwachte fout:", err);
    return NextResponse.json({ fout: "Er is iets misgegaan. Probeer later opnieuw." }, { status: 500 });
  }
}
