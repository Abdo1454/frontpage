type ArticleCardProps = {
  title: string;
  description: string;
  source: string;
  publishedAt: string;
  category: string;
};

export default function ArticleCard({
  title,
  description,
  source,
  publishedAt,
  category,
}: ArticleCardProps) {
  return (
    <article className="border-b border-[var(--color-border)] py-5">
      <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
        <span>{source}</span>
        <span>·</span>
        <span>{publishedAt}</span>
      </div>

      <h3 className="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
        {description}
      </p>

      <span className="mt-3 inline-block rounded-full bg-[var(--color-accent-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]">
        {category}
      </span>
    </article>
  );
}