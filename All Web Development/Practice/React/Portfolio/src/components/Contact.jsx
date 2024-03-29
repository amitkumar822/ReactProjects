import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


function Contact() {
  return (
    <>
      <h1>CONTACT ME</h1>
      <div className="contact-icon" id="contact"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      >
        <a href='https://www.instagram.com' target='_blanck' className="items">
          <FaInstagram className='icons'/>
        </a>
        <a href='https://www.facebook.com' target='_blanck' className="items">
          <CiFacebook className='icons'/>
        </a>
        <a href='https://www.linkedin.com/in/amit-kumar-a4687b21a' target='_blanck' className="items">
          <CiLinkedin className='icons'/>
        </a>
        <a href='https://twitter.com/i/flow/login' target='_blanck' className="items">
          <CiTwitter className='icons'/>
        </a>
        <a href='https://github.com/amitkumar822' target='_blanck' className="items">
          <FaGithub claaame='icons'/>
        </a>
        <a href='mailto:ak7772100@gmail.com' target='_blanck' className="items">
          <SiGmail className='icons'/>
        </a>
      </div>
    </>
  )
}

export default Contact