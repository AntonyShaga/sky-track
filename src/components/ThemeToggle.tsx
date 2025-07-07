import { useTheme } from "../providers/theme/useTheme.ts";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={"fixed top-7 left-1/2 -translate-x-1/2 z-50 "}>
      <button
        onClick={toggleTheme}
        className={
          "p-2 rounded-full bg-card hover:bg-neutral-800 transition-colors flex items-center justify-center"
        }
      >
        {theme === "dark" ? "💚" : "💔"}
      </button>
    </div>
  );
}
