// Librairie
import React, { useState, useEffect } from "react";
import classes from './Layout.module.css';

// Notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div className={[classes.Layout, scrollPos > 300 ? classes.background: null].join(' ')}>
            <Header />

            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

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