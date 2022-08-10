import React from 'react'
import Jedi from '../assets/img/jedi.png'
import './CSS/FooterApp.css';




const FooterApp = () => {
  return (
    <div className='Footer'>
        <h3>CONTACTA CON NOSOTROS</h3>
        <footer>
            <div >
                <img className='ImgF' src={Jedi}/>
            </div>
            <div className='Telefono'>
                <h4>Telefono</h4>
                <p>312 2192797</p>
                <p>256 4030</p>
            </div>
            <div className='Correo'>
                <h4>Correo</h4>
                <p>jmvelasquez935@misena.edu.co</p>
                <p>jesusmanuelvelasquezarias@gmail.com</p>

            </div>
        </footer>
    </div>
  )
}

export default FooterApp