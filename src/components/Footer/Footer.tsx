import { type FC } from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import Container from "@/components/Container";
import ContactLink from "./components/ContactLink";

const Footer: FC = () => (
  <footer className="bg-slate-900 text-slate-400" id="contact">
    <Container>
      <div className="py-12 text-center">
        <h2 className="mb-4 text-2xl">Get in touch</h2>
        <ul className="sm:flex sm:gap-6 sm:justify-center">
          <li className="my-4">
            <ContactLink
              href="mailto:hi@vivianxu.com"
              label="hi@vivianxu.com"
              icon={<FaRegEnvelope />}
            />
          </li>
          <li className="my-4">
            <ContactLink
              href="https://linkedin.com/in/vivian-ux/"
              label="linkedin.com/in/vivian-ux"
              icon={<FaLinkedin />}
              newWindow
            />
          </li>
          <li className="my-4">
            <ContactLink
              href="https://www.github.com/QueenVivi"
              label="github.com/QueenViVi"
              icon={<FaGithub />}
              newWindow
            />
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);

export default Footer;
