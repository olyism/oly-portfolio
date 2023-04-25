import { FC } from "react";
import Button from "@/components/Button";
import Container from "@/components/Container";

const Hero: FC = () => (
  <section className="bg-purple-100 py-12">
    <Container>
      <article className="text-center">
        <h1 className="font-bold font-display mb-6">
          <span className="mb-4 block text-2xl">👋 Hi, I&apos;m</span>
          <span className="block text-6xl">Oly</span>
        </h1>
        <p className="my-6">
          Product designer, software engineer, product manager — full-stack
          product person
        </p>
        <Button href="/#projects" label="See my work" />
      </article>
    </Container>
  </section>
);

export default Hero;
