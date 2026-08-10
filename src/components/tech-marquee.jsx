import { useRef, useState } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
  SiWordpress,
} from "react-icons/si";

// Utility function to replace @motionone/utils wrap
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const techs = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-600 dark:text-orange-500", glow: "#e34f26" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-600 dark:text-blue-400", glow: "#1572b6" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600 dark:text-purple-500", glow: "#7952b3" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-700 dark:text-cyan-300", glow: "#38bdf8" },
  { name: "JavaScript", icon: SiJavascript, color: "text-amber-500 dark:text-yellow-400", glow: "#f7df1e" },
  { name: "React", icon: SiReact, color: "text-cyan-600 dark:text-cyan-400", glow: "#61dafb" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600 dark:text-green-500", glow: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600 dark:text-green-400", glow: "#47a248" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700 dark:text-blue-600", glow: "#4479a1" },
  { name: "Git", icon: SiGit, color: "text-orange-700 dark:text-orange-600", glow: "#f05032" },
  { name: "GitHub", icon: SiGithub, color: "text-foreground", glow: "#6e5494" },
  { name: "Figma", icon: SiFigma, color: "text-pink-600 dark:text-pink-500", glow: "#f24e1e" },
  { name: "Canva", icon: SiCanva, color: "text-teal-600 dark:text-teal-400", glow: "#00c4cc" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-800 dark:text-blue-700", glow: "#21759b" },
];

function MarqueeContent({ children, baseVelocity = -1 }) {
  const baseX = useMotionValue(0);
  const xVelocity = useMotionValue(baseVelocity);
  const smoothXVelocity = useSpring(xVelocity, {
    damping: 20, 
    stiffness: 50,
    mass: 1
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const contentRef = useRef(null);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startBaseXRef = useRef(0);

  useAnimationFrame((t, delta) => {
    if (draggingRef.current) return;
    let moveBy = smoothXVelocity.get() * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  const handleTouchStart = (e) => {
    if (!e.touches.length) return;
    draggingRef.current = true;
    xVelocity.set(0);
    startXRef.current = e.touches[0].clientX;
    startBaseXRef.current = baseX.get();
  };

  const handleTouchMove = (e) => {
    if (!draggingRef.current || !e.touches.length) return;
    const width = contentRef.current?.offsetWidth || 1;
    const dx = e.touches[0].clientX - startXRef.current;
    baseX.set(startBaseXRef.current + (dx / width) * 100);
  };

  const handleTouchEnd = () => {
    draggingRef.current = false;
    xVelocity.set(baseVelocity);
  };

  return (
    <div 
        className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap cursor-pointer"
        style={{ touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => xVelocity.set(baseVelocity * 0.7)}
        onMouseLeave={() => xVelocity.set(baseVelocity)}
    >
      <motion.div ref={contentRef} className="flex font-semibold uppercase text-3xl whitespace-nowrap flex-nowrap" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function TechMarquee() {
  const [flashed, setFlashed] = useState(null);

  const handleTap = (index) => {
    setFlashed(index);
    window.setTimeout(() => {
      setFlashed((current) => (current === index ? null : current));
    }, 1200);
  };

  return (
    <section className="bg-background/50  overflow-hidden">
      <MarqueeContent baseVelocity={-1.5} >
        <div className="flex gap-12 sm:gap-24 pr-12 sm:pr-24 items-center">
            {techs.map((tech, index) => {
              const isActive = flashed === index;
              return (
                <div key={index} onClick={() => handleTap(index)} className={`flex flex-col items-center gap-3 group/icon py-8 cursor-pointer select-none ${isActive ? "scale-110" : ""}`}>
                    <tech.icon className={`w-10 h-10 sm:w-14 sm:h-14 ${tech.color} opacity-60 grayscale transition-all duration-500 ${isActive ? "grayscale-0 opacity-100 scale-110" : "group-hover/icon:grayscale-0 group-hover/icon:opacity-100 group-hover/icon:scale-110"}`} style={isActive ? { filter: `drop-shadow(0 0 14px ${tech.glow})` } : undefined} />
                    <span className={`text-xs sm:text-sm font-mono font-normal tracking-wider text-muted-foreground transition-opacity duration-300 transform text-center ${isActive ? "opacity-100 translate-y-0" : "opacity-0 group-hover/icon:opacity-100 translate-y-2 group-hover/icon:translate-y-0"}`}>{tech.name}</span>
                </div>
              );
            })}
        </div>
      </MarqueeContent>
    </section>
  );
}
