import React from 'react'
import '../../Style/ComponentesHome/sobreNosotros.css'
import sobreNosotros from '../../Images/sobreNosotros.jpg'

export const SobreNosotros = () => {
    return (
        <>
            <div className="sobreNosotros">
                <div className="izquierda">
                    <h2>Sobre la empresa</h2>
                    <br />
                    <p>Ea consectetur sint minim fugiat non nulla occaecat amet elit minim 
                        excepteur pariatur excepteur.
                        Dolore officia aliquip excepteur ex commodo Lorem in sint.
                        Ad laborum id elit est eu id.</p>
                </div>
                <div className="derecha">
                    <img src={sobreNosotros} alt="" />
                </div>
            </div>
        </>
    )
}

