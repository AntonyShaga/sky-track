import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className={"container mx-auto relative  max-h-screen"}>
      <Outlet />
    </div>
  );
}
