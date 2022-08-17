import React, { useEffect, useState } from 'react'

export const PlanetasApp = () => {
    const [planetas,setPlanetas]=useState([]);
    useEffect(()=>{
        async function xplaneta(){
            const zplaneta=await fetch('https://swapi.dev/api/planets/');
            const data=await zplaneta.json();
            setPlanetas(data.results);
        }
        xplaneta();
    },[])

  return (
    <div className='Gplanet'>
        {
            planetas.map(planetas => (
                <div className='Cplanetas' key={setPlanetas}>
                    <center><h4><strong className='fuerte'></strong>{planetas.name}</h4></center><br/>
                    <p><strong className='fuerte'>Periodo de rotacion: </strong>{planetas.rotation_period}</p>
                    <p><strong className='fuerte'>Periodo orbital: </strong>{planetas.orbital_period}</p>
                    <p><strong className='fuerte'>Diametro: </strong>{planetas.diameter}</p>
                    <p><strong className='fuerte'>Clima: </strong>{planetas.climate}</p>
                    <p><strong className='fuerte'>Gravedad: </strong>{planetas.gravity}</p>
                    <p><strong className='fuerte'>Terreno: </strong>{planetas.terrain}</p>
                    <p><strong className='fuerte'>Agua superficial: </strong>{planetas.surface_water}</p>
                    <p><strong className='fuerte'>Poblacion: </strong>{planetas.population}</p>
                </div>
            ))
        }
    </div>
  )
}