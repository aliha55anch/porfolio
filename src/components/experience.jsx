import * as React from "react"
import { motion } from "framer-motion"
import { Briefcase, MapPin, CalendarDays } from "lucide-react"
import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Mydata } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Experience({ isPage = false }) {
  const [experiences] = useState(Mydata.Experience.map((e, idx) => ({
    id: idx,
    company: e.Company,
    position: e.Position,
    location: e.Location,
    description: e.Description,
    duration: e.Duration,
    is_development: e.Company !== "BestMobile.pk",
    skills: []
  })))

  const devRoles = experiences.filter(job => job.is_development !== false);
  const otherRoles = experiences.filter(job => job.is_development === false);

  const renderRole = (job, index, isCurrent, align = "center") => {
    const stagger = (index % 2) * 0.1

    return (
      <div key={job.id} className="relative group">
        {/* Timeline node */}
        <div className={cn(
          "absolute top-8 z-10 -translate-x-1/2",
          align === "center" ? "left-5 sm:left-1/2" : "left-5"
        )}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: stagger + 0.1 }}
            viewport={{ once: true }}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-lg transition-all duration-300 group-hover:scale-110"
          >
            <span className={cn(
              "absolute inset-0 rounded-full opacity-40 blur-md transition-opacity duration-300",
              isCurrent ? "bg-primary" : "bg-verdigris/60"
            )} />
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.4, 1] }}
              transition={{ duration: 0.5, delay: stagger + 0.25 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex h-8 w-8 items-center justify-center rounded-full border",
                isCurrent
                  ? "border-primary/40 bg-primary/15 text-primary"
                  : "border-verdigris/40 bg-verdigris/15 text-verdigris"
              )}
            >
              <Briefcase className="h-4 w-4" />
            </motion.span>
          </motion.div>
        </div>

        {/* Card */}
        <div className={cn(
          "min-w-0 pl-16 sm:pl-0",
          align === "center"
            ? isCurrent
              ? "sm:pr-[calc(50%+2rem)]"
              : "sm:ml-[calc(50%+2rem)]"
            : "sm:pl-14"
        )}>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: stagger }}
            viewport={{ once: true, amount: 0.15 }}
            className="h-full"
            style={{ perspective: 800 }}
          >
            <Card className={cn(
              "relative w-full min-w-0 h-full overflow-hidden border bg-card/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1",
              isCurrent
                ? "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_35px_-5px_rgba(229,9,20,0.3)]"
                : "border-border hover:border-verdigris/50 hover:shadow-[0_0_35px_-5px_rgba(42,157,143,0.25)]"
            )}>
              {/* Top accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: stagger + 0.15 }}
                viewport={{ once: true }}
                className={cn(
                  "h-1 w-full bg-gradient-to-r origin-left",
                  isCurrent
                    ? "from-primary via-red-500 to-amber-500"
                    : "from-verdigris via-teal-500 to-cyan-500"
                )}
              />

              <CardContent className="p-6 sm:p-7 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: stagger + 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap items-start justify-between gap-3"
                >
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground leading-tight">
                      {job.position}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                        <Briefcase className="h-3.5 w-3.5 text-primary/70" />
                        {job.company}
                      </span>
                      {job.location && (
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 text-verdigris/70" />
                          {job.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {isCurrent && (
                      <span className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary whitespace-nowrap">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        Current
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs font-mono font-medium text-muted-foreground whitespace-nowrap">
                      <CalendarDays className="h-3.5 w-3.5 shrink-0" />
                      {job.duration}
                    </span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: stagger + 0.3 }}
                  viewport={{ once: true }}
                  className="text-sm md:text-base text-foreground/80 leading-relaxed whitespace-pre-line break-words"
                >
                  {job.description}
                </motion.p>

                {job.skills && job.skills.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: stagger + 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 pt-1 border-t border-border/50"
                  >
                    {job.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: stagger + 0.4 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border border-border/50 bg-background/50 text-foreground/70"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <section id="experience" className={isPage ? "w-full" : "relative container overflow-hidden py-4 md:py-8 lg:py-10"}>
      {/* Spotlight Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none dark:mix-blend-screen">
        <div className="h-72 w-72 bg-primary/10 blur-[100px] rounded-full -translate-x-1/2 text-transparent sm:h-96 sm:w-96 lg:h-200 lg:w-200" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-8"
      >
        <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-b-4 border-primary pb-2 relative z-10 w-fit mx-auto">
          Experience
        </h2>
        <p className="max-w-175 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          My professional journey in the digital realm.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Static track */}
        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />

        {/* Static glowing line */}
        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-red-500 to-verdigris shadow-[0_0_12px_rgba(229,9,20,0.5)]" />
        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 to-verdigris/50 blur-[2px]" />

        <div className="space-y-12 sm:space-y-14">
          {devRoles.map((job, index) => renderRole(job, index, index === 0))}
        </div>
      </div>

      {otherRoles.length > 0 && (
        <div className="max-w-3xl mx-auto mt-14 border-t border-border pt-12">
          <h3 className="text-xl font-bold mb-8 text-muted-foreground uppercase tracking-widest text-center">
            Other Professional Experience
          </h3>
          <div className="relative space-y-8">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
            {otherRoles.map((job, idx) => renderRole(job, idx, false, "left"))}
          </div>
        </div>
      )}

      {experiences.length === 0 && (
        <div className="text-center text-muted-foreground py-12">
          Stay tuned for updates...
        </div>
      )}
    </section>
  )
}
