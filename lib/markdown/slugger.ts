// lib/markdown/slugger.ts
export function slugify(text: string): string {
  const base = text
    .toLowerCase()
    .normalize("NFKC")
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "") // keep unicode letters/numbers (ü stays ü)
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return base || "section";
}

export function createSlugger() {
  const counts = new Map<string, number>();

  return {
    slug(text: string) {
      const base = slugify(text);
      const current = counts.get(base) ?? 0;
      counts.set(base, current + 1);
      return current === 0 ? base : `${base}-${current + 1}`; // match common "-2" behavior
    },
  };
}
