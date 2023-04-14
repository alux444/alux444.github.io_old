import React from 'react'
import './projects.css'
import PROJECT1 from '../../img/website.png'

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Current</h5>
      <h2>Projectss</h2>

    <div className='container portfolio_container'>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={PROJECT1} alt="websiteproj"></img>
        </div>
        <h3>Portfolio Website Project</h3>
        <div className='portfolio_item-cta'>
          <a href="https://github.com/alux444/react-portfolio-project" target="_blank" rel="noreferrer" className='btn'>
           GitHub
          </a>
        </div>

      </article>

      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
        </div>
        <h4>More TBA</h4>
      </article>
    </div>
    </section>
  )
}

export default Projects