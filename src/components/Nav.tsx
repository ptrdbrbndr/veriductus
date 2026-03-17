"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/diensten", label: "Diensten" },
  { href: "/gilde", label: "Over het Gilde" },
  { href: "/word-gilde-lid", label: "Word Gilde-lid" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      data-testid="nav"
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E4EC]"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" data-testid="nav-logo">
          <Image
            src="/logo.png"
            alt="Veriductus"
            width={220}
            height={104}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-testid={`nav-${link.href.replace("/", "").replace("-", "")}`}
                className="text-sm font-medium text-[#3A3B5C] hover:text-[#4776A8] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          data-testid="nav-contact-cta"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
        >
          Gesprek aanvragen
        </Link>

        {/* Mobile hamburger */}
        <button
          data-testid="nav-hamburger"
          aria-label="Menu openen"
          className="md:hidden p-2 rounded text-[#1D1E4B]"
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E4EC] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`nav-mobile-${link.href.replace("/", "").replace("-", "")}`}
              className="text-sm font-medium text-[#3A3B5C] hover:text-[#4776A8]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex justify-center px-5 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #4776A8, #5FC38E)" }}
            onClick={() => setOpen(false)}
          >
            Gesprek aanvragen
          </Link>
        </div>
      )}
    </nav>
  );
}
