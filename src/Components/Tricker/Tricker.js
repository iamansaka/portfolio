// Librairie
import React from "react";
import classes from './Tricker.module.css';

function Tricker(props) {

    let trickerArray = '';

    for (let i = 0; i <= 20; i++) {
        trickerArray += props.text;
    }

    trickerArray = trickerArray.split(';');
    trickerArray.pop()

    return (
        <div className={ classes.Tricker }>
            <ul className={ classes.Tricker__container }>
                { trickerArray.map((tricker, index) => (<li key={ index } className={ classes.Tricker__item }>{ tricker }</li>)) }
            </ul>
        </div>
    );
}

export default Tricker;