// Librairie
import React from "react";
import Card from "./Card/Card";
import classes from "./DisplaydCard.module.css";

function DisplaydCard(props) {
    return (
        <section  className={ classes.DisplaydCard }>
            { props.projets.map((projet, index) => <Card key={ index } {...projet} />) }
        </section>
    );
}

export default DisplaydCard;