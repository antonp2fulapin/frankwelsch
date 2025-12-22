import { renderMarkdown } from "@/lib/markdown";

export async function ArticleRenderer({
  markdown,
  glossaryTerms
}: {
  markdown: string;
  glossaryTerms: { term: string; slug: string }[];
}) {
  const html = await renderMarkdown(markdown, glossaryTerms);

  return (
    <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-600 prose-p:text-slate-700 prose-a:text-slate-900 prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-blockquote:border-slate-300">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
