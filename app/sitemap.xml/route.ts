import { getSiteUrl } from "@/lib/seo";

export const runtime = "nodejs";

export const GET = async () => {
  const siteUrl = getSiteUrl();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    `<sitemap><loc>${siteUrl}/sitemap-pages.xml</loc></sitemap>` +
    `<sitemap><loc>${siteUrl}/sitemap-blog.xml</loc></sitemap>` +
    `<sitemap><loc>${siteUrl}/sitemap-lexikon.xml</loc></sitemap>` +
    `</sitemapindex>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
