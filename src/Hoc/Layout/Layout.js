// Librairie
import React from "react";
import classes from './Layout.module.css';

// Composant
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Tricker from "../../Components/Tricker/Tricker";

function Layout(props) {
    return (
        <div className={classes.Layout}>
            <Header />

            <main className={classes.content}>
                {props.children}
            </main>

            <>
                <Footer />
                <Tricker text="web designer;developpeur fullstack; concepteur ui/ux;" />
            </>
        </div>
    )
}

export default Layout;