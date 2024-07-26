import React from 'react'
import StyleCss from './Footer.module.css'

import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Xtwitter from '../Icons/Xtwitter';

const Footer = () => {
    return (
        <div className={StyleCss.container}>
            <footer className={StyleCss.footerContainer}>
                <div className={StyleCss.footerElementContainer}>
                    <p className={StyleCss.footerSectionText}>
                    Más sobre nosotros
                    </p>
                    <ul className={StyleCss.footerItemsText}>
                        <a href='/'>¿Quiénes somos?</a>
                        <a href='/'>Roadmap del proyecto</a>
                        <a href='/'>Relaciones con inversionistas</a>
                        <a href='/'>Conoce a nuestro equipo </a>
                    </ul>
                </div>
                <div className={StyleCss.footerElementContainer}>
                    <p className={StyleCss.footerSectionText}>
                    Legal
                    </p>
                    <ul className={StyleCss.footerItemsText}>
                        <a href='/'>Términos y condiciones de uso</a>
                        <a href='/'>Uso ético de datos</a>
                        <a href='/'>Política de uso aceptable</a>
                        <a href='/'>Configuración de cookies</a>
                    </ul>
                </div>
                <div className={StyleCss.footerElementContainerIcom}>
                    <p className={StyleCss.footerIconSectionText}>Siguenos en:</p>
                    <div className={StyleCss.footerIconContainer}>
                        <a href='/'><Facebook/></a>
                        <a href='https://www.instagram.com/aracaristudios/' target="blank"><Instagram/></a>
                        <a href='/'><Xtwitter/></a>
                    </div>
                </div>
            </footer>
            <hr className={StyleCss.linearGradient}/>
        </div>
    )
}

export default Footer