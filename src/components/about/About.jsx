import React from 'react'
import './about.css'
import ME from '../../img/about_me.png'
import {DiJava} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiC} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About"/>
          </div>
        </div>

      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <h5>Languages</h5>
            <h6>Java <DiJava className="about_icons"/></h6>
            <h6>JavaScript <DiJavascript1 className="about_icons"/></h6>
            <h6>C <SiC className="about_icons"/></h6>
            <h6>HTML <AiFillHtml5 className="about_icons"/></h6>
            <h6>CSS <DiCss3 className="about_icons"/></h6>
            <h6>MATLAB</h6>
          </article>

          <article className='about_card'>
            <h5>Frameworks</h5>
            <h6>React <FaReact className="about_icons"/></h6>
          </article>

          <article className='about_card'>
            <h5>Tools</h5>
            <h6>Git <AiFillGithub className="about_icons"/></h6>
            <h6>GitHub <AiFillGithub className="about_icons"/></h6>
          </article>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptates consectetur officia eius nesciunt asperiores illo exercitationem! Non sed excepturi, error eaque in vel eligendi iure blanditiis deserunt nihil consequuntur?</p>

          <a href="#contact" className='btn btn-primary'>Contact Me!</a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About