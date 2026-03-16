import type { Metadata } from "next";
import { IntakeFormulier } from "@/components/IntakeFormulier";

export const metadata: Metadata = {
  title: "Contact — Gesprek aanvragen",
  description:
    "Vraag een vrijblijvend gesprek aan met Veriductus. Wij helpen u de juiste software tester te vinden via het Ductus-gildemodel.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-6 text-center bg-white border-b border-[#E2E4EC]">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#1D1E4B] mb-4">
            Gesprek aanvragen
          </h1>
          <p className="text-[#3A3B5C] text-lg">
            Vrijblijvend kennismakingsgesprek. We reageren binnen 1 werkdag.
          </p>
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
