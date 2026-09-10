import { education } from "@/data/resume";

export function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="edu-header">
        <div>
          <p className="eyebrow accent">{education.eyebrow}</p>
          <h2>{education.title}</h2>
        </div>
        <p className="edu-intro">{education.intro}</p>
      </div>

      <div className="edu-layout">
        <div className="academic">
          <p className="subhead">
            <span className="subhead-icon" aria-hidden>
              △
            </span>
            Academic Pedigree
          </p>
          <ul className="academic-list">
            {education.academic.map((item) => (
              <li key={item.degree}>
                <div>
                  <h3>{item.degree}</h3>
                  {item.field ? <p>{item.field}</p> : null}
                  <p className="muted">{item.school}</p>
                </div>
                <div className="academic-meta">
                  <p className="period">{item.period}</p>
                  <p className="muted">{item.result}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="regional">
          <p className="subhead">
            <span className="subhead-icon" aria-hidden>
              ○
            </span>
            Regional &amp; Communication
          </p>

          <div className="regional-block">
            <p className="block-label">Language Fluency</p>
            <ul className="kv-list">
              {education.languages.map((lang) => (
                <li key={lang.name}>
                  <span>{lang.name}</span>
                  <span>{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="regional-block">
            <p className="block-label">Geographic Locations</p>
            <ul className="kv-list stacked">
              {education.locations.map((loc) => (
                <li key={loc.label}>
                  <strong>{loc.label}:</strong> {loc.value}
                </li>
              ))}
            </ul>
          </div>

          <div className="regional-block">
            <p className="block-label">Passport &amp; Work Eligibility</p>
            <p>{education.eligibility}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
