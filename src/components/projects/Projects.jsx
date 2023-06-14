import React from "react";
import "./projects.css";
import PROJECT1 from "../../img/website.png";
import chatapp from "../../img/chatapp.png";
import FitnessApp from "../../img/fitnessApp.png";
import weatherApp2 from "../../img/weatherApp2.png";

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
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div classname="container portfolio_container">
            <div className="portfolio_item-image">
              <img src={chatapp} alt="weather2" />
            </div>
            <h3>Firebase Chatapp</h3>
            <small>
              This is a live messaging chat app built through React and
              Firebase.
              <br />
              This project implements CI/CD practices through Github Actions,
              allowing for continuous integration and deployment of the app.
              <br />
              Cloud firestore is used for the storing of users and messages, and
              firebase authentication is used for the login.
            </small>
            <br />
            <p>Skills : ReactJS, Firebase, JavaScript, GitHub Actions (CICD)</p>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/alux444/firebase-chatapp"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href="https://alux444.github.io/firebase-chatapp/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Link
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div classname="container portfolio_container">
            <div className="portfolio_item-image">
              <img src={weatherApp2} alt="weather2" />
            </div>
            <h3>Weather App V2</h3>
            <small>
              This is a revisted version of my previous weather project.
            </small>
            <br />
            <small>
              This app calls from WeatherAPI.com for weather and forecast
              information.
            </small>
            <br />
            <small>
              It includes multiple improvements in functionality and features,
              implementing new react tools and is styled using MaterialUI.
            </small>
            <br />
            <p>
              Skills: React, Javascript, HTML, CSS (MaterialsUI), WeatherAPI.com
            </p>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/alux444/weather-remastered"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href="https://alux444.github.io/weather-remastered/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Link
              </a>
            </div>
          </div>
        </article>

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

        {/* <article className="portfolio_item">
          <div classname="container portfolio_container">
            <div className="portfolio_item-image"></div>
            <h3>I'm currently working on...</h3>
            <h4>A Fullstack Chat-App</h4>
            <br />
            <p>The frontend is built off React and styled with MaterialsUI.</p>
            <p>The user and message database uses PostgreSQL.</p>
            <p>
              The server and session uses ExpressJS and Redis, with SocketsIO
              for live communication with the server
            </p>
            <br />
            <small>Check out the repository progress!</small>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/alux444/chat-app"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>
            </div>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Projects;
