import React from 'react'
import './style.css'

import LogoIcon from '../../assets/img/Z icon.PNG'

const Header = () =>{
  return (
    <header className="header-main">

        <section className="section-titleLogo-header">
          <div className="div-threeDot-header">
            <div className="circle-threeDot-header"></div>
            <div className="circle-threeDot-header"></div>
            <div className="circle-threeDot-header"></div>
          </div>
          
          <img src={LogoIcon} alt="Z logo"/>

          <div className="div-titleLogo-header">
            <h1>zutterman</h1>
            <p>Measure Tapes</p>
          </div>

        </section>

        <section className="section-nav-header">
          <p>ABOUT US</p>
          <p>MODELS</p>
          <p>GUARANTEE</p>
        </section>
    </header>
  )
}

export default Header