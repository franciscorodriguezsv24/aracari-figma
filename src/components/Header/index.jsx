import React from 'react'
import Button from '../Button'
import StyleCss from './Header.module.css'

const Header = () => {
    return (
        <div className={StyleCss.headerContainer}>
            <div className={StyleCss.titleContainer}>
                <p>Un proceso simple y humano para</p>
                <p>brindarte apoyo legal.</p>
            </div>
            <div className={StyleCss.buttonContainer}>
                <Button title="¡Hablemos!" link="/about"/>
                <p>30 minutos gratis</p>
            </div>
        </div>

        
    )
}

export default Header
