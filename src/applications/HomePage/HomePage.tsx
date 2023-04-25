import type { NextPage } from "next";
import Head from "next/head";
import type Project from "@/types/Project";
import Layout from "@/components/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

interface Props {
  projects: Omit<Project, "content" | "date">[];
}

const HomePage: NextPage<Props> = ({ projects }) => (
  <>
    <Head>
      <title>
        Product designer, software engineer, product manager, full-stack product
        person - Oly Su
      </title>
      <meta
        name="description"
        content="I'm a full-stack web engineer with a UX and product mindset. Skilled in Next.js, Tailwind CSS, ReactJS, Sass/CSS, Vercel, Jest, a11y, responsive design, Prisma, and API integration."
      />
    </Head>
    <Layout>
      <Hero />
      <Projects projects={projects} />
    </Layout>
  </>
);

export default HomePage;
