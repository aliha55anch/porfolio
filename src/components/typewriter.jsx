import { useEffect, useState } from "react"

export function Typewriter({ phrases, typingSpeed = 80, deletingSpeed = 40, pause = 1600, className }) {
  const [text, setText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length]

    // Phrase fully typed — hold for the pause duration before deleting
    if (!isDeleting && text === current) {
      const hold = setTimeout(() => setIsDeleting(true), pause)
      return () => clearTimeout(hold)
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1))
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === "") {
          setIsDeleting(false)
          setPhraseIndex((i) => (i + 1) % phrases.length)
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause])

  return (
    <span className={className}>
      {text}
      <span className="animate-cursor-blink text-primary">|</span>
    </span>
  )
}
