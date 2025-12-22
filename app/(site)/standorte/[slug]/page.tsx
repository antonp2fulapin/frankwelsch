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
import { buildBreadcrumbSchema, buildFAQSchema, buildOrganizationSchema } from "@/lib/schema";

export const revalidate = 300;

export const generateStaticParams = async () =>
  getAllSlugs("standorte").map((slug) => ({ slug }));

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const entry = getContentBySlug("standorte", params.slug);
  if (!entry) {
    return {};
  }
  return buildMetadata({
    title: entry.title,
    description: entry.excerpt,
    canonical: entry.canonical
  });
};

export default async function StandortePage({ params }: { params: { slug: string } }) {
  const entry = getContentBySlug("standorte", params.slug);
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
    buildOrganizationSchema()
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
        items={[{ label: "Startseite", href: "/" }, { label: entry.title, href: `/standorte/${entry.slug}` }]}
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
