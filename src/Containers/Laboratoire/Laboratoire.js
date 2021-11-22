//Librairie
import React, { useEffect, useState }  from "react";
import apiAxios from "../../Config/api.axios";
import classes from './Laboratoire.module.css';

// Composant
import DisplaydCard from "../../Components/DisplaydCard/DisplaydCard";

function Laboratoire() {

    const [projets, setProjets] = useState([]);

    useEffect(() => {
        apiAxios.get('/works')
                .then(response => {
                    let dataArray = [];

                    for (let key in response.data) {
                        dataArray.push({
                            ...response.data[key],
                            id: response.data[key]
                        })
                    }
                    // console.log(dataArray);
                    setProjets(dataArray);
                })
                .catch(err => console.log(err))
    }, [])

    return (
        <div className={[classes.Laboratoire, "container"].join(' ')}>
            <h1>Mes <span>projets</span></h1>
            <DisplaydCard projets={ projets } />
        </div>
    );
}

export default Laboratoire;