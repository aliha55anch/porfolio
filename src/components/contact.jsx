import * as React from "react"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Send, Phone, Clock, User, Github, Linkedin, Globe, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mydata } from "@/lib/data"

const WEB3FORMS_ACCESS_KEY = "5a8e8461-d624-4521-be0a-2838271dcd49"

export function Contact() {
   const formRef = React.useRef(null)
   const [feedback, setFeedback] = React.useState(null)
   const [sending, setSending] = React.useState(false)

   const sendMessage = async (e) => {
      e.preventDefault()
      setFeedback(null)
      setSending(true)

      const formData = new FormData(formRef.current)
      formData.append("access_key", WEB3FORMS_ACCESS_KEY)
      formData.append("from_name", "Muhammad Ali Hassan Portfolio")
      formData.append("from_email", Mydata.Email)
      formData.append("reply_to", formData.get("email"))

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
         })

         const data = await response.json()

         if (data.success) {
            setFeedback({ type: "success", message: "Message sent successfully! I'll get back to you within 24 hours." })
            formRef.current.reset()
         } else {
            setFeedback({ type: "error", message: data.message || "Something went wrong. Please try again." })
         }
      } catch (err) {
         console.error("Error sending message:", err)
         setFeedback({ type: "error", message: "Network error. Please check your connection and try again." })
      } finally {
         setSending(false)
      }
   }

   return (
      <section id="contact" className="relative container py-4 md:py-8 lg:py-10">
         {/* Spotlight Background */}
         <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none dark:mix-blend-screen">
            <div className="w-250 h-200 bg-red-600/10 blur-[150px] rounded-full translate-y-1/4 text-transparent" />
         </div>

         <div className="relative flex flex-col items-center gap-4 text-center mb-16 z-10">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
            >
               <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-b-4 border-primary pb-2 inline-block">
                  Get In Touch
               </h2>
            </motion.div>
            <p className="max-w-175 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
               Ready to start your next project? Drop me a message.
            </p>
         </div>

         <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto z-10">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
               <div className="space-y-6">
                  <div className="rounded-xl border border-border bg-card/40 backdrop-blur-xl p-6 shadow-[0_0_20px_rgba(229,9,20,0.05)] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(229,9,20,0.12)]">
                     {/* Header */}
                     <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/60">
                        <div className="relative">
                           <div className="h-12 w-12 rounded-full bg-primary/10 border-2 border-dashed border-primary/50 flex items-center justify-center text-primary">
                              <User className="h-5 w-5" />
                           </div>
                           <span className="absolute -bottom-1 -right-1">
                              <span className="relative flex h-3 w-3">
                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                 <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                              </span>
                           </span>
                        </div>
                        <div>
                           <h3 className="font-serif text-xl font-bold text-foreground">Contact Information</h3>
                           <p className="text-sm text-muted-foreground">Always open to new opportunities &amp; collaborations</p>
                        </div>
                     </div>

                     {/* Contact tiles */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(229,9,20,0.1)] transition-all duration-300 group">
                           <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-active:scale-110 transition-transform">
                              <Mail className="h-5 w-5" />
                           </div>
                           <div className="min-w-0">
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(Mydata.Email)}`} target="_blank" rel="noreferrer" className="text-sm font-semibold text-foreground hover:text-primary transition-colors break-all">{Mydata.Email}</a>
                           </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(229,9,20,0.1)] transition-all duration-300 group">
                           <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-active:scale-110 transition-transform">
                              <Phone className="h-5 w-5" />
                           </div>
                           <div className="min-w-0">
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</p>
                              <a href="tel:+923026872793" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">+92 302 6872793</a>
                           </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(229,9,20,0.1)] transition-all duration-300 group">
                           <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-active:scale-110 transition-transform">
                              <MessageSquare className="h-5 w-5" />
                           </div>
                           <div className="min-w-0">
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                              <a href="https://wa.me/923026872793" target="_blank" rel="noreferrer" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Start a Chat</a>
                           </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(229,9,20,0.1)] transition-all duration-300 group">
                           <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-active:scale-110 transition-transform">
                              <Clock className="h-5 w-5" />
                           </div>
                           <div className="min-w-0">
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Response Time</p>
                              <p className="text-sm font-semibold text-foreground">Within 24 hours</p>
                           </div>
                        </div>
                     </div>

                     {/* Socials */}
                     <div className="mt-6 pt-6 border-t border-border/60 flex items-center justify-between gap-4">
                        <div>
                           <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Follow Me</p>
                           <p className="text-sm text-foreground font-semibold">Let&apos;s connect online</p>
                        </div>
                        <div className="flex gap-3">
                           <a href={Mydata.Socials.GitHub} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(229,9,20,0.15)] transition-all duration-300">
                              <Github className="h-5 w-5" />
                           </a>
                           <a href={Mydata.Socials.LinkedIn} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(229,9,20,0.15)] transition-all duration-300">
                              <Linkedin className="h-5 w-5" />
                           </a>
                           <a href={Mydata.Socials.Portfolio} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(229,9,20,0.15)] transition-all duration-300">
                              <Globe className="h-5 w-5" />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               viewport={{ once: true }}
            >
               <Card className="border border-border shadow-[0_0_20px_rgba(229,9,20,0.05)] bg-card/40 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(229,9,20,0.12)]">
                  <CardHeader className="pb-2">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-12 w-12 rounded-full bg-primary/10 border-2 border-dashed border-primary/50 flex items-center justify-center text-primary">
                           <Send className="h-5 w-5" />
                        </div>
                        <div>
                           <CardTitle className="font-serif text-xl">Send a Message</CardTitle>
                           <CardDescription>
                              Fill out the form below and I&apos;ll get back to you shortly.
                           </CardDescription>
                        </div>
                     </div>
                  </CardHeader>
                  <CardContent>
                     <form ref={formRef} onSubmit={sendMessage} className="space-y-4">
                        <div className="grid gap-2">
                           <Label htmlFor="name">Name</Label>
                           <Input id="name" name="name" placeholder="Your name" required className="bg-card/50 border-input focus-visible:ring-primary" />
                        </div>
                        <div className="grid gap-2">
                           <Label htmlFor="email">Email</Label>
                           <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-card/50 border-input focus-visible:ring-primary" />
                        </div>
                        <div className="grid gap-2">
                           <Label htmlFor="message">Message</Label>
                           <Textarea id="message" name="message" placeholder="Tell me about your project..." className="min-h-30 bg-card/50 border-input focus-visible:ring-primary" required />
                        </div>

                        {feedback && (
                           <div className={`p-3 rounded-md text-sm ${feedback.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                              {feedback.message}
                           </div>
                        )}

                        <Button type="submit" disabled={sending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_20px_rgba(229,9,20,0.25)] hover:shadow-[0_0_25px_rgba(229,9,20,0.4)] transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none">
                           {sending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />} {sending ? "Sending..." : "Send Message"}
                        </Button>
                     </form>
                  </CardContent>
               </Card>
            </motion.div>
         </div>
      </section>
   )
}
