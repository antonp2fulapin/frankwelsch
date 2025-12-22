export type ContentType = "blog" | "lexikon" | "personen" | "leistungen" | "standorte";

export type ContentFaq = {
  question: string;
  answer: string;
};

export type ContentEntry = {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  canonical: string;
  faq?: ContentFaq[];
  markdown: string;
};

export type ContentWithType = ContentEntry & { type: ContentType };
