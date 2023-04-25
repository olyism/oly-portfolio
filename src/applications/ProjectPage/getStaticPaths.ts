import type { GetStaticPaths } from "next";
import { getProjectSlugs } from "@/lib/api";

const getStaticPaths: GetStaticPaths = async () => {
  const paths = getProjectSlugs().map((slug) => `/project/${slug}`);
  return { paths, fallback: false };
};

export default getStaticPaths;
