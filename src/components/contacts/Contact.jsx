import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <div className='contact_main'>
      <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className='contact_container'>
           <div className='contact_options'>
              <article className='contact_option'>
              <MdOutlineEmail className='icon'/>
              <h4>Email</h4>
              <h5>darkofrancis18@yahoo.com</h5>
              <a href='malto:darkofrancis18@yahoo.com' target='_blank'>Send a message</a>
              </article>
              <article className='contact_option'>
              <BsWhatsapp className='icon'/>
              <h4>WhatsApp</h4>
              <h5>+233550297588</h5>
              <a href='https://api.whatsapp.com/send?phone+233550297588' target='_blank'>Send a message</a>
              </article>
           </div>
           <form action='' >
            <input type='text' name='name' placeholder='Full Name' required />
            <input type='email' name='email' placeholder='Email' required />
            <textarea name='message' rows={7} placeholder='Enter Message here' required />
            <button type='submit' className='btn btn-primary'>Send Message</button>
           </form>
           
        </div>
    </section>
    </div>
  )
}

export default Contact;
