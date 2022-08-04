import React from 'react'
import "./HeroStyle.css"
import { Link } from "react-router-dom"




const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='hero-img' src="./images/flowerHero.jpg"
            alt="hero"></img>
        </div>
        <div className='content'>
        <h1 style={{}}>Flower Shop</h1>
            <div>
                <Link to="/occasion"><button style={{cursor: "pointer"}}>
                  Shop Now</button> 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero