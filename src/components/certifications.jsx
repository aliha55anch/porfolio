import * as React from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink, CalendarRange, ShieldCheck } from "lucide-react"
import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Mydata } from "@/lib/data"

const staticCertifications = () =>
  Mydata.Certifications.map((c) => ({
    id: c.id,
    title: c.Title,
    description: c.Description,
    issuer: c.Issuer,
    date: c.Date,
    url: c.Url,
    thumbnail_url: c.Thumbnail,
  }))

export function Certifications({ isPage = false }) {
  const [certifications] = useState(staticCertifications())

  if (certifications.length === 0) return null

  return (
    <section id="certifications" className={isPage ? "w-full" : "relative container py-4 md:py-8 lg:py-10"}>
      {!isPage && (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none dark:mix-blend-screen">
          <div className="w-[800px] h-[800px] bg-red-600/10 blur-[140px] rounded-full translate-x-1/4 text-transparent" />
        </div>
      )}

      <div className="relative flex flex-col items-center gap-4 text-center mb-16 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-b-4 border-primary pb-2 inline-block">
            Certifications
          </h2>
        </motion.div>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Professional certifications earned across technologies and platforms.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 z-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40, scale: 0.92, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: (index % 4) * 0.1 }}
            viewport={{ once: true, amount: 0.15 }}
            className="h-full"
            style={{ perspective: 800 }}
          >
            <a
              href={cert.url || "#"}
              target={cert.url ? "_blank" : undefined}
              rel={cert.url ? "noreferrer" : undefined}
              className="block h-full group"
            >
              <Card className="group relative h-full flex flex-col overflow-hidden border border-border bg-card/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_0_25px_-5px_rgba(229,9,20,0.25)]">
                {/* Top accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: (index % 4) * 0.1 + 0.15 }}
                  viewport={{ once: true }}
                  className="h-0.5 w-full bg-gradient-to-r from-primary via-red-500 to-amber-500 origin-left"
                />

                {/* Upper half: certificate image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-primary/30 via-accent/20 to-charcoal-blue/40">
                  {cert.thumbnail_url ? (
                    <img
                      src={cert.thumbnail_url}
                      alt={cert.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                    />
                  ) : null}
                  {/* Seal */}
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: (index % 4) * 0.1 + 0.25 }}
                    viewport={{ once: true }}
                    className="absolute top-3 left-3"
                  >
                    <div className="w-11 h-11 rounded-full bg-black/40 border-2 border-dashed border-primary/60 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 group-active:rotate-6 group-active:scale-105">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <ShieldCheck className="absolute -bottom-1 -right-1 h-4 w-4 text-tuscan-sun bg-black/60 rounded-full p-0.5" />
                  </motion.div>
                </div>

                {/* Lower half: details */}
                <CardContent className="relative z-10 flex flex-1 flex-col gap-3 p-5">
                  {cert.issuer && (
                    <motion.span
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index % 4) * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 w-fit"
                    >
                      {cert.issuer}
                    </motion.span>
                  )}

                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 4) * 0.1 + 0.35 }}
                    viewport={{ once: true }}
                    className="font-serif text-lg font-bold leading-tight text-foreground line-clamp-2 group-hover:text-primary group-active:text-primary transition-colors duration-300"
                  >
                    {cert.title}
                  </motion.h3>

                  {cert.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (index % 4) * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-xs text-muted-foreground leading-relaxed line-clamp-2"
                    >
                      {cert.description}
                    </motion.p>
                  )}

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: (index % 4) * 0.1 + 0.45 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between gap-2 border-t border-border/60 pt-3 mt-auto"
                  >
                    {cert.date ? (
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                        <CalendarRange className="h-3 w-3 text-amber-600 dark:text-tuscan-sun" />
                        {new Date(cert.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-muted-foreground">Issued</span>
                    )}

                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary/80 transition-colors">
                      View Certificate <ExternalLink className="h-3 w-3" />
                    </span>
                  </motion.div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}

        {certifications.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-12">
            Stay tuned for updates...
          </div>
        )}
      </div>
    </section>
  )
}
