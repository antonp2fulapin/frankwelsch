import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';
import type {
  BlogArticle,
  Person,
  Service,
  LexikonEntry,
  Location,
  FaqEntry,
} from './types';

/*
 * Unified content loader for JSON-based content stored under `/content/**`.
 *
 * Each loader reads all JSON files within its designated subdirectory,
 * validates the data against a strict Zod schema, normalizes date fields,
 * and returns an array of typed objects. If any file fails validation,
 * an exception is thrown which causes the build to fail, ensuring that
 * invalid content does not make it into production.
 */

const CONTENT_ROOT = path.join(process.cwd(), 'content');

// Base schema shared by all content types
const baseSchema = z.object({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  datePublished: z.string(),
  dateModified: z.string().optional(),
  language: z.string().default('de-DE'),
  keywords: z.array(z.string()).default([]),
  canonical: z.string(),
  faq: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    )
    .optional(),
  internalLinks: z.array(z.string()).optional(),
  markdown: z.string(),
});

// Specific schemas extending the base schema
const blogSchema = baseSchema.extend({ type: z.literal('blog') });

const personSchema = baseSchema.extend({
  type: z.literal('person'),
  name: z.string(),
  titles: z.array(z.string()),
  roles: z.array(z.string()),
  specialties: z.array(z.string()),
  languages: z.array(z.string()),
  biography: z.string(),
  careerTimeline: z.array(
    z.object({
      year: z.string(),
      description: z.string(),
    }),
  ),
  memberships: z.array(z.string()),
  publications: z.array(
    z.object({
      title: z.string(),
      year: z.string(),
      outlet: z.string().optional(),
    }),
  ),
  locations: z.array(z.string()),
  photo: z.string().optional(),
  contact: z
    .object({
      email: z.string().optional(),
      phone: z.string().optional(),
      officeAddress: z.string().optional(),
    })
    .optional(),
});

const serviceSchema = baseSchema.extend({
  type: z.literal('service'),
  serviceName: z.string(),
  overview: z.string(),
  relatedServices: z.array(z.string()).optional(),
});

const lexikonSchema = baseSchema.extend({
  type: z.literal('lexikon'),
  term: z.string(),
  definition: z.string().optional(),
});

const locationSchema = baseSchema.extend({
  type: z.literal('location'),
  address: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  country: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  mapUrl: z.string().optional(),
});

// Helper to normalize ISO date strings; throws if invalid
function normalizeDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date value: ${value}`);
  }
  return date.toISOString();
}

type ContentWithDates = {
  datePublished: string;
  dateModified?: string;
};

async function readJsonFile<T extends ContentWithDates>(
  filePath: string,
  schema: z.ZodType<T>,
): Promise<T> {
  const raw = await fs.readFile(filePath, 'utf-8');
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(`Failed to parse JSON from ${filePath}: ${(err as Error).message}`);
  }
  // Validate and coerce data
  const data = schema.parse(parsed);

  // Normalize dates
  return {
    ...data,
    datePublished: normalizeDate(data.datePublished),
    dateModified: normalizeDate(data.dateModified ?? data.datePublished),
  };
}

async function loadDirectory<T extends ContentWithDates>(
  directory: string,
  schema: z.ZodType<T>,
): Promise<T[]> {
  const dirPath = path.join(CONTENT_ROOT, directory);
  let entries: string[];
  try {
    entries = await fs.readdir(dirPath);
  } catch (err) {
    // If the directory does not exist, return an empty list rather than throwing
    return [];
  }
  const jsonFiles = entries.filter((file) => file.endsWith('.json'));
  const results: T[] = [];
  for (const file of jsonFiles) {
    const filePath = path.join(dirPath, file);
    const content = await readJsonFile(filePath, schema);
    results.push(content);
  }
  return results;
}

/**
 * Load all blog articles from `/content/blog`.
 */
export async function loadBlogArticles(): Promise<BlogArticle[]> {
  return loadDirectory('blog', blogSchema);
}

/**
 * Load all person entries from `/content/personen`.
 */
export async function loadPersons(): Promise<Person[]> {
  return loadDirectory('personen', personSchema);
}

/**
 * Load all service entries from `/content/leistungen`.
 */
export async function loadServices(): Promise<Service[]> {
  return loadDirectory('leistungen', serviceSchema);
}

/**
 * Load all lexicon entries from `/content/lexikon`.
 */
export async function loadLexikonEntries(): Promise<LexikonEntry[]> {
  return loadDirectory('lexikon', lexikonSchema);
}

/**
 * Load all location entries from `/content/standorte`.
 */
export async function loadLocations(): Promise<Location[]> {
  return loadDirectory('standorte', locationSchema);
}

/**
 * Generic loader to fetch a single item by slug from a given content type.
 * Returns `null` if no matching file is found.
 */
export async function loadBySlug<T extends ContentWithDates>(
  directory: string,
  slug: string,
  schema: z.ZodType<T>,
): Promise<T | null> {
  const filePath = path.join(CONTENT_ROOT, directory, `${slug}.json`);
  try {
    const content = await readJsonFile(filePath, schema);
    return content;
  } catch (err) {
    // If the file does not exist or fails validation, return null
    return null;
  }
}
