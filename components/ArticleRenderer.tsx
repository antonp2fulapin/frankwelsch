import { renderMarkdown } from "@/lib/markdown";

export const ArticleRenderer = async ({
  markdown,
  glossaryTerms
}: {
  markdown: string;
  glossaryTerms: { term: string; slug: string }[];
}) => {
  const html = await renderMarkdown(markdown, glossaryTerms);

  return (
    <article
      className="prose prose-slate max-w-none prose-headings:scroll-mt-24"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
