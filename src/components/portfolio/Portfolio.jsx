import React from 'react'
import './portfolio.css'
import port1 from '../../assets/irene.jpg'
import port2 from '../../assets/port-1.jpg'
import port3 from '../../assets/hey-1.jpg'
import port4 from '../../assets/port-2.jpg'
import port5 from '../../assets/port-3.jpg'
import port6 from '../../assets/final.jpg'


const data = [
  {
    id: 1,
    image: port1,
    title: 'Birthday flyer for Irene',
    github: 'https://github.com/Francis3320.git',
    demo: '#'
  },

  {
    id: 2,
    image: port2,
    title: 'TicketVista Sign Up page',
    github: 'https://github.com/Francis3320.git',
    demo: '#'
  },

  {
    id: 3,
    image: port3,
    title: 'Nothing to see here',
    github: 'https://github.com/Francis3320.git',
    demo: '#'
  },

  {
    id: 4,
    image: port4,
    title: 'Happy Mood',
    github: 'https://github.com/Francis3320.git',
    demo: '#'
  },

  {
    id: 5,
    image: port5,
    title: 'TicketVista login design ',
    github: 'https://github.com/Francis3320.git',
    demo: '#'
  },

  {
    id: 6,
    image: port6,
    title: 'ACSES T-shirt Design',
    github: 'https://github.com/Francis3320.git',
    demo: '#'
  }

]


const Portfolio = () => {
  return (
    <div className='main'>
    <section id='portfolio'>
        <h5>My Recent Works </h5>
        <h2>Portfolio</h2>
        <div className='container portfolio_container'>
          {
            data.map(({id, image, title, github, demo}) => {
              return(
                <article className='portfolio_item' key={id}>
              <div className='portfolio_image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
           </article>
              )
            }
            )
          }
        </div>
    </section>
    </div>

  )
}

export default Portfolio;
