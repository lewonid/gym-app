import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'

const ContactHeader = () => {
  return (
    <div className='ContactHeader'>
        <div className='ContactCard'>
            <FaHome style={{fontSize: '2rem', marginBottom:'1.5rem'}}/>
            <h2>Monster Gym 2 & 3</h2>
            <p>3201 Corrino Drive STE 99 Orlando</p>
            <p>Monday-Sunday: 6am-12am</p>
            <div className='h-line'></div>
        </div>
        <div className='ContactCard'>
            <FaFacebookF style={{fontSize: '2rem', marginBottom:'1.5rem'}}/>
            <h2>Facebook</h2>
            <div className='h-line'></div>
        </div>
        <div className='ContactCard'>
            <ImInstagram style={{fontSize: '2rem', marginBottom:'1.5rem'}}/>
            <h2>Instagram</h2>
            <div className='h-line'></div>
        </div>
        <div className='ContactCard'>
            <FaHome style={{fontSize: '2rem', marginBottom:'1.5rem'}}/>
            <h2>Monster Gym 2 & 3</h2>
            <p>3201 Corrino Drive STE 99 Orlando</p>
            <p>Monday-Sunday: 6am-12am</p>
            <div className='h-line'></div>
        </div>
    </div>
  )
}

export default ContactHeader