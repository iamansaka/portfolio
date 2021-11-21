// Librairies
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../../Config/Routes";
import classes from './Header.module.css';

//Components
import Navigation from "./Navigation/Navigation";

function Header() {

    const [menuToggle, setMenuToggle] = useState(false);
    const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);

    const handleShowMenu = () => {
        setMenuToggle(!menuToggle);
    }

    useEffect(() => {
        const innerWidth = () => {
            setLargeurEcran(window.innerWidth);
        }
        
        window.addEventListener('resize', innerWidth)

        return () => {
            window.removeEventListener('resize', innerWidth)
        }
    }, [])

    return (
        <header className={[classes.Header, menuToggle ? classes.show_menu: null,'container'].join(' ')}>
            <div className={ classes.logo }>
                <Link to={ routes.HOME }>
                    Mahamoudou Ansaka<br/>
                    Développeur web
                </Link>
            </div>
            { (menuToggle || largeurEcran > 768) && (
                <nav aria-label="main navigation">
                    <Navigation menuShow={ handleShowMenu } />
                </nav>
            )}

            <button className={ classes.menu_burger } onClick={ handleShowMenu }>
                <span className={ classes.menu_burger_bar }></span>
            </button>
        </header>
    );
}

export default Header;