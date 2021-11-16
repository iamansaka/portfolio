// Librairie
import React from "react";
import classes from './Technologie.module.css';

function Technologie(props) {
    return (
        <li className={[classes.technologie__item, props.color].join(' ') }>#{props.technologie}</li>
    );
}

export default Technologie;