import Link from "next/link";
import Image from "next/image";
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
    title: "Frank Welsch – Insolvenzverwalter in Gütersloh | Fachanwalt für Insolvenzrecht",
    description:
      "Frank Welsch, Insolvenzverwalter und Fachanwalt für Insolvenzrecht & Steuerrecht in Gütersloh. Gerichtliche Bestellungen, Gutachten und Vertretung von Unternehmen, Gläubigern und Geschäftsführern.",
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
      url: siteUrl,
      description:
        "Frank Welsch ist Insolvenzverwalter in Gütersloh sowie Fachanwalt für Insolvenzrecht und Steuerrecht. Gerichtliche Bestellungen seit 1984."
    }),
    buildServiceSchema({
      name: "Insolvenzverwalter Gütersloh – Insolvenzrecht & Steuerrecht",
      description:
        "Insolvenzverwaltung, Gutachten zur Zahlungsunfähigkeit und Vertretung in Insolvenz- und Steuerverfahren in Gütersloh und NRW.",
      url: siteUrl
    })
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
            <Badge className="bg-white/10 text-white">
              Insolvenzverwalter Gütersloh
            </Badge>

            <h1 className="text-4xl font-semibold md:text-5xl">
              Frank Welsch – Insolvenzverwalter in Gütersloh
            </h1>

            <p className="text-lg leading-relaxed text-slate-100">
              Frank Welsch ist seit Jahrzehnten als <strong>Insolvenzverwalter in Gütersloh</strong>
              tätig. Als Fachanwalt für Insolvenzrecht und Steuerrecht begleitet er Unternehmen,
              Geschäftsführer und Gläubiger in gerichtlichen Insolvenzverfahren in
              Nordrhein-Westfalen und Niedersachsen.
            </p>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/leistungen" variant="primary">
                Leistungen
              </ButtonLink>
              <ButtonLink href="/personen/frank-welsch" variant="secondary">
                Profil & Qualifikation
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

      {/* LOCAL TRUST */}
      <section className="grid gap-10 md:grid-cols-2">
        <Card className="space-y-4">
          <h2 className="text-xl font-semibold">
            Insolvenzverwalter für Gütersloh und NRW
          </h2>
          <p className="text-slate-700">
            Als gerichtlich bestellter Insolvenzverwalter ist Frank Welsch regelmäßig
            an Insolvenzgerichten in Gütersloh, Bielefeld, Detmold, Münster und weiteren
            Standorten in Nordrhein-Westfalen tätig.
          </p>
          <Image
            src="/images/gericht-nrw.jpg"
            alt="Insolvenzgericht Nordrhein-Westfalen"
            width={600}
            height={350}
            className="rounded-xl"
          />
        </Card>

        <Card className="space-y-4">
          <h2 className="text-xl font-semibold">
            Erfahrung im Insolvenzrecht & Steuerrecht
          </h2>
          <p className="text-slate-700">
            Neben der Insolvenzverwaltung liegt ein Schwerpunkt auf Gutachten zur
            Zahlungsunfähigkeit, Überschuldung sowie auf der Vertretung in steuerlichen
            und steuerstrafrechtlichen Verfahren.
          </p>
          <Image
            src="/images/insolvenz-guetersloh.jpg"
            alt="Insolvenzrecht Beratung Gütersloh"
            width={600}
            height={350}
            className="rounded-xl"
          />
        </Card>
      </section>

      {/* CONTENT / BLOG */}
      <section className="space-y-10">
        <SectionHeader
          title="Aktuelle Informationen zum Insolvenzrecht"
          subtitle="Fachbeiträge und Erklärungen rund um Insolvenzverfahren, Gläubigerrechte und Sanierung."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {latestBlog.map((entry) => (
            <Card key={entry.slug} className="space-y-3">
              <h3 className="text-lg font-semibold">
                <Link href={`/blog/${entry.slug}`} className="hover:underline">
                  {entry.title}
                </Link>
              </h3>
              <p className="text-sm text-slate-600">{entry.excerpt}</p>
              <Link
                href={`/blog/${entry.slug}`}
                className="text-sm font-medium text-slate-800"
              >
                Weiterlesen →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* LEXIKON */}
      <section className="space-y-8">
        <SectionHeader
          title="Lexikon Insolvenzrecht"
          subtitle="Begriffe und Abläufe verständlich erklärt."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {lexikonEntries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/lexikon/${entry.slug}`}
              className="rounded-xl border bg-white p-4 font-semibold text-slate-700 hover:bg-slate-50"
            >
              {entry.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
