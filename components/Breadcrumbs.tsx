import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-medium uppercase tracking-wide text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link href={item.href} className="transition hover:text-slate-700">
              {item.label}
            </Link>
            {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};
