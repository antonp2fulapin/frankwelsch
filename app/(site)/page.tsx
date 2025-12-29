import Link from "next/link";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { getAllContentByType } from "@/lib/content";
import {
  buildOrganizationSchema,
  buildPersonSchema,
  buildServiceSchema,
  buildWebSiteSchema
} from "@/lib/schema";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Frank Welsch – Fachanwalt für Insolvenzrecht & Steuerrecht in Gütersloh",
    description:
      "Rechtsanwalt Frank Welsch, Ph.D. (Rus), Fachanwalt für Insolvenzrecht & Steuerrecht in Gütersloh: Insolvenzverwalter, Gutachter und Vertreter in steuerlichen Verfahren.",
    canonical: "/"
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
      url: `${siteUrl}/`,
      description:
        "Rechtsanwalt und Fachanwalt für Insolvenzrecht sowie Steuerrecht in Gütersloh (Guetersloh); Insolvenzverwalter seit 1984."
    }),
    buildServiceSchema({
      name: "Insolvenzverwaltung & Steuerrecht in Gütersloh (Guetersloh)",
      description:
        "Insolvenzverwalter, Fachanwalt für Insolvenzrecht und Steuerrecht sowie Vertretung in Steuerstrafverfahren.",
      url: `${siteUrl}/`
    })
  ];

  return (
    <div className="space-y-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-sm shadow-slate-300/30 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-6 text-white">
            <Badge className="bg-white/10 text-white ring-0">Insolvenzverwalter Gütersloh</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Frank Welsch, Ph.D. (Rus)
              </h1>
              <p className="text-lg leading-relaxed text-slate-100 md:text-xl">
                Rechtsanwalt, Fachanwalt für Insolvenzrecht und Steuerrecht in Gütersloh (Guetersloh) –
                Insolvenzverwalter, Sachverständiger und Vertreter in steuerlichen Verfahren.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/leistungen" variant="primary">
                Leistungen entdecken
              </ButtonLink>
              <ButtonLink href="/standorte" variant="secondary">
                Termin vereinbaren
              </ButtonLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Rechtsanwalt seit", value: "1983" },
                { label: "Insolvenzverwalter seit", value: "1984" },
                { label: "Fachanwaltstitel", value: "Insolvenz & Steuerrecht" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                >
                  <div className="text-lg font-semibold text-white">{item.value}</div>
                  <div className="text-slate-200">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <Card className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">Fachgebiete</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>Gutachten zu Zahlungsunfähigkeit, Überschuldung und Geschäftsführerhaftung.</li>
                <li>Vertretung in steuerlichen Fragestellungen und Steuerstrafverfahren.</li>
                <li>Begleitung von Unternehmen, Geschäftsführern und Gläubigern im Insolvenzverfahren.</li>
              </ul>
            </Card>
            <Card className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Standort</div>
              <p className="text-lg font-semibold text-slate-900">Fachanwalt Insolvenzrecht &amp; Steuerrecht Gütersloh</p>
              <p className="text-sm text-slate-600">
                Regionale Beratung mit klaren Antworten für Mandanten aus Nordrhein-Westfalen und
                Niedersachsen – mit besonderem Fokus auf Unternehmen und Gläubiger in Gütersloh und
                Umgebung.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          title="Über Frank Welsch"
          subtitle="Mehr als 40 Jahre Erfahrung im Insolvenzrecht und Steuerrecht für Unternehmen, Gesellschafter und Gläubiger."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <p className="text-base leading-relaxed text-slate-700">
              Gerichte in Nordrhein-Westfalen und Niedersachsen bestellen Frank Welsch seit mehr als 30
              Jahren zum Sachverständigen – unter anderem für Feststellungen zur Zahlungsunfähigkeit,
              Überschuldung und zu Haftungsfragen von Gesellschaftern und Geschäftsführern. Seine
              Expertise wird auch für die Prüfung von Anfechtungsansprüchen gegenüber Gläubigern
              eingeholt.
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              Mandanten werden in steuerlichen Angelegenheiten und Steuerstrafverfahren vertreten. Als
              Dozent und Referent gibt Frank Welsch sein Wissen zum Insolvenzrecht und Steuerrecht an
              Studierende, Berufsangehörige sowie Dritte weiter.
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              In seiner Promotionsschrift untersuchte er, wie sich die Produktivität eines Unternehmens
              durch die Teilhabe der Mitarbeiter am Unternehmenserfolg positiv beeinflussen lässt – ein
              Ansatz, der auch in Sanierungsstrategien einfließt.
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
                <li>Verein für Insolvenz- und Sanierungsfragen im Deutschen und Ausländischen Insolvenzrecht e.V.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

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
                "Begleitung von Insolvenzanträgen, Schutzschirmverfahren und Kommunikation mit Gläubigerausschüssen."
            },
            {
              title: "Gutachten & Haftung",
              description:
                "Feststellungen zu Zahlungsunfähigkeit, Überschuldung sowie Haftung von Gesellschaftern und Geschäftsführern."
            },
            {
              title: "Steuerrecht & Verteidigung",
              description:
                "Beratung und Vertretung in steuerlichen Fragestellungen sowie in Steuerstrafverfahren."
            }
          ].map((item) => (
            <Card key={item.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-700">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          title="Insolvenzgerichte"
          subtitle="Bestellungen als Insolvenzverwalter und Sachverständiger in Nordrhein-Westfalen und Niedersachsen."
        />
        <Card className="p-6">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {["Arnsberg", "Bersenbrück", "Bielefeld", "Detmold", "Paderborn", "Münster", "Dortmund", "Osnabrück", "Meppen", "Nordhorn", "Gütersloh"].map(
              (court) => (
                <div key={court} className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800">
                  {court}
                </div>
              )
            )}
          </div>
        </Card>
      </section>

      <section className="space-y-8">
        <SectionHeader
          title="Aktuelle Inhalte"
          subtitle="Wissen aus der Kanzlei: Blogbeiträge und Glossar zum Insolvenzrecht und Steuerrecht."
          actions={<ButtonLink href="/blog" variant="secondary">Alle Blogartikel</ButtonLink>}
        />
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
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
                <div className="pt-4 text-sm font-medium text-slate-700">Weiterlesen →</div>
              </Card>
            ))}
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Glossar</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Lexikon Insolvenzrecht</h3>
              <p className="mt-2 text-sm text-slate-700">
                Kompakte Definitionen zu Begriffen aus Insolvenzordnung und Steuerrecht – ideal zur
                Vorbereitung auf Gespräche mit Gläubigern, Banken und Finanzbehörden.
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
              <ButtonLink href="/lexikon" variant="secondary" className="mt-4">
                Zum vollständigen Lexikon
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
