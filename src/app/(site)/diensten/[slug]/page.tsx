import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { DIENSTEN, getDienstBySlug } from "@/lib/diensten";
import { CheckCircle, ArrowRight, Wrench } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DIENSTEN.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dienst = getDienstBySlug(slug);
  if (!dienst) return {};
  return {
    title: dienst.metaTitle,
    description: dienst.metaDescription,
    alternates: { canonical: `https://veriductus.nl/diensten/${slug}` },
  };
}

export default async function DienstDetailPage({ params }: Props) {
  const { slug } = await params;
  const dienst = getDienstBySlug(slug);
  if (!dienst) notFound();

  const Icon = dienst.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-0 overflow-hidden">
        <div className="relative h-64 md:h-80">
          <Image
            src={dienst.foto}
            alt={dienst.fotoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${dienst.accentKleur}F0 0%, ${dienst.accentKleur}88 50%, ${dienst.accentKleur}33 100%)`,
            }}
          />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-6 pb-10 w-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-white/80 text-sm font-medium">Veriductus Dienst</span>
              </div>
              <h1
                className="text-3xl md:text-4xl font-extrabold text-white mb-2"
                data-testid="dienst-titel"
              >
                {dienst.titel}
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                {dienst.heroSubtitel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-[#3A3B5C] leading-relaxed mb-10">
            {dienst.beschrijving}
          </p>

          {/* Wat we doen */}
          <h2 className="text-2xl font-bold text-[#1D1E4B] mb-6">Wat we doen</h2>
          <div className="space-y-4 mb-12">
            {dienst.details.map((detail) => (
              <div key={detail} className="flex gap-3">
                <CheckCircle
                  className="h-5 w-5 shrink-0 mt-0.5"
                  style={{ color: dienst.accentKleur }}
                />
                <p className="text-[#3A3B5C] text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          {/* Voordelen */}
          <h2 className="text-2xl font-bold text-[#1D1E4B] mb-6">Wat het u oplevert</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {dienst.voordelen.map((voordeel) => (
              <div
                key={voordeel}
                className="bg-[#F4F6FA] rounded-xl p-4 border border-[#E2E4EC]"
              >
                <p className="text-sm text-[#1D1E4B] font-medium">{voordeel}</p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <h2 className="text-2xl font-bold text-[#1D1E4B] mb-4">Tools & frameworks</h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {dienst.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E2E4EC] rounded-full text-sm text-[#3A3B5C]"
              >
                <Wrench className="h-3.5 w-3.5" style={{ color: dienst.accentKleur }} />
                {tool}
              </span>
            ))}
          </div>

          {/* Praktijkvoorbeeld */}
          <div
            className="rounded-2xl p-6 md:p-8 text-white"
            style={{ background: `linear-gradient(135deg, #1D1E4B, ${dienst.accentKleur})` }}
          >
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">
              Praktijkvoorbeeld
            </p>
            <p className="text-white/95 leading-relaxed">{dienst.caseVoorbeeld}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center text-white"
        style={{ background: `linear-gradient(135deg, ${dienst.accentKleur}, #5FC38E)` }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-3">
            Klaar om {dienst.titel.toLowerCase()} aan te pakken?
          </h2>
          <p className="text-white/80 mb-6 text-sm">
            Een vrijblijvend gesprek kost niets. Vertel ons waar u tegenaan loopt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              data-testid="dienst-detail-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#1D1E4B] bg-white hover:bg-white/90 transition-colors text-sm"
            >
              Gesprek aanvragen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/quick-scan"
              data-testid="dienst-quick-scan-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors text-sm"
            >
              Quick Scan aanvragen
            </Link>
          </div>
        </div>
      </section>

      {/* Andere diensten */}
      <section className="py-16 px-6 bg-[#F4F6FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1D1E4B] mb-6 text-center">
            Andere diensten
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIENSTEN.filter((d) => d.slug !== slug).map((d) => (
              <Link
                key={d.slug}
                href={`/diensten/${d.slug}`}
                data-testid={`andere-dienst-${d.slug}`}
                className="bg-white rounded-xl border border-[#E2E4EC] p-4 hover:shadow-md hover:border-[#4776A8] transition-all"
              >
                <h3 className="font-semibold text-[#1D1E4B] text-sm mb-1">{d.titel}</h3>
                <p className="text-xs text-[#3A3B5C]">{d.korte_beschrijving}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
