/**
 * Shared type definitions for content used throughout the application.
 *
 * Each content entity extends a common base with metadata fields used for
 * SEO and routing. Additional fields capture the unique aspects of
 * different content types (e.g. BlogArticle, Person, Service).
 */

export interface FaqEntry {
  question: string;
  answer: string;
}

/**
 * ✅ Backwards-compatible alias (your components import this name)
 */
export type ContentFaq = FaqEntry;

export interface BaseContent {
  /** Unique slug used for routing. */
  slug: string;
  /** Title of the page or entry. */
  title: string;
  /** Short summary used in previews and listings. */
  excerpt: string;
  /** ISO 8601 publication date. */
  datePublished: string;
  /** ISO 8601 modification date; falls back to datePublished if omitted. */
  dateModified: string;
  /** Content language, e.g. "de-DE". */
  language: string;
  /** Keywords associated with the content for SEO and internal linking. */
  keywords: string[];
  /** Canonical URL path (without domain). */
  canonical: string;
  /** Optional FAQ entries attached to the content. */
  faq?: FaqEntry[];
  /** Optional list of internal link targets. */
  internalLinks?: string[];
  /** Markdown string containing the body of the content. */
  markdown: string;
}

/**
 * ✅ Backwards-compatible "minimal content" type used by components like RelatedContent
 * Some parts of the app only need: { type, slug, title, excerpt } etc.
 *
 * IMPORTANT:
 * We intentionally keep `type: string` so that TS does NOT force you to list
 * every possible type key in label maps, and so that any future content type
 * won't break the build.
 */
export type ContentWithType = BaseContent & {
  type: string;
};

export interface BlogArticle extends BaseContent {
  type: "blog";
}

export interface Person extends BaseContent {
  type: "person";
  /** Full name of the person. */
  name: string;
  /** Academic or professional titles (e.g. "Dr."). */
  titles: string[];
  /** Roles such as "Rechtsanwalt" or "Insolvenzverwalter". */
  roles: string[];
  /** Areas of specialization. */
  specialties: string[];
  /** Languages the person works in. */
  languages: string[];
  /** Detailed biography in markdown or HTML. */
  biography: string;
  /** Chronological career timeline entries. */
  careerTimeline: { year: string; description: string }[];
  /** Professional memberships and associations. */
  memberships: string[];
  /** Published works and lectures. */
  publications: { title: string; year: string; outlet?: string }[];
  /** Offices or regions served. */
  locations: string[];
  /** Optional URL or path to a portrait photo. */
  photo?: string;
  /** Contact information. */
  contact?: {
    email?: string;
    phone?: string;
    officeAddress?: string;
  };
}

export interface Service extends BaseContent {
  type: "service";
  /** Name of the legal service provided. */
  serviceName: string;
  /** Detailed description of the service. */
  overview: string;
  /** Optional list of related services or resources. */
  relatedServices?: string[];
}

export interface LexikonEntry extends BaseContent {
  type: "lexikon";
  /** The lexicon term being defined. */
  term: string;
  /** Optional definition or alternative description. */
  definition?: string;
}

export interface Location extends BaseContent {
  type: "location";
  /** Physical street address. */
  address?: string;
  /** City where the office is located. */
  city?: string;
  /** Region or state. */
  region?: string;
  /** Country. */
  country?: string;
  /** Contact phone number. */
  phone?: string;
  /** Contact email address. */
  email?: string;
  /** URL for a map or directions. */
  mapUrl?: string;
}

/**
 * Optional helper union (safe to export; doesn’t break anything)
 */
export type AnyContent = BlogArticle | Person | Service | LexikonEntry | Location | ContentWithType;
