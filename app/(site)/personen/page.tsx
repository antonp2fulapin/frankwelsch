import Link from "next/link";
import { getAllContentByType } from "@/lib/content";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";
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
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/personen`;
  const schemas: unknown[] = [];

  schemas.push(
    buildBreadcrumbSchema([
      { name: "Startseite", url: siteUrl },
      { name: "Team", url: canonical }
    ])
  );

  schemas.push(
    buildItemListSchema({
      name: "Team",
      items: entries.map((entry) => ({
        url: `${siteUrl}/personen/${entry.slug}`,
        title: entry.title
      }))
    })
  );

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
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
