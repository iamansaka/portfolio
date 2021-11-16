// Librairies
import React from "react";
import Technologie from "../Technologie/Technologie";
import classes from './Hero.module.css'

function Hero(props) {

    let skills = props.skills.map(skill => (
        <Technologie key={ skill } color="color__blue" technologie={ skill } />
    ));

    return (
        <div className={[classes.Hero, ' container'].join(' ')}>
            <h1>Designer & <span>Developeur</span></h1>
            <div className={ classes.wrapper }>
                <p>
                    Bonjour, je m'appelle Ansaka, je suis un développeur web 
                    en Alternance® situé à Toulouse, FRANCE. Spécialisé dans la 
                    conception et l'intégration de sites Web au pixel près.
                </p>
                <ul className="technologie">
                    { skills }
                </ul>
            </div>
        </div>
    );
}

export default Hero;