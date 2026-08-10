import { useSearchParams, useNavigate } from "react-router-dom";
import { Projects } from "@/components/projects";
import { PageWrapper } from "@/components/page-wrapper";
import { Seo } from "@/components/seo";

export default function ProjectsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category") || "fullstack";

  const handleCategoryChange = (id) => {
    navigate(`/projects?category=${id}`);
  };

  return (
    <>
      <Seo
        title="Projects & Portfolio | Muhammad Ali Hassan"
        description="Check out the portfolio of Muhammad Ali Hassan. A showcase of web applications, frontend projects, backend systems, and full stack solutions built with React, Next.js, Node.js, and more."
        path="/projects"
      />
      <PageWrapper title="Featured Projects">
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground">A selection of projects that showcase my skills and problem-solving abilities.</p>
        </div>
        <Projects isPage={true} category={category} onCategoryChange={handleCategoryChange} />
      </PageWrapper>
    </>
  );
}
