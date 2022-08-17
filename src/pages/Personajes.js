import React from "react";
import {PersonajesApp} from '../components/PersonajesApp'
import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js'



function Planetas() {
    return (
        <div>
            <NavScrollExample/>
            <div className="Planet">
            <center>
            <h1 className="Tpersonajes">PERSONAJES</h1>
            </center>
            <PersonajesApp/>
            </div>
            <FooterApp/>
        </div>
    )
}

export default Planetas