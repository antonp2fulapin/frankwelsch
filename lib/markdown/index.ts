import { h } from "hastscript";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Root, Text } from "hast";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const createGlossaryLinker = (terms: { term: string; slug: string }[]) => {
  if (terms.length === 0) {
    return () => undefined;
  }

  const sorted = [...terms].sort((a, b) => b.term.length - a.term.length);
  const pattern = new RegExp(`\\b(${sorted.map((term) => escapeRegExp(term.term)).join("|")})\\b`, "gi");
  const termMap = new Map(sorted.map((term) => [term.term.toLowerCase(), term.slug]));

  return (tree: Root) => {
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || typeof index !== "number") {
        return;
      }
      const parentTag = (parent as { tagName?: string }).tagName;
      if (parentTag && ["a", "code", "pre", "script", "style"].includes(parentTag)) {
        return;
      }

      const value = node.value;
      if (!pattern.test(value)) {
        return;
      }

      const parts: (Text | ReturnType<typeof h>)[] = [];
      let lastIndex = 0;
      value.replace(pattern, (match, _group, offset) => {
        const start = offset as number;
        if (start > lastIndex) {
          parts.push({ type: "text", value: value.slice(lastIndex, start) });
        }
        const slug = termMap.get(match.toLowerCase());
        if (slug) {
          parts.push(
            h("a", { href: `/lexikon/${slug}`, className: "glossary-link" }, match)
          );
        } else {
          parts.push({ type: "text", value: match });
        }
        lastIndex = start + match.length;
        return match;
      });
      if (lastIndex < value.length) {
        parts.push({ type: "text", value: value.slice(lastIndex) });
      }
      parent.children.splice(index, 1, ...parts);
      return index + parts.length;
    });
  };
};

export const renderMarkdown = async (
  markdown: string,
  glossaryTerms: { term: string; slug: string }[]
): Promise<string> => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "append" })
    .use(createGlossaryLinker(glossaryTerms))
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
};
