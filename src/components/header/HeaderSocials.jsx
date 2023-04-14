import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/alex-liang-7b25a6269/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/alux444' target='_blank'><AiFillGithub/></a>
        <a href='#' target='_blank'><TfiEmail/></a>
    </div>
  )
}

export default HeaderSocials