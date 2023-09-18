import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import type { NavItem } from "../../navData";

interface Props {
  navData: NavItem[];
  currentPath: string | null;
  showMenu: boolean;
}

const MobileMenu: FC<Props> = ({ navData, currentPath, showMenu }) => (
  <nav
    className={cn(
      "bg-stone-100",
      "px-1",
      "py-1",
      "md:hidden",
      showMenu ? "block" : "hidden"
    )}
    id="nav"
  >
    <ul>
      {navData.map((nav, i) => {
        const { name, url } = nav;

        return (
          <li className={cn(i > 0 && "mt-1")} key={name}>
            <Link
              className={cn(
                "block",
                "px-3",
                "py-2",
                "rounded",
                "hover:bg-stone-900/5",
                currentPath === url && ["bg-stone-900/5", "cursor-default"]
              )}
              href={url}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default MobileMenu;
