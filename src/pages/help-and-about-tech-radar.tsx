import Head from "next/head";

import about from "../../data/about.json";

import { formatTitle } from "@/lib/format";
import { CustomPage } from "@/pages/_app";

const HelpAndAbout: CustomPage = () => {
  return (
    <>
      <Head>
        <title>{formatTitle("Help and About")}</title>
      </Head>

      <div>
        <section>
          <h2>Introduction</h2>
          <p>
            Technology evolves rapidly, with new innovations emerging
            continuously. For a development-focused company like Be Lenka, it’s
            crucial to track advancements, evaluate existing tools, and identify
            valuable technologies that enhance our work and projects.
          </p>
          <p>
            The Be Lenka Technology Radar helps streamline this process by
            highlighting technologies we find noteworthy, whether for adoption,
            assessment, or caution.
          </p>
        </section>

        <section>
          <h2>What is the Be Lenka Technology Radar?</h2>
          <p>
            The Technology Radar offers a categorized view of various
            technologies, including languages, frameworks, tools, patterns, and
            platforms. While not exhaustive, it focuses on technologies that are
            new, noteworthy, or undergoing significant changes.
          </p>
          <p>
            Archived items remain available for reference but are not featured
            on the homepage.
          </p>
        </section>

        <section>
          <h2>How It Is Created</h2>
          <p>
            Teams at Be Lenka contribute to the radar by suggesting technologies
            they encounter in projects. The Engineering Steering team curates
            and updates the radar to ensure it reflects current innovations
            under exploration.
          </p>
        </section>

        <section>
          <h2>How to Use the Radar</h2>
          <p>
            The Technology Radar serves as a guide and source of inspiration for
            Be Lenka’s teams, promoting informed decision-making and a shared
            understanding of evolving technologies.
          </p>
          <p>
            It categorizes technologies into four quadrants and organizes them
            into rings based on their maturity and relevance to our work.
          </p>
        </section>

        <section>
          <h3>The Quadrants</h3>
          <ul>
            <li>
              <strong>Languages & Frameworks:</strong> Includes programming
              languages like Scala or Golang, and development frameworks such as
              Play or Symfony.
            </li>
            <li>
              <strong>Tools:</strong> Encompasses utilities and software
              solutions that aid productivity or enhance specific workflows.
            </li>
            <li>
              <strong>Datastores:</strong> Database technologies, including
              relational databases, NoSQL solutions, and data storage tools.{" "}
            </li>
            <li>
              <strong>Data Management:</strong> Data processing and management
              tools, such as ETL solutions, data pipelines, and data warehousing
              platforms.{" "}
            </li>
          </ul>
        </section>

        <section>
          <h3>The Rings</h3>
          <ul>
            <li>
              <strong>Adopt:</strong> Proven technologies that are highly
              recommended for use.
            </li>
            <li>
              <strong>Trial:</strong> Technologies under active evaluation for
              broader adoption.
            </li>
            <li>
              <strong>Assess:</strong> Promising technologies worth exploring
              for specific project needs.
            </li>
            <li>
              <strong>Hold:</strong> Technologies no longer recommended for new
              projects, though they may still be acceptable in existing ones.
            </li>
          </ul>
        </section>

        <section>
          <h2>Contributing</h2>
          <p>
            The Be Lenka Technology Radar is open-source, and contributions are
            welcome. Access the source code and contribute via{" "}
            <a
              href="https://github.com/be-lenka/tech-radar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Be Lenka Technology Radar on GitHub
            </a>
            .
          </p>
        </section>
      </div>

      <div dangerouslySetInnerHTML={{ __html: about.body }} />
    </>
  );
};

export default HelpAndAbout;
