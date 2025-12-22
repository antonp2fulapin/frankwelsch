import type { ContentFaq } from "@/lib/content/types";
import { Card } from "@/components/ui/Card";

export const FAQ = ({ items }: { items: ContentFaq[] }) => {
  if (!items?.length) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">FAQ</h2>

      <dl className="space-y-4">
        {items.map((item, index) => (
          <Card key={`${item.question}-${index}`} className="space-y-2">
            <dt className="text-base font-semibold text-slate-900">{item.question}</dt>
            <dd className="whitespace-pre-line text-sm text-slate-700 md:text-base">
              {item.answer}
            </dd>
          </Card>
        ))}
      </dl>
    </section>
  );
};
