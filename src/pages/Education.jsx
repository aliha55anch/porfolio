import { Education } from "@/components/education";
import { PageWrapper } from "@/components/page-wrapper";
import { Seo } from "@/components/seo";

export default function EducationPage() {
  return (
    <>
      <Seo
        title="Education | Muhammad Ali Hassan"
        description="Academic background and qualifications of Muhammad Ali Hassan. Bachelor of Science in Information Technology from University of Chakwal."
        path="/education"
      />
      <PageWrapper title="Education">
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground">My academic background and qualifications.</p>
        </div>
        <Education isPage={true} />
      </PageWrapper>
    </>
  );
}
