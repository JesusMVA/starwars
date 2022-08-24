import React from "react"

export const PlanetasApp = ({
    planet,
    clima,
    terreno,
    age,
    poblacion,
    gravedad,
    diametro
   }) => {

  return (
                <div className='Cplanetas'>
                    <center><h4><strong className='fuerte'></strong>{planet}</h4></center><br/>
                    <p><strong className='fuerte'>Clima: </strong>{clima}</p>
                    <p><strong className='fuerte'>Terreno: </strong>{terreno}</p>
                    <p><strong className='fuerte'>Edad: </strong>{age}</p>
                    <p><strong className='fuerte'>Poblacion: </strong>{poblacion}</p>
                    <p><strong className='fuerte'>Gravedad: </strong>{gravedad}</p>
                    <p><strong className='fuerte'>Diametro: </strong>{diametro}</p>
                    <button className="btn btn-warning">Ver detalle</button>
                </div>
  )
}