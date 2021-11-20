// Librairie
import React from "react";
import Card from "./Card/Card";
import classes from "./DisplaydCard.module.css";

function DisplaydCard() {
    return (
        <section  className={ classes.DisplaydCard }>
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    );
}

export default DisplaydCard;