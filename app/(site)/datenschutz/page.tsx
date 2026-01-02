import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Datenschutz",
    description: "Informationen zur Verarbeitung personenbezogener Daten.",
    canonical: "/datenschutz"
  });

export default function DatenschutzPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Datenschutz"
        subtitle="Transparenz zur Verarbeitung personenbezogener Daten."
      />
      <Card className="space-y-4 text-sm text-slate-600">
        <p>
          Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung
          personenbezogener Daten auf dieser Website.
        </p>
        <div>
          <div className="font-semibold text-slate-900">Verantwortlicher</div>
          <p>Frank Welsch Rechtsanwälte, Barkeystraße 30, 33330 Gütersloh, Deutschland.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Kontakt</div>
          <p>E-Mail: kanzlei@frank-welsch-insolvenzverwalter.de</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Zwecke der Verarbeitung</div>
          <ul className="list-disc space-y-2 pl-5">
            <li>Bereitstellung der Inhalte der Website</li>
            <li>Analyse der Nutzung zur Optimierung des Angebots</li>
            <li>Kommunikation bei Anfragen</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
