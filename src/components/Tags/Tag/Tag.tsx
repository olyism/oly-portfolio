import { FC } from "react";

interface Props {
  tag: string;
}

const Tag: FC<Props> = ({ tag }) => (
  <span className="px-2 py-1 text-xs bg-white/50 border-black/10 rounded-full">
    {tag}
  </span>
);

export default Tag;
