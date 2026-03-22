import type { Metadata } from "next";
import Image from "next/image";
import { IntakeFormulier } from "@/components/IntakeFormulier";

export const metadata: Metadata = {
  title: "Contact — Gesprek aanvragen",
  description:
    "Vraag een vrijblijvend gesprek aan met Veriductus. Wij helpen u de juiste software tester te vinden via het Ductus-gildemodel.",
};

const VERTROUWEN = [
  {
    src: "/images/gilde/werkdag.jpg",
    alt: "Professionele werkplek — snel en direct antwoord",
    titel: "Binnen 1 werkdag",
    tekst: "U ontvangt altijd binnen één werkdag een reactie.",
  },
  {
    src: "/images/gilde/vrijblijvend.jpg",
    alt: "Ontspannen kennismakingsgesprek zonder verplichtingen",
    titel: "Volledig vrijblijvend",
    tekst: "Geen verplichtingen. Gewoon kennismaken en kijken of er een match is.",
  },
  {
    src: "/images/gilde/nederland.jpg",
    alt: "Gilde-ondernemers actief door heel Nederland",
    titel: "Door heel Nederland",
    tekst: "Gilde-ondernemers werken bij klanten in de hele Randstad en daarbuiten.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-6 text-center bg-white border-b border-[#E2E4EC]">
        <div className="max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Vrijblijvend kennismaken
          </div>
          <h1 className="text-4xl font-extrabold text-[#1D1E4B] mb-4">
            Gesprek aanvragen
          </h1>
          <p className="text-[#3A3B5C] text-lg">
            Vrijblijvend kennismakingsgesprek. We reageren binnen 1 werkdag.
          </p>
        </div>
      </section>

      {/* Vertrouwenstegels met afbeeldingen */}
      <section className="py-12 px-6 bg-[#F4F6FA]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {VERTROUWEN.map((v) => (
            <div key={v.titel} className="bg-white rounded-2xl overflow-hidden border border-[#E2E4EC] flex flex-col">
              <div className="relative h-36 w-full">
                <Image
                  src={v.src}
                  alt={v.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1E4B]/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-white font-bold text-sm drop-shadow">{v.titel}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#3A3B5C] leading-relaxed">{v.tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <IntakeFormulier />
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-t border-[#E2E4EC]">
        <div className="max-w-2xl mx-auto text-center text-sm text-[#3A3B5C]">
          <p>Liever direct mailen?</p>
          <a
            href="mailto:info@veriductus.nl"
            className="font-semibold text-[#4776A8] hover:text-[#5FC38E] transition-colors"
          >
            info@veriductus.nl
          </a>
        </div>
      </section>
    </>
  );
}
