import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function AuthorCard(props: {
  name: string;
  role?: string;
  imageSrc?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const {
    name,
    role = "Insolvenzverwalter & Rechtsanwalt",
    imageSrc,
    ctaHref = "/kontakt",
    ctaLabel = "Kontakt aufnehmen",
  } = props;

  return (
    <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          {imageSrc ? (
            <Image src={imageSrc} alt={name} width={40} height={40} className="h-full w-full object-cover" />
          ) : null}
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Autor</p>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
        </div>
      </div>

      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{role}</p>

      <Link
        href={ctaHref}
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800 transition-colors"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
