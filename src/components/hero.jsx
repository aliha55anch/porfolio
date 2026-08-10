import * as React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Typewriter } from "@/components/typewriter"
import { Mydata } from "@/lib/data"

const heroRoles = ["Computer Science Student", "MERN Stack Developer"]

export function Hero() {
  const [profile, setProfile] = useState({
    ...Mydata,
    ImageUrl: "/assets/images/profile/profile.png",
    ResumeUrl: "/assets/PDF/CV/muhammad-ali-hassan-cv.pdf"
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section id="home" className="relative w-full pt-6 md:pt-8 lg:pt-10 pb-4 md:pb-8 lg:pb-12 flex items-start justify-center">
      {/* Spotlight Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none dark:mix-blend-screen">
        <div className="w-200 h-200 bg-red-600/10 sm:bg-red-600/20 blur-[140px] rounded-full text-transparent" />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Mobile / iPad Layout */}
        <div className="flex flex-col gap-8 items-center lg:hidden">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 items-center text-center"
          >
            <motion.h1 variants={item} className="font-serif font-bold tracking-tight text-foreground">
              <span className="inline-block text-3xl sm:text-4xl md:text-5xl">
                <span className="inline-block mr-2 animate-wave origin-[70%_70%]">👋</span>
                Hi, I&apos;m
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-700 text-5xl sm:text-6xl md:text-7xl whitespace-nowrap">
                M. Ali Hassan
              </span>
            </motion.h1>

            <motion.div variants={item} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground min-h-10">
                <span className="text-primary">&lt;</span>{" "}
                <Typewriter phrases={heroRoles} typingSpeed={70} deletingSpeed={40} pause={1000} />{" "}
                <span className="text-primary">/&gt;</span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative group">
              {/* Red glow behind the card */}
              <div className="absolute -inset-4 rounded-xl bg-red-600/10 blur-2xl group-hover:bg-red-600/20 group-active:bg-red-600/20 transition-all duration-500" />

              <Card className="relative p-0 overflow-hidden border border-border bg-card/50 backdrop-blur-xl w-full max-w-4xl shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-5/4.5 overflow-hidden bg-muted">
                    {/* Image with Grayscale Filter */}
                    <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground w-full h-full">
                      {profile.ImageUrl ? (
                        <img
                          src={profile.ImageUrl}
                          alt="Profile"
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-4xl font-serif opacity-20">&lt; /&gt;</span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="whitespace-nowrap">Islamabad, PK</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-xs font-medium text-primary ml-1 whitespace-nowrap">Available to Work</span>
                      </div>
                    </div>

                    <div className="space-y-2 font-mono text-sm border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience:</span>
                        <span className="text-foreground">1+ Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Projects:</span>
                        <span className="text-foreground">4+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">Stack:</span>
                        <span className="text-foreground">MERN</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 items-center text-center"
          >
            <motion.p variants={item} className="max-w-150 text-muted-foreground md:text-lg/relaxed">
              {profile.Summary}
            </motion.p>

            <motion.div variants={item} className="flex flex-col items-center gap-3 min-[400px]:flex-row min-[400px]:items-stretch min-[400px]:justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
                <Link to="/projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground bg-transparent" asChild>
                <a href={profile.ResumeUrl || "/assets/PDF/CV/muhammad-ali-hassan-cv.pdf"} download="Muhammad_Ali_Hassan_CV.pdf">Download CV <Download className="ml-2 h-4 w-4" /></a>
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex justify-center gap-4 text-muted-foreground">
              <a href={profile.Socials?.GitHub || "#"} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href={profile.Socials?.LinkedIn || "#"} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.Email)}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop / Laptop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 lg:pl-12"
          >
            <motion.h1 variants={item} className="font-serif font-bold tracking-tight text-foreground">
              <span className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="inline-block mr-2 animate-wave origin-[70%_70%]">👋</span>
                Hi, I&apos;m
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-700 text-5xl sm:text-6xl md:text-7xl lg:text-7xl whitespace-nowrap">
                M. Ali Hassan
              </span>
            </motion.h1>

            <motion.div variants={item} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground min-h-10">
                <span className="text-primary">&lt;</span>{" "}
                <Typewriter phrases={heroRoles} typingSpeed={70} deletingSpeed={40} pause={1000} />{" "}
                <span className="text-primary">/&gt;</span>
              </h2>
            </motion.div>

            <motion.p variants={item} className="max-w-150 text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {profile.Summary}
            </motion.p>

            <motion.div variants={item} className="flex flex-col items-center gap-3 min-[400px]:flex-row min-[400px]:items-stretch min-[400px]:justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
                <Link to="/projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground bg-transparent" asChild>
                <a href={profile.ResumeUrl || "/assets/PDF/CV/muhammad-ali-hassan-cv.pdf"} download="Muhammad_Ali_Hassan_CV.pdf">Download CV <Download className="ml-2 h-4 w-4" /></a>
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex justify-center gap-4 text-muted-foreground lg:justify-start">
              <a href={profile.Socials?.GitHub || "#"} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href={profile.Socials?.LinkedIn || "#"} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.Email)}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative group">
              {/* Red glow behind the card */}
              <div className="absolute -inset-4 rounded-xl bg-red-600/10 blur-2xl group-hover:bg-red-600/20 group-active:bg-red-600/20 transition-all duration-500" />

              <Card className="relative p-0 overflow-hidden border border-border bg-card/50 backdrop-blur-xl w-full max-w-4xl shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-5/4.5 overflow-hidden bg-muted">
                    {/* Image with Grayscale Filter */}
                    <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground w-full h-full">
                      {profile.ImageUrl ? (
                        <img
                          src={profile.ImageUrl}
                          alt="Profile"
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-4xl font-serif opacity-20">&lt; /&gt;</span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="whitespace-nowrap">Islamabad, PK</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-xs font-medium text-primary ml-1 whitespace-nowrap">Available to Work</span>
                      </div>
                    </div>

                    <div className="space-y-2 font-mono text-sm border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience:</span>
                        <span className="text-foreground">1+ Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Projects:</span>
                        <span className="text-foreground">4+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">Stack:</span>
                        <span className="text-foreground">MERN</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
