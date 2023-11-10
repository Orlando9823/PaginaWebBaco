import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import  logo  from "../Images/logoBaco.jpg";
import '../Style/Componentes/footer.css'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="containerFooter">
                    <div className="logoFooter">
                        <img src={logo} alt="" />
                    </div>
                    <div className="textFooter">
                        <h3>Nombre</h3><br />
                        <p>Adipisicing ullamco irure anim ad et in mollit nisi veniam anim nulla.</p>
                    </div><br />
                    <div className="redesSociales">
                        <div className="red facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="red instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className="red tiktok">
                            <FontAwesomeIcon icon={faTiktok} />
                        </div>
                    </div>
                </div><br />
                <div className="copy">
                    <p>copyright © 2023 - EDAN Computer Technology</p>
                </div>
            </div>
        </>
    )
}

