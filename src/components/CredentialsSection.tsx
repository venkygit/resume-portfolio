import { credentials } from "@/data/resume";

export function CredentialsSection() {
  return (
    <section id="credentials" className="section">
      <p className="eyebrow">Recognition</p>
      <h2>Credentials &amp; Accolades</h2>
      <div className="cred-grid">
        <article className="matrix-card">
          <h3>Certifications</h3>
          <ul className="matrix-list">
            {credentials.certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="matrix-card">
          <h3>Awards</h3>
          <ul className="matrix-list">
            {credentials.awards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
