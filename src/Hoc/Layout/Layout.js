// Librairie
import React, { useState, useEffect } from "react";
import classes from './Layout.module.css';

// Composant
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Tricker from "../../Components/Tricker/Tricker";

function Layout(props) {

    const [scrollPos, setScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const scrollBackground = () => {
            setScrollPos(window.scrollY);
            console.log(scrollPos);
        }

        window.addEventListener('scroll', scrollBackground);
        return () => {
            window.removeEventListener('scroll', scrollBackground);
        }
    }, [])

    console.log(scrollPos);

    return (
        <div className={[classes.Layout, scrollPos > 165 ? classes.background: null].join(' ')}>
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