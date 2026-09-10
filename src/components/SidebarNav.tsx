"use client";

import { startTransition, useEffect, useState } from "react";
import { navItems, profile } from "@/data/resume";

export function SidebarNav() {
  const [activeId, setActiveId] = useState<string>(navItems[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (navItems.some((item) => item.id === hash)) {
      startTransition(() => setActiveId(hash));
      document.getElementById(hash)?.scrollIntoView({ behavior: "instant", block: "start" });
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <aside id="site-nav" className={`sidebar${open ? " is-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="avatar" aria-hidden>
            VV
          </div>
          <p className="sidebar-name">{profile.name}</p>
          <p className="sidebar-role">{profile.shortRole}</p>
          <p className="sidebar-location">{profile.location}</p>
        </div>

        <nav aria-label="Resume sections">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? "is-active" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-dispatch">
          <p className="dispatch-label">Direct Dispatch</p>
          <a className="dispatch-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="dispatch-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
          <ul className="tag-row">
            {profile.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a className="btn btn-dark btn-block" href={`mailto:${profile.email}`}>
            Download CV (PDF)
          </a>
        </div>
      </aside>
    </>
  );
}
