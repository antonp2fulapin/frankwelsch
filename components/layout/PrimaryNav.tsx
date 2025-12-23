"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/blog", label: "Blog" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/lexikon", label: "Lexikon" },
  { href: "/personen", label: "Team" },
  { href: "/standorte", label: "Standorte" }
];

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4">
      <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
        {navItems.map((item) => {
          const active = isActive(pathname ?? "", item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-slate-900 ${
                active ? "text-slate-900" : "text-slate-600"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <details className="relative md:hidden">
        <summary className="cursor-pointer list-none rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2">
          Menü
        </summary>
        <div className="absolute right-0 z-30 mt-2 w-52 rounded-2xl border border-slate-200/70 bg-white p-2 shadow-lg">
          {navItems.map((item) => {
            const active = isActive(pathname ?? "", item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-3 py-2 text-sm transition hover:bg-slate-50 ${
                  active ? "bg-slate-50 text-slate-900" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </details>
    </div>
  );
}
