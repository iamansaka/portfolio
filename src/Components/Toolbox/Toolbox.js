// Librairie
import React from "react";
import classes from './Toolbox.module.css';

const PaletteCouleurs = (props) => {
    return (
        <li className={ classes.Palette }>
            <div style={{backgroundColor: props.color}} className={ classes.PaletteCouleur }></div>
            <p>{ props.color}</p>
        </li>
    );
}

const Outils = (props) => {
    return (
        <li className={ classes.Outil }>
        <span>
            <img src={`/outils/${ props.outil }.svg`} alt={ props.outil } />
        </span>
            <p>{ props.outil }</p>
        </li>
    );
}

function ToolBox(props) {

    let content;
    let title;

    switch (props.type) {
        case "couleurs":
            title = "Palette de couleurs";
            content = props.items.map((item, index) => (<PaletteCouleurs key={ index } color={ item } />));
            break;
        case "outils":
            title = "Outils";
            content = props.items.map((item, index) => (<Outils key={ index } outil={ item } />));
            break;
        default:
            break;
    }

    return (
        <div className={ classes.ToolBox }>
            <h2>{ title }</h2>
            <ul>
                { content }
            </ul>
        </div>
    );
}

export default ToolBox;

ToolBox.defaultProps = {
    title: "couleurs"
}