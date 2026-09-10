import { projects } from "@/data/resume";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">Enterprise Program Context</p>
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-head">
              <h3>{project.name}</h3>
              <p className="muted">{project.period}</p>
            </div>
            <p className="stack">{project.stack}</p>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
