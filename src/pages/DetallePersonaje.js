import React, {useEffect, useState} from 'react';
import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js'
import { useParams } from 'react-router-dom';
import { singlePerson } from '../Hooks/FunctionPerson';

export const DetallePersonaje = () => {
  
  
  const Datos = useParams();
  const [data, setData] = useState([])
  const personaje = singlePerson(Datos.name)
  useEffect(() => { personaje.then(res => setData(res)) }, []);

  return (
    <>
        <NavScrollExample/>
        <div className='DetailContainer'>
          <div className='Personal'>
          <h3 className='title'>{data.name}</h3>
          <br/>
          <p>Año de nacimiento: {data.birth_year}</p>
          <p>Altura: {data.height} cm</p>
          <p>Peso: {data.mass} kl</p>
          <p>Color de ojos: {data.eye_color}</p>
          <p>Color de cabello: {data.hair_color}</p>
          <p>Color de piel: {data.skin_color}</p>
          <p>Genero: {data.gender}</p>
          </div>
          <div className='MV'>
            <div className='Movies'>
              <h4 className='title'>Filmes</h4>
              <p>N/A</p>
            </div>
            <div className='Vehiculos'>
              <h4 className='title'>Vehiculos</h4>
              <p>N/A</p>
            </div>
        </div>
        </div>
        <FooterApp/>
    </>
  )
}

export default DetallePersonaje;