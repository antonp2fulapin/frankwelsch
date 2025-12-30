import Link from "next/link";
import Image from "next/image";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import {
  buildOrganizationSchema,
  buildPersonSchema,
  buildServiceSchema,
  buildWebSiteSchema
} from "@/lib/schema";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Frank Welsch – Insolvenzverwalter in Gütersloh | Fachanwalt für Insolvenzrecht",
    description:
      "Frank Welsch ist Insolvenzverwalter in Gütersloh sowie Fachanwalt für Insolvenzrecht und Steuerrecht. Gerichtliche Bestellungen seit 1984. Informationen zu Insolvenzverfahren, Gutachten und rechtlichen Abläufen.",
    canonical: "/"
  });

export default function HomePage() {
  const siteUrl = getSiteUrl();

  const schemas = [
    buildWebSiteSchema(),

    buildOrganizationSchema({
      name: "Frank Welsch Insolvenzverwaltung",
      url: siteUrl,
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Nordrhein-Westfalen"
      }
    }),

    buildPersonSchema({
      name: "Frank Welsch, Ph.D. (Rus)",
      url: siteUrl,
      jobTitle: [
        "Insolvenzverwalter",
        "Rechtsanwalt",
        "Fachanwalt für Insolvenzrecht",
        "Fachanwalt für Steuerrecht"
      ],
      description:
        "Frank Welsch ist Insolvenzverwalter in Gütersloh und seit 1984 in Insolvenzverfahren tätig. Fachanwalt für Insolvenzrecht und Steuerrecht.",
      worksFor: {
        "@type": "Organization",
        name: "Frank Welsch Insolvenzverwaltung",
        url: siteUrl
      },
      knowsAbout: [
        "Insolvenzrecht",
        "Insolvenzverwaltung",
        "Steuerrecht",
        "Steuerstrafrecht",
        "Sanierung",
        "Unternehmensrestrukturierung"
      ]
    }),

    buildServiceSchema({
      "@type": "LegalService",
      name: "Insolvenzverwalter in Gütersloh",
      url: siteUrl,
      description:
        "Insolvenzverwalter in Gütersloh mit Schwerpunkt Insolvenzrecht und Steuerrecht. Gerichtliche Bestellungen, Gutachten und Verfahrensbegleitung.",
      provider: {
        "@type": "Person",
        name: "Frank Welsch"
      },
      areaServed: [
        { "@type": "City", name: "Gütersloh" },
        { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" }
      ],
      serviceType: [
        "Insolvenzverwaltung",
        "Insolvenzrecht",
        "Steuerrecht"
      ]
    }),

    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: siteUrl
        }
      ]
    }
  ];

  return (
    <div className="space-y-24">
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 shadow-lg">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-white">
            <Badge className="bg-white/10 text-white">
              Insolvenzverwalter Gütersloh
            </Badge>

            <h1 className="text-4xl font-semibold md:text-5xl">
              Frank Welsch – Insolvenzverwalter in Gütersloh
            </h1>

            <p className="text-lg leading-relaxed text-slate-100">
              Frank Welsch ist seit über vier Jahrzehnten als
              <strong> Insolvenzverwalter in Gütersloh</strong> tätig.
              Als Fachanwalt für Insolvenzrecht und Steuerrecht wird er
              regelmäßig von Gerichten in Nordrhein-Westfalen und Niedersachsen
              bestellt. Die Tätigkeit umfasst Insolvenzverfahren,
              Sachverständigengutachten sowie rechtliche Einordnungen für
              Gläubiger, Unternehmen und Geschäftsleiter.
            </p>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/personen/frank-welsch" variant="primary">
                Profil & Qualifikation
              </ButtonLink>
              <ButtonLink href="/leistungen" variant="secondary">
                Tätigkeitsbereiche
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/frank-welsch-portrait.jpg"
              alt="Frank Welsch – Insolvenzverwalter und Fachanwalt für Insolvenzrecht in Gütersloh"
              width={480}
              height={620}
              priority
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* LOCAL AUTHORITY */}
      <section className="grid gap-10 md:grid-cols-2">
        <Card className="space-y-4">
          <h2 className="text-xl font-semibold">
            Insolvenzverwalter für Gütersloh und Nordrhein-Westfalen
          </h2>
          <p className="text-slate-700">
            Als Insolvenzverwalter ist Frank Welsch an zahlreichen
            Insolvenzgerichten tätig, unter anderem in Gütersloh, Bielefeld,
            Detmold, Münster, Paderborn und Osnabrück. Die Bestellungen erfolgen
            in Regel- und Verbraucherinsolvenzverfahren sowie in komplexen
            Unternehmensinsolvenzen.
          </p>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-xl font-semibold">
            Insolvenzrecht & Steuerrecht aus einer Hand
          </h2>
          <p className="text-slate-700">
            Neben der Insolvenzverwaltung liegt ein weiterer Schwerpunkt in der
            Erstellung von Gutachten zur Zahlungsunfähigkeit und Überschuldung
            sowie in der Vertretung in steuerlichen und steuerstrafrechtlichen
            Verfahren. Diese Kombination ermöglicht eine umfassende rechtliche
            Betrachtung insolvenzbezogener Sachverhalte.
          </p>
        </Card>
      </section>

      {/* EXPERIENCE */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          { label: "Rechtsanwalt seit", value: "1983" },
          { label: "Insolvenzverwalter seit", value: "1984" },
          { label: "Fachanwaltschaften", value: "Insolvenzrecht & Steuerrecht" }
        ].map((item) => (
          <Card key={item.label} className="text-center space-y-2">
            <div className="text-3xl font-semibold text-slate-900">
              {item.value}
            </div>
            <div className="text-sm text-slate-600">{item.label}</div>
          </Card>
        ))}
      </section>

      {/* INTERNAL LINKS */}
      <section className="grid gap-8 md:grid-cols-2">
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold">
            Informationen zum Insolvenzrecht
          </h3>
          <p className="text-slate-700">
            Im Wissensbereich finden Sie sachliche Erläuterungen zu Abläufen,
            Rechten und Pflichten im Insolvenzverfahren sowie zu häufig
            verwendeten Begriffen der Insolvenzordnung.
          </p>
          <Link
            href="/lexikon"
            className="text-sm font-medium text-slate-800"
          >
            Zum Insolvenz-Lexikon →
          </Link>
        </Card>

        <Card className="space-y-3">
          <h3 className="text-lg font-semibold">
            Fachbeiträge und aktuelle Hinweise
          </h3>
          <p className="text-slate-700">
            Regelmäßige Beiträge zu insolvenzrechtlichen Fragestellungen,
            gerichtlichen Abläufen und steuerrechtlichen Bezügen.
          </p>
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-800"
          >
            Zum Blog →
          </Link>
        </Card>
      </section>
    </div>
  );
}
