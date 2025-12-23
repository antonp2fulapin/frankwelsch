import Link from "next/link";
import { getAllContentByType } from "@/lib/content";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Blog",
    description: "Fachbeiträge und Analysen rund um Insolvenzrecht und Restrukturierung.",
    canonical: "/blog"
  });

export default function BlogIndexPage() {
  const entries = getAllContentByType("blog");
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/blog`;
  const schemas: unknown[] = [];

  schemas.push(
    buildBreadcrumbSchema([
      { name: "Startseite", url: siteUrl },
      { name: "Blog", url: canonical }
    ])
  );

  schemas.push(
    buildItemListSchema({
      name: "Blog",
      items: entries.map((entry) => ({
        url: `${siteUrl}/blog/${entry.slug}`,
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
        title="Blog"
        subtitle="Fachbeiträge, Checklisten und Einordnungen aus der Insolvenzpraxis."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {entries.map((entry) => (
          <Card key={entry.slug} className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Fachbeitrag
            </div>
            <Link href={`/blog/${entry.slug}`} className="text-xl font-semibold text-slate-900">
              {entry.title}
            </Link>
            <p className="text-sm text-slate-600">{entry.excerpt}</p>
            <div className="text-xs text-slate-500">
              <time dateTime={entry.datePublished}>Veröffentlicht am {entry.datePublished}</time>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
