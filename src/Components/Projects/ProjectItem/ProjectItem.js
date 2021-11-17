// Librairie
import React from "react";
import classes from './ProjectItem.module.css';

// Composant
import Technologie from "../../Technologie/Technologie";
import Button from "../../Ui/Button/Button";

function ProjetItem(props) {

    console.log(props);

    let skills = props.technologie.map(skill => (
        <Technologie key={ skill } color="color__gray" technologie={ skill } />
    ));

    return (
        <div className={ classes.ProjetItem }>
            <div className={ classes.ProjetItem__content}>
                <h3>{ props.name }</h3>
                <p>{ props.description }</p>
                <ul className="technologie">
                    { skills }
                </ul>
                <div className={ classes.ProjetItem__link }>
                    <Button />
                </div>
            </div>
            <div className={ classes.ProjetItem__image}>
                <a href="#">
                    <div style={{maxWidth: '700px', display: 'block'}}>
                        <img src={ props.image } />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ProjetItem;