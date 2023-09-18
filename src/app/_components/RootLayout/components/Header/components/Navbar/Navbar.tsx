import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import type { NavItem } from "../../navData";

interface Props {
  navData: NavItem[];
  currentPath: string | null;
}

const Navbar: FC<Props> = ({ navData, currentPath }) => (
  <nav aria-hidden>
    <ul className="hidden md:flex md:gap-1">
      {navData.map((navData) => {
        const { name, url } = navData;
        return (
          <li key={name}>
            <Link
              className={cn(
                "px-3",
                "py-2",
                "rounded",
                "text-stone-900",
                "hover:bg-violet-600/5",
                currentPath === url && [
                  "font-bold",
                  "cursor-default",
                  "hover:bg-transparent",
                ]
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

export default Navbar;
