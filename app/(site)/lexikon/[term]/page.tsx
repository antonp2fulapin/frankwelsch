import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleRenderer } from "@/components/ArticleRenderer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { RelatedContent } from "@/components/RelatedContent";
import {
  getAllContent,
  getAllSlugs,
  getContentBySlug,
  getGlossaryBacklinks,
  getGlossaryTerms,
  getRelatedContent
} from "@/lib/content";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const revalidate = 300;

export const generateStaticParams = async () =>
  getAllSlugs("lexikon").map((term) => ({ term }));

interface PageProps {
  params: Promise<{ term: string }>;
}

export const generateMetadata = async ({ params }: PageProps) => {
  const { term } = await params;

  const entry = getContentBySlug("lexikon", term);
  if (!entry) return {};

  return buildMetadata({
    title: entry.title,
    description: entry.excerpt,
    canonical: entry.canonical
  });
};

export default async function LexikonTermPage({ params }: PageProps) {
  const { term } = await params;

  const entry = getContentBySlug("lexikon", term);
  if (!entry) notFound();

  const glossaryTerms = getGlossaryTerms();
  const related = getRelatedContent(entry, getAllContent());
  const backlinks = getGlossaryBacklinks(entry.title);
  const siteUrl = getSiteUrl();

  const canonical = entry.canonical.startsWith("http")
    ? entry.canonical
    : `${siteUrl}${entry.canonical}`;

  // ✅ IMPORTANT: fixes TS error when pushing FAQ schema
  const schemas: unknown[] = [];

  schemas.push(
    buildBreadcrumbSchema([
      { name: "Startseite", url: siteUrl },
      { name: entry.title, url: canonical }
    ])
  );

  schemas.push(
    buildArticleSchema({
      headline: entry.title,
      description: entry.excerpt,
      url: canonical,
      datePublished: entry.datePublished,
      dateModified: entry.dateModified
    })
  );

  if (entry.faq?.length) {
    schemas.push(buildFAQSchema(entry.faq));
  }

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Lexikon", href: "/lexikon" },
          { label: entry.title, href: `/lexikon/${entry.slug}` }
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <Card className="space-y-8">
          <header className="space-y-4">
            <Badge>Lexikon</Badge>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                {entry.title}
              </h1>
              <p className="text-lg text-slate-600 md:text-xl">{entry.excerpt}</p>
            </div>
          </header>

          <ArticleRenderer markdown={entry.markdown} glossaryTerms={glossaryTerms} />
        </Card>

        <aside className="space-y-6">
          <Card className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Schlagworte
            </h2>
            <div className="flex flex-wrap gap-2">
              {entry.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Card>
          {backlinks.length ? (
            <Card className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Verweise
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                {backlinks.slice(0, 6).map((item) => (
                  <li key={`${item.type}-${item.slug}`}>
                    <Link href={`/${item.type}/${item.slug}`} className="hover:text-slate-900">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}
        </aside>
      </div>

      {entry.faq?.length ? <FAQ items={entry.faq} /> : null}

      <RelatedContent items={related} />
    </div>
  );
}
