// Librairie
import React from "react";
import classes from './Archive.module.css';

function Archive(props) {

    console.log(props);

    return (
        <div className={[classes.Archive, 'container'].join(' ')}>
            <h1>Travaux ({props.match.params.id})</h1>
            <p>Version 3 du portfolio réalisé pour présenter mes créations et mes expériences (Oui oui c'est moi, le site que vous êtes en train de visiter). </p>
            <div className={ classes.Archive_img }>
                <img src="https://cdn.dribbble.com/users/2268952/screenshots/15858805/media/2ef259f6ac1bfca532afa586698f162b.png" />
            </div>
            <h2>Palette de couleurs</h2>
        </div>
    );
}

export default Archive;