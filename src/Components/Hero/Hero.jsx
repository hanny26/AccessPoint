import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'

const Hero = () => {
  return (
    <div className='hero'>
     <div className="hero-left">

     </div>
     <div className="hero-right">
        <h2>New Arrivals Only</h2>
        <div>
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
            
        </div>
     </div>
    </div>
  )
}

export default Hero