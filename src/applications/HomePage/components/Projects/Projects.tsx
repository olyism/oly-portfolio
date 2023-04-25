import { type FC } from "react";
import type ProjectProps from "@/types/Project";
import Container from "@/components/Container";
import Project from "./components/Project";

interface Props {
  projects: Pick<
    ProjectProps,
    "title" | "summary" | "tags" | "slug" | "themeColor"
  >[];
}

const Projects: FC<Props> = ({ projects }) => (
  <section className="py-12" id="projects">
    <Container>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => {
          const { title, slug, summary, tags, themeColor } = project;

          return (
            <li className="flex" key={project.slug}>
              <Project
                title={title}
                slug={slug}
                summary={summary}
                tags={tags}
                themeColor={themeColor}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

export default Projects;
