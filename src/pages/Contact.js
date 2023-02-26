import React from 'react'
import ContactHeader from '../components/ContactHeader'

const Contact = () => {
  return (
    <div className='ContactWrapper'>
      <ContactHeader />
      <div className='ContactContent'>
        <h1>Contact Us Directly</h1>
        <div className='h-line'></div>
        <form id='contactForm'>
          <p>Your name (required)</p>
          <input
            type='text'
            name='name'
          />
          <p>Your mail (required)</p>
          <input
            type='text'
            name='email'
          />
          <p>Subject</p>
          <input 
            type='text'
            name='subject'
          />
          <p>Your message</p>
          <input 
            type='text'
            name='message'
          />
          <button id='contactButton'>Send a message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact