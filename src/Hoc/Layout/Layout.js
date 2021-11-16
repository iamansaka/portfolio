// Librairie
import React from "react";
import classes from './Layout.module.css';

// Composant
import Header from "../../Components/Header/Header";

function Layout(props) {
    return (
        <>
            {/* Header */}
            <Header />

            {props.children}

            {/* Header */}
        </>
    )
}

export default Layout;