export function SimpleHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="pt-40 pb-16 sm:pt-48 sm:pb-20 border-b border-ink/10">
      <div className="container-page">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl leading-[1.08]">{title}</h1>
        {description && <p className="mt-6 max-w-xl text-ink-soft/70 leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
