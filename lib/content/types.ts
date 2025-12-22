/**
 * Shared type definitions for content used throughout the application.
 *
 * Goal: keep types strict enough to be useful, but flexible enough that
 * content-driven pages/components don't break the build when schemas differ.
 */

/** FAQ item used in content frontmatter/data. */
export interface FaqEntry {
  question: string;
  answer: string;
}

/**
 * ✅ Backwards-compatible alias (some components import this old name)
 */
export type ContentFaq = FaqEntry;

/**
 * ✅ ContentType used by lib/content functions (getAllSlugs, getContentBySlug, etc.)
 *
 * Include BOTH your route segments (German) and any legacy internal names
 * that may still exist in older code.
 */
export type ContentType =
  | "blog"
  | "leistungen"
  | "lexikon"
  | "personen"
  | "standorte"
  // legacy/internal fallbacks (safe to keep)
  | "service"
  | "person"
  | "location";

/** Common fields present on every content entry. */
export interface BaseContent {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  language: string;
  keywords: string[];
  canonical: string;
  faq?: FaqEntry[];
  internalLinks?: string[];
  markdown: string;
}

/**
 * ✅ Backwards-compatible “minimal” type used in components like RelatedContent.
 * Keep type as string so future content types won't break builds.
 */
export type ContentWithType = BaseContent & {
  type: string;
};

/**
 * More specific entry types (keep extra fields optional so content parsing
 * doesn't fail type-checking if a field is absent).
 */
export interface BlogArticle extends BaseContent {
  type: "blog";
}

export interface Service extends BaseContent {
  type: "leistungen" | "service";
  serviceName?: string;
  overview?: string;
  relatedServices?: string[];
}

export interface LexikonEntry extends BaseContent {
  type: "lexikon";
  term?: string;
  definition?: string;
}

export interface Person extends BaseContent {
  type: "personen" | "person";
  name?: string;
  titles?: string[];
  roles?: string[];
  specialties?: string[];
  languages?: string[];
  biography?: string;
  careerTimeline?: { year: string; description: string }[];
  memberships?: string[];
  publications?: { title: string; year: string; outlet?: string }[];
  locations?: string[];
  photo?: string;
  contact?: {
    email?: string;
    phone?: string;
    officeAddress?: string;
  };
}

export interface Location extends BaseContent {
  type: "standorte" | "location";
  address?: string;
  city?: string;
  region?: string;
  country?: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
}

/**
 * ✅ This is what your lib/content/index.ts expects to import.
 * It represents "a piece of content" of any supported type.
 */
export type ContentEntry = BlogArticle | Service | LexikonEntry | Person | Location;

/** Optional convenience alias */
export type AnyContent = ContentEntry;
