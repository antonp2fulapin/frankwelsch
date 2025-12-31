// components/seo/ContentStructuredData.tsx
import { absoluteUrl } from "@/lib/seo/url";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import type { ContentFaq } from "@/lib/content/types";

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "Welsch Rechtsanwalt";
const SITE_LOGO = process.env.NEXT_PUBLIC_SITE_LOGO || "/logo.png";

export function ContentStructuredData(props: {
  title: string;
  excerpt?: string;
  canonical: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  breadcrumbs?: BreadcrumbItem[];
  faq?: ContentFaq[];
  schemaType?: "BlogPosting" | "Article" | "WebPage";
  authorName?: string;
}) {
  const {
    title,
    excerpt,
    canonical,
    datePublished,
    dateModified,
    keywords,
    breadcrumbs,
    faq,
    schemaType = "BlogPosting",
    authorName,
  } = props;

  const url = absoluteUrl(canonical);
  const logoUrl = absoluteUrl(SITE_LOGO);

  const article = {
    "@context": "https://schema.org",
    "@type": schemaType,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: title,
    description: excerpt,
    keywords: keywords?.join(", "),
    inLanguage: "de-DE",
    datePublished,
    dateModified: dateModified || datePublished,
    author: authorName ? { "@type": "Person", name: authorName } : undefined,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: logoUrl },
    },
  };

  const breadcrumbLd =
    breadcrumbs?.length
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: b.label,
            item: absoluteUrl(b.href),
          })),
        }
      : null;

  const faqLd =
    faq?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      {breadcrumbLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      ) : null}
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      ) : null}
    </>
  );
}
