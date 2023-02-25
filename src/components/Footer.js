import React from 'react'
import logo from '../assets/images/logo-v3.webp'

const Footer = () => {
  return (
    <div className='FooterWrapper'>
      <div className='FooterContainer'>
        <div className='FooterColumn'>
          <img src={logo} alt='logo'></img>
        </div>
        <div className='FooterColumn'>
          <h3>Locations</h3>
          <div className='h-line'></div>
          <p>Monster Gym 1 NY</p>
          <p>Monster Gym 2 UK</p>
          <p>Monster Gym 3 RO</p>
          <p>Monster Gym 4 BG</p>
        </div>
        <div className='FooterColumn'>
          <h3>Tools</h3>
          <div className='h-line'></div>
          <p>About us</p>
          <p>Trainers</p>
          <p>Aerobic Classes</p>
          <p>Prices</p>
        </div>
        <div className='FooterColumn'>
          <h3>Contact us</h3>
          <div className='h-line'></div>
          <p>contact@monstergym.com</p>
          <p>Cookies and Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
      <p className='FooterCopyright'>2023 &#169; All rights reserved.</p>
    </div>
  )
}

export default Footer