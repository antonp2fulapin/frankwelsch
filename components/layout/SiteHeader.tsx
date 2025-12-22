import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PrimaryNav } from "@/components/layout/PrimaryNav";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-base font-semibold tracking-tight text-slate-900">
          Frank Welsch Rechtsanwälte
        </Link>
        <PrimaryNav />
      </Container>
    </header>
  );
}
