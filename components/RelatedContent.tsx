import Link from "next/link";
import type { ContentWithType } from "@/lib/content/types";

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
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900">Weiterführende Inhalte</h2>

      <ul className="space-y-3">
        {items.map((item) => {
          const label = labelMap[item.type] ?? item.type;
          const href = `/${item.type}/${item.slug}`;

          return (
            <li key={`${item.type}-${item.slug}`} className="rounded-lg border border-slate-200 p-4">
              <div className="text-xs font-medium text-slate-500">{label}</div>
              <Link href={href} className="mt-1 block text-lg font-semibold text-slate-900 hover:underline">
                {item.title}
              </Link>
              {item.excerpt ? (
                <p className="mt-1 text-sm text-slate-600">{item.excerpt}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
