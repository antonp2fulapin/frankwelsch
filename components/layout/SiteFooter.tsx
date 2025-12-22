import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navigation = [
  { href: "/", label: "Startseite" },
  { href: "/blog", label: "Blog" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/lexikon", label: "Lexikon" },
  { href: "/personen", label: "Team" },
  { href: "/standorte", label: "Standorte" }
];

const services = [
  { href: "/leistungen", label: "Leistungsspektrum" },
  { href: "/leistungen/insolvenzberatung", label: "Insolvenzberatung" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <Container className="space-y-10 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Leistungen
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Kontakt
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Telefon: +49 (0)30 000 000</li>
              <li>E-Mail: kontakt@frankwelsch.de</li>
              <li>Standorte: Berlin · Hamburg · München</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-6 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Frank Welsch Rechtsanwälte</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/impressum" className="hover:text-slate-700">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-700">
              Datenschutz
            </Link>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Die Inhalte dieser Website stellen keine Rechtsberatung dar und ersetzen kein persönliches
          Mandantengespräch.
        </p>
      </Container>
    </footer>
  );
}
