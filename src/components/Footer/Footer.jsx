import React from 'react'
import {Link} from "react-router-dom";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

import "./Footer.css"
const Footer = () => {

    const social = [
    { id: 1, icon: <FaFacebook style={{ color: "white" }} size={30}/>, link: "https://facebook.com" },
    { id: 2, icon: <FaInstagram style={{ color: "white" }} size={30}/>, link: "https://instagram.com" },
    { id: 3, icon: <FaTwitter style={{ color: "white" }} size={30}/>, link: "https://twitter.com" },
  ];
  return (
    <footer>
      <h1>GLX TRVL</h1>
      <div className='links'>
        <h3>UseFul Links</h3>
        <div className="link">
          <Link to = "/">Home</Link>
          <Link to = "/training">Training</Link>
          <Link to = "/pricing">Pricing</Link>
          <Link to = "/contact">Contact</Link>
        </div>
      </div>

      <div className='social'>
        {social.map((item) => (
          <a 
            key={item.id} 
            href={item.link} 
            target="_blank" 
            rel="noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer