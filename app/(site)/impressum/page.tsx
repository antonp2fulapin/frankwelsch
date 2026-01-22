import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Impressum",
    description: "Anbieterkennzeichnung gemäß § 5 TMG.",
    canonical: "/impressum"
  });

export default function ImpressumPage() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Impressum" subtitle="Anbieterkennzeichnung gemäß § 5 TMG." />
      <Card className="space-y-4 text-sm text-slate-600">
        <div className="space-y-1">
          <div className="text-base font-semibold text-slate-900">Frank Welsch Rechtsanwälte</div>
          <div>Barkeystraße 30</div>
          <div>33330 Gütersloh, Deutschland</div>
        </div>
        <div className="space-y-1">
          <a href="tel:+4952419899333" className="block hover:text-slate-900">
            Telefon: +49 5241 9899333
          </a>
          <a
            href="mailto:kanzlei@frank-welsch.info"
            className="block hover:text-slate-900"
          >
            E-Mail: kanzlei@frank-welsch.info
          </a>
        </div>
        <div className="space-y-1">
          <div className="font-semibold text-slate-900">Zuständige Aufsichtsbehörde / Kammer</div>
          <p>Rechtsanwaltskammer Hamm, Ostenallee 18, 59063 Hamm</p>
          <p>
            <a href="tel:+492381985000" className="hover:text-slate-900">
              Fon: +49 2381 9850 00
            </a>{" "}
            · Fax: +49 2381 9850 50
          </p>
          <p>
            <a href="mailto:info@rak-hamm.de" className="hover:text-slate-900">
              Mail: info@rak-hamm.de
            </a>{" "}
            · Web: www.rechtsanwaltskammer-hamm.de
          </p>
        </div>
        <div className="space-y-1">
          <div className="font-semibold text-slate-900">Berufsbezeichnung</div>
          <p>Rechtsanwalt/Rechtsanwältin, verliehen nach dem Recht der Bundesrepublik Deutschland</p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold text-slate-900">Berufsrechtliche Regelungen</div>
          <ul className="list-disc space-y-1 pl-5">
            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
            <li>Berufsordnung (BORA)</li>
            <li>Fachanwaltsordnung (FAO)</li>
            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
            <li>Gesetz über die Tätigkeit europäischer Rechtsanwälte in Deutschland (EuRAG)</li>
            <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE-Berufsregeln)</li>
            <li>Berufsrechtliche Ergänzungen zum Geldwäschebekämpfungsgesetz (GwG)</li>
          </ul>
          <p>
            Regelungen einsehbar unter:{" "}
            <a
              href="https://www.brak.de/fuer-anwaelte/berufsrecht/"
              className="text-slate-900 underline"
            >
              https://www.brak.de/fuer-anwaelte/berufsrecht/
            </a>
          </p>
        </div>
        <div className="space-y-1">
          <div className="font-semibold text-slate-900">Haftungshinweis</div>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </div>
        <div className="space-y-1">
          <div className="font-semibold text-slate-900">
            Berufshaftpflichtversicherung gemäß § 51 Bundesrechtsanwaltsordnung (BRAO)
          </div>
          <p>Welsch Rechtsanwälte</p>
          <p>R+V Allgemeine Versicherung AG, Raiffeisenplatz 1, 65189 Wiesbaden</p>
        </div>
      </Card>
    </div>
  );
}
