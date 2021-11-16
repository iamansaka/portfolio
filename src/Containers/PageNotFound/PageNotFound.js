// Librairie
import React from "react";
import { Link } from "react-router-dom";
import routes from "../../Config/Routes";
import classes from './PageNotFound.module.css';

// Image
import image404 from '../../static/media/404.webp';

function PageNotFund() {
    return (
        <div className={[classes.NotFound, 'container'].join(' ')}>
            <div className={ classes.NotFound_img } >
                <img src={ image404 } alt="Image 404"/>
            </div>
            <h1>Cette page n'existe pas</h1>
            <Link to={ routes.HOME } className={classes.button}> Retournez à la page d'accueil</Link>
        </div>
    );
}

export default PageNotFund;