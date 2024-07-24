import React from 'react'
import StyleCss from './Footer.module.css'

import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Xtwitter from '../Icons/Xtwitter';

const Footer = () => {
  return (
    <footer className={StyleCss.footerContainer}>
        <div className={StyleCss.footerElementContainer}>
            <a className={StyleCss.footerSectionText}>
            Más sobre nosotros
            </a>
            <ul className={StyleCss.footerItemsText}>
                <li>¿Quiénes somos?</li>
                <li>Roadmap del proyecto</li>
                <li>Relaciones con inversionistas</li>
                <li>Conoce a nuestro equipo </li>
            </ul>
        </div>
        <div className={StyleCss.footerElementContainer}>
            <a className={StyleCss.footerSectionText}>
            Legal
            </a>
            <ul className={StyleCss.footerItemsText}>
                <li>Términos y condiciones de uso</li>
                <li>Uso ético de datos</li>
                <li>Política de uso aceptable</li>
                <li>Configuración de cookies</li>
            </ul>
        </div>
        <div className={StyleCss.footerElementContainer}>
            <a className={StyleCss.footerSectionText}>Siguenos en:</a>
            <div>
                <a>
                <Facebook/>
                </a>
                <a><Instagram/></a>
                <a><Xtwitter/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer