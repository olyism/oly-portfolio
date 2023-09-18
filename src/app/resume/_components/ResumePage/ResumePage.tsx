import Container from "@/components/Container";
import Header from "./components/Header";
import Experience from "./Experience.mdx";
import Skills from "./Skills.mdx";

const ResumePage = () => (
  <article>
    <Header />
    <Container>
      <div className="py-12 md:flex md:gap-8">
        <Experience />
        <Skills />
      </div>
    </Container>
  </article>
);

export default ResumePage;
