// Librairie
import React from "react";
import classes from './Layout.module.css';

// Composant
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Tricker from "../../Components/Tricker/Tricker";

function Layout(props) {
    return (
        <>
            {/* Header */}
            <Header />

            {props.children}

            {/* Footer */}
            <Footer />
            <Tricker text="web designer;developpeur fullstack;" />
        </>
    )
}

export default Layout;