import React from 'react'
import {FaWhatsapp,FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiTiktokLogo } from "react-icons/pi";



function Footer() {
  return (

    <footer className='footer'>
        <div className='footer__rrss'>
        <PiTiktokLogo  className='footer__red'/>
        <RiFacebookCircleLine className='footer__red'/>
        <FaWhatsapp className='footer__red'/>
        <FaInstagram className='footer__red'/>

        </div>

        <p>&copy; Todos los derechos reservados</p>
    </footer>

  )
}

export default Footer