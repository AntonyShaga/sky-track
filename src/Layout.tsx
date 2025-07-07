import { Outlet } from "react-router-dom";
import { ThemeToggle } from "./components/ThemeToggle.tsx";

export function Layout() {
  return (
    <div className={"relative p-7"}>
      <ThemeToggle />
      <Outlet />
    </div>
  );
}
