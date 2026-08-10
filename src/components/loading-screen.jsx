import * as React from "react"
import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const letterVariants = {
  hidden: { y: 30, opacity: 0, rotateX: -90 },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
}

export function LoadingScreen() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    let raf
    let start = null
    const duration = 1600

    const tick = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (pct < 100) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const name = "M. Ali Hassan"

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none dark:mix-blend-screen">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-verdigris/20 blur-[120px]"
        />
      </div>

      <div className="relative flex flex-col items-center gap-8 px-6">
        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 shadow-[0_0_35px_-5px_rgba(229,9,20,0.5)]"
        >
          <motion.span
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center text-primary"
          >
            <Code2 className="h-10 w-10" />
          </motion.span>
        </motion.div>

        {/* Name reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex items-center gap-1 font-serif text-3xl font-bold sm:text-5xl"
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className={char === " " ? "w-3" : "inline-block"}
              style={{ transformStyle: "preserve-3d" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="w-full max-w-xs sm:max-w-sm">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-border/60">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-red-500 to-verdigris shadow-[0_0_10px_rgba(229,9,20,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span>Loading portfolio</span>
            <span className="text-primary">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
