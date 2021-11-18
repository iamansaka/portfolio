// Librairie
import React from "react";
import classes from './Skills.module.css';

function Skills(props) {
    return (
        <>
            <h3 className="title">{ props.title }</h3>
            <p className={ classes.Skills }>{ props.content }</p>
        </>
    );
}

export default Skills;