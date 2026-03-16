import Link from "next/link";

const DIENSTEN_LINKS = [
  { href: "/diensten/test-automatisering", label: "Test Automatisering" },
  { href: "/diensten/qa-architectuur", label: "QA Architectuur" },
  { href: "/diensten/security-testing", label: "Security Testing" },
  { href: "/diensten/cicd-integratie", label: "CI/CD Integratie" },
  { href: "/diensten/team-coaching", label: "Team Coaching" },
];

export function Footer() {
  return (
    <footer className="bg-[#1D1E4B] text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Merk */}
        <div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Veri
            <span
              style={{
                background: "linear-gradient(135deg, #4776A8, #5FC38E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ductus
            </span>
          </span>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Betrouwbare kwaliteit, gedreven professionals. Detacheringsorganisatie
            van software testers via het Ductus-gildemodel.
          </p>
        </div>

        {/* Diensten */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Diensten
          </h3>
          <ul className="space-y-2">
            {DIENSTEN_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a
                href="mailto:info@veriductus.nl"
                className="hover:text-white transition-colors"
              >
                info@veriductus.nl
              </a>
            </li>
            <li>
              <Link
                href="/word-gilde-lid"
                className="hover:text-white transition-colors"
              >
                Word Gilde-lid
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacyverklaring
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Veriductus — onderdeel van Ductus Holding</span>
          <span>Alleen software testen. Niets meer, niets minder.</span>
        </div>
      </div>
    </footer>
  );
}
