import { useContext } from "react";
import { ThemeContext } from "./themeContext.ts";

export function useTheme() {
  return useContext(ThemeContext);
}
