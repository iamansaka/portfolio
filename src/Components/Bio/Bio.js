// Librairie
import React from "react";
import classes from './Bio.module.css';
import routes from '../../Config/Routes'

// Composant
import Button from "../Ui/Button/Button";

function Bio() {
    return (
        <div className={ classes.Bio }>
            <h2 className="title">Bio</h2>
            <p>
                Je réalise des sites web et web mobiles en me posant les bonnes questions 
                sur le confort et l’expérience de l'utilisateur, ce qui me permet à la fois 
                de m'expérimenter, découvrir et apprendre de nouvelles technologie.
            </p>
            <p className={ classes.text_small }>Quand je n'ai pas de projet dans la poche, je joue avec le css en réalisent des petites créations sur Codepen.</p>
            <a href={ routes.LINKEDIN }>Une collaboration ? Un projet ?</a>
        </div>
    );
}

export default Bio;