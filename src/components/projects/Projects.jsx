import React from 'react'
import './projects.css'
import PROJECT1 from '../../img/website.png'

const data = [
  {
    id:1,
    image: PROJECT1,
    title: 'Portfolio Website Project',
    github: 'https://github.com/alux444/react-portfolio-project'
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Current</h5>
      <h2>Projects</h2>

    <div className='container portfolio_container'>
      {
        data.map(({id,image,title,github}) => {
          return (
            <article key={id} className='portfolio_item'>
             <div className='portfolio_item-image'>
               <img src={image} alt="websiteproj"></img>
            </div>
            <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a href={github} target="_blank" rel="noreferrer" className='btn'>
               GitHub
               </a>
             </div>
      </article>
          )
        })
      }

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