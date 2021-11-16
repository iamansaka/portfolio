// Librairies
import React from "react";
import { Link } from "react-router-dom";
import routes from "../../Config/Routes";
import classes from './Header.module.css';

//Components
import Navigation from "./Navigation/Navigation";

function Header() {
    return (
        <header className={[classes.Header, ' container'].join(' ')}>
            <div className={ classes.logo }>
                <Link to={ routes.HOME }>
                    Mahamoudou Ansaka<br/>
                    Développeur web
                </Link>
            </div>
            <nav aria-label="main navigation">
                <Navigation />
            </nav>
        </header>
    );
}

export default Header;