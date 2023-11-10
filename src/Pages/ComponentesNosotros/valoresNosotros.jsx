import React from 'react'
import '../../Style/ComoponentesNosotros/valoresNosotros.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAtom} from '@fortawesome/free-solid-svg-icons'

export const ValoresNosotros = () => {
    return (
        <>
            <div className="textTitle">
                <h2>NUESTROS VALORES</h2>
            </div>
            <div className="valores">
                <div className="card">
                    <FontAwesomeIcon className='icon' icon={faAtom} />
                    <hr />
                    <h1>TITLE</h1>
                    <p>Pariatur eu eiusmod velit fugiat.</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon className='icon' icon={faAtom} />
                    <hr />
                    <h1>TITLE</h1>
                    <p>Ipsum amet sit officia occaecat voluptate tempor cupidatat labore et et exercitation minim Lorem dolor.</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon className='icon' icon={faAtom} />
                    <hr />
                    <h1>TITLE</h1>
                    <p>Nisi aliquip deserunt mollit ut ullamco incididunt veniam.</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon className='icon' icon={faAtom} />
                    <hr />
                    <h1>TITLE</h1>
                    <p>Minim aliquip exercitation consequat irure sunt excepteur irure commodo duis mollit ipsum.</p>
                </div>
            </div>
        </>
    )
}

