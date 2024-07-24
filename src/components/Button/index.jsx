import React from 'react'
import StyleCss from './Button.module.css'

const handleButton = () =>{
    console.log("button work properly")
}

const Button = () => {
    return (
        <div className={StyleCss.backgroundLinear}>
            <button className={StyleCss.buttonContainer} onClick={handleButton}>
                <p className={StyleCss.buttonText}>¡Hablemos!</p>
            </button>
        </div>
    )
}

export default Button