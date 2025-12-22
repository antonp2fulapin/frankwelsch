import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllContentByType } from "@/lib/content";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
    <div className="space-y-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm shadow-slate-200/40 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-6">
            <Badge>Insolvenzrecht &amp; Restrukturierung</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Insolvenzrecht &amp; Sanierung kompakt
              </h1>
              <p className="text-lg text-slate-600 md:text-xl">
                Orientierung für Unternehmen, Geschäftsführer und Gläubiger mit fundierten Einblicken
                in Verfahren, Pflichten und Chancen der Restrukturierung.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/leistungen">Unsere Leistungen</ButtonLink>
              <ButtonLink href="/lexikon" variant="secondary">
                Glossar ansehen
              </ButtonLink>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">Schwerpunkte</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>Strategische Begleitung bei Insolvenzanträgen und Schutzschirmverfahren.</li>
                <li>Kommunikation mit Gläubigerausschüssen, Banken und Stakeholdern.</li>
                <li>Restrukturierungskonzepte für nachhaltige Fortführungslösungen.</li>
              </ul>
            </Card>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Praxisleitfäden", value: "40+" },
                { label: "Glossar-Einträge", value: "100+" },
                { label: "Fachautor:innen", value: "8" },
                { label: "Aktualisierung", value: "Monatlich" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm"
                >
                  <div className="text-lg font-semibold text-slate-900">{item.value}</div>
                  <div className="text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          title="Aktuelle Beiträge"
          subtitle="Kuratiertes Wissen zu Insolvenzantrag, Haftung und Sanierungsoptionen."
          actions={<ButtonLink href="/blog" variant="secondary">Alle Blogartikel</ButtonLink>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {latestBlog.map((entry) => (
            <Card key={entry.slug} className="flex h-full flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Blog</div>
                <h3 className="text-lg font-semibold text-slate-900">
                  <Link href={`/blog/${entry.slug}`} className="hover:underline">
                    {entry.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600">{entry.excerpt}</p>
              </div>
              <div className="pt-4 text-sm font-medium text-slate-700">
                Weiterlesen →
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          title="Lexikon"
          subtitle="Begriffe aus der Insolvenzordnung klar und verständlich erklärt."
          actions={<ButtonLink href="/lexikon" variant="secondary">Zum Lexikon</ButtonLink>}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {lexikonEntries.map((entry) => (
            <Card key={entry.slug} className="flex items-center justify-between">
              <Link
                href={`/lexikon/${entry.slug}`}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                {entry.title}
              </Link>
              <span className="text-xs text-slate-400">→</span>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
