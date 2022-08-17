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
                    <p>Planeta: {planetas.name}</p>
                    <p>Periodo de rotacion: {planetas.rotation_period}</p>
                    <p>Periodo orbital: {planetas.orbital_period}</p>
                    <p>Diametro: {planetas.diameter}</p>
                    <p>Clima: {planetas.climate}</p>
                    <p>Gravedad: {planetas.gravity}</p>
                    <p>Terreno: {planetas.terrain}</p>
                    <p>Agua superficial: {planetas.surface_water}</p>
                    <p>Poblacion: {planetas.population}</p>
                </div>
            ))
        }
    </div>
  )
}