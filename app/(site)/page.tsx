import Link from "next/link";
import Image from "next/image";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { getAllContentByType } from "@/lib/content";
import {
  buildOrganizationSchema,
  buildPersonSchema,
  buildServiceSchema,
  buildWebSiteSchema,
} from "@/lib/schema";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Frank Welsch – Insolvenzverwalter in Gütersloh | Fachanwalt für Insolvenzrecht",
    description:
      "Frank Welsch, Insolvenzverwalter und Fachanwalt für Insolvenzrecht & Steuerrecht in Gütersloh. Gerichtliche Bestellungen, Gutachten und Vertretung von Unternehmen, Gläubigern und Geschäftsführern.",
    canonical: "/",
  });

export default async function HomePage() {
  const latestBlog = getAllContentByType("blog").slice(0, 3);
  const lexikonEntries = getAllContentByType("lexikon").slice(0, 6);
  const siteUrl = getSiteUrl();

  const schemas = [
    buildWebSiteSchema(),
    buildOrganizationSchema(),
    buildPersonSchema({
      name: "Frank Welsch, Ph.D. (Rus)",
      url: siteUrl,
      description:
        "Frank Welsch ist Insolvenzverwalter in Gütersloh sowie Fachanwalt für Insolvenzrecht und Steuerrecht. Gerichtliche Bestellungen seit 1984.",
    }),
    buildServiceSchema({
      name: "Insolvenzverwalter Gütersloh – Insolvenzrecht & Steuerrecht",
      description:
        "Insolvenzverwaltung, Gutachten zur Zahlungsunfähigkeit und Vertretung in Insolvenz- und Steuerverfahren in Gütersloh und NRW.",
      url: siteUrl,
    }),
  ];

  return (
    <div className="space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 shadow-lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-white">
            <Badge className="bg-white/10 text-white">Insolvenzverwalter Gütersloh</Badge>

            <h1 className="text-4xl font-semibold md:text-5xl">
              Frank Welsch – Insolvenzverwalter in Gütersloh
            </h1>

            <p className="text-lg leading-relaxed text-slate-100">
              Frank Welsch ist seit Jahrzehnten als{" "}
              <strong>Insolvenzverwalter in Gütersloh</strong> tätig. Als Fachanwalt
              für Insolvenzrecht und Steuerrecht begleitet er Unternehmen,
              Geschäftsführer und Gläubiger in gerichtlichen Insolvenzverfahren in
              Nordrhein-Westfalen und Niedersachsen.
            </p>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/leistungen" variant="primary">
                Leistungen
              </ButtonLink>
              <ButtonLink href="/personen/frank-welsch" variant="secondaryOnDark">
                Profil &amp; Qualifikation
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/frank-welsch-portrait.jpg"
              alt="Frank Welsch – Insolvenzverwalter und Fachanwalt für Insolvenzrecht in Gütersloh"
              width={480}
              height={600}
              className="rounded-2xl object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ÜBER */}
      <section className="space-y-8">
        <SectionHeader
          title="Über Frank Welsch"
          subtitle="Mehr als 40 Jahre Erfahrung im Insolvenzrecht und Steuerrecht für Unternehmen, Gesellschafter und Gläubiger."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <p className="text-base leading-relaxed text-slate-700">
              Gerichte in Nordrhein-Westfalen und Niedersachsen bestellen Frank Welsch
              seit mehr als 30 Jahren zum Sachverständigen – unter anderem für
              Feststellungen zur Zahlungsunfähigkeit, Überschuldung und zu
              Haftungsfragen von Gesellschaftern und Geschäftsführern. Seine Expertise
              wird auch für die Prüfung von Anfechtungsansprüchen gegenüber Gläubigern
              eingeholt.
            </p>

            <p className="text-base leading-relaxed text-slate-700">
              Mandanten werden in steuerlichen Angelegenheiten und Steuerstrafverfahren
              vertreten. Als Dozent und Referent gibt Frank Welsch sein Wissen zum
              Insolvenzrecht und Steuerrecht an Studierende, Berufsangehörige sowie
              Dritte weiter.
            </p>

            <p className="text-base leading-relaxed text-slate-700">
              In seiner Promotionsschrift untersuchte er, wie sich die Produktivität
              eines Unternehmens durch die Teilhabe der Mitarbeiter am Unternehmenserfolg
              positiv beeinflussen lässt – ein Ansatz, der auch in Sanierungsstrategien
              einfließt.
            </p>
          </Card>

          <div className="space-y-4">
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Qualifikationen</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Rechtsanwalt seit 1983</li>
                <li>Insolvenzverwalter seit 1984</li>
                <li>Fachanwalt für Insolvenzrecht</li>
                <li>Fachanwalt für Steuerrecht</li>
                <li>Promotion zum Doctor of Philosophy in Economics</li>
              </ul>
            </Card>

            <Card className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Mitgliedschaften</h3>
              <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li>Forum Insolvenzrecht</li>
                <li>VID – Verband der Insolvenzverwalter Deutschlands e.V.</li>
                <li>AG Insolvenzrecht und Sanierung im DAV</li>
                <li>Wustrauer Arbeitskreis Insolvenzrecht e.V.</li>
                <li>
                  Verein für Insolvenz- und Sanierungsfragen im Deutschen und
                  Ausländischen Insolvenzrecht e.V.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* SCHWERPUNKTE */}
      <section className="space-y-8">
        <SectionHeader
          title="Tätigkeitsschwerpunkte"
          subtitle="Individuelle Lösungen für Insolvenzrecht, Steuerrecht und Sanierungsprozesse."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Insolvenzrecht",
              description:
                "Begleitung von Insolvenzanträgen, Schutzschirmverfahren und Kommunikation mit Gläubigerausschüssen.",
            },
            {
              title: "Gutachten & Haftung",
              description:
                "Feststellungen zu Zahlungsunfähigkeit, Überschuldung sowie Haftung von Gesellschaftern und Geschäftsführern.",
            },
            {
              title: "Steuerrecht & Verteidigung",
              description:
                "Beratung und Vertretung in steuerlichen Fragestellungen sowie in Steuerstrafverfahren.",
            },
          ].map((item) => (
            <Card key={item.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-700">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* GERICHTE */}
      <section className="space-y-8">
        <SectionHeader
          title="Insolvenzgerichte"
          subtitle="Bestellungen als Insolvenzverwalter und Sachverständiger in Nordrhein-Westfalen und Niedersachsen."
        />

        <Card className="p-6">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Arnsberg",
              "Bersenbrück",
              "Bielefeld",
              "Detmold",
              "Paderborn",
              "Münster",
              "Dortmund",
              "Osnabrück",
              "Meppen",
              "Nordhorn",
              "Gütersloh",
            ].map((court) => (
              <div
                key={court}
                className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800"
              >
                {court}
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* AKTUELLE INHALTE */}
      <section className="space-y-8">
        <SectionHeader
          title="Aktuelle Inhalte"
          subtitle="Wissen aus der Kanzlei: Blogbeiträge und Glossar zum Insolvenzrecht und Steuerrecht."
          actions={
            <ButtonLink href="/blog" variant="secondary">
              Alle Blogartikel
            </ButtonLink>
          }
        />

        <div className="grid gap-6 lg:grid-cols-1">
          {/* Blog list */}
          <div className="grid gap-6 md:grid-cols-3">
            {latestBlog.map((entry) => (
              <Card key={entry.slug} className="flex h-full flex-col justify-between">
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

                <div className="pt-5">
                  <ButtonLink href={`/blog/${entry.slug}`} variant="secondary" className="w-full">
                    Weiterlesen
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>

          {/* Glossar */}
          <div className="space-y-4">
            <Card className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Glossar
              </div>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Lexikon Insolvenzrecht
              </h3>

              <p className="mt-2 text-sm text-slate-700">
                Kompakte Definitionen zu Begriffen aus Insolvenzordnung und Steuerrecht –
                ideal zur Vorbereitung auf Gespräche mit Gläubigern, Banken und Finanzbehörden.
              </p>

              <div className="mt-4 grid gap-3">
                {lexikonEntries.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/lexikon/${entry.slug}`}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                  >
                    {entry.title}
                    <span className="text-xs text-slate-400">→</span>
                  </Link>
                ))}
              </div>

              <ButtonLink href="/lexikon" variant="secondary" className="mt-4 w-full">
                Zum vollständigen Lexikon
              </ButtonLink>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
