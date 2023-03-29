import React from 'react'
import Home from '../pages/Home'
import logo from '../assets/images/logo-v4.webp'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import ExerciseDetail from '../pages/Exercises'
import Contact from '../pages/Contact'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useRef } from 'react'

const Navbar = () => {

  const navRef = useRef(0);
  const desktopNavDiv = navRef.current;
  const scrollPosition = useScrollPosition()

  if (scrollPosition > 10) {
    if (desktopNavDiv.className !== "scrolled-navbar-class") {
      desktopNavDiv.className = "scrolled-navbar-class";
      // console.log("added")
    }
  } else {
    if (desktopNavDiv.className === "scrolled-navbar-class") {
      desktopNavDiv.className = "un-scrolled-navbar-class";
      // console.log("unAdded")
    }
  }

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
        <NavLink onClick={buttonClicked} className='mobile-button' to="/" element={<Home />}><h3>Home</h3></NavLink>
        <NavLink onClick={buttonClicked} className='mobile-button' to="/exercises" element={<ExerciseDetail />}><h3>Exercises</h3></NavLink>
        <NavLink onClick={buttonClicked} className='mobile-button' to="/contact" element={<Contact />}><h3>Contact</h3></NavLink>
      </div>
      <div ref={navRef} id='Desktop-Buttons' className='Desktop-Buttons'>
        <div className='Navbar'>
          <NavLink to='/' element={<Home />}><img src={logo} alt='gym logo'></img> </NavLink>
          <div className='NavLinks'>
            <h1 onClick={mobileMenu} className='HamburgerMenuMobile'><RxHamburgerMenu /></h1>
            <NavLink style={{ textDecoration: 'none' }} to="/" element={<Home />}><h3 className='navLink'>Home</h3><div className='activated'></div></NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/exercises" element={<ExerciseDetail />}><h3 className='navLink'>Exercises</h3><div className='activated'></div></NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/contact" element={<Contact />}><h3 className='navLink'>Contact</h3><div className='activated'></div></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar