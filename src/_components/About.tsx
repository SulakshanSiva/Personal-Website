import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center w-full py-12">
      <div className="flex flex-col items-start text-left w-full sm:max-w-md md:max-w-lg lg:max-w-124">
        <h1 className="text-lg font-bold border-b-2 border-black">
          About
        </h1>

        <p className="text-gray-800 mt-4">
          I am currently in my 5th and final year at the University of Guelph, where I am completing a 
          Bachelor of Computing in Computer Science. I have a passion for <strong>software development</strong>, with a 
          particular interest in <strong>system design</strong> and <strong>AI</strong>. I am always on the lookout for opportunities to 
          build solutions to real problems, with a focus on individual growth.        
        </p>
      </div>
    </div>
  )
}

export default About
