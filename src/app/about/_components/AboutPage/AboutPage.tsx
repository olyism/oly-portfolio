import type { NextPage } from "next";
import Container from "@/components/Container";

const AboutPage: NextPage = () => (
  <article>
    <header className="my-8 flex flex-col gap-6 sm:flex-row sm:items-start">
      <Container>
        <div className="prose prose-stone">
          <h1 className="mb-4">Hi, I&apos;m Oly 🦄</h1>
          <h2 className="mt-0">
            Product designer, software engineer, product manager — full-stack
            product person 💁🏻‍♂️
          </h2>
        </div>
      </Container>
    </header>
    <Container>
      <section className="md:flex md:gap-6">
        <div className="prose prose-stone mb-12 w-full">
          <h2>Product design</h2>
          <ul>
            <li>UX design and research</li>
            <li>UI design (Figma, Sketch + Abstract)</li>
            <li>Design system</li>
            <li>Rapid prototyping</li>
            <li>Inclusive design</li>
          </ul>
        </div>
        <div className="prose prose-stone mb-12 w-full">
          <h2>Software engineering</h2>
          <ul>
            <li>
              JavaScript frameworks — Next.js, ReactJS, Vue.js, AngularJS
            </li>
            <li>TypeScript</li>
            <li>Storybook</li>
            <li>Rails</li>
            <li>PHP</li>
            <li>CSS — Tailwind, CSS-in-JS, CSS Modules, Sass</li>
            <li>Unit testing</li>
            <li>Web accessibility</li>
          </ul>
        </div>
        <div className="prose prose-stone mb-12 w-full">
          <h2>Product management</h2>
          <ul>
            <li>Product discovery</li>
            <li>Roadmapping</li>
            <li>Agile delivery</li>
            <li>Product specs</li>
            <li>Data & tracking</li>
            <li>Market research</li>
          </ul>
        </div>
      </section>
    </Container>
  </article>
);

export default AboutPage;
