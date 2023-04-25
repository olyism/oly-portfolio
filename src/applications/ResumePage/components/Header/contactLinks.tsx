import {
  FaPhone,
  FaEnvelope,
  FaGlobeAsia,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contactLinks = [
  {
    href: "tel:+61413551978",
    label: "+61 413 551 978",
    icon: <FaPhone />,
  },
  {
    href: "mailto:hi@vivianxu.com",
    label: "hi@vivianxu.com",
    icon: <FaEnvelope />,
  },
  {
    href: "https://vivianxu.com",
    label: "vivianxu.com",
    icon: <FaGlobeAsia />,
  },
  {
    href: "https://www.github.com/QueenVivi",
    label: "github.com/QueenVivi",
    icon: <FaGithub />,
    newWindow: true,
  },
  {
    href: "https://www.linkedin.con/in/vivian-ux",
    label: "linkedin.com/in/vivian-ux",
    icon: <FaLinkedin />,
    newWindow: true,
  },
];

export default contactLinks;
