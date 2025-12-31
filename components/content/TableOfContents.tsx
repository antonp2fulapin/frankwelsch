// components/content/TableOfContents.tsx
import { Card } from "@/components/ui/Card";
import { extractHeadings } from "@/lib/markdown/toc";

export function TableOfContents(props: {
  markdown: string;
  variant?: "mobile" | "desktop";
  title?: string;
}) {
  const { markdown, variant = "desktop", title = "Inhalt" } = props;
  const items = extractHeadings(markdown, { minDepth: 2, maxDepth: 3, stripH1: true });

  if (!items.length) return null;

  if (variant === "mobile") {
    return (
      <Card className="border border-slate-200 bg-slate-50 p-4">
        <details>
          <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
            {title}
            <span className="ml-2 text-xs font-normal text-slate-500">
              ({items.length})
            </span>
          </summary>

          <nav aria-label="Inhaltsverzeichnis" className="mt-3">
            <ul className="space-y-2 text-sm">
              {items.map((h) => (
                <li key={h.id} className={h.level === 3 ? "pl-3" : ""}>
                  <a href={`#${h.id}`} className="text-slate-700 hover:text-slate-900">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </Card>
    );
  }

  return (
    <nav aria-label="Inhaltsverzeichnis" className="sticky top-24">
      <Card className="border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </p>

        <ul className="mt-3 space-y-2 text-sm">
          {items.map((h) => (
            <li key={h.id} className={h.level === 3 ? "pl-3" : ""}>
              <a href={`#${h.id}`} className="text-slate-700 hover:text-slate-900">
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </nav>
  );
}
