import React from 'react'
import './Landingpage.css'
import Contactform from '../forms/contactform/Contactform'

function Landingpage() {
  return (
    <div className='parentContainer'>
        <div>
            <h1>CONTACT US</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quidem cupiditate accusamus deleniti eveniet at soluta quis, sapiente nulla accusantium! Quasi quaerat magnam minima rem, fugit officia ea soluta ullam.
            </p>
        </div>
        <div className='pageContent'>
            <div className='left'>
                <Contactform />
            </div>
            <div className='right'>
                <img src="landingimg.jpg" alt="Landing_img" />
            </div>
        </div>
    </div>
  )
}

export default Landingpage