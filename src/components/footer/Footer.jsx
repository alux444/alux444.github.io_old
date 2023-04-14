import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#">Back To Top</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <a className='footer-copyright'>2023 &copy; alux444</a>
    </footer>
  )
}

export default Footer