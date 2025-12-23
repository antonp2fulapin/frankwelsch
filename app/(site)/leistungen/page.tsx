import Link from "next/link";
import { getAllContentByType } from "@/lib/content";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Leistungen",
    description: "Strategische Beratung und Begleitung in Insolvenz- und Restrukturierungsverfahren.",
    canonical: "/leistungen"
  });

export default function LeistungenIndexPage() {
  const entries = getAllContentByType("leistungen");
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/leistungen`;
  const schemas: unknown[] = [];

  schemas.push(
    buildBreadcrumbSchema([
      { name: "Startseite", url: siteUrl },
      { name: "Leistungen", url: canonical }
    ])
  );

  schemas.push(
    buildItemListSchema({
      name: "Leistungen",
      items: entries.map((entry) => ({
        url: `${siteUrl}/leistungen/${entry.slug}`,
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
        title="Leistungen"
        subtitle="Umfassende Begleitung von der ersten Analyse bis zur gerichtlichen Umsetzung."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {entries.map((entry) => (
          <Card key={entry.slug} className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Leistung</div>
            <Link
              href={`/leistungen/${entry.slug}`}
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
