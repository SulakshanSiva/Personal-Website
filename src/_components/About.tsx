import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center w-full py-12">
      <div className="flex flex-col items-start text-left w-full sm:max-w-md md:max-w-lg lg:max-w-124">
        <h1 className="text-lg font-bold border-b-2 border-black">
          About
        </h1>

        <p className="text-gray-800 mt-4">

          Currently building AI-powered solutions at <strong>Dayforce</strong> as a Software Engineer, with a focus on creating agentic solutions to increase productivity & employee efficiency. I have experience with...
          
          <ul className="list-disc list-outside ml-3 mt-4 mb-4 space-y-2 text-gray-800">
            <li>
              Developing AI agents in <strong>LangGraph</strong> to complete tasks autonomously
            </li>
            <li>
              Creating <strong>MCP</strong> servers and tools to improve agent capabilities
            </li>
            <li>
              Building reliable, secure, and scalable APIs in <strong>FastAPI</strong>/<strong>Java</strong>
            </li>
            <li>
              Automating manual processes, saving <strong>100+</strong> hours of manual work
            </li>
        </ul>

          Recently graduated from the University of Guelph with a degree in Computer Science, I am actively seeking Software Engineer roles, with a particular interest in <strong>system design</strong> and <strong>AI</strong>. I am always on the lookout for opportunities to build solutions to real problems, with a focus on individual growth. 
      </p>

      </div>
    </div>
  )
}

export default About
