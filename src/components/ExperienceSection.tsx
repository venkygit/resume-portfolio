import { experience } from "@/data/resume";

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">Professional Engagements</p>
      <h2>Experience</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <div className="timeline-head">
              <div>
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
              </div>
              <div className="timeline-meta">
                <p>{job.period}</p>
                <p className="muted">{job.location}</p>
              </div>
            </div>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
