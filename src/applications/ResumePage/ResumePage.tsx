import type { NextPage } from "next";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const ResumePage: NextPage = () => (
  <Layout>
    <article>
      <Header />
      <Container>
        <div className="py-12 md:flex md:gap-8">
          <Experience />
          <Skills />
        </div>
      </Container>
    </article>
  </Layout>
);

export default ResumePage;
