import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LayoutWrapper from "@/components/layout-wrapper";
import { LoadingScreen } from "@/components/loading-screen";
import Home from "@/pages/Home";
import SkillsPage from "@/pages/Skills";
import ProjectsPage from "@/pages/Projects";
import ExperiencePage from "@/pages/Experience";
import EducationPage from "@/pages/Education";
import CertificationsPage from "@/pages/Certifications";
import ContactPage from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading-screen" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.99, y: 8 }}
        animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.99 : 1, y: isLoading ? 8 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={isLoading ? { pointerEvents: "none" } : undefined}
      >
        <Routes>
          <Route element={<LayoutWrapper />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="certifications" element={<CertificationsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </motion.div>
    </>
  );
}
