// Librairies
import React, { useState, useEffect } from "react";
import classes from './Archive.module.css';
import apiAxios from "../../../Config/api.axios";
import routes from "../../../Config/Routes";

// Notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Composant
import ToolBox from "../../../Components/Toolbox/Toolbox";
import Technologie from "../../../Components/Technologie/Technologie";
import Slideshow from "../../../Components/Slideshow/Slideshow";

function Archive(props) {

    // State
    const [technologies, setTechnologies] = useState([]);
    const [couleurs, setCouleurs] = useState([]);
    const [imagesArray, setImagesArray] = useState([]);
    const [outils, setOutils] = useState([]);
    const [projet, setProjet] = useState({})

    useEffect(() => {
        apiAxios.get(`/works/${props.match.params.slug}`)
                .then(response => {
                    if (Object.keys(response.data).length === 0) {
                        props.history.push(routes.LABORATOIRE);
                        toast.error("Ce projet n'existe pas", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                    for (let key in response.data) {
                        setProjet({...response.data[key]});
                        setCouleurs(response.data[key].palettes.map(el => el));
                        setImagesArray(response.data[key].maquettes);
                        setOutils(response.data[key].outils);
                        setTechnologies(response.data[key].technologies)
                    }
                })
                .catch(err => console.log(err))
    }, [])

    console.log(projet);

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
            <Slideshow maquettes={ imagesArray } />
            <ToolBox type="couleurs" items={ couleurs } />
            <ToolBox type="outils" items={ outils } />
        </div>
    );
}

export default Archive;