import React from "react";
import {PlanetasApp} from '../components/PlanetasApp'
import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js'



function Planetas() {
    return (
        <div className="Planetas">
            <NavScrollExample/>
            
            <div className="Planet">
            <center>
            <h1 className="Tplanetas">PLANETAS</h1>
            </center>
            <PlanetasApp/>
            </div>
            <FooterApp/>
        </div>
    )
}

export default Planetas