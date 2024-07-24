import React from 'react'
import StyleCss from './HomeCard.module.css'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from '../Button';

const HomeCard = () => {
    return (
        <div className={StyleCss.HomeCardContainer}>
            <div className={StyleCss.titleCardContainer}>
                <p>Consulta gratis</p>
                <hr className={StyleCss.linearGradient}/>
            </div>
            <div className={StyleCss.detailIconContainer}>
                <div className={StyleCss.detailsContainer}>
                    <div className={StyleCss.detailsIcon}>
                        <a><IoMdCheckmarkCircleOutline className={StyleCss.icon}/></a>
                        <p className={StyleCss.detailText}>30 minutos gratis</p>
                    </div>
                    <p className={StyleCss.detailsSubtitle}>Tu primer consulta no tiene costo.</p>
                </div>
                <div className={StyleCss.detailsContainer}>
                    <div className={StyleCss.detailsIcon}>
                        <a><IoMdCheckmarkCircleOutline className={StyleCss.icon}/></a>
                        <p className={StyleCss.detailText}>Queremos ayudarte</p>
                    </div>
                    <p className={StyleCss.detailsSubtitle}>Cuéntanos tus necesidades.</p>
                </div>
                <div className={StyleCss.detailsContainer}>
                    <div className={StyleCss.detailsIcon}>
                        <a><IoMdCheckmarkCircleOutline className={StyleCss.icon}/></a>
                        <p className={StyleCss.detailText}>Atención inclusiva</p>
                    </div>
                    <p className={StyleCss.detailsSubtitle}>Todxs son bienvenidxs.</p>
                </div>

                <div className={StyleCss.buttonContainer}>
                    <Button title="¡Hablemos gratis!"/>
                </div>
            </div>
        </div>
    )
}

export default HomeCard