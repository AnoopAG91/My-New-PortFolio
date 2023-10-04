import React from 'react'
import './Contact.css'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact-hero'>
        <h1>Contact Me</h1>
        <div className='form'>
          <div className='contact-form'>
            <div className="container form">
              <h2 className="mb-3">Send an email</h2>

              <form action='https://formspree.io/f/maygnbrz' method='POST'>
                <div className="input">

                  <label className="form-label" htmlFor="name">
                    Name
                  </label>

                  <input className="form-control" type="text" id="name" name='user_name' required placeholder='Your Name' />
                </div>
                <div className="input">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input className="form-control" type="email" id="email" required name='user_email' placeholder='Your Email' />
                </div>
                <div className="text-area">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea className="form-control" id="message" required name='message' placeholder='Enter Your Message' rows={4} cols={50} />
                </div>
                <button className="btn btn-danger" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className='social'>
        <Link to={'https://www.linkedin.com/in/anoopgirish/'}><AiFillLinkedin/></Link>
        <Link to={'https://github.com/AnoopAG91'}><AiFillGithub/></Link>
        <Link><AiFillInstagram/></Link>
        </div>

        <p className='copyRight'>&copy; 2023 myportfolio.com</p>

      </div>
    </div>
  )
}

export default Contact