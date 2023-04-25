import type { FC } from "react";
import Tag from "./Tag";

interface Props {
  tags: string[];
}

const Tags: FC<Props> = ({ tags }) => (
  <aside className="flex flex-wrap gap-1">
    {tags.length > 0 && tags.map((tag) => <Tag tag={tag} key={tag} />)}
  </aside>
);

export default Tags;
