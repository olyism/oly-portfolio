import type { FC, ReactNode } from "react";
import { Pacifico } from "next/font/google";
import cn from "classnames";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  children?: ReactNode;
}

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

const Layout: FC<Props> = ({ children = undefined }) => (
  <div
    className={cn(pacifico.variable, "bg-white", "max-w-screen-2xl", "mx-auto")}
  >
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
