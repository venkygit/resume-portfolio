import { ArchitecturalThesis } from "@/components/ArchitecturalThesis";
import { CredentialsSection } from "@/components/CredentialsSection";
import { EducationSection } from "@/components/EducationSection";
import { EngagementCTA } from "@/components/EngagementCTA";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { StatsGrid } from "@/components/StatsGrid";
import { SummarySection } from "@/components/SummarySection";
import { TechnicalMatrix } from "@/components/TechnicalMatrix";

export function ResumeContent() {
  return (
    <main className="content">
      <SummarySection />
      <StatsGrid />
      <ArchitecturalThesis />
      <ExperienceSection />
      <FeaturedProjects />
      <TechnicalMatrix />
      <CredentialsSection />
      <EducationSection />
      <EngagementCTA />
    </main>
  );
}
