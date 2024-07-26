import React from 'react'
import StyleCss from './DetailCard.module.css'
import Button from '../Button'

const DetailCard = ({img}) => {
    return (
        <div className={StyleCss.detailCardContainer}>
            <div className={StyleCss.detailCardImageContainer}>
                <img src={img} className={StyleCss.detailCardImg}/>
            </div>
            <div className={StyleCss.detailCardTextContainer}>
                <p className={StyleCss.detailCardTextTitle}>Como integrar la propiedad LGBTQI+ en el ambiente de trabajo</p>
                <p className={StyleCss.detailCardTextSubtitle}>Potencia tu éxito laboral con nuestro curso LGBTQI+. Aprende sobre derechos, enfrenta la discriminación y crea espacios inclusivos. Únete para impulsar una cultura de diversidad y respeto en el trabajo.</p>
            </div>
            <div className={StyleCss.detailCardPriceContainer}>
                <div className={StyleCss.detailsCardInstructorDetail}>
                    <h6>Instructor</h6>
                    <p className={StyleCss.detailsCardInstructorName}>Pedro Bogo López</p>
                </div>
                <div className={StyleCss.detailsCardInstructorDetail}>
                    <h6>Precio</h6>
                    <p className={StyleCss.detailsCardInsctructorPrice}>$45</p>
                </div>
            </div>
            <Button title="Conocer más"/>
        </div>
    )
}

export default DetailCard