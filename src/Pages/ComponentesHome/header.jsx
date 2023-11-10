import React from 'react'
import logo from '../../Images/logoBaco.jpg'
import '../../Style/ComponentesHome/header.css'

export const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='superponerImg'>

                </div>
                
                <div className="contenidoHeader">
                    <div className="logoHeader">
                        <img src={logo} alt="" />
                    </div>
                    <div className="textHeader">
                        <p>Texto o pequeño refran de la empresa</p>
                    </div>
                    <div className="titleHeader">
                        <h1>NOMBRE DE LA EMPRESA</h1>
                        <h3>TEXTO COMPLEMENTARIO DE LA EMPRESA</h3>
                    </div>
                </div>
                
            </div>
        </>
    )
}

