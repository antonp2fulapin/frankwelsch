// components/content/ArticleMeta.tsx
import { Badge } from "@/components/ui/Badge";

function formatDateDE(iso?: string) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "long" }).format(d);
}

export function ArticleMeta(props: {
  typeLabel?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const { typeLabel = "Fachbeitrag", datePublished, dateModified } = props;

  const published = formatDateDE(datePublished);
  const modified = formatDateDE(dateModified);

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
      {typeLabel ? <Badge>{typeLabel}</Badge> : null}

      {datePublished ? (
        <span>
          Veröffentlicht am{" "}
          <time dateTime={datePublished} className="text-slate-600">
            {published ?? datePublished}
          </time>
        </span>
      ) : null}

      {dateModified ? (
        <span>
          Aktualisiert am{" "}
          <time dateTime={dateModified} className="text-slate-600">
            {modified ?? dateModified}
          </time>
        </span>
      ) : null}
    </div>
  );
}
