import React from 'react'
import './style.css'

import IconYoutube from '../../assets/img/icon-youtube.PNG'
import IconFacebook from '../../assets/img/icon-facebook.PNG'
import IconTwitter from '../../assets/img/icon-twitter.png'

const Footer = () =>{
  return (
    <footer className="main-footer">

      <section className="section-icons-footer">
        <h1>Follow Us</h1>
        <div className="div-icons-footer">
          <img src={IconYoutube} alt="icone youtube"/>
          <img src={IconFacebook} alt="icone facebook"/>
          <img src={IconTwitter} alt="icone twitter"/>
        </div>
      </section>

      <section className="section-info-footer">
        <h1>Contact</h1>
        <p>2490 Leisure Lane <br/> San Luis Obispo <br/> California</p>
      </section>

    </footer>
  )
}

export default Footer