import { redirect } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";
import { createAuthServerClient } from "@/lib/supabase/ssr-server";
import { PortaalMarkdownPagina } from "../PortaalMarkdownPagina";

export default async function QuickScanPage() {
  const supabase = await createAuthServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/portaal/login");

  const methodiek = readFileSync(
    join(process.cwd(), "docs/quick-scan/methodiek.md"),
    "utf-8"
  );
  const rapport = readFileSync(
    join(process.cwd(), "docs/quick-scan/rapport-template.md"),
    "utf-8"
  );
  const offerte = readFileSync(
    join(process.cwd(), "docs/quick-scan/offerte-procedure.md"),
    "utf-8"
  );

  return (
    <PortaalMarkdownPagina
      titel="Quick Scan — Stap 5"
      tag="Stap 5 · Sales"
      secties={[
        { titel: "Methodiek", inhoud: methodiek },
        { titel: "Rapport template", inhoud: rapport },
        { titel: "Offerteprocedure & template", inhoud: offerte },
      ]}
    />
  );
}
