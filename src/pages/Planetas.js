import React from "react";
import { useEffect } from "react";
import { UsePlanets } from "../Hooks/UsePlanets";
import {PlanetasApp} from '../components/PlanetasApp'
import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js'

const Planetas = () => {
    const { getAllPlanets, dataPlanets, Contador, disminuir, aumentar } =
      UsePlanets();
    useEffect(() => {
      getAllPlanets(Contador);
  
    }, [dataPlanets]);

    return (
        <div>
            <NavScrollExample/>
        <center>
            <h1 className="Tpersonajes">PLANETAS</h1>
        </center>
          <div className='Gplanet'>
            {dataPlanets.map((planetas) => (
            <PlanetasApp
                key={planetas.name}
                planet={planetas.name}
                clima={planetas.climate}
                terreno={planetas.terrain}
                age={planetas.created}
                poblacion={planetas.population}
                gravedad={planetas.gravity}
                diametro={planetas.diameter}
              />
            ))}
          </div>
          <div className="Paginacion">
            <button className="botonPag" onClick={disminuir}>
              Anterior
            </button>
            <h5>{Contador}</h5>
            <button className="botonPag" onClick={aumentar}>
              Siguiente
            </button>
          </div><br/>
          <FooterApp/>
        </div>
      );
    };
    
    export default Planetas;