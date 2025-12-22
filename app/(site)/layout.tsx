import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "@/styles/globals.css";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.className}>
      <body>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-lg font-semibold text-slate-900">
              {SITE_NAME}
            </Link>
            <nav className="flex items-center gap-4 text-sm text-slate-600">
              <Link href="/leistungen/insolvenzberatung">Leistungen</Link>
              <Link href="/personen/dr-julia-weber">Personen</Link>
              <Link href="/blog/insolvenz-plan">Blog</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600">
            <span>© {new Date().getFullYear()} {SITE_NAME}</span>
            <span>Fachinformationen zum deutschen Insolvenzrecht.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
