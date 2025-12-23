import type { ContentFaq } from "@/lib/content/types";

export const FAQ = ({ items }: { items: ContentFaq[] }) => {
  if (!items?.length) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">FAQ</h2>

      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={`${item.question}-${index}`}
            className="group rounded-2xl border border-slate-200/70 bg-white px-5 py-4 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900">
              <span>{item.question}</span>
              <span className="text-slate-400 transition group-open:rotate-45">+</span>
            </summary>
            <div className="mt-3 text-sm text-slate-700 md:text-base">
              <p className="whitespace-pre-line">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};
