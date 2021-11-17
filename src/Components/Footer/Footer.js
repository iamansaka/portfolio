// Librairie
import React, { useState } from "react";
import classes from './Footer.module.css';

function Footer() {

    const [text, setText] = useState('Designer & coded')

    const onMouseEnterHandler = () => {
        setText('Designer & coded by me ✋🏾');
    }

    return (
        <footer className={[classes.Footer, ' container'].join(' ')}>
            <div className={ classes.Footer_columns }>
                <div className={ classes.Footer_column }>ansaka.fr</div>
                <div className={ classes.Footer_column }>1997</div>
                <div className={ classes.Footer_column } onMouseEnter={ onMouseEnterHandler }>{ text }</div>
            </div>
        </footer>
    );
}

export default Footer;