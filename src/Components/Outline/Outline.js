// Librairie
import React from "react";
import classes from './Outline.module.css';


function Outline(props) {
    return (
        <div className={ classes.Outline }>
            <div className={ classes.Outile_row } style={{ transform: `translate(-${props.positionScroll / 2}px, 0)` }}>À propos <span>À propos</span> À propos <span>À propos</span></div>
            <div className={ classes.Outile_row } style={{ transform: `translate(${props.positionScroll / 2}px, 0)`,}}>De moi même <span>De moi même</span> De moi même <span>De moi même</span></div>
        </div>
    );
}

export default Outline;

Outline.defaultProps = {
    positionScroll: 0
};