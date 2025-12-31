// components/content/ArticleHighlights.tsx
import { Card } from "@/components/ui/Card";
import { extractHighlights } from "@/lib/markdown/highlights";

export function ArticleHighlights(props: {
  markdown?: string;
  items?: string[];
  title?: string;
}) {
  const { markdown, items, title = "Auf einen Blick" } = props;

  const derived = items?.length ? items : markdown ? extractHighlights(markdown, 4) : [];
  if (!derived.length) return null;

  return (
    <Card className="mt-10 border border-slate-200 bg-slate-50 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        {derived.map((t, i) => (
          <li key={`${t}-${i}`} className="flex gap-2">
            <span aria-hidden="true" className="mt-[2px] text-slate-400">
              ✓
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
