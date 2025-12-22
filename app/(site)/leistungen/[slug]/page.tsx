import { notFound } from "next/navigation";
import { ArticleRenderer } from "@/components/ArticleRenderer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { RelatedContent } from "@/components/RelatedContent";
import {
  getAllContent,
  getAllSlugs,
  getContentBySlug,
  getGlossaryTerms,
  getRelatedContent
} from "@/lib/content";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from "@/lib/schema";

export const revalidate = 300;

export const generateStaticParams = async () =>
  getAllSlugs("leistungen").map((slug) => ({ slug }));

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;

  const entry = getContentBySlug("leistungen", slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.title,
    description: entry.excerpt,
    canonical: entry.canonical
  });
};

export default async function LeistungenPage({ params }: PageProps) {
  const { slug } = await params;

  const entry = getContentBySlug("leistungen", slug);
  if (!entry) notFound();

  const glossaryTerms = getGlossaryTerms();
  const related = getRelatedContent(entry, getAllContent());
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
    buildServiceSchema({
      name: entry.title,
      description: entry.excerpt,
      url: canonical
    })
  );

  if (entry.faq?.length) {
    schemas.push(buildFAQSchema(entry.faq));
  }

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: entry.title, href: `/leistungen/${entry.slug}` }
        ]}
      />

      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-slate-900">{entry.title}</h1>
        <p className="text-lg text-slate-600">{entry.excerpt}</p>
      </header>

      <ArticleRenderer markdown={entry.markdown} glossaryTerms={glossaryTerms} />

      {entry.faq?.length ? <FAQ items={entry.faq} /> : null}

      <RelatedContent items={related} />
    </div>
  );
}
