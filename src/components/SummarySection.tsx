"use client";

import { profile } from "@/data/resume";

export function SummarySection() {
  async function copyContacts() {
    const payload = `${profile.name}\n${profile.email}\n${profile.phone}\n${profile.location}`;
    try {
      await navigator.clipboard.writeText(payload);
    } catch {
      window.prompt("Copy contacts", payload);
    }
  }

  return (
    <section id="summary" className="section summary-section">
      <div className="doc-bar">
        <p className="doc-ref">
          <span className="doc-mark" aria-hidden />
          Curriculum Vitae · Doc-Ref: {profile.docRef}
        </p>
        <p className="doc-status">
          <span className="status-dot" aria-hidden />
          {profile.availability}
        </p>
      </div>

      <h1 className="hero-title">
        {profile.heroTitleLead}{" "}
        <em>{profile.heroTitleAccent}</em> {profile.heroTitleTrail}
      </h1>
      <p className="lede">{profile.summary}</p>

      <div className="cta-row">
        <a className="btn btn-dark" href={`mailto:${profile.email}`}>
          Download PDF Dossier
        </a>
        <button type="button" className="btn btn-outline" onClick={copyContacts}>
          Copy Telemetry &amp; Contacts
        </button>
      </div>
    </section>
  );
}
