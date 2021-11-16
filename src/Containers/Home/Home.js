// Librairie
import React, { useState } from "react";
import data from "../../Config/data";

// Composant
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import Tricker from "../../Components/Tricker/Tricker";

function Home() {

    const [skills, setSkills] = useState(["frontend", "reactjs", "vuejs", "symfony"])
    const [projets, setprojets] = useState([
        {
            name: 'Symfony Online',
            slug: 'symfony-online',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac rutrum mi. Quisque vulputate vehicula lorem cursus mollis.',
            image: 'https://amahamoudou-dev.dawan.ovh/assets/img/shot-symfony-online.png',
            technologie: ["Html", "scss", "javascript", "webpack", "php", "symfony", "Adobe XD"],
        },
        {
            name: 'Stock Manager',
            slug: 'stock-manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac rutrum mi. Quisque vulputate vehicula lorem cursus mollis.',
            image: 'https://amahamoudou-dev.dawan.ovh/assets/img/shot-naga.png',
            technologie: [ "Html", "scss", "javascript", "php", "symfony", "figma"],
        },
    ])

    return (
        <>
            <div className="container">
                <Hero skills={ skills } />
                <Projects projets={ projets } />
            </div>
            <Tricker text="web designer;developpeur fullstack;" />
        </>
    )
}

export default Home;