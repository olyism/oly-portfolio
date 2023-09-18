import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeColor } from "@/types/enums";
import ProjectProps from "@/types/Project";
import Tags from "@/components/Tags";

export interface Props
  extends Pick<
    ProjectProps,
    "title" | "slug" | "summary" | "tags" | "themeColor"
  > {}

const Project: FC<Props> = ({
  title,
  slug,
  summary = undefined,
  tags = [],
  themeColor = ThemeColor.Stone,
}) => (
  <Link
    className={`w-full bg-${themeColor}-100 flex flex-col justify-items-stretch rounded overflow-hidden hover:-translate-y-1 transition`}
    href={`/${slug}`}
  >
    <div className="p-6">
      <h2 className={`text-${themeColor}-800 text-2xl font-bold mb-1`}>
        {title}
      </h2>
      {summary && <p className="text-gray-800 mb-4">{summary}</p>}
      <Tags tags={tags} />
    </div>
    <div className="mt-auto w-full h-[400px] relative">
      <Image
        alt={`Screenshot of ${title}`}
        className="object-cover"
        src={`/images/projects/${slug}.png`}
        fill
      />
    </div>
  </Link>
);

export default Project;
