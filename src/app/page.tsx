import { ResumeContent } from "@/components/ResumeContent";
import { SidebarNav } from "@/components/SidebarNav";

export default function Home() {
  return (
    <div className="shell">
      <SidebarNav />
      <ResumeContent />
    </div>
  );
}
