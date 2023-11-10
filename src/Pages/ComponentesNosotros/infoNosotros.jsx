import React from 'react'
import baco from '../../Images/imagenBaco.jpg'
import '../../Style/ComoponentesNosotros/infoNosotros.css'

export const InfoNosotros = () => {
    return (
        <>
            <div className="infoNosotros">
                <div className="info">
                    <h1>Nombre Empresa</h1>
                    <p>Esse duis laborum mollit labore sint consequat et.
                        Ea duis do nisi occaecat nisi amet magna.Occaecat sint fugiat 
                        ex incididunt eu laboris commodo dolore.
                        Ipsum esse duis magna consequat culpa quis laboris magna anim amet.Dolore 
                        Veniam mollit aute in veniam non esse enim adipisicing eu.commodo laboris 
                        est anim magna aute voluptate occaecat sunt exercitation.
                    </p>
                </div>
                <div className="imagenNosotros">
                    <img src={baco} alt="" />
                </div>
            </div>
        </>
    )
}

