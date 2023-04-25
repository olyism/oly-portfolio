import type { FC } from "react";

const Experience: FC = () => (
  <section className="prose prose-stone">
    <h2>Experience</h2>
    <h3 className="mb-0">Freelancer</h3>
    <p>
      <strong>Self-employed</strong>, Apr 2023 – present
    </p>
    <ul>
      <li>
        <strong>
          <a href="https://dpl-ochre.vercel.app/">DPL Group</a> (work in
          progress):
        </strong>
        <ul>
          <li>Collaborate with UI designer to build the web design</li>
          <li>Integrate Sanity.io to provide client with a CMS</li>
          <li>Set up and build the Next.js website in Vercel</li>
        </ul>
      </li>
      <li>
        <strong>
          <a href="https://semipro.top" target="_blank">
            semipro.top
          </a>
        </strong>{" "}
        (work in progress):
        <ul>
          <li>
            Collaborate with UI designer to build MVP blog and personalized
            planner web app
          </li>
          <li>
            Built the first MVP web platform with Next.js and Sanity.io, which
            allowed the startup to test with customers and gather feedback
          </li>
        </ul>
      </li>
    </ul>
    <h3 className="mb-0">
      <a href="chuckroo.mel.fish" target="_blank">
        MadKangaroo Tech Blog Platform
      </a>
    </h3>
    <p>
      <strong>JR Academy</strong>, Nov 2022 – Apr 2023
    </p>
    <ul>
      <li>#1 contributor engineer on the team</li>
      <li>
        Collaborated with the designer to build and polish the Next.js app in
        Typescript
      </li>
      <li>
        Implemented GitHub and email authentication Integrated database with
        Prisma and Supabase
      </li>
      <li>Quick to unblock fellow engineers with calls and code reviews</li>
      <li>
        Collaborated with the BA to clarify the user stories and acceptance
        criteria
      </li>
    </ul>
    <h3 className="mb-0">Digital Experience Internship</h3>
    <p>
      <strong>Deakin University</strong>, May – Aug 2022
    </p>
    <ul>
      <li>Collaborate with the engineer to build the design</li>
      <li>Contribute to design system</li>
      <li>Facilitated UX research</li>
    </ul>
    <h3 className="mb-0">Online Business Founder</h3>
    <p>
      <strong>Emotion Freedom</strong>, Jan – Dec 2021
    </p>
    <ul>
      <li>All customers improved their wellbeing by 70% on average</li>
      <li>
        Achieved 30% conversion rate and ~$20k profit with digital marketing
        strategy
      </li>
    </ul>
    <h3>Other experiences</h3>
    <h4>Student Advisor</h4>
    <ul>
      <li>
        <strong>Deakin University</strong>, Jan 2022 – current
      </li>
      <li>
        <strong>RMIT University</strong>, Jan 2019 – Feb 2021
      </li>
    </ul>
    <h4>Teacher and coordinator</h4>
    <ul>
      <li>
        <strong>China Minzu University</strong>, Beijing
      </li>
      <li>
        <strong>Confucius Institute</strong>, Thailand
      </li>
    </ul>
  </section>
);

export default Experience;
