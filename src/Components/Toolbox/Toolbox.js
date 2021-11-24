// Librairie
import React, { useState } from "react";
import classes from './Toolbox.module.css';

const PaletteCouleurs = (props) => {

    const [copySuccess, setCopySuccess] = useState('');

    const copyColor = (color) => {
        navigator.clipboard.writeText(color);
        setCopySuccess('Copié !')
    }

    return (
        <li className={ classes.Palette }>
            <div onClick={() => copyColor(props.color.toUpperCase())} style={{backgroundColor: props.color}} className={ classes.PaletteCouleur }>{ copySuccess ? copySuccess : null }</div>
            <p>{ props.color.toUpperCase() }</p>
        </li>
    );
}

const Outils = (props) => {
    return (
        <li className={ classes.Outil }>
        <span>
            <img src={`/outils/${ props.outil.replace(' ','-').toLowerCase() }.png`} alt={ props.outil } />
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
            <ul className={ props.type === "outils" ? classes.grid_outils : null }>
                { content }
            </ul>
        </div>
    );
}

export default ToolBox;

ToolBox.defaultProps = {
    title: "couleurs"
}