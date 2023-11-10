import React, { useRef } from 'react'
import '../Style/Componentes/nav.css'
import logo from'../Images/logo.png'
import logo1 from'../Images/logoBaco2.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom'

export const Nav = () => {

    const fondo = useRef();
    const menu = useRef();

    const mostrar = () => {
        const fondoTrans = fondo.current;
        const menuResponsive = menu.current;

        fondoTrans.style.display = 'block';
        menuResponsive.style.left = '0%'
        menuResponsive.style.transition = 'left 0.5s'
    }

    const ocultar = () => {
        const fondoTrans = fondo.current;
        const menuResponsive = menu.current;

        fondoTrans.style.display = 'none';
        menuResponsive.style.left = '-60%'
        menuResponsive.style.transition = 'left 0.5s'
    }


    return (
        <>
            <div className="navContacto">
                <div className="redSocial">
                    <div className='socialText'>Redes Sociales: </div>
                    <FontAwesomeIcon className='social' icon={faFacebook} />
                    <FontAwesomeIcon className='social' icon={faInstagram} />
                    <FontAwesomeIcon className='social' icon={faTiktok} />
                </div>
                <div className="contactoC">
                    Correo: CorreodePrueba@gmail.com
                </div>
            </div>
            <nav className="navMenu">
                <div className='logoMenu1'>
                    <img src={logo1} alt="" />
                </div>
                <div className="barsMenu">
                    <FontAwesomeIcon onClick={mostrar} icon={faBars} />
                </div>
                <div ref={fondo} onClick={ocultar} className="fondoTransparenteM">
                </div>
                <div ref={menu} className="menuResponsive">
                    <br /><br />
                    <div className="logoMenu">
                        <img src={logo} alt="" />
                    </div>
                    <hr />
                    <Link className='linkA' to='/' onClick={ocultar}>
                        <div className="menu">
                            HOME
                        </div>
                    </Link>
                    <Link className='linkA' to='/nosotros' onClick={ocultar}>
                        <div className="menu">
                            NOSOTROS
                        </div>
                    </Link>
                    <Link className='linkA' to='/servicios' onClick={ocultar}>
                        <div className="menu">
                            SERVICIOS
                        </div>
                    </Link>
                    <div className="menu contacto" onClick={ocultar}>
                        RESERVACIONES
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}


