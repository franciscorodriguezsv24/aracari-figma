import React from 'react'
import Footer from '../../components/Footer'
import HeaderSection from '../../components/HeaderSections'
import StyleCss from './About.module.css'
import DetailCard from '../../components/DetailCard'
import Img1 from '../../../public/Images/img-1.jpeg'
import Img2 from '../../../public/Images/img-2.jpeg'
import Img3 from '../../../public/Images/img-3.jpeg'
import Img4 from '../../../public/Images/img-4.jpeg'
import MenuBar from '../../components/MenuBar'



const About = () => {
    return (
        <div className={StyleCss.aboutContainer}>
            <div className={StyleCss.backgroundGradient}>
                <div className={StyleCss.circleGradient1}>
                </div>
                <div className={StyleCss.circleGradient2}>
                </div>
                <div className={StyleCss.circleGradient3}>
                </div>
                <div className={StyleCss.circleGradient4}>
                </div>
            </div>
            <div className={StyleCss.headerComtainer}>
            <MenuBar/>
            <HeaderSection/>
            </div>

            <div className={StyleCss.aboutSubtitleContainer}>
                <h5>Explora como Igualítika puede ayudarte</h5>
                <hr/>
            </div>
            <section className={StyleCss.aboutCardContainer}>   
                <DetailCard img={Img1}/>
                <DetailCard img={Img2}/>
                <DetailCard img={Img3}/>
                <DetailCard img={Img4}/>
            </section>
            <Footer/>
        </div>
    )
}

export default About