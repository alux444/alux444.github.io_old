import React from 'react'
import './about.css'
import {DiJava} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiC} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>About Me</h5>
      <div className='container about_container'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, similique officiis. Mollitia minus esse suscipit distinctio tempore molestias consequuntur quas.</p>
      </div>
      <h2>My Skills</h2>
      <div className='containter about_container'>
        <div className='about_languages'>
          <h3>Languages</h3>
          <div className='about_content'>
            <article className='about_details'>
              <h4><DiJava className="about_icons"/>Java</h4>
              <h4><DiJavascript1 className="about_icons"/>JavaScript</h4>
              <h4><SiC className="about_icons"/>C</h4>
              <h4><AiFillHtml5 className="about_icons"/>HTML</h4>
              <h4><DiCss3 className="about_icons"/>CSS</h4>
              <h4>MATLAB</h4>
            </article>
          </div>

        </div>
        <div className='about_tools'>
          <h3>Tools and Frameworks</h3>
          <div className='about_content'>
            <article className='about_details'>
            <h6><FaReact className="about_icons"/>React</h6>
            <h6><AiFillGithub className="about_icons"/>Git</h6>
            <h6><AiFillGithub className="about_icons"/>Github</h6>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About