import type { Metadata } from "next";
import Image from "next/image";
import { AanmeldFormulier } from "@/components/AanmeldFormulier";

export const metadata: Metadata = {
  title: "Word Gilde-lid",
  description:
    "Meld u aan als kandidaat-gildelid bij Veriductus. Samenwerken aan zelfstandig ondernemerschap als software tester.",
};

const VOORDELEN = [
  {
    src: "/images/gilde/community.jpg",
    alt: "Nederlandse software testers werken samen aan een project",
    titel: "Niet alleen",
    tekst: "Een vakgemeenschap van gedreven software testers om op terug te vallen.",
  },
  {
    src: "/images/gilde/kennisdeling.jpg",
    alt: "Kennisdelingsbijeenkomst met Nederlandse IT-professionals",
    titel: "Kennisdeling",
    tekst: "Leer van collega-ondernemers, deel ervaringen en groei samen.",
  },
  {
    src: "/images/gilde/opdrachten.jpg",
    alt: "Software tester aan het werk bij een Nederlandse opdrachtgever",
    titel: "Opdrachten",
    tekst: "Het gilde brengt opdrachten aan via het Veriductus-netwerk.",
  },
  {
    src: "/images/gilde/vrijheid.jpg",
    alt: "Zelfstandig ondernemer in Nederland — vrijheid en flexibiliteit",
    titel: "Vrijheid",
    tekst: "U blijft zelfstandig ondernemer. Het gilde geeft rugdekking, geen beperkingen.",
  },
];

export default function WordGildeLidPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 px-6 text-center bg-white border-b border-[#E2E4EC]">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            Ductus Gildemodel
          </div>
          <h1 className="text-4xl font-extrabold text-[#1D1E4B] mb-4">
            Word Gilde-lid
          </h1>
          <p className="text-[#3A3B5C] text-lg max-w-xl mx-auto">
            Zelfstandig ondernemer als software tester — maar niet alleen. Het Veriductus-gilde
            biedt u een vakgemeenschap, opdrachten en kennisdeling.
          </p>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16 px-6 bg-[#F4F6FA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VOORDELEN.map((v) => (
            <div key={v.titel} className="bg-white rounded-2xl overflow-hidden border border-[#E2E4EC] flex flex-col">
              <div className="relative h-40 w-full">
                <Image
                  src={v.src}
                  alt={v.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1E4B]/40 to-transparent" />
              </div>
              <div className="p-6 flex flex-col gap-1">
                <h3 className="font-bold text-[#1D1E4B]">{v.titel}</h3>
                <p className="text-sm text-[#3A3B5C] leading-relaxed">{v.tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulier */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1D1E4B] mb-3 text-center">
            Meld u aan als kandidaat
          </h2>
          <p className="text-[#3A3B5C] text-center mb-10 text-sm">
            Vul uw gegevens in. We nemen binnen 2 werkdagen contact met u op voor een
            vrijblijvend kennismakingsgesprek.
          </p>
          <AanmeldFormulier />
        </div>
      </section>
    </>
  );
}
