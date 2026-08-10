import * as React from "react"
import { motion } from "framer-motion"
import { Code2, Layers, Palette, Wrench, Database, Sparkles, Gauge, Plug, Search, MonitorSmartphone, Database as DatabaseIcon } from "lucide-react"
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress,
  SiWordpress, SiBootstrap, SiTailwindcss, SiGit, SiGithub, SiNetlify,
  SiVercel, SiRender, SiRailway, SiPostman, SiMongodb, SiMysql, SiSupabase,
} from "react-icons/si"
import { Mydata } from "@/lib/data"

const skillLogos = {
  HTML5: { icon: SiHtml5, color: "#e34f26", darkColor: "#e34f26" },
  CSS3: { icon: SiCss3, color: "#1572b6", darkColor: "#1572b6" },
  JavaScript: { icon: SiJavascript, color: "#d4a017", darkColor: "#f7df1e" },
  "React.js": { icon: SiReact, color: "#087ea4", darkColor: "#61dafb" },
  "Node.js": { icon: SiNodedotjs, color: "#339933", darkColor: "#339933" },
  "Express.js": { icon: SiExpress, color: "#1a1a1a", darkColor: "#ffffff" },
  WordPress: { icon: SiWordpress, color: "#21759b", darkColor: "#21759b" },
  Bootstrap: { icon: SiBootstrap, color: "#7952b3", darkColor: "#7952b3" },
  TailwindCSS: { icon: SiTailwindcss, color: "#0284c7", darkColor: "#38bdf8" },
  Git: { icon: SiGit, color: "#f05032", darkColor: "#f05032" },
  GitHub: { icon: SiGithub, color: "#181717", darkColor: "#ffffff" },
  Netlify: { icon: SiNetlify, color: "#048e80", darkColor: "#00c7b7" },
  Vercel: { icon: SiVercel, color: "#000000", darkColor: "#ffffff" },
  Render: { icon: SiRender, color: "#0e9372", darkColor: "#46e3b7" },
  Railway: { icon: SiRailway, color: "#1a1a1a", darkColor: "#ffffff" },
  Postman: { icon: SiPostman, color: "#ff6c37", darkColor: "#ff6c37" },
  MongoDB: { icon: SiMongodb, color: "#2f7d32", darkColor: "#47a248" },
  MySQL: { icon: SiMysql, color: "#4479a1", darkColor: "#4479a1" },
  Supabase: { icon: SiSupabase, color: "#1f9e5d", darkColor: "#3fcf8e" },
  TiDB: { icon: DatabaseIcon, color: "#e10002", darkColor: "#ffffff" },
  "Web Performance": { icon: Gauge, color: "#db2777", darkColor: "#ec4899" },
  "REST APIs": { icon: Plug, color: "#db2777", darkColor: "#ec4899" },
  SEO: { icon: Search, color: "#db2777", darkColor: "#ec4899" },
  "Responsive Design": { icon: MonitorSmartphone, color: "#db2777", darkColor: "#ec4899" },
}

const categoryMeta = [
  { key: "Languages", icon: Code2, gradient: "from-red-500/20 to-orange-500/10", accent: "text-red-600 dark:text-red-400", ring: "group-hover:ring-red-500/40" },
  { key: "Frameworks", icon: Layers, gradient: "from-cyan-500/20 to-blue-500/10", accent: "text-cyan-700 dark:text-cyan-400", ring: "group-hover:ring-cyan-500/40" },
  { key: "UI Libraries", icon: Palette, gradient: "from-purple-500/20 to-pink-500/10", accent: "text-purple-600 dark:text-purple-400", ring: "group-hover:ring-purple-500/40" },
  { key: "Tools", icon: Wrench, gradient: "from-amber-500/20 to-yellow-500/10", accent: "text-amber-600 dark:text-amber-400", ring: "group-hover:ring-amber-500/40" },
  { key: "Databases", icon: Database, gradient: "from-emerald-500/20 to-teal-500/10", accent: "text-emerald-600 dark:text-emerald-400", ring: "group-hover:ring-emerald-500/40" },
  { key: "Others", icon: Sparkles, gradient: "from-pink-500/20 to-rose-500/10", accent: "text-pink-600 dark:text-pink-400", ring: "group-hover:ring-pink-500/40" },
]

export function Skills() {
  const skillCategories = categoryMeta.map((meta) => ({
    ...meta,
    items: Mydata.Skills[meta.key] || [],
  }))

  return (
    <section id="skills" className="relative container overflow-hidden py-4 md:py-8 lg:py-10">
      {/* Spotlight Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none dark:mix-blend-screen">
        <div className="h-[300px] w-[300px] bg-red-600/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 text-transparent sm:h-[600px] sm:w-[600px] lg:h-[800px] lg:w-[800px]" />
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none dark:mix-blend-screen">
        <div className="h-[250px] w-[250px] bg-cyan-600/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 text-transparent sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]" />
      </div>

      <div className="relative flex flex-col items-center gap-4 text-center mb-10 md:mb-16 z-10 px-2 sm:px-0">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
        >
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-b-4 border-primary pb-2 inline-block">
                Technical Expertise
            </h2>
        </motion.div>
        <p className="max-w-[700px] text-muted-foreground text-base/relaxed sm:text-lg/relaxed lg:text-xl/relaxed">
          A comprehensive overview of my technical skills and tools.
        </p>
      </div>

      <div className="relative grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 z-10">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`group relative h-full rounded-2xl bg-gradient-to-br ${cat.gradient} ring-1 ring-border/50 ${cat.ring} transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(229,9,20,0.15)] overflow-hidden`}>
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <div className="relative p-4 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary/10 ${cat.accent}`}>
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">{cat.key}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {cat.items.map((skill, i) => {
                    const logo = skillLogos[skill]
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 + i * 0.05 }}
                        viewport={{ once: true }}
                        title={skill}
                        className="group/tile flex flex-col items-center justify-center gap-1.5 rounded-xl border border-border/60 bg-background/80 px-2 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-background hover:shadow-[0_8px_25px_-8px_rgba(0,0,0,0.25)] cursor-default"
                      >
                        <span
                          className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-muted ring-1 ring-border"
                          style={{ "--skill-color": logo.color, "--skill-color-dark": logo.darkColor }}
                        >
                          <logo.icon className="skill-logo-icon h-5 w-5 transition-transform duration-300 group-hover/tile:scale-125" />
                          <span className="skill-logo-glow absolute inset-0 rounded-lg opacity-0 blur-md transition-opacity duration-300 group-hover/tile:opacity-30" />
                        </span>
                        <span className="text-[11px] font-semibold text-muted-foreground text-center leading-tight transition-colors duration-300 group-hover/tile:text-foreground">
                          {skill}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
