// Librairie
import React from "react";
import classes from './ProjectItem.module.css';

// Composant
import Technologie from "../../Technologie/Technologie";
import Button from "../../Ui/Button/Button";
import { Link } from "react-router-dom";
import routes from "../../../Config/Routes";

function ProjetItem(props) {

    console.log(props);

    let skills = props.technologie.map(skill => (
        <Technologie key={ skill } color="color__gray" technologie={ skill } />
    ));

    return (
        <div className={ classes.ProjetItem }>
            <div className={ classes.ProjetItem__content}>
                <h3>{ props.title }</h3>
                <p>{ props.description }</p>
                <ul className="technologie">
                    { skills }
                </ul>
                <div className={ classes.ProjetItem__link }>
                    <Button link={ routes.LABORATOIRE +'/'+ props.slug } />
                </div>
            </div>
            <div className={ classes.ProjetItem__image}>
                <Link to={ routes.LABORATOIRE +'/'+ props.slug }>
                    <div style={{maxWidth: '700px', display: 'block'}}>
                        <img src={ props.image } />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProjetItem;