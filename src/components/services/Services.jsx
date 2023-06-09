import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'



const Services = () => {
  return (
    <div className='service_main'>
<section id='services'>
      <h5>What I do</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='services'>
          <div className='services_head'>
                <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className='services_head'>
                <h3>Web Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className='services_head'>
                <h3> Graphic Design </h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className = 'icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
   </section>
    </div>
   
  )
}

export default Services;
