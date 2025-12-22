import Link from "next/link";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-base font-semibold tracking-tight text-slate-900">
            Insolvenzrecht &amp; Sanierung kompakt
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link className="text-slate-700 hover:text-slate-900" href="/blog">Blog</Link>
            <Link className="text-slate-700 hover:text-slate-900" href="/leistungen">Leistungen</Link>
            <Link className="text-slate-700 hover:text-slate-900" href="/lexikon">Lexikon</Link>
            <Link className="text-slate-700 hover:text-slate-900" href="/personen">Team</Link>
            <Link className="text-slate-700 hover:text-slate-900" href="/standorte">Standorte</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Frank Welsch</div>
          <div className="flex gap-4">
            <Link className="hover:text-slate-900" href="/impressum">Impressum</Link>
            <Link className="hover:text-slate-900" href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
