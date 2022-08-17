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
                <div className='Cpersonajes' key={setPersonajes}>
                    <center><h4><strong className='fuerte'></strong>{personajes.name}</h4></center><br/>
                    <p><strong className='fuerte'>Altura: </strong>{personajes.height}</p>
                    <p><strong className='fuerte'>Masa: </strong>{personajes.mass}</p>
                    <p><strong className='fuerte'>Color de cabello: </strong>{personajes.hair_color}</p>
                    <p><strong className='fuerte'>Color de piel: </strong>{personajes.skin_color}</p>
                    <p><strong className='fuerte'>Color de ojos: </strong>{personajes.eye_color}</p>
                    <p><strong className='fuerte'>Fecha de nacimiento: </strong>{personajes.birth_year}</p>
                    <p><strong className='fuerte'>Genero: </strong>{personajes.gender}</p>
                </div>
            ))
        }
    </div>
  )
}
