import React from 'react'
import './Projects.css'
import MyResto from '../images/myResto Website.png'
import Gym from '../images/gym.JPG'
import ProuctCart from '../images/ProductCart.png'
import QRCode from '../images/QRCode.png'
import Imdb from '../images/imdb.png'
import Login from '../images/login.png'
import Phd from '../images/phd.png'
import Flower from '../images/flower.png'


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
                <img src={Phd} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-Phd Assistance-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/phD-Assistance.git'}>Github Link<AiFillGithub/></Link>
                <Link to={'https://ph-d-assistance.vercel.app/'}><span> Deployment Link</span><CgWebsite/></Link>
                
                </div>
                </div>
              </div>

              <div className='project'>
                <img src={MyResto} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-Restaurant Website-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/MyResto-Webiste.git'}><span>Github Link</span><AiFillGithub/></Link>
                <Link to={'https://my-resto-webiste.vercel.app/'}><span> Deployment Link</span><CgWebsite/></Link>
                </div>
                </div>
              </div>
              <div className='project'>
                <img src={Imdb} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-IMDB Clone-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/Imdb-clone.git'}><span>Github Link</span><AiFillGithub/></Link>
                <Link to={'https://imdb-clone-seven-beryl.vercel.app/'}><span> Deployment Link</span><CgWebsite/></Link>
                
                </div>
                </div>
              </div>

              

              <div className='project'>
                <img src={Flower} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-Real Flower-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/Real-Flower-Project.git'}><span>Github Link</span><AiFillGithub/></Link>
                <Link to={'https://real-flower-project.vercel.app/'}><span> Deployment Link</span><CgWebsite/></Link>
                
                </div>
                </div>
              </div>

              <div className='project'>
                <img src={ProuctCart} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-Product Cart-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/Product-Cart.git'}><span>Github Link</span><AiFillGithub/></Link>
                <Link to={'https://product-cart-qkzc.vercel.app/'}><span> Deployment Link</span><CgWebsite/></Link>
                </div>
                </div>
              </div>

              <div className='project'>
                <img src={Gym} alt='project-img'/>
                <div className='project-content'>
                <h3>-Gym Website-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/NewGym-Website.git'}><span>Github Link</span><AiFillGithub/></Link>
                <Link to={'https://new-gym-website-red.vercel.app/'}><span> Deployment Link</span><CgWebsite/></Link>
                
                </div>
                </div>
              </div>

              <div className='project'>
                <img src={Login} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-Login Page-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/Login-and-Signup-Form.git'}><span>Github Link</span><AiFillGithub/></Link>
                <Link to={'https://login-and-signup-form.vercel.app/'}><span> Deployment Link</span><CgWebsite/></Link>
                </div>
                </div>
              </div>
             
              <div className='project'>
                <img src={QRCode} alt='proejct-img'/>
                <div className='project-content'>
                <h3>-QRCode Generator-</h3>
                <div className='project-icons'>
                <Link to={'https://github.com/AnoopAG91/QRCode-Generator'}> <span>Github Link</span> <AiFillGithub/></Link>
                <Link to={'https://qr-code-generator-zeta-one.vercel.app/'}> <span> Deployment Link</span><CgWebsite/></Link>
                </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects