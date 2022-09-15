import React from "react";
import Button from 'react-bootstrap/Button';


export const PersonajeApp = ({
    name,
    hair,
    eyes,
    skin,
    gender,
    height,
    weigth,
    birthday,
  }) => {

    
  return (
    <div >
                <div className='Cpersonajes'>
                    <center><h4><strong className='fuerte'></strong>{name}</h4></center><br/>
                    <p><strong className='fuerte'>Altura: </strong>{height}</p>
                    <p><strong className='fuerte'>Masa: </strong>{weigth}</p>
                    <p><strong className='fuerte'>Color de cabello: </strong>{hair}</p>
                    <p><strong className='fuerte'>Color de piel: </strong>{skin}</p>
                    <p><strong className='fuerte'>Color de ojos: </strong>{eyes}</p>
                    <p><strong className='fuerte'>Fecha de nacimiento: </strong>{birthday}</p>
                    <p><strong className='fuerte'>Genero: </strong>{gender}</p>
                    <Button key={PersonajeApp.name} variant="outline-light" >
                      <a className='detalleB' href={`/Personajes/${name}`}>Detalles</a>
                    </Button>
                </div>
    </div>
  )
}

export default PersonajeApp;
