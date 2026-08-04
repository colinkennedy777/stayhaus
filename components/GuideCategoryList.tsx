import { GuideCategory } from "@/data/types";
import { Reveal } from "@/components/Reveal";

export function GuideCategoryList({ categories }: { categories: GuideCategory[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
      {categories.map((category, i) => (
        <Reveal key={category.label} delay={(i % 2) * 0.08}>
          <h3 className="eyebrow mb-6">{category.label}</h3>
          <ul className="space-y-5">
            {category.items.map((item) => (
              <li key={item.name} className="border-b border-ink/10 pb-5">
                <p className="font-display text-lg text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-ink-soft/65">{item.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
