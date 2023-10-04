import React, { useState } from 'react'
import './Header.css'
import { HashLink as Link } from 'react-router-hash-link'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'

function Header() {
  const [header, setHeader] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  function changeHeadercolor(){
    if(window.scrollY >= 80 ){    // Header color changer function
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  window.addEventListener("scroll", changeHeadercolor)  // This is for changing the header colo while scrolling down.
 
  return (
    <div className={header ? 'header active' : 'header'} >
        <div className='logo'>
            <Link to={'#home'} smooth>ANOOP</Link>
            </div>
        <div className={isMobile ? 'mobileMenu' : 'navbar'} onClick={()=> setIsMobile(false)}>
            <Link to={'#home'} smooth>Home</Link>
            <Link to={'#about'} smooth>About</Link>
            <Link to={'#projects'} smooth>Projects</Link>
            <Link to={'#contact'} smooth>Contact</Link>
        </div>

        <button className='toggle-btn' onClick={()=> setIsMobile(!isMobile)}>
          {isMobile? (<AiOutlineClose/>) : (<RxHamburgerMenu/>)}
        </button>
        
    </div>
  )
}

export default Header