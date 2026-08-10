import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

import { Mydata } from "@/lib/data"

const socials = [
  { name: "GitHub", href: Mydata.Socials.GitHub, icon: Github },
  { name: "LinkedIn", href: Mydata.Socials.LinkedIn, icon: Linkedin },
  { name: "Email", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(Mydata.Email)}`, icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative w-full border-t border-border/40 bg-background/95 backdrop-blur">
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
        {/* Brand */}
        <Link to="/" className="flex items-center">
          <span className="font-mono text-base font-bold tracking-tight whitespace-nowrap">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Muhammad Ali Hassan</span>
            <span className="text-primary">/&gt;</span>
          </span>
        </Link>

        {/* Copyright */}
        <p className="font-mono text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Muhammad Ali Hassan &mdash; All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_14px_-4px_rgba(229,9,20,0.5)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_14px_-4px_rgba(229,9,20,0.5)]"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
