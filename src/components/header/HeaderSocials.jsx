import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/alex-liang-7b25a6269/' target='_blank'><h1><BsLinkedin/></h1></a>
        <a href='https://github.com/alux444' target='_blank'><h1><AiFillGithub/></h1></a>
        <a href='#' target='_blank'><h1><TfiEmail/></h1></a>
    </div>
  )
}

export default HeaderSocials