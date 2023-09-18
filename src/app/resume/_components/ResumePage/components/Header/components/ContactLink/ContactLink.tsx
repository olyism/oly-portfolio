import type { FC, ReactNode } from "react";

interface Props {
  href: string;
  label: string;
  icon?: ReactNode;
  newWindow?: boolean;
}

const ContactLink: FC<Props> = ({
  href,
  label,
  icon = undefined,
  newWindow = false,
}) => (
  <a
    className="px-2 py-1 inline-flex gap-1 items-center text-sm rounded-full bg-white/75 border-black/10"
    href={href}
    target={newWindow ? "_blank" : undefined}
  >
    {icon}
    {label}
  </a>
);

export default ContactLink;
