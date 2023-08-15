import React from "react";
import "./projects.css";
import chatapp from "../../img/chatapp.png";
import store from "../../img/store.png";
import FitnessApp from "../../img/fitnessApp.png";
import weatherApp2 from "../../img/weatherApp2.png";
import roguelike from "../../img/roguelike.png";
import trackTrekker from "../../img/trackTrekker.png";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="TOTALCONT container portfolio_container item">
                <article className="portfolio_item item">
                    <div className="portfolio_item-image">
                        <img src={trackTrekker} alt="weather2" />
                    </div>
                    <h2>Im currently working on...</h2>
                    <h3>TrackTrekker</h3>
                    <small>
                        An app which recommends songs based off a selected
                        criteria, using the Spotify API.
                    </small>
                    <small>
                        This project utilizes CI/CD practice to collect user
                        feedback and continuially improve the app.
                    </small>
                    <br />
                    <p>Skills: React, TypeScript, SpotifyAPI</p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/alux444/tracktrekker"
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://alux444.github.io/tracktrekker/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                        >
                            Link
                        </a>
                    </div>
                </article>

                <article className="portfolio_item item">
                    <div className="portfolio_item-image">
                        <img src={roguelike} alt="roguelikeGame"></img>
                    </div>
                    <h3>Roguelike Game</h3>
                    <small>
                        A roguelike game built with Python and the tcod library,
                        with randomly generated dungeon levels, enemy npcs and
                        consumables.
                    </small>
                    <br />
                    <p>Skills : Python, tcod</p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/alux444/roguelike-game"
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                        >
                            GitHub
                        </a>
                    </div>
                </article>

                <article className="portfolio_item item">
                    <div className="portfolio_item-image">
                        <img src={store} alt="store" />
                    </div>
                    <h3>KiwiMart</h3>
                    <small>
                        Online shopping webapp with an admin dashboard allowing
                        for CRUD operations. This project was built in a team of
                        3, where I acted as a project manager and was
                        responsible for integrating the backend communication to
                        Firebase.
                    </small>
                    <br />
                    <p>Skills : ReactJS, Firebase, JavaScript, TailwindCSS</p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/alux444/online-store"
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://alux444.github.io/online-store/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                        >
                            Link
                        </a>
                    </div>
                </article>

                <article className="portfolio_item item">
                    <div className="portfolio_item-image">
                        <img src={chatapp} alt="chatapp" />
                    </div>
                    <h3>Firebase Chatapp</h3>
                    <small>
                        This is a live messaging chat app built through React.
                        Firebase is used for storage of messages, images, and
                        users.
                    </small>
                    <br />
                    <p>
                        Skills : ReactJS, Firebase, JavaScript, GitHub Actions
                    </p>
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
                </article>

                <article className="portfolio_item item">
                    <div className="portfolio_item-image">
                        <img src={weatherApp2} alt="weather2" />
                    </div>
                    <h3>Weather App V2</h3>
                    <small>
                        This is a revisited version of my first project (weather
                        app). It includes various improvements to the UI,
                        functionality, and features.
                    </small>
                    <br />
                    <p>
                        Skills: React, Javascript, HTML, CSS (MaterialsUI),
                        WeatherAPI.com
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
                </article>

                <article className="portfolio_item item">
                    <div className="portfolio_item-image">
                        <img src={FitnessApp} alt="websiteproj"></img>
                    </div>
                    <h3>Fitness Site Project</h3>
                    <small>
                        A react webapp which calls to an exercise API,
                        displaying suggested exercises and calls from a youtube
                        search API to recommend videos. This project was built
                        in a team of 2
                    </small>
                    <br />
                    <p>
                        Skills : React, JavaScript, CSS, HTML,
                        ExerciseDB/YoutubeSearch API
                    </p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/alux444/project-fitness"
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://alux444.github.io/project-fitness"
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                        >
                            Link
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Projects;
