import React from 'react'
import style from './Footer.module.css'
import {SiInstagram as Ig} from 'react-icons/si';
import {SiWhatsapp as Wa} from 'react-icons/si';

const Footer = () => {
  return (
    <div className = {style.footerContainer}>

      <div className = {style.footer}>

        <div className = {style.imageContainer}>
          <img className = {style.imageLogo} src="https://i.ibb.co/p3ZLm3y/logo.jpg" alt="Logo"/>
        </div>

        <p className = {style.text}>SPICY BURGER © 2021 All Rights Reserved.</p>

        <div className = {style.iconsContainer}>

          <a href="https://www.instagram.com/spicyburgersclub/">
            <Ig className={style.icons}/>
          </a>
          <Wa className={style.icons}/>

        </div>

      </div>

    </div>
  )
}

export default Footer