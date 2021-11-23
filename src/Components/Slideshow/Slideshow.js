// Librairies
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import classes from './Slideshow.module.css';

const Slideshow = (props) => {
    return (
        <div className={ classes.Slideshow }>
            <Splide options={ { rewind: false } }>
                { props.maquettes.map((maquette, index) => {
                    return (
                        <SplideSlide key={ index }>
                            <img src={`/assets/img/maquettes/${maquette}`} />
                        </SplideSlide>
                    );
                }) }
            </Splide>
        </div>
    );
}

export default Slideshow;