type ArticleCardProps = {
  title: string;
  description: string;
  feedUrl: string;
  siteUrl: string;
  format: string;
};

export default function ArticleCard({
  title,
  description,
  feedUrl,
  siteUrl,
  format,
}: ArticleCardProps) {
  return (
    <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
        {description}
      </p>

      <div className="mt-3 text-xs text-[var(--color-text-tertiary)]">
        <p>Feed: {feedUrl}</p>
        <p>Site: {siteUrl}</p>
        <p>Format: {format}</p>
      </div>
    </article>
  );
}