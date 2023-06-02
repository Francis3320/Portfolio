import React from 'react'
import './header.css'
import me from '../../assets/me-4.png'
import HeaderSocials  from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Darko Francis</h1>
        <h5 className='text-light'>Frontend Developer</h5>
          <div className='cta'>
          <a href='' className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
          <a href='#contact' className='scroll_down'>Scroll down</a>
          <HeaderSocials />
          <div className='me'>
            <img src={me} alt='me' />
          </div>
          
      </div>

    </header>
  )
}

export default Header;
