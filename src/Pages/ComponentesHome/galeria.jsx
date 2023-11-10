import React from 'react'
import '../../Style/ComponentesHome/galeria.css';
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import img4 from "../../Images/img4.jpg";
import img5 from "../../Images/img5.jpg";
import img6 from "../../Images/img6.jpg";
import img7 from "../../Images/img7.jpg";
import img8 from "../../Images/img8.jpg";
import img15 from "../../Images/img15.jpg";



export const Galeria = () => {
    return (
        <>
            <div className="galeria">
                <div className='wide'><img src={img1} alt="" /></div>
                <div><img src={img2} alt="" /></div>
                <div><img src={img3} alt="" /></div>
                <div className='tall'><img src={img4} alt="" /></div>
                <div><img src={img5} alt="" /></div>
                <div className='big'><img src={img6} alt="" /></div>
                <div><img src={img7} alt="" /></div>
                <div><img src={img8} alt="" /></div>
                <div className='wide'><img src={img15} alt="" /></div>
            </div>
        </>
    )
}

