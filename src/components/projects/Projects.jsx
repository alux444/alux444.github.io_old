import React from 'react'
import './projects.css'
import PROJECT1 from '../../img/website.png'
import PROJECT2 from '../../img/weatherApp.png'

const data = [
  {
    id:1,
    image: PROJECT1,
    title: 'Portfolio Website Project',
    github: 'https://github.com/alux444/react-portfolio-project',
    description: 'A simple react website created to display my portfolio',
    skills: 'Skills : React, JavaScript, CSS, HTML',
    link: 'https://alux444.github.io/'
  },

  {
    id:2,
    image: PROJECT2,
    title: 'Weather API Project',
    github: 'https://github.com/alux444/weather-api-project',
    description: 'A simple react weather app which calls on API information from weatherAPI.com',
    skills: 'Skills : React, JavaScript, CSS, HTML, RapidAPI/WeatherAPI.com',
    link: 'https://alux444.github.io/weather-api-project/'
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

    <div className='container portfolio_container'>
      {
        data.map(({id,image,title,github,skills,description,link}) => {
          return (
            <article key={id} className='portfolio_item'>
             <div className='portfolio_item-image'>
               <img src={image} alt="websiteproj"></img>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{skills}</p>
              <div className='portfolio_item-cta'>
                <a href={github} target="_blank" rel="noreferrer" className='btn'>
               GitHub
               </a>
               <a href={link} target="_blank" rel="noreferrer" className='btn'>
               Link
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