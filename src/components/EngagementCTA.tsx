import { engagement, profile } from "@/data/resume";

export function EngagementCTA() {
  return (
    <section className="engagement" aria-labelledby="engagement-title">
      <p className="eyebrow accent">{engagement.eyebrow}</p>
      <div className="engagement-row">
        <h2 id="engagement-title">{engagement.title}</h2>
        <div className="engagement-actions">
          <a className="btn btn-bronze" href={`mailto:${profile.email}`}>
            {engagement.cta}
          </a>
          <a
            className="btn btn-light"
            href={`tel:${engagement.phone.replace(/\s/g, "")}`}
          >
            {engagement.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
