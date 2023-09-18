import { type Metadata } from 'next'
import React, { type ReactNode } from 'react'
import './globals.css';

import { Pacifico } from "next/font/google";
import cn from "classnames";
import Header from "./components/Header";
import Footer from "./components/Footer";

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

export const metadata: Metadata = {
  title: `Oly's portfolio`,
  description: `Hi 👋 I'm a Senior Product Designer & Frontend Engineer`,
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={cn(pacifico.variable, "bg-white", "max-w-screen-2xl", "mx-auto")}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
)

export default RootLayout
