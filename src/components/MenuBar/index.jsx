import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import StyleCss from './MenuBar.module.css';

const MenuBar = () => {
  return (
    <div className={StyleCss.NavbarContainer}>
        <GiHamburgerMenu size={20} className={StyleCss.burguerIcon}/>
    </div>
  )
}

export default MenuBar