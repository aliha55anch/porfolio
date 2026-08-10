import * as React from "react"
import { motion } from "framer-motion"
import { GraduationCap, CalendarRange, Award, BookOpen } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    id: 0,
    status: "Currently Pursuing",
    current: true,
    field: "Programming · Web Development",
    period: "2025 – 2029",
    degree: "BS in Computer Science",
    institution: "NUML, Islamabad",
    grade: "CGPA: 3.78",
  },
  {
    id: 1,
    period: "2022 – 2024",
    degree: "Intermediate (ICS)",
    institution: "Punjab Group of Colleges, Jauharabad",
    grade: "Grade: A+",
  },
  {
    id: 2,
    period: "2020 – 2022",
    degree: "Matriculation (Science)",
    institution: "PAEC Model School, Jauharabad",
    grade: "Grade: A+",
  },
]

export function Education({ isPage = false }) {
  return (
    <section id="education" className={isPage ? "w-full" : "relative container py-4 md:py-8 lg:py-10"}>
      {!isPage && (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none dark:mix-blend-screen">
          <div className="w-200 h-200 bg-red-600/10 blur-[140px] rounded-full -translate-x-1/4 text-transparent" />
        </div>
      )}

      <div className="relative flex flex-col items-center gap-4 text-center mb-8 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-b-4 border-primary pb-2 inline-block">
            Education
          </h2>
        </motion.div>
        <p className="max-w-175 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          My academic background and qualifications.
        </p>
      </div>

      <div className="relative grid gap-4 md:gap-6 md:grid-cols-3 z-10 items-stretch">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 40, scale: 0.92, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: (index % 3) * 0.1 }}
            viewport={{ once: true, amount: 0.15 }}
            className="h-full"
            style={{ perspective: 800 }}
          >
            <div className="relative group h-full">
              <Card className="relative overflow-hidden border border-border bg-card/40 backdrop-blur-xl transition-all duration-300 h-full hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(229,9,20,0.15)]">
                {/* Top accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: (index % 3) * 0.1 + 0.15 }}
                  viewport={{ once: true }}
                  className="h-0.5 w-full bg-gradient-to-r from-primary via-red-500 to-amber-500 origin-left"
                />

                <CardContent className="p-5 space-y-3">
                  {/* Status + Period */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 3) * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center gap-2"
                  >
                    {edu.status ? (
                      <>
                        <span className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 border border-primary/25 rounded-full px-3 py-1 whitespace-nowrap">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                          </span>
                          {edu.status}
                        </span>
                        <span className="text-xs font-mono text-red-500 whitespace-nowrap">
                          {edu.period}
                        </span>
                      </>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-red-500">
                        <CalendarRange className="h-3.5 w-3.5" />
                        {edu.period}
                      </span>
                    )}
                  </motion.div>

                  {/* Field */}
                  {edu.field && (
                    <motion.span
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index % 3) * 0.1 + 0.25 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-verdigris bg-verdigris/10 border border-verdigris/30 rounded-full px-2 py-0.5 w-fit"
                    >
                      <BookOpen className="h-2.5 w-2.5" />
                      {edu.field}
                    </motion.span>
                  )}

                  {/* Degree */}
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 3) * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="font-serif text-lg md:text-xl font-bold text-foreground leading-snug"
                  >
                    {edu.degree}
                  </motion.h3>

                  {/* Institution */}
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 3) * 0.1 + 0.35 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-sm font-medium text-muted-foreground"
                  >
                    <GraduationCap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {edu.institution}
                  </motion.p>

                  {/* Period + Grade */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 3) * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-border/50"
                  >
                    {edu.grade && (
                      <span className="flex items-center gap-1.5 text-xs font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/25 rounded-full px-3 py-1">
                        <Award className="h-3.5 w-3.5" />
                        {edu.grade}
                      </span>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
