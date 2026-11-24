export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="sec !pt-20">
      <div className="glow" style={{ width: 600, height: 500, right: -200, top: -160, background: "var(--glow-2)" }} />
      <div className="wrap max-w-[760px]">
        <span className="eyebrow">Legal</span>
        <h1 className="h2 mt-5">{title}</h1>
        <p className="mono mt-3 text-[13px] text-[var(--faint)]">Last updated: {updated}</p>
        <div
          role="note"
          className="mt-8 rounded-2xl border border-[var(--chip-border)] bg-[var(--chip-bg)] px-5 py-4 text-[15px] text-[var(--accent-text)]"
        >
          Draft placeholder. Replace with text reviewed by your legal counsel before launch.
        </div>
        <div className="prose-br mt-4">{children}</div>
      </div>
    </section>
  );
}
