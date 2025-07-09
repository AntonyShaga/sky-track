import type { IHeaderMenuData } from "./header-menu.data.ts";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn.ts";

export function HeaderMenuItem({
  item,
  isActive,
}: {
  item: IHeaderMenuData;
  isActive: boolean;
}) {
  return (
    <li>
      <Link
        to={item.href}
        className={cn(
          "text-lg sm:text-base transition-opacity hover:opacity-90",
          isActive ? "opacity-100" : "opacity-70",
        )}
      >
        {item.label}
      </Link>
    </li>
  );
}
