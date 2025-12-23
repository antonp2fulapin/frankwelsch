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
        <div>
          <div className="text-base font-semibold text-slate-900">Frank Welsch Rechtsanwälte</div>
          <div>Musterstraße 12</div>
          <div>10115 Berlin</div>
        </div>
        <div>
          <div>Telefon: +49 (0)30 000 000</div>
          <div>E-Mail: kontakt@frankwelsch.de</div>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Berufsbezeichnung</div>
          <p>Rechtsanwälte (Bundesrepublik Deutschland).</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Zuständige Kammer</div>
          <p>Rechtsanwaltskammer Berlin, Littenstraße 9, 10179 Berlin.</p>
        </div>
      </Card>
    </div>
  );
}
