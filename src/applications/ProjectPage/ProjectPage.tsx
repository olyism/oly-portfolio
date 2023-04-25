import type { NextPage } from "next";
import Image from "next/image";
import type Project from "@/types/Project";
import { ThemeColor } from "@/types/enums";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Tags from "@/components/Tags";

interface Props {
  project?: Pick<
    Project,
    "title" | "slug" | "tags" | "url" | "github" | "themeColor" | "content"
  >;
}

const ProjectPage: NextPage<Props> = ({ project = undefined }) => {
  if (!project) {
    return <div>Page not found</div>;
  }

  const {
    title,
    slug,
    tags = [],
    url = undefined,
    github = undefined,
    themeColor = ThemeColor.Gray,
    content = undefined,
  } = project;

  return (
    <Layout>
      <article>
        <header className={`bg-${themeColor}-100 relative`}>
          <Container>
            <div className="py-12 relative z-10">
              <h1 className={`mb-6 font-bold text-6xl text-${themeColor}-800`}>
                {title}
              </h1>
              <Tags tags={tags} />
              <div className="mt-8 flex gap-4">
                {url && (
                  <Button
                    href={url}
                    label="Visit live site"
                    themeColor={themeColor}
                  />
                )}
                {github && (
                  <Button
                    href={github}
                    label="GitHub"
                    themeColor={themeColor}
                  />
                )}
              </div>
            </div>
          </Container>
          <div className="w-full max-w-md absolute inset-y-0 right-0">
            <Image
              alt={`Screenshot of ${title}`}
              className="object-cover opacity-40 md:opacity-100"
              src={`/images/projects/${slug}.png`}
              fill
            />
          </div>
        </header>
        {content && (
          <Container>
            <div
              className="prose prose-stone py-12"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Container>
        )}
      </article>
    </Layout>
  );
};

export default ProjectPage;
