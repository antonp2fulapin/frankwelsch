// lib/markdown/highlights.ts
import { stripLeadingH1 } from "./normalize";

function cleanup(text: string) {
  return text
    .replace(/^\s*[-*+]\s+/, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/<[^>]+>/g, "")
    .trim();
}

export function extractHighlights(markdown: string, maxItems = 4): string[] {
  const md = stripLeadingH1(markdown);
  const lines = md.split(/\r?\n/);

  let inFence: "`" | "~" | null = null;

  // 1) try first unordered list block
  const list: string[] = [];
  let inList = false;

  for (const raw of lines) {
    const line = raw.trimEnd();

    const fence = line.match(/^(```+|~~~+)/);
    if (fence) {
      const marker = fence[1][0] as "`" | "~";
      if (!inFence) inFence = marker;
      else if (inFence === marker) inFence = null;
      continue;
    }
    if (inFence) continue;

    const isBullet = /^\s*[-*+]\s+/.test(line);

    if (isBullet) {
      inList = true;
      const item = cleanup(line);
      if (item.length >= 8) list.push(item);
      if (list.length >= maxItems) break;
      continue;
    }

    if (inList && !line.trim()) break; // end of first list block
  }

  if (list.length >= 3) return list.slice(0, maxItems);

  // 2) fallback: use first H2 headings
  const h2s: string[] = [];
  for (const line of lines) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (!m) continue;
    const text = cleanup(m[1].replace(/\s+#+\s*$/, ""));
    if (text) h2s.push(text);
    if (h2s.length >= maxItems) break;
  }

  return h2s.slice(0, maxItems);
}
