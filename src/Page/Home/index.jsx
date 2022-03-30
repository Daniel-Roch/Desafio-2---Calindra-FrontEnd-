import React from 'react'
import ImgCardOne from '../../assets/img/img-card-one.png'
import ImgCardTwo from '../../assets/img/img-card-two.png'

import './style.css'

const Home = ()=> {
  return (
    <main className="main-home">

      <section className="section-cardOne-home">
        <h1>Measuring <br/> everything</h1>
        <img src={ImgCardOne} alt="fita metrica"/>
      </section>

      <section className="section-cardTwo-home">
        <div className="div-cardTwo-home">
          <h1>We are Leader <br/> in Measure Tapes</h1>
          <p>There are 5x the circumference of planet earth in metric tapes.</p>
        </div>
        <img src={ImgCardTwo} alt="fita metrica"/>
      </section>

    </main>
  )
}

export default Home