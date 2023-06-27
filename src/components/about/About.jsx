import React from "react";
import "./about.css";
import { DiJava } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiC } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import {SiPython} from "react-icons/si"
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiTrello } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiGithubactions } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="ab_container about_paragraph">
        <p>
          Hey, I'm Alex. I'm a software engineering student situated in
          Auckland, New Zealand.
        </p>
        <p>
          I'm on the search for any summer 2023 internship opportunities in New
          Zealand or Australia.
        </p>
        <p>
          I'm open to any opportunities that will help me grow as a software
          developer.
        </p>
        <p>
          I've recently been experimenting with React to create interactive and
          responsive webapps.
        </p>
        <p>You can check out some of my recent projects down below.</p>
      </div>
      <h2>My Skills</h2>

      <div
        className="container about_container"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="about_languages">
          <h3>Languages</h3>
          <div className="about_content">
            <article className="about_details">
              <h4>
                <DiJava className="about_icons" /> Java |
              </h4>
              <h4>
                <DiJavascript1 className="about_icons" /> JavaScript |
              </h4>
              <h4>
                <SiPython className="about_icons"/> Python |
              </h4>
              <h4>
                <BsFiletypeSql className="about_icons" /> SQL |
              </h4>
              <h4>
                <SiC className="about_icons" /> C |
              </h4>
              <h4>
                <AiFillHtml5 className="about_icons" /> HTML |
              </h4>
              <h4>
                <DiCss3 className="about_icons" /> CSS |
              </h4>
              <h4>MATLAB</h4>
            </article>
          </div>
        </div>

        <div className="about_tools">
          <h3>Tools and Frameworks</h3>
          <div className="about_content">
            <article className="about_details">
              <h4>
                <FaReact className="about_icons" /> React |
              </h4>
              <h4>
                <SiMui classname="about_icons" /> MaterialsUI |
              </h4>
              <h4>
                <SiTailwindcss classname="about_icons" /> TailwindCSS |
              </h4>
              <h4>
                <SiFirebase className="about_icons" /> Firebase |
              </h4>
              <h4>
                <SiPostgresql classname="about_icons" /> PostgreSQL |
              </h4>
              <h4>
                <SiExpress classname="about_icons" /> ExpressJS
              </h4>
            </article>
          </div>
        </div>

        <div className="about_other">
          <h3>Other</h3>
          <div className="about_content">
            <article className="about_details">
              <h4>CI/CD Practice | </h4>
              <h4>
                <AiFillGithub className="about_icons" /> Git / GitHub |
              </h4>
              <h4>
                <SiGithubactions className="about_icons" /> Github Actions |
              </h4>
              <h4>
                <SiTrello className="about_icons" />
                Trello
              </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
