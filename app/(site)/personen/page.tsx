import Link from "next/link";
import { getAllContentByType } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Team",
    description: "Die Ansprechpartner für Insolvenzrecht, Restrukturierung und Sanierung.",
    canonical: "/personen"
  });

export default function PersonenIndexPage() {
  const entries = getAllContentByType("personen");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Team"
        subtitle="Erfahrene Ansprechpartner für Unternehmen, Gläubiger und Beraternetzwerke."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {entries.map((entry) => (
          <Card key={entry.slug} className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Profil</div>
            <Link
              href={`/personen/${entry.slug}`}
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
