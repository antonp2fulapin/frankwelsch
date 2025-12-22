import type { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/40 ${
        className ?? ""
      }`.trim()}
    >
      {children}
    </div>
  );
}
