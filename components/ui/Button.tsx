import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "secondaryOnDark";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-slate-900 text-white hover:bg-slate-800",
  secondary: "border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900",
  secondaryOnDark:
    "border border-white/70 text-white hover:border-white hover:text-white focus-visible:ring-white focus-visible:ring-offset-slate-900"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className ?? ""}`.trim()}>
      {children}
    </Link>
  );
}
