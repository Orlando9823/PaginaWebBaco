import React from 'react'
import '../../Style/ComponentesHome/horarioAtencion.css'

export const HorarioAtencion = () => {
    return (
        <>
            <div className="atencion">
                <div className="titleAtencion">
                    <h2>HORARIO DE ATENCIÓN</h2>
                </div>
                <div className="horario">
                    <div className="hora">
                        <h1>8AM - 10pm</h1>
                        <h4>lunes - viernes</h4>
                    </div>
                    <div className="hora">
                        <h1>8AM - 10pm</h1>
                        <h4>Sabado</h4>
                    </div>
                    <div className="hora">
                        <h1>8AM - 10pm</h1>
                        <h4>Domingo</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

