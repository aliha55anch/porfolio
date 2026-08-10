import { Skills } from "@/components/skills";
import { PageWrapper } from "@/components/page-wrapper";
import { Seo } from "@/components/seo";

export default function SkillsPage() {
  return (
    <>
      <Seo
        title="Skills & Expertise | Muhammad Ali Hassan"
        description="Explore the technical skills and expertise of Muhammad Ali Hassan. Proficient in React.js, Next.js, Node.js, TypeScript, and modern web development technologies."
        path="/skills"
      />
      <PageWrapper title="Technical Expertise" className="bg-background/50">
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground">My technical toolkit and proficiency levels across various domains.</p>
        </div>
        <Skills isPage={true} />
      </PageWrapper>
    </>
  );
}
