import { FaGlobeAsia, FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    href: "https://www.olysu.com",
    label: "olysu.com",
    icon: <FaGlobeAsia />,
  },
  {
    href: "https://www.github.com/olyism",
    label: "github.com/olyism",
    icon: <FaGithub />,
    newWindow: true,
  },
  {
    href: "https://www.linkedin.con/in/olysu",
    label: "linkedin.com/in/olysu",
    icon: <FaLinkedin />,
    newWindow: true,
  },
];

export default contactLinks;
