export const SITE_NAME = "Insolvenz Informationen";
export const SITE_DESCRIPTION =
  "Fachinformationen, Glossar und Leistungen rund um Insolvenzrecht, Restrukturierung und Sanierung.";
export const SITE_LOCALE = "de_DE";

const SITEMAP_BASE_URL = "https://www.frank-welsch-insolvenzverwalter.de/s";

export const getSiteUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }
  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`.replace(/\/$/, "");
  }
  return "http://localhost:3000";
};

export const getSitemapSiteUrl = (): string => SITEMAP_BASE_URL;
