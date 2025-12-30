import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PrimaryNav } from "@/components/layout/PrimaryNav";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/welschlogo.png"
            alt="Frank Welsch Rechtsanwälte – Insolvenzverwalter Gütersloh"
            width={120}
            priority
            className="h-auto w-auto"
          />
        </Link>
        <PrimaryNav />
      </Container>
    </header>
  );
}
