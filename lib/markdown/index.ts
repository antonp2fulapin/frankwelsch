import { h } from "hastscript";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Root } from "hast";

type GlossaryTerm = { term: string; slug: string };

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * IMPORTANT:
 * unified().use(...) expects a *plugin*, not a transformer.
 * A plugin is a function that returns a transformer.
 */
const createGlossaryLinker = (terms: GlossaryTerm[]) => {
  // Return a unified plugin (no args), which returns a transformer (tree => void)
  return () => {
    if (!terms || terms.length === 0) return;

    const sorted = [...terms].sort((a, b) => b.term.length - a.term.length);
    const pattern = new RegExp(
      `\\b(${sorted.map((t) => escapeRegExp(t.term)).join("|")})\\b`,
      "gi"
    );
    const termMap = new Map(sorted.map((t) => [t.term.toLowerCase(), t.slug]));

    return (tree: Root) => {
      visit(tree, "text", (node: any, index: any, parent: any) => {
        if (!parent || typeof index !== "number") return;
        if (!node || typeof node.value !== "string") return;

        const parentTag = parent?.tagName as string | undefined;
        if (parentTag && ["a", "code", "pre", "script", "style"].includes(parentTag)) {
          return;
        }

        const value: string = node.value;

        // RegExp with /g is stateful; always reset before testing/using
        pattern.lastIndex = 0;
        if (!pattern.test(value)) return;
        pattern.lastIndex = 0;

        const parts: any[] = [];
        let lastIndex = 0;

        value.replace(pattern, (match: string, _group: string, offset: number) => {
          const start = offset;

          if (start > lastIndex) {
            parts.push({ type: "text", value: value.slice(lastIndex, start) });
          }

          const slug = termMap.get(match.toLowerCase());
          if (slug) {
            parts.push(h("a", { href: `/lexikon/${slug}`, className: "glossary-link" }, match));
          } else {
            parts.push({ type: "text", value: match });
          }

          lastIndex = start + match.length;
          return match;
        });

        if (lastIndex < value.length) {
          parts.push({ type: "text", value: value.slice(lastIndex) });
        }

        // Replace the original text node with the new nodes
        parent.children.splice(index, 1, ...parts);

        // Tell visit to continue AFTER the inserted nodes
        return index + parts.length;
      });
    };
  };
};

export const renderMarkdown = async (
  markdown: string,
  glossaryTerms: GlossaryTerm[]
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
