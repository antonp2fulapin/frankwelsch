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
    <article
  className="
    prose prose-slate
    mx-auto max-w-3xl lg:max-w-4xl
    prose-headings:font-semibold
    prose-headings:tracking-tight
    prose-h2:text-2xl prose-h2:mt-12
    prose-h3:text-xl prose-h3:mt-8
    prose-p:leading-relaxed
    prose-ul:mt-4 prose-ul:space-y-2
    prose-li:marker:text-slate-400
    prose-strong:text-slate-900
  "
>

      <div
  className="space-y-10"
  dangerouslySetInnerHTML={{ __html: html }}
/>
    </article>
  );
}
