import type { FC, ReactNode } from "react";

interface Props {
  href: string;
  label: string;
  icon: ReactNode;
  newWindow?: boolean;
}

const ContactLinks: FC<Props> = ({ href, label, icon, newWindow = false }) => (
  <a
    className="inline-flex items-center gap-2 hover:text-slate-200"
    href={href}
    rel={newWindow ? "noreferrer" : undefined}
    target={newWindow ? "_blank" : undefined}
  >
    <>
      {icon}
      {label}
    </>
  </a>
);

export default ContactLinks;
