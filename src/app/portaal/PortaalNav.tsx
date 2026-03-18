"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const NAVITEMS = [
  { href: "/portaal", label: "Dashboard", exact: true },
  { href: "/portaal/linkedin", label: "LinkedIn" },
  { href: "/portaal/crm", label: "CRM & Sales" },
  { href: "/portaal/whitepaper", label: "Whitepaper" },
  { href: "/portaal/quick-scan", label: "Quick Scan" },
];

export function PortaalNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function uitloggen() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/portaal/login");
    router.refresh();
  }

  return (
    <header className="bg-white border-b border-[#E2E4EC] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/portaal" className="text-sm font-extrabold text-[#1D1E4B]">
            Veriductus Portaal
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {NAVITEMS.map((item) => {
              const actief = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href) && item.href !== "/portaal";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    actief
                      ? "bg-[#EEF2F8] text-[#4776A8]"
                      : "text-[#3A3B5C] hover:text-[#1D1E4B] hover:bg-[#F4F6FA]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <button
          onClick={uitloggen}
          data-testid="portaal-uitloggen"
          className="text-xs text-[#3A3B5C] hover:text-red-600 transition-colors font-medium"
        >
          Uitloggen
        </button>
      </div>
    </header>
  );
}
