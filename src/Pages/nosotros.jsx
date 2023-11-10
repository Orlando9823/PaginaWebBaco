import React from 'react'
import { InfoNosotros } from './ComponentesNosotros/infoNosotros'
import { MiviNosotros } from './ComponentesNosotros/miviNosotros'
import { ValoresNosotros } from './ComponentesNosotros/valoresNosotros'

export const Nosotros = () => {
    return (
        <>
            <InfoNosotros/>
            <MiviNosotros/>
            <ValoresNosotros/>
            <h2 style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>UBICANOS</h2>
            <br /><br />
            <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d791.6604678927157!2d-76.20341740976873!3d-13.710029038312872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1699417068842!5m2!1ses!2spe" style={{width: '100%', height: '400px', border: 0}}></iframe>
        </>
    )
}