import type { Metadata, NextPage } from "next";
import type Project from "@/types/Project";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export const metadata: Metadata = {
  description: "Product designer, software engineer, product manager, full-stack product person",
}

const HomePage: NextPage = () => (
  <>
    <Hero />
    <Projects />
  </>
);

export default HomePage;
