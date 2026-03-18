import { redirect } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";
import { createAuthServerClient } from "@/lib/supabase/ssr-server";
import { PortaalMarkdownPagina } from "../PortaalMarkdownPagina";

export default async function CrmPage() {
  const supabase = await createAuthServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/portaal/login");

  const salesproces = readFileSync(
    join(process.cwd(), "docs/crm/salesproces.md"),
    "utf-8"
  );
  const templates = readFileSync(
    join(process.cwd(), "docs/crm/follow-up-templates.md"),
    "utf-8"
  );

  return (
    <PortaalMarkdownPagina
      titel="CRM & Salesproces — Stap 3"
      tag="Stap 3 · Sales"
      secties={[
        { titel: "Salesproces & HubSpot setup", inhoud: salesproces },
        { titel: "Follow-up e-mailtemplates", inhoud: templates },
      ]}
    />
  );
}
