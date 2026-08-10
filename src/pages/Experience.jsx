import { Experience } from "@/components/experience";
import { PageWrapper } from "@/components/page-wrapper";
import { Seo } from "@/components/seo";

export default function ExperiencePage() {
  return (
    <>
      <Seo
        title="Professional Experience | Muhammad Ali Hassan"
        description="View the professional career journey of Muhammad Ali Hassan. Experience in building scalable web applications, frontend development, and web engineering roles."
        path="/experience"
      />
      <PageWrapper title="Professional Journey">
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground">A timeline of my professional career and key roles in the industry.</p>
        </div>
        <Experience isPage={true} />
      </PageWrapper>
    </>
  );
}
