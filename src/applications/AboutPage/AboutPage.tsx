import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "@/components/Container";
import Layout from "@/components/Layout";

const AboutPage: NextPage = () => (
  <Layout>
    <Head>
      <title>About - Vivian Xu</title>
    </Head>
    <Container>
      <article>
        <header className="my-8 flex flex-col gap-6 sm:flex-row sm:items-start">
          <Image
            alt="Vivian's profile picture"
            className="rounded-full w-12 h-12 sm:w-auto sm:h-auto sm:order-1"
            src="/images/profileviv.png"
            width="150"
            height="150"
          />
          <div className="prose prose-stone">
            <h1 className="mb-4">Hi, I&apos;m Vivian 👋</h1>
            <h2 className="mt-0">Full-stack developer from Australia 🇦🇺</h2>
            <p>
              I love to build applications that not only look good, but also
              delivers a great experience for customers and solve business
              problems. Coding to me is not just a technical language, it&apos;s
              an art to write code that&apos;s readable, maintainable and
              re-usable, to make it easier to the team to collaborate and build
              great products.
            </p>
          </div>
        </header>
        <section className="md:flex md:gap-6">
          <div className="prose prose-stone mb-12 w-full">
            <h2>Frontend</h2>
            <ul>
              <li>ReactJS</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind, bootstrap</li>
              <li>Sass, CSS architecture</li>
              <li>Responsive web development</li>
              <li>Jest unit testing</li>
              <li>Web accessibility</li>
            </ul>
          </div>
          <div className="prose prose-stone mb-12 w-full">
            <h2>Backend</h2>
            <ul>
              <li>Node.js</li>
              <li>Prisma</li>
              <li>Vercel</li>
              <li>API integration</li>
            </ul>
          </div>
          <div className="prose prose-stone mb-12 w-full">
            <h2>Other skills</h2>
            <ul>
              <li>Git flow</li>
              <li>Version control with Github</li>
              <li>Agile software development</li>
              <li>Sanity.io</li>
              <li>Figma, Sketch, Abstract</li>
              <li>UX design and research</li>
            </ul>
          </div>
        </section>
      </article>
    </Container>
  </Layout>
);

export default AboutPage;
