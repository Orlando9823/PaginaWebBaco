import { Galeria } from './ComponentesHome/galeria';
import { Header } from './ComponentesHome/header';
import { HorarioAtencion } from './ComponentesHome/horarioAtencion';
import { SobreNosotros } from './ComponentesHome/sobreNosotros';


export const  Home = () => {
    return (
        <div>
            {/* Header */}
            <Header/>
            {/* Sobre Nosotros */}
            <SobreNosotros/>
            {/* Galeria */}
            <Galeria/>
            {/* Horario de Atencion */}
            <HorarioAtencion/><br/>
            {/* Mapa */}
            <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d791.6604678927157!2d-76.20341740976873!3d-13.710029038312872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1699417068842!5m2!1ses!2spe" style={{width: '100%', height: '400px', border: 0}}></iframe>
        </div>
    );
}

