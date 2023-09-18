import type { FC } from "react";
import { marked } from "marked";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

interface Props {
  content: string
}

const { window } = new JSDOM("");
const purify = createDOMPurify(window);

const Content: FC<Props> = ({ content }) => {
  const cleanHTMLContent = purify.sanitize(marked.parse(content));

  return (
    <div
      className="prose prose-stone py-12"
      dangerouslySetInnerHTML={{ __html: cleanHTMLContent }}
    />
  );
};

export default Content;
