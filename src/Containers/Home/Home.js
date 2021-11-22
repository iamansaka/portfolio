// Librairie
import React, { useEffect, useState } from "react";
import apiAxios from "../../Config/api.axios";

// Composants
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";

function Home() {

    const [skills, setSkills] = useState(["frontend", "reactjs", "vuejs", "symfony"]);
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
                    console.log(dataArray);
                    setProjets(dataArray);
                })
                .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className="container">
                <Hero skills={ skills } />
                <Projects projets={ projets } />
            </div>
        </>
    )
}

export default Home;