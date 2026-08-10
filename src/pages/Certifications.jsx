import { Certifications } from "@/components/certifications";
import { PageWrapper } from "@/components/page-wrapper";
import { Seo } from "@/components/seo";

export default function CertificationsPage() {
  return (
    <>
      <Seo
        title="Certifications | Muhammad Ali Hassan"
        description="Professional certifications earned by Muhammad Ali Hassan across web development, frontend technologies, and web engineering."
        path="/certifications"
      />
      <PageWrapper title="Certifications">
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground">Professional certifications earned across technologies and platforms.</p>
        </div>
        <Certifications isPage={true} />
      </PageWrapper>
    </>
  );
}
