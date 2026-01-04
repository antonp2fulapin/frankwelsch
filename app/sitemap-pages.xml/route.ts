import { getAllContentByType } from "@/lib/content";
import { getSitemapSiteUrl } from "@/lib/seo";

export const runtime = "nodejs";

const buildUrlEntry = (loc: string, lastmod?: string) => {
  return `<url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;
};

export const GET = async () => {
  const siteUrl = getSitemapSiteUrl();
  const entries = [
    buildUrlEntry(siteUrl),
    ...getAllContentByType("personen").map((entry) =>
      buildUrlEntry(`${siteUrl}/personen/${entry.slug}`, entry.dateModified)
    ),
    ...getAllContentByType("leistungen").map((entry) =>
      buildUrlEntry(`${siteUrl}/leistungen/${entry.slug}`, entry.dateModified)
    ),
    ...getAllContentByType("standorte").map((entry) =>
      buildUrlEntry(`${siteUrl}/standorte/${entry.slug}`, entry.dateModified)
    )
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join("")}</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
