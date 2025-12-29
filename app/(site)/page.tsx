import Image from "next/image";
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
      "Rechtsanwalt Frank Welsch, Ph.D. (Rus) – Fachanwalt für Insolvenzrecht & Steuerrecht in Gütersloh (Guetersloh). Insolvenzverwalter, Gutachter und Verteidiger in steuerlichen Verfahren mit über 40 Jahren Erfahrung.",
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

      <section className="overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-lg shadow-slate-300/30 md:p-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6 text-white">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white/15 text-white ring-0">Insolvenzverwalter Gütersloh</Badge>
              <Badge className="bg-white/10 text-white ring-0">Fachanwalt Insolvenzrecht</Badge>
              <Badge className="bg-white/10 text-white ring-0">Steuerrecht</Badge>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Frank Welsch, Ph.D. (Rus)
              </h1>
              <p className="text-lg leading-relaxed text-slate-100 md:text-xl">
                Fachanwalt für Insolvenzrecht &amp; Steuerrecht in Gütersloh (Guetersloh). Mehr als 40
                Jahre Erfahrung als Insolvenzverwalter, Gutachter und Verteidiger in steuerlichen
                Verfahren – mit persönlicher Betreuung vor Ort.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/leistungen" variant="contrast">
                Leistungen entdecken
              </ButtonLink>
              <ButtonLink href="#kontakt" variant="primary">
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
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm shadow-sm shadow-slate-900/10"
                >
                  <div className="text-lg font-semibold text-white">{item.value}</div>
                  <div className="text-slate-200">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <Card className="overflow-hidden border-0 bg-white/90 shadow-2xl shadow-slate-900/20">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/frank-welsch-portrait.svg"
                alt="Frank Welsch – Fachanwalt für Insolvenzrecht und Steuerrecht in Gütersloh"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
            <div className="space-y-2 p-6">
              <p className="text-base font-semibold text-slate-900">
                Fachanwalt Insolvenzrecht &amp; Steuerrecht – Gütersloh
              </p>
              <p className="text-sm text-slate-600">
                Persönliche Beratung in Gütersloh mit klaren Handlungsempfehlungen für Unternehmen,
                Geschäftsführer, Gesellschafter und Gläubiger.
              </p>
            </div>
          </Card>
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
              Gerichte bestellen Frank Welsch seit mehr als 30 Jahren zum Sachverständigen – unter
              anderem für Feststellungen zur Zahlungsunfähigkeit, Überschuldung und zu Haftungsfragen
              von Gesellschaftern und Geschäftsführern. Seine Expertise wird auch für die Prüfung von
              Anfechtungsansprüchen gegenüber Gläubigern eingeholt.
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              Mandanten aus Gütersloh und Umgebung werden in steuerlichen Angelegenheiten und
              Steuerstrafverfahren vertreten. Als Dozent und Referent gibt Frank Welsch sein Wissen zum
              Insolvenzrecht und Steuerrecht an Studierende, Berufsangehörige sowie Dritte weiter.
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
          subtitle="Individuelle Lösungen in Gütersloh für Insolvenzrecht, Steuerrecht und Sanierungsprozesse."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Insolvenzrecht Gütersloh",
              description:
                "Begleitung von Insolvenzanträgen, Schutzschirmverfahren und Kommunikation mit Gläubigerausschüssen – mit kurzen Wegen in Gütersloh."
            },
            {
              title: "Gutachten & Haftung",
              description:
                "Feststellungen zu Zahlungsunfähigkeit, Überschuldung sowie Haftung von Gesellschaftern und Geschäftsführern."
            },
            {
              title: "Steuerrecht & Verteidigung",
              description:
                "Beratung und Vertretung in steuerlichen Fragestellungen sowie in Steuerstrafverfahren – fachanwaltlich, präzise und durchsetzungsstark."
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
          title="Lokale Ausrichtung in Gütersloh"
          subtitle="Kurze Entscheidungswege, direkte Abstimmung und persönliche Betreuung vor Ort."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <p className="text-base leading-relaxed text-slate-700">
              Die Kanzlei arbeitet ausschließlich von Gütersloh aus. Das ermöglicht enge Abstimmungen,
              feste Ansprechpartner und schnelle Reaktionszeiten für Unternehmen, Gesellschafter und
              Gläubiger in der Region.
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              Persönliche Beratung kombiniert fundierte Gutachten zu Zahlungsunfähigkeit,
              Überschuldung und Haftungsfragen. So erhalten Mandanten klare Entscheidungsgrundlagen und
              belastbare Strategien – ohne Umwege über weitere Standorte.
            </p>
          </Card>
          <Card className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">Lokale SEO-Fakten</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Keyword-Fokus: Insolvenzverwalter Gütersloh / Guetersloh</li>
              <li>Keyword-Fokus: Fachanwalt Insolvenzrecht Gütersloh</li>
              <li>Keyword-Fokus: Fachanwalt Steuerrecht Gütersloh</li>
              <li>Keyword-Fokus: Sanierungsberatung Gütersloh</li>
              <li>Keyword-Fokus: Steuerstrafverfahren Gütersloh</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          title="FAQ zum Erstgespräch"
          subtitle="Klare Antworten für Unternehmer, Geschäftsführer und Gläubiger in Gütersloh."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              q: "Wann sollte ein Insolvenzantrag gestellt werden?",
              a: "Sobald Zahlungsunfähigkeit oder Überschuldung droht. Eine frühe Prüfung schafft Handlungsspielraum, zum Beispiel für Eigenverwaltung oder einen Insolvenzplan."
            },
            {
              q: "Welche Unterlagen werden benötigt?",
              a: "Aktuelle Bilanzen, Liquiditätsplanung, Forderungs- und Verbindlichkeitenspiegel sowie relevante Verträge. Wir strukturieren die Unterlagen gemeinsam im Erstgespräch in Gütersloh."
            },
            {
              q: "Begleiten Sie auch steuerliche Prüfungen?",
              a: "Ja. Steuerrechtliche Fragen und Steuerstrafverfahren werden fachanwaltlich betreut – abgestimmt mit den insolvenzrechtlichen Optionen."
            }
          ].map((item) => (
            <Card key={item.q} className="space-y-2">
              <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
              <p className="text-sm text-slate-700">{item.a}</p>
            </Card>
          ))}
        </div>
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

      <section id="kontakt" className="space-y-6 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm shadow-slate-200/60 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Kontakt in Gütersloh
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">Termin vereinbaren</h2>
            <p className="text-sm text-slate-700">
              Persönliche Beratung durch Frank Welsch in Gütersloh. Kurze Wege, feste Ansprechpartner,
              klare Handlungsempfehlungen.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/impressum" variant="primary">
              Kontaktdaten anzeigen
            </ButtonLink>
            <ButtonLink href="/leistungen" variant="secondary">
              Leistungen ansehen
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
