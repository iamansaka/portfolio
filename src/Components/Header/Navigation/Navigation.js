// Librairies
import React from "react";
import routes from "../../../Config/Routes";
import classes from './Navigation.module.css';

// Composant
import NavigationItem from "./NavigationItem/NavigationItem";

function Navigation() {
    return (
        <ul className={ classes.Navigation }>
            <NavigationItem exact to={ routes.LABORATOIRE }>Laboratoire</NavigationItem>
            <NavigationItem exact to={ routes.ABOUT }>À propos</NavigationItem>
            <NavigationItem external="true" to={ routes.LINKEDIN }>Linkedin</NavigationItem>
            <NavigationItem external="true" to={ routes.GITHUB }>Github</NavigationItem>
            <NavigationItem external="true" to={ routes.CURRICULUM }>Curriculum</NavigationItem>
        </ul>
    );
}

export default Navigation;