import type { FC } from "react";
import Link from "next/link";
import { UrlObject } from "url";
import cn from "classnames";
import { ThemeColor } from "@/types/enums";

interface Props {
  href: string | UrlObject;
  label: string;
  themeColor?: ThemeColor;
}

const Button: FC<Props> = ({ label, href, themeColor = ThemeColor.Stone }) => (
  <Link
    className={cn(
      "inline-block",
      "px-6",
      "py-4",
      "font-bold",
      "text-base",
      "text-bold",
      "text-white",
      "leading-none",
      "no-underline",
      "rounded",
      `bg-${themeColor}-800`,
      `hover:bg-${themeColor}-900`
    )}
    href={href}
  >
    {label}
  </Link>
);

export default Button;
