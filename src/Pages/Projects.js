import React from 'react'
import './Projects.css'
import Twitter from '../images/Twitter.png'
import Gym from '../images/gym.JPG'
import ProuctCart from '../images/ProductCart.png'
import QRCode from '../images/QRCode.png'
import Imdb from '../images/imdb.png'
import Login from '../images/login.png'
import {CgWebsite} from 'react-icons/cg'
import {AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Projects() {
  return (
    <div className='projects' id='projects'>
        <div className='project-hero'>
            <h1>My Projects</h1>
            <div className='projects-wrapper'>
              <div className='project'>
                <img src={Twitter} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-Twitter Clone-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/TwitterClone.git'}><AiFillGithub/></Link>
                <Link to={'https://twitter-clone-omyt.vercel.app/'}><CgWebsite/></Link>
                </div>
                </div>
              </div>
              <div className='project'>
                <img src={Imdb} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-IMDB Clone-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/Imdb-clone.git'}><AiFillGithub/></Link>
                <Link to={'https://imdb-clone-seven-beryl.vercel.app/'}><CgWebsite/></Link>
                
                </div>
                </div>
              </div>

              <div className='project'>
                <img src={ProuctCart} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-Product Cart-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/Product-Cart.git'}><AiFillGithub/></Link>
                <Link to={'https://product-cart-qkzc.vercel.app/'}><CgWebsite/></Link>
                </div>
                </div>
              </div>

              <div className='project'>
                <img src={Gym} alt='project-img'/>
                <div className='project-content'>
                <h3>-Gym Website-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/NewGym-Website.git'}><AiFillGithub/></Link>
                <Link to={'https://new-gym-website-red.vercel.app/'}><CgWebsite/></Link>
                
                </div>
                </div>
              </div>

              <div className='project'>
                <img src={Login} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-Login Page-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/Login-and-Signup-Form.git'}><AiFillGithub/></Link>
                <Link to={'https://login-and-signup-form.vercel.app/'}><CgWebsite/></Link>
                </div>
                </div>
              </div>
             
              <div className='project'>
                <img src={QRCode} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-QRCode Generator-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/QRCode-Generator'}><AiFillGithub/></Link>
                <Link to={'https://qr-code-generator-zeta-one.vercel.app/'}><CgWebsite/></Link>
                </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects