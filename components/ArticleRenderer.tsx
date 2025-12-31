// components/ArticleRenderer.tsx
import { renderMarkdown } from "@/lib/markdown";
import { stripLeadingH1 } from "@/lib/markdown/normalize";
import { ensureHeadingIds } from "@/lib/markdown/html";

export async function ArticleRenderer({
  markdown,
  glossaryTerms,
  stripTitle = true,
}: {
  markdown: string;
  glossaryTerms: { term: string; slug: string }[];
  stripTitle?: boolean;
}) {
  const normalized = stripTitle ? stripLeadingH1(markdown) : markdown;

  const rawHtml = await renderMarkdown(normalized, glossaryTerms);
  const html = ensureHeadingIds(rawHtml);

  return (
    <article
      className={[
        "prose prose-slate",
        "max-w-none",

        // Headings & anchor offset (sticky header friendly)
        "prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-headings:scroll-mt-28",
        "prose-h2:mt-14 prose-h2:text-2xl",
        "prose-h3:mt-10 prose-h3:text-xl",

        // Paragraphs
        "prose-p:leading-relaxed prose-p:text-slate-700",

        // Lists: force bullets back (Tailwind preflight removes them)
        "prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2",
        "prose-ol:list-decimal prose-ol:pl-6",
        "prose-li:marker:text-slate-400",

        // Links: nicer than permanent underlines (also applies to glossary links)
        "prose-a:font-medium prose-a:text-slate-900",
        "prose-a:!no-underline prose-a:border-b prose-a:border-slate-300",
        "hover:prose-a:border-slate-500",

        // Blockquotes
        "prose-blockquote:border-slate-300",
      ].join(" ")}
    >
      <div className="space-y-10" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
