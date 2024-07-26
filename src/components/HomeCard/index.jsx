import React from 'react'
import StyleCss from './HomeCard.module.css'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from '../Button';

const HomeCard = ({title, services, buttonTitle}) => {
    return (
        <div className={StyleCss.HomeCardContainer}>
            <div className={StyleCss.titleCardContainer}>
                <p>{title}</p>
                <hr className={StyleCss.linearGradient}/>
            </div>
            <div className={StyleCss.detailIconContainer}>
            {
                services.map(service => (
                    <div className={StyleCss.detailsContainer} key={service.id}>
                        <div className={StyleCss.detailsIcon}>
                            <a><IoMdCheckmarkCircleOutline className={StyleCss.icon}/></a>
                            <p className={StyleCss.detailText}>{service.serviceTitle}</p>
                        </div>
                        <p className={StyleCss.detailsSubtitle}>{service.serviceSubtitle}</p>
                    </div>
                ))
            }

                <div className={StyleCss.buttonContainer}>
                    <Button title={buttonTitle}/>
                </div>
            </div>
        </div>
    )
}

export default HomeCard