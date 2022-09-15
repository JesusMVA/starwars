import React, {useEffect, useState} from 'react';
import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js'
import { useParams } from 'react-router-dom';
import { UsePerson } from '../Hooks/UsePerson';
import { singlePerson } from '../Hooks/FunctionPerson';

export const DetallePersonaje = () => {
    const { getAllPerson, setPersonajes } = UsePerson();

    const params = useParams();
    const paramslista = [params];

    const map = paramslista.map((list) => list.name);

    var name = map[0];

    useEffect(() =>{
        singlePerson(params.name)
    }, []);

  return (
    <>
        <NavScrollExample/>
        <div>
          <h3>Nombre: {name}</h3>
        </div>
        <FooterApp/>
    </>
  )
}

export default DetallePersonaje;