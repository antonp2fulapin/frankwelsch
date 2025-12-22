import { getAllContentByType } from "@/lib/content";
import { getSiteUrl } from "@/lib/seo";

export const runtime = "nodejs";

export const GET = async () => {
  const siteUrl = getSiteUrl();
  const entries = getAllContentByType("blog").map((entry) =>
    `<url><loc>${siteUrl}/blog/${entry.slug}</loc><lastmod>${entry.dateModified}</lastmod></url>`
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join("")}</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
