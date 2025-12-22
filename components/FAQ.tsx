import type { ContentFaq } from "@/lib/content/types";

export const FAQ = ({ items }: { items: ContentFaq[] }) => {
  return (
    <section className="mt-10" aria-labelledby="faq">
      <h2 id="faq" className="text-2xl font-semibold text-slate-900">
        Häufige Fragen
      </h2>
      <dl className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={item.question} className="rounded-xl border border-slate-200 p-4">
            <dt className="font-semibold text-slate-900">{item.question}</dt>
            <dd className="mt-2 text-slate-700">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
