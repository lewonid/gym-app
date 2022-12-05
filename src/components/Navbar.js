import React from 'react'
import '../components/style.css'
import logo from '../assets/images/logo-v1.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  let mobile = false
  function mobileMenu() {
    if (mobile === false) {
      const element = document.getElementById('mobile');
      element.classList.add('active-menu');
      mobile = true;
    }
    else {
      const element = document.getElementById('mobile');
      element.classList.remove('active-menu');
      mobile = false;
    }
  }

  return (
    <>
      <div className='Mobile-Menu-Buttons' id='mobile'>
        <h2 onClick={mobileMenu} className='mobile-close-button'><AiOutlineClose /></h2>
        <h3>Home</h3>
        <h3>Exercises</h3>
        <h3>Contact</h3>
      </div>
      <div className='Navbar'>
        <img src={logo} alt='gym logo'></img>
        <div className='NavLinks'>
          <h1 onClick={mobileMenu} className='HamburgerMenuMobile'><RxHamburgerMenu /></h1>
          <h3 className='navLink'>Home<div className='active'></div></h3>
          <h3 className='navLink'>Exercises</h3>
          <h3 className='navLink'>Contact</h3>
        </div>
      </div>
    </>
  )
}

export default Navbar