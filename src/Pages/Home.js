import React from 'react'
import './Home.css'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home' id='home'>
      <div className='home-hero'>
        
        <div className='content'>
        <h1 className='slide-in-left'>Hi, I'm <span style={{color:"#ff5700"}}>Anoop</span> </h1>
        <p className='slide-in-right'>-A<span style={{color:"#ff5700",fontWeight:"500"}}> Frontend </span>Developer-</p>
        </div>
        
        <div className='icons'>
        <Link to={'https://www.linkedin.com/in/anoopgirish/'}><AiFillLinkedin/></Link>
        <Link to={'https://github.com/AnoopAG91'}><AiFillGithub/></Link>
        <Link><AiFillInstagram/></Link>
        </div>
      
      </div>
    </div>
  )
}

export default Home