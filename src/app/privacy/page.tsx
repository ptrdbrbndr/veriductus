import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van Veriductus. Hoe wij omgaan met uw persoonsgegevens.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-3xl font-extrabold text-[#1D1E4B] mb-8">Privacyverklaring</h1>
        <p className="text-[#3A3B5C] mb-6">
          Veriductus, onderdeel van Ductus Holding, hecht veel waarde aan de bescherming van uw
          persoonsgegevens. In deze verklaring leggen wij uit welke gegevens wij verzamelen,
          waarvoor wij deze gebruiken en hoe wij uw privacy waarborgen.
        </p>

        <h2 className="text-xl font-bold text-[#1D1E4B] mt-8 mb-3">1. Welke gegevens verzamelen wij?</h2>
        <ul className="list-disc list-inside text-[#3A3B5C] space-y-1 mb-4">
          <li>Naam, e-mailadres, bedrijfsnaam en rol — via het contactformulier</li>
          <li>Naam, e-mailadres en LinkedIn-profiel — via het aanmeldformulier voor kandidaat-gildeleden</li>
          <li>Anonieme websitebezoekdata — via Plausible Analytics (geen cookies, geen persoonlijk identificeerbare informatie)</li>
        </ul>

        <h2 className="text-xl font-bold text-[#1D1E4B] mt-8 mb-3">2. Waarvoor gebruiken wij uw gegevens?</h2>
        <ul className="list-disc list-inside text-[#3A3B5C] space-y-1 mb-4">
          <li>Opvolging van uw contactverzoek of aanmelding</li>
          <li>Communicatie over opdrachten en samenwerkingen (voor kandidaat-gildeleden)</li>
          <li>Verbetering van onze diensten (anonieme analytics)</li>
        </ul>

        <h2 className="text-xl font-bold text-[#1D1E4B] mt-8 mb-3">3. Grondslag</h2>
        <p className="text-[#3A3B5C] mb-4">
          Wij verwerken uw gegevens op basis van uw toestemming (aanmelding, contactformulier) of
          op basis van ons gerechtvaardigd belang (opvolging van zakelijk contact).
        </p>

        <h2 className="text-xl font-bold text-[#1D1E4B] mt-8 mb-3">4. Bewaartermijn</h2>
        <ul className="list-disc list-inside text-[#3A3B5C] space-y-1 mb-4">
          <li>Contactgegevens (leads): maximaal 24 maanden na laatste contact</li>
          <li>Gegevens gilde-kandidaten: tot afronding van de procedure + 12 maanden</li>
          <li>Websitedata (anoniem): 24 maanden</li>
        </ul>

        <h2 className="text-xl font-bold text-[#1D1E4B] mt-8 mb-3">5. Uw rechten</h2>
        <p className="text-[#3A3B5C] mb-4">
          Op grond van de AVG heeft u het recht op inzage, correctie, verwijdering en bezwaar.
          Stuur uw verzoek naar{" "}
          <a href="mailto:info@veriductus.nl" className="text-[#4776A8] hover:underline">
            info@veriductus.nl
          </a>
          . Wij reageren binnen 30 dagen.
        </p>

        <h2 className="text-xl font-bold text-[#1D1E4B] mt-8 mb-3">6. Derde partijen</h2>
        <p className="text-[#3A3B5C] mb-4">
          Wij maken gebruik van de volgende diensten die uw gegevens kunnen verwerken:
        </p>
        <ul className="list-disc list-inside text-[#3A3B5C] space-y-1 mb-4">
          <li>Supabase (database, EU-regio) — verwerkersovereenkomst van toepassing</li>
          <li>Vercel (hosting, EU-edge) — verwerkersovereenkomst van toepassing</li>
          <li>Resend (e-mail) — verwerkersovereenkomst van toepassing</li>
          <li>Plausible Analytics (anonieme websitestatistieken, EU-servers)</li>
        </ul>

        <h2 className="text-xl font-bold text-[#1D1E4B] mt-8 mb-3">7. Beveiliging</h2>
        <p className="text-[#3A3B5C] mb-4">
          Wij nemen passende technische en organisatorische maatregelen om uw gegevens te
          beschermen, waaronder HTTPS-verbindingen, toegangscontrole (Row Level Security) en
          minimale gegevensverzameling.
        </p>

        <h2 className="text-xl font-bold text-[#1D1E4B] mt-8 mb-3">8. Contact</h2>
        <p className="text-[#3A3B5C]">
          Veriductus — onderdeel van Ductus Holding
          <br />
          E-mail:{" "}
          <a href="mailto:info@veriductus.nl" className="text-[#4776A8] hover:underline">
            info@veriductus.nl
          </a>
          <br />
          Versie: maart 2026
        </p>
      </div>
    </section>
  );
}
