import { getSitemapSiteUrl } from "@/lib/seo";

export const runtime = "nodejs";

export const GET = async () => {
  const siteUrl = getSitemapSiteUrl();
  const body = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};
