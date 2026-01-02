import Link from "next/link";
import { getAllContentByType } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Gütersloh",
    description: "Kanzleisitz in Gütersloh für Insolvenzverwaltung und Beratung.",
    canonical: "/standorte/guetersloh"
  });

export default function StandorteIndexPage() {
  const entries = getAllContentByType("standorte");

  return (
    <div className="space-y-10">
      <SectionHeader title="Gütersloh" subtitle="Kanzleisitz und zentraler Ansprechpartner." />
      <div className="grid gap-6 md:grid-cols-2">
        {entries.map((entry) => (
          <Card key={entry.slug} className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Kanzleisitz
            </div>
            <Link
              href={`/standorte/${entry.slug}`}
              className="text-xl font-semibold text-slate-900"
            >
              {entry.title}
            </Link>
            <p className="text-sm text-slate-600">{entry.excerpt}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
