import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomeCard from '../../components/HomeCard'
import StyleCss from './Home.module.css'
const Home = () => {
  return (
    <div className={StyleCss.homeContainer}>
      <Header/>

      <section className={StyleCss.titleContainer}>
        <div>
          <p className={StyleCss.title}>Soluciones Legales Inclusivas</p>
          <p className={StyleCss.subtitle}>Cada situación es diferente. Ofrecemos un proceso legal directo y práctico.</p>
        </div>
        <div className={StyleCss.cardContainer}>
          <HomeCard/>
          <HomeCard/>
        </div>
      </section>      

      <Footer/>
    </div>
  )
}

export default Home