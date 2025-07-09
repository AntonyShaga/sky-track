import { ThemeToggle } from "../ThemeToggle.tsx";
import { HEADER_MENU_DATA } from "./header-menu.data.ts";
import { HeaderMenuItem } from "./HeaderMenuItem.tsx";
import { Link, useLocation } from "react-router-dom";
import { match } from "path-to-regexp";

export function Header() {
  const location = useLocation();

  return (
    <div
      className={
        "absolute top-7 left-1/2 -translate-x-1/2 flex items-center justify-between w-1/2 rounded-xl bg-neutral-900 p-mini-element px-5 " +
        "sm:px-mini-element lg:w-full lg:top-0 lg:relative lg:mb-5 sm:rounded-lg"
      }
    >
      <div className={"flex items-center gap-4 sm:gap-2"}>
        <img className={"w-12 h-12 sm:w-10 sm:h-10"} src="/" alt="Logo" />
        <nav>
          <ul className={"flex items-center gap-4"}>
            {HEADER_MENU_DATA.map((item) => (
              <HeaderMenuItem
                key={item.href}
                item={item}
                isActive={!!match(item.href)(location.pathname)}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div className={"flex items-center gap-5 sm:gap-3"}>
        <ThemeToggle />
        <Link
          to={"/favorites"}
          className={
            "p-2 rounded-full bg-card hover:bg-neutral-800 transition-colors flex items-center justify-center sm:p-1"
          }
        >
          🧡
        </Link>
      </div>
    </div>
  );
}
