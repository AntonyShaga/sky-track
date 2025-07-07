import { createContext } from "react";

export type ThemeType = "dark" | "light";
export interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
