import React from 'react'
import StyleCss from './Button.module.css'
import { useNavigate } from 'react-router-dom';



const Button = (props) => {
    const navigate = useNavigate();

    const handleButton = (e) =>{
        e.preventDefault();
        navigate(props.link)
        
    }

    return (
        <div className={StyleCss.backgroundLinear}>
            <button className={StyleCss.buttonContainer} onClick={handleButton}>
                <p className={StyleCss.buttonText}>{props.title}</p>
            </button>
        </div>
    )
}

export default Button