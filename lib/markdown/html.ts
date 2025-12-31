// lib/markdown/html.ts
import { createSlugger } from "./slugger";

function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]*>/g, "");
}

function decodeEntities(input: string): string {
  // minimal decoding (good enough for headings)
  return input
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export function ensureHeadingIds(html: string): string {
  const slugger = createSlugger();

  return html.replace(
    /<h([1-6])([^>]*)>([\s\S]*?)<\/h\1>/g,
    (match, level, attrs, inner) => {
      // if an id already exists, keep it
      if (/\sid\s*=/.test(attrs)) return match;

      const text = decodeEntities(stripHtmlTags(inner)).trim();
      const id = slugger.slug(text);

      return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
    }
  );
}
