// Librairie
import React from "react";

// Composant
import ProjetItem from "./ProjectItem/ProjectItem";

function Projects(props) {

    // console.log(props.projets);

    let listProjets = props.projets.map((projet, index) => {
                                        return (<ProjetItem 
                                                    key={ index } 
                                                    name={ projet.name }
                                                    description={ projet.description }
                                                    technologie={ projet.technologie }
                                                    image={ projet.image }
                                                />)
                                    })

    return (
        <section>
            { listProjets }
        </section>
    );
}

export default Projects;