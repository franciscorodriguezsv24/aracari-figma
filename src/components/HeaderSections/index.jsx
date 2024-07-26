import React from 'react'
import StyleCss from './HeaderSection.module.css'

const HeaderSection = () => {
    return (
        <>
            <div className={StyleCss.headerContainer}>
                <div className={StyleCss.titleContainer}>
                    <h4>Capacitaciones</h4>
                    <p>Tu espacio de formación inclusiva</p>
                </div>
            </div>
        </>


        
    )
}

export default HeaderSection