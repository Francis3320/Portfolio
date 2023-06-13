import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <div className='skills_container'>
    <section id='skills'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className='container experience_container'>
    <div className='experience_frontend'>
        <h3>Skills</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='icons' />
           <div>
           <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='icons' />
           <div>
           <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='icons' />
           <div>
           <h4>React</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='icons' />
            <div>
            <h4>Boostrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='icons'/>
            <div>
            <h4>Graphic Design</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

        </div>
    </div>

    </div>
    </section>
    </div>
    
  )
}

export default Skills;
