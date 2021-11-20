// Librairies
import React, { useState, useEffect }  from "react";
import classes from './About.module.css';

// Composants
import Outline from "../../Components/Outline/Outline";
import Bio from "../../Components/Bio/Bio";
import Skills from "../../Components/Skills/Skills";


function About() {

    // State
    const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

    // Function
    const onScrollHandler = () => {
        setScrollPosition(window.pageYOffset)
    }

    // ComponentDidUpdate
    useEffect(() => {
        window.addEventListener("scroll", onScrollHandler);
        return () => {
            window.removeEventListener("scroll", onScrollHandler);
        }
    }, [])

    // Variable
    let scrollY = scrollPosition;

    return (
        <>
            <Outline positionScroll={ scrollY } />
            <div className={[classes.About, "container"].join(" ")}>
                <div className={classes.About_img}>
                    <img src="https://www.ansaka.fr/portfolio/portfoliov1/assets/img/avatar.jpg" alt="" />
                </div>
                <div className={classes.About_content}>
                    <Bio />
                    <Skills title="Ce que je sais faire 💪🏾 " content="Html, (S)css, Bootstrap, JavaScript, Jquery, React, VueJs, PHP, Symfony, MySQL, GIT" />
                    <Skills title="Hobbies & Interêts 👾" content="Musique, Jeux vidéo, Cinéma" />
                    <Skills title="Outils de travail 🤖" content="Figma, Visual Studio Code, Github, Composer" />
                </div>
            </div>
        </>
    );
}

export default About;