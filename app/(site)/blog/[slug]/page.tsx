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
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";

export const revalidate = 300;

export const generateStaticParams = async () =>
  getAllSlugs("blog").map((slug) => ({ slug }));

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const entry = getContentBySlug("blog", params.slug);
  if (!entry) {
    return {};
  }
  return buildMetadata({
    title: entry.title,
    description: entry.excerpt,
    canonical: entry.canonical
  });
};

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  const entry = getContentBySlug("blog", params.slug);
  if (!entry) {
    notFound();
  }

  const glossaryTerms = getGlossaryTerms();
  const related = getRelatedContent(entry, getAllContent());
  const siteUrl = getSiteUrl();
  const canonical = entry.canonical.startsWith("http") ? entry.canonical : `${siteUrl}${entry.canonical}`;

  const schemas = [
    buildBreadcrumbSchema([
      { name: "Startseite", url: siteUrl },
      { name: entry.title, url: canonical }
    ]),
    buildArticleSchema({
      headline: entry.title,
      description: entry.excerpt,
      url: canonical,
      datePublished: entry.datePublished,
      dateModified: entry.dateModified
    })
  ];

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
        items={[{ label: "Startseite", href: "/" }, { label: entry.title, href: `/blog/${entry.slug}` }]}
      />
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-slate-900">{entry.title}</h1>
        <p className="text-lg text-slate-600">{entry.excerpt}</p>
        <div className="text-sm text-slate-500">
          <time dateTime={entry.datePublished}>Veröffentlicht am {entry.datePublished}</time>
          <span className="mx-2">•</span>
          <time dateTime={entry.dateModified}>Aktualisiert am {entry.dateModified}</time>
        </div>
      </header>
      <ArticleRenderer markdown={entry.markdown} glossaryTerms={glossaryTerms} />
      {entry.faq?.length ? <FAQ items={entry.faq} /> : null}
      <RelatedContent items={related} />
    </div>
  );
}
