export const SITE_NAME = "Insolvenz Informationen";
export const SITE_DESCRIPTION =
  "Fachinformationen, Glossar und Leistungen rund um Insolvenzrecht, Restrukturierung und Sanierung.";
export const SITE_LOCALE = "de_DE";

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
