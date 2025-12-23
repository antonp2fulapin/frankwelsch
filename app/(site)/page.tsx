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
  const lexikonEntries = getAllContentByType("lexikon").slice(0, 12);
  const featuredServices = getAllContentByType("leistungen").slice(0, 6);
  const schemas = [buildWebSiteSchema(), buildOrganizationSchema()];

  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm shadow-slate-200/40 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-6">
            <Badge>Fachkanzlei für Restrukturierung</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Insolvenzrecht &amp; Sanierung kompakt
              </h1>
              <p className="text-lg text-slate-600 md:text-xl">
                Für Unternehmen, Geschäftsführer und Gläubiger – fundierte Einordnung zu Pflichten,
                Verfahren und strategischen Sanierungsoptionen.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/leistungen">Leistungen ansehen</ButtonLink>
              <ButtonLink href="/blog" variant="secondary">
                Blog lesen
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
          title="Verlässlichkeit &amp; Kompetenz"
          subtitle="Klar strukturierte Abläufe und juristische Tiefe für kritische Situationen."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Spezialisierung", description: "Fokus auf Insolvenz- und Sanierungsrecht." },
            { title: "Erfahrung", description: "Begleitung von Eigenverwaltungen und Regelverfahren." },
            { title: "Interdisziplinär", description: "Zusammenspiel mit Steuer- und Finanzexperten." },
            { title: "Pragmatisch", description: "Umsetzbare Lösungen für Gläubiger und Geschäftsführung." }
          ].map((item) => (
            <Card key={item.title} className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          title="Ausgewählte Leistungen"
          subtitle="Beratung, Begleitung und Verhandlung für alle Phasen des Verfahrens."
          actions={
            <ButtonLink href="/leistungen" variant="secondary">
              Alle Leistungen
            </ButtonLink>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((entry) => (
            <Card key={entry.slug} className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Leistung
              </div>
              <Link href={`/leistungen/${entry.slug}`} className="text-lg font-semibold text-slate-900">
                {entry.title}
              </Link>
              <p className="text-sm text-slate-600">{entry.excerpt}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          title="Aktuelle Beiträge"
          subtitle="Kuratiertes Wissen zu Insolvenzantrag, Haftung und Sanierungsoptionen."
          actions={
            <ButtonLink href="/blog" variant="secondary">
              Alle Blogartikel
            </ButtonLink>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {latestBlog.map((entry) => (
            <Card key={entry.slug} className="flex h-full flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Blog
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  <Link href={`/blog/${entry.slug}`} className="hover:underline">
                    {entry.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600">{entry.excerpt}</p>
              </div>
              <div className="text-xs text-slate-500">
                <time dateTime={entry.datePublished}>Veröffentlicht am {entry.datePublished}</time>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          title="Lexikon"
          subtitle="Begriffe aus der Insolvenzordnung klar und verständlich erklärt."
          actions={
            <ButtonLink href="/lexikon" variant="secondary">
              Zum Lexikon
            </ButtonLink>
          }
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

      <section className="rounded-3xl border border-slate-200/70 bg-slate-900 px-8 py-10 text-white shadow-sm md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Sprechen Sie frühzeitig mit spezialisierten Beratern.
            </h2>
            <p className="text-sm text-slate-200 md:text-base">
              Wir unterstützen bei der strategischen Vorbereitung und Umsetzung Ihrer Sanierung.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/leistungen" className="bg-white text-slate-900 hover:bg-slate-100">
              Beratung anfragen
            </ButtonLink>
            <ButtonLink href="/standorte" variant="secondary" className="border-white text-white">
              Standorte
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
