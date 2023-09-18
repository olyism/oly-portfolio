"use client";

import { type FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "@/components/Container";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import navData from "./navData";

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <>
      <header>
        <Container>
          <div className="flex w-full items-center py-1">
            <Link
              className="mr-auto my-3 font-display text-3xl hover:text-stone-800"
              href="/"
            >
              Oly
            </Link>
            <button
              aria-controls="nav"
              aria-expanded={showMenu}
              aria-label="Toggle navigation"
              className="p-5 -mr-3 rounded md:hidden hover:bg-black/5"
              onClick={() => setShowMenu(!showMenu)}
              type="button"
            >
              {showMenu ? <HiX /> : <HiMenu />}
            </button>
            <Navbar navData={navData} currentPath={pathname} />
          </div>
        </Container>
      </header>
      <MobileMenu
        navData={navData}
        currentPath={pathname}
        showMenu={showMenu}
      />
    </>
  );
};

export default Header;
