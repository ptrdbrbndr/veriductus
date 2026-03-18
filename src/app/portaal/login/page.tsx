"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function PortaalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [fout, setFout] = useState<string | null>(null);
  const [bezig, setBezig] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFout(null);
    setBezig(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: wachtwoord,
    });

    setBezig(false);

    if (error) {
      setFout("Ongeldig e-mailadres of wachtwoord.");
      return;
    }

    router.push("/portaal");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F6FA] px-4">
      <div className="w-full max-w-sm">
        {/* Logo / branding */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-[#1D1E4B]">Veriductus Portaal</h1>
          <p className="text-sm text-[#3A3B5C] mt-1">Intern team dashboard</p>
        </div>

        {/* Formulier */}
        <div className="bg-white rounded-2xl border border-[#E2E4EC] p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1D1E4B] mb-1.5">
                E-mailadres
              </label>
              <input
                id="email"
                type="email"
                data-testid="login-email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E4EC] text-sm text-[#1D1E4B] bg-[#F4F6FA] focus:outline-none focus:ring-2 focus:ring-[#4776A8] focus:border-transparent transition"
                placeholder="naam@ductus.nl"
              />
            </div>

            <div>
              <label htmlFor="wachtwoord" className="block text-sm font-medium text-[#1D1E4B] mb-1.5">
                Wachtwoord
              </label>
              <input
                id="wachtwoord"
                type="password"
                data-testid="login-wachtwoord"
                required
                autoComplete="current-password"
                value={wachtwoord}
                onChange={(e) => setWachtwoord(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E4EC] text-sm text-[#1D1E4B] bg-[#F4F6FA] focus:outline-none focus:ring-2 focus:ring-[#4776A8] focus:border-transparent transition"
                placeholder="••••••••"
              />
            </div>

            {fout && (
              <p data-testid="login-fout" className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                {fout}
              </p>
            )}

            <button
              type="submit"
              data-testid="login-submit"
              disabled={bezig}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
            >
              {bezig ? "Inloggen…" : "Inloggen"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
