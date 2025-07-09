import { useTheme } from "../providers/theme/useTheme.ts";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={"flex items-center justify-between"}>
      <button
        onClick={toggleTheme}
        className={
          "p-2 sm:p-1 rounded-full bg-card hover:bg-neutral-800 transition-colors flex items-center justify-center"
        }
      >
        {theme === "dark" ? "💚" : "💔"}
      </button>
    </div>
  );
}
