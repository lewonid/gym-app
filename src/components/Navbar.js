import React from 'react'
import Home from '../pages/Home'
import logo from '../assets/images/logo-v4.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ExerciseDetail from '../pages/ExerciseDetail'
import Contact from '../pages/Contact'

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
  const buttonClicked = () => {
    const element = document.getElementById('mobile');
    element.classList.remove('active-menu');
    mobile = false;
  }

  return (
    <>
      <div className='Mobile-Menu-Buttons' id='mobile'>
        <h2 onClick={mobileMenu} className='mobile-close-button'><AiOutlineClose /></h2>
        {/* <h3>Home</h3> */}
        <Link onClick={buttonClicked} className='mobile-button' to="/" element={<Home />}><h3>Home</h3></Link>
        <Link onClick={buttonClicked} className='mobile-button' to="/exercises" element={<ExerciseDetail />}><h3>Exercises</h3></Link>        
        <Link onClick={buttonClicked} className='mobile-button' to="/contact" element={<Contact />}><h3>Contact</h3></Link>  
      </div>
      <div className='Navbar'>
        <img src={logo} alt='gym logo'></img>
        <div className='NavLinks'>
          <h1 onClick={mobileMenu} className='HamburgerMenuMobile'><RxHamburgerMenu /></h1>
          {/* <h3 className='navLink'>Home<div className='active'></div></h3>
          <h3 className='navLink'>Exercises</h3> */}
          <Link style={{textDecoration: 'none'}} to="/" element={<Home />}><h3 className='navLink'>Home<div className='active'></div></h3> </Link>
          <Link style={{textDecoration: 'none'}} to="/exercises" element={<ExerciseDetail />}><h3 className='navLink'>Exercises</h3></Link>
          <h3 className='navLink'>Contact</h3>
        </div>
      </div>
    </>
  )
}

export default Navbar