import type { FC } from "react";
import cn from "classnames";
import contactLinks from "./contactLinks";
import Container from "@/components/Container";
import ContactLink from "./components/ContactLink";

const Header: FC = () => (
  <header
    className={cn(
      ["py-12", "text-stone-800"],
      ["bg-gradient-to-r", "from-cyan-200", "to-pink-200"]
    )}
  >
    <Container>
      <h1 className="mb-4 font-bold text-5xl">Oly Su</h1>
      <p className="my-4">
        Product designer, software engineer, product manager — full-stack
        product person
      </p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {contactLinks.map((link) => {
          const { href, label, icon, newWindow } = link;

          return (
            <ContactLink
              href={href}
              label={label}
              icon={icon}
              newWindow={newWindow}
              key={label}
            />
          );
        })}
      </ul>
    </Container>
  </header>
);

export default Header;
