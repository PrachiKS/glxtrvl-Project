import React from 'react'
import {Link} from "react-router-dom"
import video from "../../../../src/assets/space.mp4"

const Hero = () => {
  return (
    <div className='hero'>
      <video src={video} autoPlay loop muted></video>

      <div className='content'>
        <h1>Travel. Galaxies</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatem.</p>

        <div className='buttons'>
          <Link to="/training">TRy Now</Link>
          <Link to="/contact">Launch!</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero