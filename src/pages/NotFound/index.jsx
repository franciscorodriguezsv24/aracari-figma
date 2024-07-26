import React from 'react'
import Footer from '../../components/Footer'
import StyleCss from './NotFound.module.css'
const NotFound = () => {
    return (
        <div className={StyleCss.NotFoundContainer}>
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

            <div className={StyleCss.textContainer}>
                <h1 className={StyleCss.NotFoundText}>404</h1>
                <h1 className={StyleCss.NotFoundText}>Page Not Found</h1>
            </div>
            <Footer/>
            
        </div>
    )
}

export default NotFound
