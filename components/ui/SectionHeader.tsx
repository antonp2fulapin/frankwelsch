import type { ReactNode } from "react";

export function SectionHeader({
  title,
  subtitle,
  actions,
  className
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-4 ${className ?? ""}`.trim()}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
        {subtitle ? <p className="text-sm text-slate-600 md:text-base">{subtitle}</p> : null}
      </div>
      {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
    </div>
  );
}
