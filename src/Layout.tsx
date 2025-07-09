import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header.tsx";

export function Layout() {
  return (
    <div className={"relative p-7"}>
      <Header />
      <Outlet />
    </div>
  );
}
