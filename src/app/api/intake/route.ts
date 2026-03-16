import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createServerClient } from "@/lib/supabase/server";

const schema = z.object({
  naam: z.string().min(2),
  email: z.string().email(),
  bedrijf: z.string().min(2),
  rol: z.enum(["CTO / VP Engineering", "Hoofd QA / Lead Tester", "IT Manager", "Anders"]),
  herkomst: z.enum(["Website", "LinkedIn", "Aanbeveling", "Anders"]),
  bericht: z.string().min(10),
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

  const { naam, email, bedrijf, rol, herkomst, bericht } = parsed.data;

  try {
    const supabase = createServerClient();
    const { error } = await supabase.from("leads").insert({
      naam,
      email,
      bedrijf,
      rol,
      bericht,
      herkomst: herkomst.toLowerCase(),
    });

    if (error) {
      console.error("[intake] supabase fout:", error.message);
      return NextResponse.json({ fout: "Er is iets misgegaan. Probeer later opnieuw." }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[intake] onverwachte fout:", err);
    return NextResponse.json({ fout: "Er is iets misgegaan. Probeer later opnieuw." }, { status: 500 });
  }
}
