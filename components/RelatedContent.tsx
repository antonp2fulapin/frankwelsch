import Link from "next/link";
import type { ContentWithType } from "@/lib/content/types";

const labelMap: Record<ContentWithType["type"], string> = {
  blog: "Blog",
  lexikon: "Lexikon",
  personen: "Personen",
  leistungen: "Leistungen",
  standorte: "Standorte"
};

const getHref = (entry: ContentWithType): string => {
  if (entry.type === "lexikon") {
    return `/lexikon/${entry.slug}`;
  }
  return `/${entry.type}/${entry.slug}`;
};

export const RelatedContent = ({ items }: { items: ContentWithType[] }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-12" aria-labelledby="related-content">
      <h2 id="related-content" className="text-2xl font-semibold text-slate-900">
        Weiterführende Inhalte
      </h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <li key={`${item.type}-${item.slug}`} className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              {labelMap[item.type]}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              <Link href={getHref(item)} className="hover:text-blue-700">
                {item.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
