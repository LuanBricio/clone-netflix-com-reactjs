import { useState } from 'react';
import React from "react";
import './MovieRow.css';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRigthArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }


    return ( <
        div className = "movieRow" >
        <
        h2 > { title } < /h2> <
        div className = "movieRow--left"
        onClick = { handleLeftArrow } >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "60"
        height = "60"
        fill = "currentColor"
        class = "bi bi-caret-left"
        viewBox = "0 0 16 16" >
        <
        path d = "M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" / >
        <
        /svg> < /
        div > <
        div className = "movieRow--rigth"
        onClick = { handleRigthArrow } >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "60"
        height = "60"
        fill = "currentColor"
        class = "bi bi-caret-right"
        viewBox = "0 0 16 16" >
        <
        path d = "M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" / >
        <
        /svg> < /
        div >




        <
        div className = "MovieRow--listarea" >
        <
        div className = "movieRow--list"
        style = {
            {
                marginLeft: scrollX,
                width: items.results.length * 150
            }
        } > {
            items.results.length > 0 && items.results.map((item, key) => ( <
                div key = { key }
                className = "movieRow--item" >
                <
                img src = { `https://image.tmdb.org/t/p/w300${item.poster_path}` }
                alt = { item.original_title }
                /> < /
                div >
            ))
        } <
        /div>


        <
        /div> < /
        div >
    )
}