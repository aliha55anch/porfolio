import * as React from "react";

const ThemeContext = React.createContext({
  theme: "system",
  setTheme: () => null,
});

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveTheme(theme) {
  return theme === "system" ? getSystemTheme() : theme;
}

function updateClass(theme) {
  const root = document.documentElement;
  const resolved = resolveTheme(theme);
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
}

function updateMetaThemeColor(resolved) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", resolved === "dark" ? "#000000" : "#ffffff");
}

function disableTransitions() {
  const root = document.documentElement;
  const style = document.createElement("style");
  style.id = "theme-transition-disable";
  style.textContent = "*, *::before, *::after { transition: none !important; }";
  root.appendChild(style);
  window.setTimeout(() => {
    const el = document.getElementById("theme-transition-disable");
    if (el) el.remove();
  }, 0);
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  attribute = "class",
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}) {
  const [theme, setThemeState] = React.useState(() => {
    if (typeof window === "undefined") return defaultTheme;
    const stored = localStorage.getItem("theme");
    return stored || defaultTheme;
  });

  React.useEffect(() => {
    if (disableTransitionOnChange) disableTransitions();
    updateClass(theme);

    if (theme === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = () => {
        if (disableTransitionOnChange) disableTransitions();
        updateClass(theme);
        updateMetaThemeColor(getSystemTheme());
      };
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
     
  }, [theme, disableTransitionOnChange]);

  React.useEffect(() => {
    if (theme === "system") {
      updateMetaThemeColor(getSystemTheme());
    } else {
      updateMetaThemeColor(theme);
    }
  }, [theme]);

  const setTheme = React.useCallback((newTheme) => {
    if (disableTransitionOnChange) disableTransitions();
    localStorage.setItem("theme", newTheme);
    setThemeState(newTheme);
  }, [disableTransitionOnChange]);

  const value = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
