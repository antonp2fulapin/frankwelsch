import Link from "next/link";
import { getAllContentByType } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Lexikon",
    description: "Definitionen zentraler Begriffe aus Insolvenzrecht und Sanierung.",
    canonical: "/lexikon"
  });

export default function LexikonIndexPage() {
  const entries = getAllContentByType("lexikon");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Lexikon"
        subtitle="Begriffe, Definitionen und Kurzanalysen für die tägliche Praxis."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {entries.map((entry) => (
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
    </div>
  );
}
