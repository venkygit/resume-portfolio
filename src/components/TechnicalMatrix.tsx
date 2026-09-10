import { skillGroups } from "@/data/resume";

export function TechnicalMatrix() {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">Capability Map</p>
      <h2>Technical Matrix</h2>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article key={group.label} className="matrix-card">
            <h3>{group.label}</h3>
            <ul className="matrix-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
