import Link from "next/link";
import { getAllContentByType } from "@/lib/content";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Lexikon",
    description: "Definitionen zentraler Begriffe aus Insolvenzrecht und Sanierung.",
    canonical: "/lexikon"
  });

export default function LexikonIndexPage() {
  const entries = getAllContentByType("lexikon").sort((a, b) =>
    a.title.localeCompare(b.title, "de")
  );
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/lexikon`;
  const groupedEntries = entries.reduce<Record<string, typeof entries>>((acc, entry) => {
    const letter = entry.title.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(entry);
    return acc;
  }, {});
  const schemas: unknown[] = [];

  schemas.push(
    buildBreadcrumbSchema([
      { name: "Startseite", url: siteUrl },
      { name: "Lexikon", url: canonical }
    ])
  );

  schemas.push(
    buildItemListSchema({
      name: "Lexikon",
      items: entries.map((entry) => ({
        url: `${siteUrl}/lexikon/${entry.slug}`,
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
        title="Lexikon"
        subtitle="Begriffe, Definitionen und Kurzanalysen für die tägliche Praxis."
      />
      <div className="space-y-8">
        {Object.entries(groupedEntries).map(([letter, letterEntries]) => (
          <section key={letter} className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">{letter}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {letterEntries.map((entry) => (
                <Card key={entry.slug} className="flex items-center justify-between">
                  <Link
                    href={`/lexikon/${entry.slug}`}
                    className="text-sm font-semibold text-slate-700 hover:text-slate-900"
                  >
                    {entry.title}
                  </Link>
                  <span className="text-xs text-slate-400">→</span>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
