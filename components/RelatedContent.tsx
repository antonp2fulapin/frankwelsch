import Link from "next/link";
import type { ContentWithType } from "@/lib/content/types";
import { Card } from "@/components/ui/Card";

const labelMap: Record<string, string> = {
  blog: "Blog",
  leistungen: "Leistungen",
  lexikon: "Lexikon",
  personen: "Personen",
  standorte: "Standorte",
  // fallbacks for possible internal names:
  person: "Personen",
  service: "Leistungen",
  location: "Standorte"
};

export const RelatedContent = ({ items }: { items: ContentWithType[] }) => {
  if (!items?.length) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
        Weiterführende Inhalte
      </h2>

      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const label = labelMap[item.type] ?? item.type;
          const href = `/${item.type}/${item.slug}`;

          return (
            <li key={`${item.type}-${item.slug}`}>
              <Card className="h-full space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {label}
                </div>
                <Link href={href} className="text-lg font-semibold text-slate-900 hover:underline">
                  {item.title}
                </Link>
                {item.excerpt ? <p className="text-sm text-slate-600">{item.excerpt}</p> : null}
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
