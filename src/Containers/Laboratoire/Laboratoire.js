//Librairie
import React from "react";
import classes from './Laboratoire.module.css';

// Composant
import DisplaydCard from "../../Components/DisplaydCard/DisplaydCard";

function Laboratoire() {
    return (
        <div className={[classes.Laboratoire, "container"].join(' ')}>
            <h1>Mes <span>projets</span></h1>
            <DisplaydCard />
        </div>
    );
}

export default Laboratoire;