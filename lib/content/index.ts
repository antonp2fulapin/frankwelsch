import fs from "fs";
import path from "path";
import type { ContentEntry, ContentType, ContentWithType } from "./types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

const CONTENT_DIRS: Record<ContentType, string> = {
  blog: "blog",
  lexikon: "lexikon",
  personen: "personen",
  leistungen: "leistungen",
  standorte: "standorte"
};

const readEntry = (type: ContentType, filePath: string): ContentWithType => {
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw) as ContentEntry;
  return { ...data, type };
};

export const getContentDir = (type: ContentType): string =>
  path.join(CONTENT_ROOT, CONTENT_DIRS[type]);

export const getAllContentByType = (type: ContentType): ContentWithType[] => {
  const dir = getContentDir(type);
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => readEntry(type, path.join(dir, file)))
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
};

export const getContentBySlug = (type: ContentType, slug: string): ContentWithType | null => {
  const entries = getAllContentByType(type);
  return entries.find((entry) => entry.slug === slug) ?? null;
};

export const getAllContent = (): ContentWithType[] => {
  return (Object.keys(CONTENT_DIRS) as ContentType[]).flatMap((type) =>
    getAllContentByType(type)
  );
};

export const getAllSlugs = (type: ContentType): string[] =>
  getAllContentByType(type).map((entry) => entry.slug);

export const getRelatedContent = (
  entry: ContentWithType,
  pool: ContentWithType[],
  limit = 4
): ContentWithType[] => {
  const entryKeywords = new Set(entry.keywords.map((keyword) => keyword.toLowerCase()));
  return pool
    .filter((item) => item.slug !== entry.slug)
    .map((item) => {
      const overlap = item.keywords.reduce((count, keyword) => {
        return entryKeywords.has(keyword.toLowerCase()) ? count + 1 : count;
      }, 0);
      return { item, overlap };
    })
    .filter(({ overlap }) => overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, limit)
    .map(({ item }) => item);
};

export const getGlossaryTerms = (): { term: string; slug: string }[] =>
  getAllContentByType("lexikon").map((entry) => ({ term: entry.title, slug: entry.slug }));

export const getGlossaryBacklinks = (term: string): ContentWithType[] => {
  const normalized = term.toLowerCase();
  return getAllContent().filter((entry) =>
    entry.keywords.some((keyword) => keyword.toLowerCase() === normalized)
  );
};
