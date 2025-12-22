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
    <article className="prose prose-slate max-w-none prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
