import { useEffect } from "react";
import { UsePerson } from "../Hooks/UsePerson";
import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js'
import { Button } from "react-bootstrap";


const Personajes = () => {
  const { getAllPerson, dataPerson, setDataPerson, Contador, disminuir, aumentar } =
    UsePerson();
  useEffect(() => {
    getAllPerson(Contador);
  }, [dataPerson]);
  return (
<div className="Black">
        <NavScrollExample/>
    <center>
        <h1 className="Tpersonajes">PERSONAJES</h1>
    </center>
      <div className='Gplanet'>
        {dataPerson !== null ?
        (dataPerson.map(dataPerson => (
        <div key={setDataPerson} className='Cpersonajes'>
        <center><h4><strong className='fuerte'></strong>{dataPerson.name}</h4></center><br/>
        <p><strong className='fuerte'>Altura: </strong>{dataPerson.height}</p>
        <p><strong className='fuerte'>Masa: </strong>{dataPerson.mass}</p>
        <p><strong className='fuerte'>Color de cabello: </strong>{dataPerson.hair_color}</p>
        <p><strong className='fuerte'>Color de piel: </strong>{dataPerson.skin_color}</p>
        <p><strong className='fuerte'>Color de ojos: </strong>{dataPerson.eye_color}</p>
        <p><strong className='fuerte'>Fecha de nacimiento: </strong>{dataPerson.birth_year}</p>
        <p><strong className='fuerte'>Genero: </strong>{dataPerson.gender}</p>
        <Button key={dataPerson.name} variant="outline-light" >
          <a className='detalleB' href={`/Personajes/${dataPerson.url.split("/")[5]}`}>Detalles</a>
        </Button>
    </div>
        ))) : ("Fuera de servicio")}
      </div>
      <div className="Paginacion">
        <button className="botonPag" onClick={disminuir}>
          Anterior
        </button>
        <h5 className="Ncontador">{Contador}</h5>
        <button className="botonPag" onClick={aumentar}>
          Siguiente
        </button>
      </div><br/>
      <FooterApp/>
</div>
  );
};

export default Personajes;