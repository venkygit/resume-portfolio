import { stats } from "@/data/resume";

export function StatsGrid() {
  return (
    <section className="stats-grid" aria-label="Career metrics">
      {stats.map((stat) => (
        <article key={stat.label} className="stat-card">
          <p className="stat-label">{stat.label}</p>
          <p className="stat-value">{stat.value}</p>
          <p className="stat-detail">{stat.detail}</p>
          <p className="stat-note">{stat.note}</p>
        </article>
      ))}
    </section>
  );
}
