import { redirect } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";
import { createAuthServerClient } from "@/lib/supabase/ssr-server";
import { PortaalMarkdownPagina } from "../PortaalMarkdownPagina";

export default async function LinkedInPage() {
  const supabase = await createAuthServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/portaal/login");

  const bedrijfspagina = readFileSync(
    join(process.cwd(), "docs/linkedin/bedrijfspagina.md"),
    "utf-8"
  );
  const contentkalender = readFileSync(
    join(process.cwd(), "docs/linkedin/contentkalender.md"),
    "utf-8"
  );

  return (
    <PortaalMarkdownPagina
      titel="LinkedIn — Stap 2"
      tag="Stap 2 · Content"
      secties={[
        { titel: "Bedrijfspagina content", inhoud: bedrijfspagina },
        { titel: "Contentkalender & 10 posts", inhoud: contentkalender },
      ]}
    />
  );
}
