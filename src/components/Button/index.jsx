import React from 'react'
import StyleCss from './Button.module.css'

const handleButton = () =>{
    console.log("button work properly")
}

const Button = (props) => {
    return (
        <div className={StyleCss.backgroundLinear}>
            <button className={StyleCss.buttonContainer} onClick={handleButton}>
                <p className={StyleCss.buttonText}>{props.title}</p>
            </button>
        </div>
    )
}

export default Button