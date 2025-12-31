// lib/markdown/normalize.ts
export function stripLeadingH1(markdown: string): string {
  const md = markdown.replace(/^\uFEFF/, ""); // remove BOM if present
  const match = md.match(/^\s*#\s+.+\n+/);
  if (!match) return md;
  return md.slice(match[0].length).replace(/^\s+/, "");
}
