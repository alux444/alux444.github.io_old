import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../img/me.png'

const Header = () => {
  return (
    <header>
      <div className="containter header_container">
        <h5>Hey, I'm</h5>
        <h1>Alex Liang</h1>
        <h5 className = "text-light">Part II Software Engineer</h5>
        <h5 className = "text-light">at the University of Auckland</h5>
        <CTA></CTA>

        <div className="me">
          <img src={ME} alt="me"></img> 
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header