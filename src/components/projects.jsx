import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, Layout, Server, Layers } from "lucide-react"
import { useState } from "react"
import { ProjectCarousel } from "@/components/project-carousel"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Mydata } from "@/lib/data"

const FRONTEND_KEYWORDS = [
  "react", "next", "vue", "svelte", "angular", "tailwind", "typescript", "javascript",
  "html", "css", "scss", "sass", "bootstrap", "material", "ant design", "chakra",
  "shadcn", "radix", "redux", "zustand", "jotai", "framer", "jquery", "responsive",
  "react table", "mui",
]

const BACKEND_KEYWORDS = [
  "node", "express", "php", "mysql", "mongodb", "firebase", "firestore", "supabase",
  "postgres", "python", "django", "laravel", "graphql", "frappe", "erpnext", "prisma",
  "sqlite", "redis", "docker",
]

const projectCategories = [
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
]

function getProjectCategory(project) {
  if (project?.category) return project.category
  const tech = (project?.tech || []).map((t) => String(t).toLowerCase())
  const hasBackend = tech.some((t) => BACKEND_KEYWORDS.some((k) => t.includes(k)))
  const hasFrontend = tech.some((t) => FRONTEND_KEYWORDS.some((k) => t.includes(k)))
  if (hasBackend && hasFrontend) return "fullstack"
  if (hasBackend) return "backend"
  return "frontend"
}

const getCategoryLabel = (cat) =>
  projectCategories.find((c) => c.id === cat)?.label || "Frontend"

const getCategoryIcon = (cat) =>
  cat === "fullstack" ? Layers : cat === "backend" ? Server : Layout

const categoryBadgeClass = {
  frontend: "border-red-500/40 bg-red-500/10 text-red-400",
  backend: "border-verdigris/40 bg-verdigris/10 text-verdigris",
  fullstack: "border-tuscan-sun/40 bg-tuscan-sun/10 text-tuscan-sun",
}

const categoryHoverClass = {
  frontend: "hover:border-red-500/60 hover:shadow-[0_0_25px_-5px_rgba(229,9,20,0.35)]",
  backend: "hover:border-verdigris/60 hover:shadow-[0_0_25px_-5px_rgba(42,157,143,0.35)]",
  fullstack: "hover:border-tuscan-sun/60 hover:shadow-[0_0_25px_-5px_rgba(233,196,106,0.35)]",
}

const categoryGlowClass = {
  frontend: "bg-red-600/25",
  backend: "bg-verdigris/25",
  fullstack: "bg-tuscan-sun/25",
}

const categoryBarClass = {
  frontend: "from-red-500 to-red-600",
  backend: "from-verdigris to-teal-500",
  fullstack: "from-tuscan-sun to-amber-500",
}

const categoryIconClass = {
  frontend: "bg-red-500/15 text-red-400 border-red-500/30",
  backend: "bg-verdigris/15 text-verdigris border-verdigris/30",
  fullstack: "bg-tuscan-sun/15 text-tuscan-sun border-tuscan-sun/30",
}

const categoryGradientClass = {
  frontend: "from-red-500/40 via-red-600/20 to-transparent",
  backend: "from-verdigris/40 via-teal-600/20 to-transparent",
  fullstack: "from-tuscan-sun/40 via-amber-500/20 to-transparent",
}

const staticProjects = () =>
  Mydata.Projects.map((p) => ({
    id: p.id,
    name: p.Name,
    description: p.Description,
    tech: p.Tech,
    github_url: p.GitHub,
    live_url: p.Live,
    featured: p.Featured,
    year: p.Year,
    images: p.images || [],
  }))

const projectImage = (project) => {
  if (project.images && project.images.length > 0) {
    return <ProjectCarousel images={project.images} name={project.name} />
  }
  if (project.image_url) {
    return <ProjectCarousel images={[project.image_url]} name={project.name} />
  }
  return <Code2 className="h-16 w-16 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
}

export function Projects({ isPage = false, category = null, onCategoryChange = null }) {
  const [projects] = useState(staticProjects())
  const [internalCategory, setInternalCategory] = useState("fullstack")

  const activeCategory = onCategoryChange ? (category || "fullstack") : internalCategory

  const handleTabClick = (id) => {
    if (onCategoryChange) onCategoryChange(id)
    else setInternalCategory(id)
  }

  const filteredProjects = projects.filter(
    (project) => getProjectCategory(project) === activeCategory
  )

  return (
    <section id="projects" className={isPage ? "w-full" : "relative container py-4 md:py-8 lg:py-10"}>
      {!isPage && (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none dark:mix-blend-screen">
          <div className="w-[800px] h-[800px] bg-red-600/10 blur-[140px] rounded-full translate-y-1/4 text-transparent" />
        </div>
      )}
      {!isPage && (
        <div className="relative flex flex-col items-center gap-4 text-center mb-16 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-b-4 border-primary pb-2 inline-block">
              Selected Works
            </h2>
          </motion.div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A collection of projects exploring web technologies and design.
          </p>
        </div>
      )}

      {/* Category Filter Tabs */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-12">
        {projectCategories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer",
              activeCategory === tab.id
                ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_rgba(229,9,20,0.3)]"
                : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project, index) => {
            const cat = getProjectCategory(project)
            const CategoryIcon = getCategoryIcon(cat)
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, scale: 0.92, rotateX: -8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 18, delay: (index % 4) * 0.1 }}
                viewport={{ once: true, amount: 0.15 }}
                className="h-full"
                style={{ perspective: 800 }}
              >
              <Card className={cn(
                "relative w-full h-full flex flex-col overflow-hidden border border-border transition-all duration-300 group bg-gradient-to-b from-card/70 to-card/30 backdrop-blur-xl hover:-translate-y-1.5",
                categoryHoverClass[cat]
              )}>
                {/* Ambient glow */}
                <div className={cn(
                  "absolute -top-16 -right-16 h-40 w-40 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  categoryGlowClass[cat]
                )} />

                {/* Animated top accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: (index % 4) * 0.1 + 0.15 }}
                  viewport={{ once: true }}
                  className={cn(
                    "absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r origin-left",
                    categoryBarClass[cat]
                  )}
                />

                {/* Upper half: project image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/60 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  {projectImage(project)}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary text-primary-foreground font-bold">Featured</Badge>
                    </div>
                  )}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                    categoryGradientClass[cat]
                  )} />
                </div>

                {/* Lower half: details */}
                <CardContent className="relative z-10 flex flex-1 flex-col gap-3 p-5 pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 4) * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110", categoryIconClass[cat])}>
                        <CategoryIcon className="h-4 w-4" />
                      </span>
                      <Badge variant="outline" className={cn("px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest", categoryBadgeClass[cat])}>
                        {getCategoryLabel(cat)}
                      </Badge>
                    </div>
                    <span className="text-sm font-mono font-normal text-muted-foreground">{project.year}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 4) * 0.1 + 0.25 }}
                    viewport={{ once: true }}
                  >
                    <CardTitle className="font-bold text-lg font-serif leading-tight line-clamp-1 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 4) * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-1.5"
                  >
                    {project.tech && project.tech.slice(0, 4).map((t, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-background/50">{t}</Badge>
                    ))}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 4) * 0.1 + 0.35 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-sm leading-relaxed line-clamp-2"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 4) * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 pt-1 mt-auto"
                  >
                    {project.live_url && (
                      <Button size="sm" className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                        <a href={project.live_url} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" /> Live
                        </a>
                      </Button>
                    )}
                    {project.github_url && (
                      <Button size="sm" variant="outline" className="flex-1 gap-2 border-border hover:bg-accent/50" asChild>
                        <a href={project.github_url} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
              </motion.div>
            )
          })}
        </div>
      ) : (
        <div className="relative z-10 text-center text-muted-foreground py-12">
          No projects found in this category. Stay tuned for updates...
        </div>
      )}
    </section>
  )
}
