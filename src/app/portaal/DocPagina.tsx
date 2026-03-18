import Link from "next/link";
import { PortaalNav } from "./PortaalNav";

interface Props {
  titel: string;
  children: React.ReactNode;
}

export function DocPagina({ titel, children }: Props) {
  return (
    <>
      <PortaalNav />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-6">
          <Link
            href="/portaal"
            className="text-xs text-[#3A3B5C] hover:text-[#4776A8] transition-colors flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar dashboard
          </Link>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E4EC] p-8">
          <h1 className="text-2xl font-extrabold text-[#1D1E4B] mb-6 pb-6 border-b border-[#E2E4EC]">{titel}</h1>
          <div className="prose prose-sm max-w-none text-[#3A3B5C] prose-headings:text-[#1D1E4B] prose-a:text-[#4776A8] prose-strong:text-[#1D1E4B] prose-code:text-[#4776A8] prose-pre:bg-[#F4F6FA] prose-pre:border prose-pre:border-[#E2E4EC]">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
