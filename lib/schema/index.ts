import { getSiteUrl, SITE_NAME } from "../seo";
import type { ContentFaq } from "../content/types";

type BreadcrumbItem = {
  name: string;
  url: string;
};

export const buildWebSiteSchema = () => {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl
  };
};

export const buildOrganizationSchema = () => {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrl
  };
};

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

export const buildArticleSchema = ({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: authorName ? { "@type": "Person", name: authorName } : undefined
  };
};

export const buildFAQSchema = (faqs: ContentFaq[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
};

export const buildPersonSchema = ({
  name,
  url,
  description
}: {
  name: string;
  url: string;
  description: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    description
  };
};

export const buildServiceSchema = ({
  name,
  description,
  url
}: {
  name: string;
  description: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    description,
    url
  };
};

export const buildItemListSchema = ({
  items,
  name
}: {
  items: { url: string; title: string }[];
  name: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
      name: item.title
    }))
  };
};
