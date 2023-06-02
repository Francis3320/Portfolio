import React from 'react'
import './About.css'
import about_me from './../../assets/new.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get to know </h5>
    <h2>About me </h2>
    <div className='container about__container'>
      <div className='about_me'>
      <div className='about_me-image'></div>
       <img src= {about_me} alt='about' className='image'/>
      </div>
      <div className='about_content'>
      <div className='about_cards'>
         <article className='about_card'>
           <FaAward className='about_icon'/>
           <h5>Experience</h5>
           <small>Still a student</small>
         </article>
         <article className='about_card'>
           <FiUsers className='about_icon'/>
           <h5>Clients</h5>
           <small>50+ worldwide</small>
         </article>
         <article className='about_card'>
           <VscFolderLibrary className='about_icon'/>
           <h5>Projects</h5>
           <small>20+ Completed</small>
         </article>
      </div>
          <p>In Windows, for example, a handle is used to 
          represent an open file.When you open a file, 
          the operating system assigns a unique handle to the file. 
          </p>   
            
             
          <a href='#contact' className='btn btn-primary'>Let's Talk </a>
      </div>
    </div>
    </section>
  )
}

export default About;
