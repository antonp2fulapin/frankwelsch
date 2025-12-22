import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllContentByType } from "@/lib/content";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Insolvenzrecht verständlich erklärt",
    description:
      "Aktuelle Fachartikel, Glossar und Leistungen für Unternehmen, Gläubiger und Berater im Insolvenzverfahren.",
    canonical: "/"
  });

export default async function HomePage() {
  const latestBlog = getAllContentByType("blog").slice(0, 3);
  const lexikonEntries = getAllContentByType("lexikon").slice(0, 6);
  const schemas = [buildWebSiteSchema(), buildOrganizationSchema()];

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold text-slate-900">
          Insolvenzrecht & Sanierung kompakt
        </h1>
        <p className="text-lg text-slate-600">
          Orientierung für Unternehmen, Geschäftsführer und Gläubiger mit fundierten Einblicken in
          Verfahren, Pflichten und Chancen der Restrukturierung.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Aktuelle Beiträge</h2>
          <Link href="/blog/insolvenz-plan" className="text-sm text-blue-700">
            Alle Blogartikel
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {latestBlog.map((entry) => (
            <article key={entry.slug} className="rounded-xl border border-slate-200 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                <Link href={`/blog/${entry.slug}`}>{entry.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-slate-600">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Lexikon</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {lexikonEntries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/lexikon/${entry.slug}`}
              className="rounded-lg border border-slate-200 p-3 text-sm text-slate-700 hover:border-blue-300"
            >
              {entry.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
