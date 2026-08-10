import { Contact } from "@/components/contact";
import { PageWrapper } from "@/components/page-wrapper";
import { Seo } from "@/components/seo";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | Muhammad Ali Hassan"
        description="Get in touch with Muhammad Ali Hassan for web development projects, freelance opportunities, or collaboration. Available for hire in Islamabad, Pakistan."
        path="/contact"
      />
      <PageWrapper title="Get in Touch">
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground">Have a project in mind or want to discuss collaboration? I'd love to hear from you.</p>
        </div>
        <Contact />
      </PageWrapper>
    </>
  );
}
