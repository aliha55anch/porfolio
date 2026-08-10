import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Home, Wrench, FolderOpen, Briefcase, GraduationCap, Award, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

const projectCategories = [
  { label: "Frontend", href: "/projects?category=frontend" },
  { label: "Backend", href: "/projects?category=backend" },
  { label: "Full Stack", href: "/projects?category=fullstack" },
]

const navItems = [
  { name: "About", href: "/", icon: Home },
  { name: "Skills", href: "/skills", icon: Wrench },
  { name: "Projects", href: "/projects", hasDropdown: true, icon: FolderOpen },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Certifications", href: "/certifications", icon: Award },
  { name: "Contact", href: "/contact", icon: Mail },
]

const sectionTargets = {
  "/": "home",
  "/skills": "skills",
  "/projects": "projects",
  "/experience": "experience",
  "/education": "education",
  "/certifications": "certifications",
  "/contact": "contact",
}

export function Navbar() {
  const location = useLocation()
  const pathname = location.pathname
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("/")

  const handleNavClick = (e, href) => {
    setIsOpen(false);

    // Logic: If on home page and link is for a section, scroll to it.
    // If link is Home ('/'), scroll to top.
    if (pathname === "/") {
      const targetId = sectionTargets[href];
      if (targetId) {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          // Update URL hash without reload
          window.history.pushState({}, "", href === "/" ? "/" : `#${targetId}`);
          // Scroll
          const yOffset = -64; // Navbar height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
    // Else: Let standard navigation happen to the separate page
  }

  const isActiveLink = (href) => {
    if (pathname === "/") return activeSection === href;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  }

  React.useEffect(() => {
    // Only run scroll spy on Home page
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id === "home") setActiveSection("/")
            else setActiveSection(`/${id}`)
          }
        })
      },
      { rootMargin: "-30% 0px -70% 0px" } // Adjusted logic for better trigger
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="mr-2 sm:mr-8 flex items-center" onClick={(e) => handleNavClick(e, "/")}>
          <span className="font-mono text-base sm:text-lg font-bold tracking-tight whitespace-nowrap">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Muhammad Ali Hassan</span>
            <span className="text-primary">/&gt;</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.href} className="relative group">
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "transition-colors hover:text-foreground/80 text-foreground/60 relative flex items-center gap-1",
                      isActiveLink(item.href) ? "text-foreground font-semibold" : ""
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-active:rotate-180" />
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform origin-left",
                      isActiveLink(item.href) ? "scale-x-100 bg-red-500" : ""
                    )} />
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                    <div className="min-w-45 rounded-xl border border-border/40 bg-background/95 backdrop-blur-xl shadow-2xl p-2 space-y-1">
                      {projectCategories.map((cat) => (
                        <Link
                          key={cat.href}
                          to={cat.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "transition-colors hover:text-foreground/80 text-foreground/60 relative group",
                  isActiveLink(item.href) ? "text-foreground font-semibold" : ""
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform origin-left",
                  isActiveLink(item.href) ? "scale-x-100 bg-red-500" : ""
                )} />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Toggle menu"
                className="lg:hidden relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/40 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_18px_-4px_rgba(229,9,20,0.5)]"
              >
                {/* Glow accent on open */}
                <span className={cn(
                  "absolute inset-0 rounded-xl bg-primary/10 blur-md transition-opacity duration-300",
                  isOpen ? "opacity-100" : "opacity-0"
                )} />
                <span className="relative flex h-4 w-5 flex-col items-center justify-center gap-[5px]">
                  <span className={cn(
                    "h-0.5 w-full rounded-full bg-foreground transition-all duration-300",
                    isOpen && "translate-y-[5.5px] rotate-45 bg-primary"
                  )} />
                  <span className={cn(
                    "h-0.5 w-full rounded-full bg-foreground transition-all duration-300",
                    isOpen && "opacity-0 scale-x-0"
                  )} />
                  <span className={cn(
                    "h-0.5 w-full rounded-full bg-foreground transition-all duration-300",
                    isOpen && "-translate-y-[5.5px] -rotate-45 bg-primary"
                  )} />
                </span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100 border-l border-border dark:border-red-900/50 overflow-y-auto">
              <SheetHeader className="p-6 pb-2">
                <SheetTitle className="font-serif text-left text-2xl font-bold text-foreground">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3 p-6 pt-4 pb-8">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const active = isActiveLink(item.href)
                  return (
                    <React.Fragment key={item.href}>
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "group relative flex items-center gap-3 rounded-xl border px-4 py-3 text-base font-semibold transition-all duration-300 overflow-hidden",
                          active
                            ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_18px_-6px_rgba(229,9,20,0.4)]"
                            : "border-border/60 bg-card/40 text-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-[0_0_18px_-8px_rgba(229,9,20,0.35)]"
                        )}
                      >
                        <span className={cn(
                          "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300",
                          active
                            ? "border-primary/40 bg-primary/15 text-primary"
                            : "border-border/60 bg-background/50 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary group-active:border-primary/30 group-active:text-primary"
                        )}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="relative flex-1">{item.name}</span>
                        <span className={cn(
                          "relative h-1.5 w-1.5 rounded-full transition-all duration-300",
                          active
                            ? "bg-primary"
                            : "bg-muted-foreground/30 group-hover:bg-primary group-active:bg-primary"
                        )} />
                      </Link>
                      {item.hasDropdown && (
                        <div className="flex flex-col gap-2 pl-14">
                          {projectCategories.map((cat) => (
                            <Link
                              key={cat.href}
                              to={cat.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-300",
                                location.search === `?category=${cat.href.split("category=")[1]}`
                                  ? "border-primary/40 bg-primary/10 text-primary"
                                  : "border-border/50 bg-card/30 text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                              )}
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
