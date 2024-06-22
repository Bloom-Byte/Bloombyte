import React from 'react'
import './ContactOne.css'
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const ContactOne = () => {
  return (
      <section className="contactOne">
          <div className="contactOne-details">
              <h1>Get in Touch</h1>
              <p>We'd love to hear from you! Whether you have a question about our services, want to discuss a project, or simply want to learn more about Bytechain, our team is here to assist you. Feel free to reach out to us using the contact form below, or explore the alternative contact methods provided.</p>
              <div className="call">
                  <LuPhone /> <div className="number">
                  (415) 555-0123
                  </div>
                 
              </div>
              <div className="mail">
                  <CiMail /> <div className="e-mail">
                  info@bytechain.co
                      </div>
              </div>
              <div className="social-media">
                  <div className="twitter">
<FaTwitter/>                      
                  </div>
                  <div className="instagram">
                      <FaInstagram/>
                  </div>
                  <div className="discord">
                      <FaDiscord/>
                  </div>
              </div>
          </div>
          <div className="contactOne-email">
          <div className="name">
                      <label htmlFor="FirstName">Name</label>
                      <input type="text"  placeholder='Full Name'/>   
                      </div>
                      <div className="emaile">
                          <label htmlFor="Email">Email Address</label>
                          <input type="email"  placeholder='Enter Email'  autocomplete="off"/>
              </div>
              <div className="name">
                      <label htmlFor="Subject">Subject</label>
                      <input type="text"  placeholder='Subject'/>   
                      </div>
              
                      <div className="message">
                          <label htmlFor="Message">Message</label>
                          <textarea name="message" id="Message" placeholder='Message' rows="8" cols="50"></textarea>
              </div>
              <button>Submit Now</button> 
          </div>
    </section>
  )
}

export default ContactOne