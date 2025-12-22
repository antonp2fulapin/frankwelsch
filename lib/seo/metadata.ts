import type { Metadata } from "next";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_LOCALE } from "./site";

type MetadataInput = {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
};

export const buildMetadata = ({ title, description, canonical, noindex }: MetadataInput): Metadata => {
  const siteUrl = getSiteUrl();
  const resolvedDescription = description ?? SITE_DESCRIPTION;
  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${siteUrl}${canonical}`
    : siteUrl;

  return {
    title: `${title} | ${SITE_NAME}`,
    description: resolvedDescription,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url: canonicalUrl,
      title: `${title} | ${SITE_NAME}`,
      description: resolvedDescription,
      siteName: SITE_NAME
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description: resolvedDescription
    },
    robots: {
      index: !noindex,
      follow: !noindex
    }
  };
};
