import { redirect } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";
import { createAuthServerClient } from "@/lib/supabase/ssr-server";
import { PortaalMarkdownPagina } from "../PortaalMarkdownPagina";

export default async function WhitepaperPage() {
  const supabase = await createAuthServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/portaal/login");

  const inhoud = readFileSync(
    join(process.cwd(), "docs/whitepaper-qa-staat-nl.md"),
    "utf-8"
  );

  return (
    <PortaalMarkdownPagina
      titel="Whitepaper: De staat van QA in NL — Stap 4"
      tag="Stap 4 · Content"
      secties={[{ titel: "Whitepaper (volledig)", inhoud }]}
    />
  );
}
