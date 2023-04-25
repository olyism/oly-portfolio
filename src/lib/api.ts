import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const projectsDir = join(process.cwd(), "src/projects");

export const getProjectSlugs = () => {
  return fs
    .readdirSync(projectsDir)
    .map((filename) => filename.replace(/\.md$/, ""));
};

export const getProjectBySlug = (slug: string, fields: string[] = []) => {
  const fullPath = join(projectsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllProjects = (fields: string[] = []) => {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return projects;
};
