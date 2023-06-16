import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>DARKO</a>
      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://github.com/Francis3320'><FaGithub /></a>
        <a href='https://linkedin.com'><BsLinkedin /></a>
        <a href='https://twitter.com'><BsTwitter /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Darko Francis Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;
