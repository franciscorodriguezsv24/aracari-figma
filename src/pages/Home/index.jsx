import React from 'react'
import Header from '../../components/Header'
import StyleCss from './Home.module.css'
const Home = () => {
  return (
    <div className={StyleCss.homeContainer}>
      <Header/>
    </div>
  )
}

export default Home