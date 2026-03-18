import type { ReactNode } from "react";

// Portaal heeft eigen layout zonder publieke Nav/Footer
export default function PortaalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4F6FA]">
      {children}
    </div>
  );
}
