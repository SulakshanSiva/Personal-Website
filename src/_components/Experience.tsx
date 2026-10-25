import React from 'react'
import PageHeader from './PageHeader'

// Points match the resume word for word; **text** marks the phrases the resume bolds.
// Roles at the same company are grouped under one company heading.
const experiences = [
  {
    company: "Dayforce",
    website: "https://www.dayforce.com/",
    roles: [
      {
        position: "Software Engineer I",
        dates: "Sep. 2026 – Present",
        points: [
          "Developed Stager, an AI agent that generates scenario-specific test employees via Dayforce **APIs** for AI-driven test suites, **eliminating** test data blockers and improving test generation rates by **30%**",
          "Engineered a **Python** test-data automation workflow that iteratively adjusted SQL queries and orchestrated an AI agent to execute Dayforce API calls, storing pipeline execution history and telemetry as **JSON models**",
          "Implemented an environment level feature flag, enabling dynamic toggling and controlled rollout of automated employee generation across test environments",
          "Designed and built reusable, responsive UI components using **React.js** and **Tailwind**, creating an intuitive, seamless interface for end users while leveraging React hooks for state management",
          "Utilized **Claude Code** with custom skills, MCPs, and plugins to rapidly prototype POCs and deliver end-to-end features, **doubling developer velocity** across sprint deliverables",
        ],
      },
      {
        position: "Software Engineer Intern",
        dates: "May 2026 – Aug. 2026",
        points: [
          "Built Cerebro, an **AI agent** that assists employees with their daily work through natural language responses, generating SQL queries, retrieving Jira tickets, and answering how-to questions for **1,000+** daily users",
          "Implemented a user session audit log system in **FastAPI** and **SQLAlchemy**, tracking **1000+** user session records in a **SQL** database to meet security and compliance requirements",
        ],
      },
      {
        position: "Software Engineer Intern",
        dates: "Sep. 2025 – Dec. 2025",
        points: [
          "Led the development of a scalable MCP server **framework** in Python using **FastAPI** and **FastMCP**, enabling **AI agents** and internal systems to interact with Salesforce and Jira services via standard API calls",
          "Built a logout workflow in **React.js** to securely terminate user sessions using the Microsoft Authentication Library (**MSAL**), revoking access tokens and rerouting users to a landing page upon logout",
        ],
      },
    ],
  },
  {
    company: "University of Guelph",
    website: "https://www.uoguelph.ca/computing",
    roles: [
      {
        position: "Teaching Assistant",
        dates: "Sep. 2025 – Dec. 2025",
        points: [
          "Taught **200+** students the fundamentals of data structures in **C**, providing individual support to students through office hours and marking over **150+** assignments",
        ],
      },
    ],
  },
  {
    company: "Camis Inc",
    website: "https://www.camis.com/",
    roles: [
      {
        position: "Software Engineer Intern",
        dates: "Jan. 2025 – Aug. 2025",
        points: [
          "Implemented a transaction history feature in **C#** to audit shipping order changes and meet company compliance",
          "Created a telemetry dashboard with **Azure Workbook** to track user engagement, revealing gaps in search functionality and driving a redesign of the search page",
          "Set up **SQL** tables and procedures to save and load customer return reasons, fulfilling client business requirements",
          "Designed **end-to-end** tests using **Playwright** to validate campsite booking workflows, integrating with Jenkins pipeline to catch bugs before deployment and increase code coverage by **30%**",
        ],
      },
    ],
  },
  {
    company: "University of Guelph",
    website: "https://www.uoguelph.ca/arts",
    roles: [
      {
        position: "Web Developer",
        dates: "June 2024 – Aug. 2024",
        points: [
          "Created a script in **JavaScript** to automate the process of scraping and uploading **800**+ course details to SharePoint, saving **50**+ hours quarterly",
        ],
      },
    ],
  },
  {
    company: "NCR",
    website: "https://www.ncrvoyix.com/",
    roles: [
      {
        position: "Software Engineer Intern",
        dates: "Sep. 2023 – Dec. 2023",
        points: [
          "Developed a high-performance RESTful API using **Spring Boot**, enabling dynamic data retrieval for **5,000+ users** and improving query response time",
          "Built unit tests with **JUnit**, verifying functionality of new features and maintaining **90%**+ code coverage in SonarQube",
          "Set up **CI/CD** pipelines using **Jenkins** to automate testing, build, and deployment workflows, substantially reducing software release cycles",
        ],
      },
    ],
  },
  {
    company: "First National Financial LP",
    website: "https://www.firstnational.ca/",
    roles: [
      {
        position: "Software Engineer Intern In Test",
        dates: "May 2023 – Aug. 2023",
        points: [
          "Built automated end-to-end tests using JavaScript to test employee workflows, improving test success rate by **22%**",
        ],
      },
    ],
  },
]

// Split on **bold** markers: odd-indexed parts are the bolded phrases
const renderPoint = (point: string) =>
  point.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))

const Experience = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start text-left w-full sm:max-w-md md:max-w-lg lg:max-w-124">
        <div className="w-full">
          <PageHeader title="Experience" description="Where I've worked and what I built there." />
        </div>

        <div className="mt-12 w-full space-y-13">
          {experiences.map((exp, index) => (
            <section key={index}>
              {/* Company label: small uppercase link with a gold rule */}
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b-2 border-accent pb-1.5 text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-link"
              >
                {exp.company}
              </a>

              {exp.roles.map((role) => (
                <div key={role.dates} className="mt-5">
                  <h2 className="text-xl font-semibold tracking-tight">{role.position}</h2>
                  <p className="mt-0.5 text-[13px] text-foreground/70">{role.dates}</p>
                  <ul className="list-disc list-outside ml-4 mt-3 space-y-2 text-sm text-muted leading-relaxed">
                    {role.points.map((point) => (
                      <li key={point}>{renderPoint(point)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
