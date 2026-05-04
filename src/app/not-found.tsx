import React from 'react'

const not_found = () => {
    return (
    <main className={`min-h-screen flex flex-col bg-white`}>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">

        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 mb-4">
          <h1 className={`text-6xl font-bold`}>404</h1>

          <div className={`w-12 h-px md:w-px md:h-12 bg-gray-400`} />

          <h2 className={`text-6xl font-light`}>Page Not Found</h2>
        </div>

        <p className={`text-gray-800 mb-6 mt-4`}>
          Sorry, the page you are looking for does not exist.
        </p>

        <a
          href="/"
          rel="noopener noreferrer"
          className="border border-black rounded-full px-6 py-2 transition-colors duration-300 hover:bg-black hover:text-white inline-flex items-center justify-center"
        >
          Back To Home
        </a>
      </div>
    </main>
  );
}

export default not_found