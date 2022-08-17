import React from "react";
import {PlanetasApp} from '../components/PlanetasApp'
import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js'



function Planetas() {
    return (
        <div className="Bplanet">
            <NavScrollExample/>
            <div className="Planet">
            <PlanetasApp/>
            </div>
            <FooterApp/>
        </div>
    )
}

export default Planetas