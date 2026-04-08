import { redirect } from "next/navigation";
import { createAuthServerClient } from "@/lib/supabase/ssr-server";
import { PortaalNav } from "../PortaalNav";

interface Lead {
  id: string;
  naam: string;
  email: string;
  bedrijf: string;
  rol: string;
  herkomst: string;
  bericht: string;
  aangemaakt_op: string;
}

const STATUS_KLEUREN: Record<string, { bg: string; text: string; label: string }> = {
  "quick-scan": { bg: "bg-purple-50", text: "text-purple-700", label: "Quick Scan" },
  website: { bg: "bg-blue-50", text: "text-blue-700", label: "Website" },
  linkedin: { bg: "bg-sky-50", text: "text-sky-700", label: "LinkedIn" },
  aanbeveling: { bg: "bg-green-50", text: "text-green-700", label: "Aanbeveling" },
  anders: { bg: "bg-gray-50", text: "text-gray-700", label: "Anders" },
};

function herkomstBadge(herkomst: string) {
  const h = herkomst.toLowerCase();
  const kleur = STATUS_KLEUREN[h] ?? STATUS_KLEUREN.anders;
  return (
    <span
      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${kleur.bg} ${kleur.text}`}
    >
      {kleur.label}
    </span>
  );
}

function formatDatum(iso: string) {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function LeadsPage() {
  const supabase = await createAuthServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/portaal/login");

  const { data: leads, error } = await supabase
    .from("leads")
    .select("id, naam, email, bedrijf, rol, herkomst, bericht, aangemaakt_op")
    .order("aangemaakt_op", { ascending: false })
    .limit(100);

  const leadsData = (leads as Lead[] | null) ?? [];

  return (
    <>
      <PortaalNav />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-[#1D1E4B]" data-testid="leads-titel">
              Leads
            </h1>
            <p className="text-sm text-[#3A3B5C] mt-1">
              {leadsData.length} {leadsData.length === 1 ? "lead" : "leads"} — meest recente bovenaan
            </p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-700">
              Kon leads niet ophalen. Controleer de databaseverbinding.
            </p>
          </div>
        )}

        {leadsData.length === 0 && !error ? (
          <div className="bg-white rounded-2xl border border-[#E2E4EC] p-12 text-center">
            <p className="text-[#3A3B5C]">Nog geen leads ontvangen.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#E2E4EC] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" data-testid="leads-tabel">
                <thead>
                  <tr className="border-b border-[#E2E4EC] bg-[#F4F6FA]">
                    <th className="text-left text-xs font-semibold text-[#3A3B5C] uppercase tracking-wider px-4 py-3">
                      Naam
                    </th>
                    <th className="text-left text-xs font-semibold text-[#3A3B5C] uppercase tracking-wider px-4 py-3">
                      Bedrijf
                    </th>
                    <th className="text-left text-xs font-semibold text-[#3A3B5C] uppercase tracking-wider px-4 py-3">
                      E-mail
                    </th>
                    <th className="text-left text-xs font-semibold text-[#3A3B5C] uppercase tracking-wider px-4 py-3">
                      Herkomst
                    </th>
                    <th className="text-left text-xs font-semibold text-[#3A3B5C] uppercase tracking-wider px-4 py-3">
                      Datum
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leadsData.map((lead) => (
                    <tr
                      key={lead.id}
                      data-testid={`lead-row-${lead.id}`}
                      className="border-b border-[#E2E4EC] last:border-0 hover:bg-[#F4F6FA] transition-colors"
                    >
                      <td className="px-4 py-3">
                        <p className="text-sm font-medium text-[#1D1E4B]">{lead.naam}</p>
                        <p className="text-xs text-[#6B6C7F]">{lead.rol}</p>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#3A3B5C]">
                        {lead.bedrijf}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#3A3B5C]">
                        <a
                          href={`mailto:${lead.email}`}
                          className="hover:text-[#4776A8] underline"
                        >
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        {herkomstBadge(lead.herkomst)}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#6B6C7F] whitespace-nowrap">
                        {formatDatum(lead.aangemaakt_op)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
