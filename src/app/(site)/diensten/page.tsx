import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DIENSTEN } from "@/lib/diensten";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Veriductus levert gespecialiseerde software testers via het Ductus-gildemodel. Ontdek onze diensten: testautomatisering, QA-architectuur, security testing en meer.",
};

export default function DienstenPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 px-6 text-center bg-white border-b border-[#E2E4EC]">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Uitsluitend software testen
          </div>
          <h1 className="text-4xl font-extrabold text-[#1D1E4B] mb-4">
            Onze diensten
          </h1>
          <p className="text-[#3A3B5C] text-lg">
            Gespecialiseerde software testers via het Ductus-gildemodel. Geen andere
            disciplines — alleen het beste op het gebied van software testen.
          </p>
        </div>
      </section>

      {/* Diensten grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIENSTEN.map((d) => (
            <Link
              key={d.slug}
              href={`/diensten/${d.slug}`}
              data-testid={`dienst-${d.slug}`}
              className="bg-white rounded-2xl border border-[#E2E4EC] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Foto header */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={d.foto}
                  alt={d.fotoAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${d.accentKleur}E6 0%, ${d.accentKleur}55 50%, transparent 100%)`,
                  }}
                />
                {/* Titel op de foto */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-lg font-extrabold text-white drop-shadow-sm leading-tight">
                    {d.titel}
                  </h2>
                  <p className="text-xs text-white/90 font-medium mt-0.5">
                    {d.korte_beschrijving}
                  </p>
                </div>
              </div>

              {/* Kaartinhoud */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-[#3A3B5C] leading-relaxed flex-1">
                  {d.beschrijving}
                </p>
                <span
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: d.accentKleur }}
                >
                  Meer informatie →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #1D1E4B, #4776A8)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-3">Welke dienst past bij u?</h2>
          <p className="text-white/80 mb-6 text-sm">
            We denken graag mee. Een vrijblijvend gesprek kost niets.
          </p>
          <Link
            href="/contact"
            data-testid="diensten-cta"
            className="inline-flex px-6 py-3 rounded-lg font-semibold text-[#1D1E4B] bg-white hover:bg-white/90 transition-colors text-sm"
          >
            Gesprek aanvragen
          </Link>
        </div>
      </section>
    </>
  );
}
