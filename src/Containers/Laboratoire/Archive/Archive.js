// Librairies
import React, { useState, useEffect } from "react";
import classes from './Archive.module.css';
import apiAxios from "../../../Config/api.axios";

// Composant
import ToolBox from "../../../Components/Toolbox/Toolbox";
import Technologie from "../../../Components/Technologie/Technologie";

function Archive(props) {

    // State
    const [technologies, setTechnologies] = useState([]);
    const [couleurs, setCouleurs] = useState([]);
    const [outils, setOutils] = useState([]);
    const [projet, setProjet] = useState({})

    useEffect(() => {
        apiAxios.get(`/works/${props.match.params.slug}`)
                .then(response => {
                    for (let key in response.data) {
                        setProjet({...response.data[key]});
                        setCouleurs(response.data[key].palettes);
                        setOutils(response.data[key].outils);
                        setTechnologies(response.data[key].technologies)
                    }
                })
                .catch(err => console.log(err))
    }, [])

    let skills = technologies.map(skill => (
        <Technologie key={ skill } color="color__gray" technologie={ skill } />
    ));

    return (
        <div className={[classes.Archive, 'container'].join(' ')}>
            <h1>{ projet.title }</h1>
            <div>
                <ul className="technologie">
                    { skills }
                </ul>
            </div>
            <p>{ projet.content }</p>
            <div className={ classes.Archive_img }>
                <img src="https://cdn.dribbble.com/users/2268952/screenshots/15858805/media/2ef259f6ac1bfca532afa586698f162b.png" />
            </div>
            <ToolBox type="couleurs" items={ couleurs } />
            <ToolBox type="outils" items={ outils } />
        </div>
    );
}

export default Archive;