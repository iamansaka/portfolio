// Librairie
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";
import routes from '../../../Config/Routes';

function Card() {
    return (
        <Link to={ routes.LABORATOIRE+'/symfony-online' } className={ classes.Card } >
            <article data-year="2020">
                <h2 className={ classes.Article_title }>Lorem ipsum dolor sit amet</h2>
                <div className={ classes.Article_content }>
                    <img src={"https://amahamoudou-dev.dawan.ovh/assets/img/shot-symfony-online.png"} />
                </div>
                <div className={ classes.Article_footer }>
                    <p>Consectetur adipiscing elit. Vivamus eu ultricies lorem. Sed ut quam lacus.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                    </svg>
                </div>
            </article>
        </Link>
    );
}

export default Card;