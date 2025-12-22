import type { ContentFaq } from "@/lib/content/types";

export const FAQ = ({ items }: { items: ContentFaq[] }) => {
  if (!items?.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>

      <dl className="space-y-4">
        {items.map((item, index) => (
          <div
            key={`${item.question}-${index}`}
            className="rounded-lg border border-slate-200 p-4"
          >
            <dt className="font-medium text-slate-900">{item.question}</dt>
            <dd className="mt-2 whitespace-pre-line text-slate-700">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
