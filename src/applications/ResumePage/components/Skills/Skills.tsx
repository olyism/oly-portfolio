import type { FC } from "react";

const Skills: FC = () => (
  <aside className="prose prose-stone prose-sm">
    <h2>Skills</h2>
    <h3>Full-stack web development</h3>
    <ul>
      <li>ReactJS, Next.js, Vercel</li>
      <li>Tailwind, Sass, CSS architecture</li>
      <li>TypeScript</li>
      <li>Responsive web development</li>
      <li>Web accessibility</li>
      <li>Node.js</li>
      <li>Prisma</li>
      <li>Git flow with GitHub</li>
      <li>Unit testing with Jest</li>
      <li>Agile software delivery with Jira</li>
    </ul>
    <h3>UI/UX</h3>
    <ul>
      <li>Figma, Sketch, Abstract</li>
      <li>UX design and research</li>
    </ul>
    <h3>Other skills</h3>
    <ul>
      <li>Social media marketing</li>
      <li>English–Chinese translation</li>
    </ul>
    <h2>Education</h2>
    <ul>
      <li>
        <p className="m-0">
          <strong>Full-stack ReactJS + Node.js bootcamp</strong>
        </p>
        <p className="m-0">JR Academy</p>
      </li>
      <li>
        <p className="m-0">
          <strong>ReactJS + Responsive program</strong>
        </p>
        <p className="m-0">SheCodes</p>
      </li>
      <li>
        <p className="m-0">
          <strong>UX Immersion bootcamp</strong>
        </p>
        <p className="m-0">General Assembly</p>
      </li>
      <li>
        <p className="m-0">
          <strong>Figma UI design course</strong>
        </p>
        <p className="m-0">The Designership</p>
      </li>
      <li>
        <p className="m-0">
          <strong>Bachelor of Arts</strong>
        </p>
        <p className="m-0">Hainan University</p>
      </li>
    </ul>
  </aside>
);

export default Skills;
