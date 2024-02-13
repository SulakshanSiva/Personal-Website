import React from 'react'
import "../Styles/Home.scss"
import Resume from "../Assets/files/myResume.pdf"

const Home = () => {
  return (
    <div className='homeContainer'>

      <div className='leftHomePanel'>
          <h5>HI THERE 👋 , I’M</h5>
          <h1>Sulakshan</h1>
          <h5>Software Engineer</h5>
          <p>Im cool! TODO SMALL DESCRIPTION</p>

          <a href={Resume} download="Resume-Sulakshan Siva">
            <button>Resume</button>
          </a>
      </div>

      <div className='rightHomePanel'>

      </div>

    </div>
  )
}

export default Home