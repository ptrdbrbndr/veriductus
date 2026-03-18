import { redirect } from "next/navigation";
import Link from "next/link";
import { createAuthServerClient } from "@/lib/supabase/ssr-server";
import { PortaalNav } from "./PortaalNav";

const SECTIES = [
  {
    href: "/portaal/linkedin",
    titel: "LinkedIn",
    beschrijving: "Bedrijfspagina content, 10 kant-en-klare posts en contentkalender Q1/Q2.",
    tags: ["Stap 2", "Content"],
    kleur: "#0A66C2",
  },
  {
    href: "/portaal/crm",
    titel: "CRM & Salesproces",
    beschrijving: "HubSpot setup, pipeline-fases, kwalificatiecriteria en 7 follow-up e-mailtemplates.",
    tags: ["Stap 3", "Sales"],
    kleur: "#FF7A59",
  },
  {
    href: "/portaal/whitepaper",
    titel: "Whitepaper QA in NL",
    beschrijving: "Volledig whitepaper 'De staat van QA in Nederlandse softwareteams' — klaar voor PDF-opmaak.",
    tags: ["Stap 4", "Content"],
    kleur: "#4776A8",
  },
  {
    href: "/portaal/quick-scan",
    titel: "Quick Scan",
    beschrijving: "Methodiek, volledig rapport-template en offerteprocedure incl. kant-en-klare offerte.",
    tags: ["Stap 5", "Sales"],
    kleur: "#5FC38E",
  },
];

export default async function PortaalDashboard() {
  const supabase = await createAuthServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/portaal/login");

  return (
    <>
      <PortaalNav />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-[#1D1E4B]">Dashboard</h1>
          <p className="text-sm text-[#3A3B5C] mt-1">
            Ingelogd als <span className="font-medium">{user.email}</span>
          </p>
        </div>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-green-700">Fase 1 voltooid — 5/17 stappen afgerond</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SECTIES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              data-testid={`portaal-card-${s.titel.toLowerCase().replace(/\s/g, "-")}`}
              className="group bg-white rounded-2xl border border-[#E2E4EC] p-6 hover:border-[#4776A8] hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: s.kleur }}
                >
                  {s.titel[0]}
                </div>
                <svg className="w-4 h-4 text-[#B0B3C6] group-hover:text-[#4776A8] transition-colors mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h2 className="font-bold text-[#1D1E4B] mb-2">{s.titel}</h2>
              <p className="text-sm text-[#3A3B5C] leading-relaxed mb-4">{s.beschrijving}</p>
              <div className="flex gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#F4F6FA] text-[#3A3B5C] font-medium border border-[#E2E4EC]">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
