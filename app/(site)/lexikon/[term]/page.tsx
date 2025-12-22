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
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema
} from "@/lib/schema";

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
        items={[
          { label: "Startseite", href: "/" },
          { label: entry.title, href: `/lexikon/${entry.slug}` }
        ]}
      />

      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-slate-900">
          {entry.title}
        </h1>
        <p className="text-lg text-slate-600">
          {entry.excerpt}
        </p>
      </header>

      <ArticleRenderer
        markdown={entry.markdown}
        glossaryTerms={glossaryTerms}
      />

      {entry.faq?.length ? <FAQ items={entry.faq} /> : null}

      {backlinks.length ? (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">
            Verweise aus anderen Artikeln
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            {backlinks.map((item) => (
              <li key={`${item.type}-${item.slug}`}>
                <Link
                  href={`/${item.type}/${item.slug}`}
                  className="text-blue-700 hover:text-blue-800"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <RelatedContent items={related} />
    </div>
  );
}
