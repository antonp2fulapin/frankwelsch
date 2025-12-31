// lib/markdown/toc.ts
import { createSlugger } from "./slugger";
import { stripLeadingH1 } from "./normalize";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

function cleanupInlineMarkdown(text: string): string {
  return text
    .replace(/\s+#+\s*$/, "")                 // remove trailing ####
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [text](url) -> text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/<[^>]+>/g, "")
    .trim();
}

export function extractHeadings(
  markdown: string,
  opts?: { minDepth?: number; maxDepth?: number; stripH1?: boolean }
): TocItem[] {
  const { minDepth = 2, maxDepth = 3, stripH1 = true } = opts ?? {};
  const md = stripH1 ? stripLeadingH1(markdown) : markdown;

  const slugger = createSlugger();
  const items: TocItem[] = [];

  let inFence: "`" | "~" | null = null;

  for (const rawLine of md.split(/\r?\n/)) {
    const line = rawLine.trimEnd();

    const fence = line.match(/^(```+|~~~+)/);
    if (fence) {
      const marker = fence[1][0] as "`" | "~";
      if (!inFence) inFence = marker;
      else if (inFence === marker) inFence = null;
      continue;
    }
    if (inFence) continue;

    const m = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (!m) continue;

    const depth = m[1].length;
    const text = cleanupInlineMarkdown(m[2]);
    const id = slugger.slug(text);

    if (depth >= minDepth && depth <= maxDepth) {
      items.push({ id, text, level: depth as 2 | 3 });
    }
  }

  return items;
}
