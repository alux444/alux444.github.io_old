import React from "react";
import "./projects.css";
import PROJECT1 from "../../img/website.png";
import PROJECT2 from "../../img/weatherApp.png";
import FitnessApp from "../../img/fitnessApp.png";

const data = [
  {
    id: 1,
    image: FitnessApp,
    title: "Fitness Site Project",
    github: "https://github.com/alux444/project-fitness",
    description:
      "A react webapp made in a group of 2. \nThe app uses information called from the ExerciseDB and YoutubeSearch APIs to recommend exercises and videos. \nExercises are filtered either through the selection function, or search function.\nThere is also a random workout generator feature",
    skills:
      "Skills : React, JavaScript, CSS, HTML, ExerciseDB and YoutubeSearch API",
    link: "https://alux444.github.io/project-fitness",
  },

  {
    id: 3,
    image: PROJECT1,
    title: "Portfolio Website Project",
    github: "https://github.com/alux444/react-portfolio-project",
    description:
      "A simple react website created to display my portfolio. Includes my contact information, my skills, and my recent projects!",
    skills: "Skills : React, JavaScript, CSS, HTML",
    link: "https://alux444.github.io/",
  },

  {
    id: 2,
    image: PROJECT2,
    title: "Weather API Project",
    github: "https://github.com/alux444/weather-api-project",
    description:
      "A simple react weather app which calls on API information from weatherAPI.com. All graphics are done by myself.",
    skills: "Skills : React, JavaScript, CSS, HTML, RapidAPI/WeatherAPI.com",
    link: "https://alux444.github.io/weather-api-project/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, skills, description, link }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="websiteproj"></img>
              </div>
              <h3>{title}</h3>
              <small>{description}</small>
              <br />
              <p>{skills}</p>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
                <a href={link} target="_blank" rel="noreferrer" className="btn">
                  Link
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
