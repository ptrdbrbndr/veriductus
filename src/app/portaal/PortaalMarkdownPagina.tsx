"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PortaalNav } from "./PortaalNav";

interface Sectie {
  titel: string;
  inhoud: string;
}

interface Props {
  titel: string;
  tag: string;
  secties: Sectie[];
}

export function PortaalMarkdownPagina({ titel, tag, secties }: Props) {
  return (
    <>
      <PortaalNav />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/portaal"
            className="text-xs text-[#3A3B5C] hover:text-[#4776A8] transition-colors flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar dashboard
          </Link>
          <span className="text-xs px-2.5 py-1 bg-[#EEF2F8] text-[#4776A8] rounded-full font-medium border border-[#D0DAEA]">
            {tag}
          </span>
        </div>

        <h1 className="text-2xl font-extrabold text-[#1D1E4B] mb-6">{titel}</h1>

        <div className="space-y-6">
          {secties.map((sectie) => (
            <details
              key={sectie.titel}
              open
              className="bg-white rounded-2xl border border-[#E2E4EC] overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer select-none hover:bg-[#F4F6FA] transition-colors">
                <span className="font-semibold text-[#1D1E4B] text-sm">{sectie.titel}</span>
                <svg className="w-4 h-4 text-[#B0B3C6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-8 pt-2 border-t border-[#E2E4EC]">
                <div className="markdown-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {sectie.inhoud}
                  </ReactMarkdown>
                </div>
              </div>
            </details>
          ))}
        </div>
      </main>
    </>
  );
}
