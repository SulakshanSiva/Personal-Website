import React from 'react'
import Card from './Card'
import Dayforce from "../assets/images/Dayforce.png"
import Camis from "../assets/images/Camis.jpeg"
import Uog from "../assets/images/uog.jpeg"
import Ncr from "../assets/images/Ncr.jpg"
import Fn from "../assets/images/first-national-financial.png"

// !! List of experiences
const experiences = [
  {
    logo: Dayforce.src,
    company: "Dayforce",
    website: "https://www.dayforce.com/",
    position: "AI Transformation Engineer Intern",
    dates: "Sep. 2025 – Dec. 2025",
    description: "Incoming AI Intern @ Dayforce.",
  },
  {
    logo: Camis.src,
    company: "Camis Inc",
    website: "https://www.camis.com/connecting-people-world-memorable-experiences",
    position: "Software Engineer Intern",
    dates: "Jan. 2025 – Aug. 2025",
    description: "Developed a reservation system using C#, .NET, and WPF to improve the campsite booking process for 30+ clients.",
  },
  {
    logo: Uog.src,
    company: "University of Guelph",
    website: "https://www.uoguelph.ca/arts",
    position: "Web Developer",
    dates: "June 2024 – Aug. 2024",
    description: "Re-designed student recruitment pages in HTML/CSS whilst adhering to AODA standards.",
  },
  {
    logo: Ncr.src,
    company: "NCR",
    website: "https://www.ncrvoyix.com/",
    position: "Software Engineer Intern",
    dates: "Sep. 2023 – Dec. 2023",
    description: "Built Fetch and Download APIs using Java Spring Boot, PostgreSQL, and GCP to retrieve and collect teller data.",
  },
  {
    logo: Fn.src,
    company: "First National Financial LP",
    website: "https://www.firstnational.ca/",
    position: "Software Engineer Intern In Test",
    dates: "May 2023 – Aug. 2023",
    description: "Built automation scripts in JavaScript to test customer workflows.",
  },
]

const Experience = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start text-left w-full sm:max-w-md md:max-w-lg lg:max-w-124">
        <h1 className="text-lg font-bold border-b-2 border-black">
          Experience
        </h1>

        {/* Map through experiences */}
        <div className="mt-6 w-full space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              logo={exp.logo}
              company={exp.company}
              position={exp.position}
              dates={exp.dates}
              description={exp.description}
              website={exp.website}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
