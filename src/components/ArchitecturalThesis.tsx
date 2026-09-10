import { thesis } from "@/data/resume";

export function ArchitecturalThesis() {
  return (
    <section className="thesis" aria-labelledby="thesis-title">
      <div className="thesis-intro">
        <p className="eyebrow">{thesis.eyebrow}</p>
        <h2 id="thesis-title">{thesis.title}</h2>
        <p>{thesis.blurb}</p>
      </div>
      <ul className="thesis-grid">
        {thesis.pillars.map((pillar) => (
          <li key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
