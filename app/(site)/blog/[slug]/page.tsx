// app/(site)/blog/[slug]/page.tsx
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
  getRelatedContent,
} from "@/lib/content";

import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";

import { ArticleMeta } from "@/components/content/ArticleMeta";
import { ArticleHighlights } from "@/components/content/ArticleHighlights";
import { TableOfContents } from "@/components/content/TableOfContents";

export const revalidate = 300;

export const generateStaticParams = async () =>
  getAllSlugs("blog").map((slug) => ({ slug }));

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;

  const entry = getContentBySlug("blog", slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.title,
    description: entry.excerpt,
    canonical: entry.canonical,
  });
};

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const entry = getContentBySlug("blog", slug);
  if (!entry) notFound();

  const glossaryTerms = getGlossaryTerms();
  const related = getRelatedContent(entry, getAllContent());
  const siteUrl = getSiteUrl();

  const canonical = entry.canonical.startsWith("http")
    ? entry.canonical
    : `${siteUrl}${entry.canonical}`;

  // ✅ IMPORTANT: heterogeneous JSON-LD array
  const schemas: unknown[] = [];

  schemas.push(
    buildBreadcrumbSchema([
      { name: "Startseite", url: siteUrl },
      { name: "Blog", url: `${siteUrl}/blog` },
      { name: entry.title, url: canonical },
    ])
  );

  schemas.push(
    buildArticleSchema({
      headline: entry.title,
      description: entry.excerpt,
      url: canonical,
      datePublished: entry.datePublished,
      dateModified: entry.dateModified,
    })
  );

  if (entry.faq?.length) {
    schemas.push(buildFAQSchema(entry.faq));
  }

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: entry.title, href: `/blog/${entry.slug}` },
        ]}
      />

      <header className="space-y-6">
        <ArticleMeta
          typeLabel="Fachbeitrag"
          datePublished={entry.datePublished}
          dateModified={entry.dateModified}
        />

        <div className="max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {entry.title}
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
            {entry.excerpt}
          </p>
        </div>

        {/* Highlights (auto-generated from markdown if you don’t store highlights) */}
        <div className="max-w-3xl">
          <ArticleHighlights markdown={entry.markdown} />
        </div>

        {/* Mobile TOC */}
        <div className="max-w-3xl lg:hidden">
          <TableOfContents variant="mobile" markdown={entry.markdown} />
        </div>
      </header>

      {/* Desktop: sticky TOC + readable column */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <TableOfContents variant="desktop" markdown={entry.markdown} />
        </aside>

        <div className="max-w-3xl">
          <ArticleRenderer markdown={entry.markdown} glossaryTerms={glossaryTerms} />
        </div>
      </div>

      <section className="space-y-16">
        {entry.faq?.length ? <FAQ items={entry.faq} /> : null}
        <RelatedContent items={related} />
      </section>
    </div>
  );
}
