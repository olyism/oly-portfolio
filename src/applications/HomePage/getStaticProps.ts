import type { GetStaticProps } from "next";
import { getAllProjects } from "@/lib/api";

const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects([
    "title",
    "slug",
    "summary",
    "tags",
    "themeColor",
  ]);

  return {
    props: { projects },
  };
};

export default getStaticProps;
