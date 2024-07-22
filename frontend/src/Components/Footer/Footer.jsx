import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt="" />
     <p>Lorem ipsum is simply dummy text of the printing and typesetting 
        industry.Lorem Ipsum has been the
         industry's standard dummy text
          ever since 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <div className="footer-social-icon">
            <a href="https://web.facebook.com/search/top/?q=David%20Macharia">
            <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://x.com/dave_machaa">
            <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/david-macharia001/">
            <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <a href="#Header">
            <li>Home</li>
            </a>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+254794147839</li>
            <li>machariacodes@gmail.com</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copy-right'>
        Copyright 2024 &copy; Tomato.com - All rights reserved.
      </p>
    </div>
  )
}

export default Footer
