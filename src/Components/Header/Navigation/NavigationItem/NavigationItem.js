// Librairie
import React from "react";
import { NavLink } from "react-router-dom";
import classes from './NavigationItem.module.css';

function NavigationItem(props) {
    return (
        <li className={ classes.Navigation__item }>
            {props.external ? <a href={props.to} target='_blank'>{props.children}</a> : <NavLink exact={props.exact} to={props.to}>{props.children}</NavLink>}
        </li>
    );
}

NavigationItem.defaultProps = {
    external: false
}

export default NavigationItem;