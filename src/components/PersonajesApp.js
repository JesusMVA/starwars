import React, { useEffect, useState } from 'react'

export const PersonajesApp = () => {
    const [personajes,setPersonajes]=useState([]);
    useEffect(()=>{
        async function xpersonaje(){
            const zpersonaje=await fetch('https://swapi.dev/api/people/');
            const data=await zpersonaje.json();
            setPersonajes(data.results);
        }
        xpersonaje();
    },[])

  return (
    <div className='Gplanet'>
        {
            personajes.map(personajes => (
                <div className='Cplanetas' key={setPersonajes}>
                    <p>Personaje: {personajes.name}</p>
                    <p>Altura: {personajes.height}</p>
                    <p>Masa: {personajes.mass}</p>
                    <p>Color de cabello: {personajes.hair_color}</p>
                    <p>Color de piel: {personajes.skin_color}</p>
                    <p>Color de ojos: {personajes.eye_color}</p>
                    <p>Fecha de nacimiento: {personajes.birth_year}</p>
                    <p>Genero: {personajes.gender}</p>
                </div>
            ))
        }
    </div>
  )
}
