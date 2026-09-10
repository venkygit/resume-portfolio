# Resume Portfolio

Next.js curriculum vitae for **Vemula Venkatesh**, rebuilt to match the Figma / Google Stitch design: left sticky navigation, section scrolling, and full resume content (summary, experience, projects, technical matrix, credentials, education & demographics, engagement CTA).

Source design: [Figma file](https://www.figma.com/design/NRmc1uwJpsGR98o6TYznI7/Untitled?node-id=0-1) (imported from Stitch project *Minimalist Professional Resume Site*).

## How the application is developed

1. **Project** — `create-next-app` (App Router, TypeScript, Tailwind CSS v4).
2. **Design source** — Figma `NRmc1uwJpsGR98o6TYznI7` / Stitch preview. Layout and copy were taken from the Stitch SUMMARY frame, Figma Education & Demographics frame, and the author’s resume dossier (roles, projects, certifications, awards).
3. **Interaction** — Left sidebar lists sections. Each item is an in-page `#` link with smooth scroll and `IntersectionObserver` active state.
4. **Stack**
   - `src/app/layout.tsx` — Manrope + Newsreader fonts
   - `src/app/page.tsx` — shell: sidebar + content
   - `src/components/SidebarNav.tsx` — nav, dispatch contacts, mobile menu
   - `src/components/SummarySection.tsx` — hero + CTAs
   - `src/components/StatsGrid.tsx` — tenure / footprint metrics
   - `src/components/ArchitecturalThesis.tsx` — core thesis pillars
   - `src/components/ExperienceSection.tsx` — professional engagements
   - `src/components/FeaturedProjects.tsx` — program case cards
   - `src/components/TechnicalMatrix.tsx` — skills
   - `src/components/CredentialsSection.tsx` — certifications & awards
   - `src/components/EducationSection.tsx` — academic pedigree + regional panel
   - `src/components/EngagementCTA.tsx` — dark dispatch footer
   - `src/data/resume.ts` — all copy
   - `src/app/globals.css` — editorial black / paper / bronze system

## Prerequisites

- Node.js 20+
- npm

## Run locally

```bash
cd ~/Projects/resume-portfolio
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

| Script          | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Development server with hot reload |
| `npm run build` | Production build                   |
| `npm run start` | Serve the production build         |
| `npm run lint`  | ESLint                             |

On a phone-sized viewport, use **Menu** to open the section list.
