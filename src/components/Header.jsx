import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <header className='header'>
        <img src="logo.png" alt="Logo" className='header__imagen'/>
        <nav className='header__nav'>
            <ul className='header__lista'>
                <li className="header__elementoLista"><Link to={'/'} className='header__link'>Inicio</Link></li>
                <li className="header__elementoLista"><Link to={'/quienes'} className='header__link'>Quienes Somos</Link></li>
                <li className="header__elementoLista"><Link to={'/servicios'} className='header__link'>Servicios</Link></li>
                <li className="header__elementoLista"><Link to={'/panel'} className='header__link'>Panel de control</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header