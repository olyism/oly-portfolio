import { GetStaticProps } from "next";
import { marked } from "marked";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { getProjectBySlug } from "@/lib/api";

const { window } = new JSDOM("");
const purify = createDOMPurify(window);

const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      props: {
        project: [],
      },
    };
  }

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const data = getProjectBySlug(slug, [
    "title",
    "slug",
    "tags",
    "url",
    "github",
    "themeColor",
    "content",
  ]);

  const cleanHTML = purify.sanitize(marked.parse(data.content));

  const project = { ...data, content: cleanHTML };

  return { props: { project } };
};

export default getStaticProps;
