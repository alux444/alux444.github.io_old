import React from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <h4>Email <TfiEmail/></h4>
            <h5>aluux999@gmail.com</h5>
            <a href="mailto:aluux999@gmail.com">Send an email</a>
          </article>

          <article className='contact_option'>
            <h4>LinkedIn <BsLinkedin/></h4>
            <h5>Contact me on LinkedIn</h5>
            <a href="https://www.linkedin.com/in/alex-liang-7b25a6269/" target='_blank' rel="noreferrer">My LinkedIn</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact