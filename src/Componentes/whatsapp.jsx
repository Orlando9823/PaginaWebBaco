import React from 'react'
import '../Style/Componentes/whatsapp.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

export const Whatsapp = () => {

    let clicks = 1;

    function clickear() {
        let chat = document.getElementById("chat");
        if (clicks === 1) {
            chat.style.display = 'block';
            chat.style.transition = 'opacity 0.2s'
            clicks = 2;
            } else if (clicks === 2) {
            chat.style.display = 'none';
            clicks = 1;
        }
    }
    
    function capVariable() {
        let texto = document.getElementById("cajaTexto").value;
        window.open('https://api.whatsapp.com/send?phone=51901312177&text=' + texto, '_blank');
        setTimeout(function() {
            document.getElementById("cajaTexto").value = " ";
        }, 100);
    }

    return (
        <>
            <div className="containerW">
                <div className="whatsapp">
                <div className="chat" id="chat">
                    <div className="headerWhat">
                    <div className="headUser">
                        <div className="userImagen">
                        <img src="IMG/user.jpg" alt=""/>
                        </div>
                        <div className="userName">
                        EDAN
                        </div>
                    </div>
                    <div className="headLogo">
                        Whatsapp
                    </div>
                    </div>
                    <div className="containerWhat">
                    <div className="containerMensaje">
                        <div className="imagenW">
                        <img src="IMG/user.jpg" alt=""/>
                        </div>
                        <div className="mensaje">Hola somos EDAN,
                        ¿Cual es su consulta?.
                        </div>
                    </div>
                    </div>
                    <div className="textWhat">
                    <form>
                        <input id="cajaTexto" type="text" placeholder='Escriba su consulta...'/>
                        <div className="btnEnviar" onClick={capVariable}>
                            <FontAwesomeIcon className='i' icon={faCircleRight} />
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div className="iconoW" onClick={clickear}>
                    <FontAwesomeIcon className='i' icon={faWhatsapp} style={{color: "#ffffff",}} />
                </div>
            </div>
        </>
    )
}

