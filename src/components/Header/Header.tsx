import { type FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "@/components/Container";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import navData from "./navData";

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <>
      <header>
        <Container>
          <div className="flex w-full items-center py-1">
            <Link
              className="mr-auto my-3 font-display text-3xl text-violet-700 hover:text-violet-800"
              href="/"
            >
              Vivian Xu
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
            <Navbar navData={navData} currentPath={currentPath} />
          </div>
        </Container>
      </header>
      <MobileMenu
        navData={navData}
        currentPath={currentPath}
        showMenu={showMenu}
      />
    </>
  );
};

export default Header;
