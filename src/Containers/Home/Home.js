// Librairie
import React, { useState } from "react";

// Composant
import Hero from "../../Components/Hero/Hero";
import Tricker from "../../Components/Tricker/Tricker";

function Home() {

    const [skills, setSkills] = useState(["frontend", "reactjs", "vuejs", "symfony"])

    return (
        <>
            <Hero skills={ skills } />
            <Tricker text="web designer;developpeur fullstack;" />
        </>
    )
}

export default Home;