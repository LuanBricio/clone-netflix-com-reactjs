import React from "react";
import './Header.css';

export default ({ black }) => {
    return ( <
        header className = { black ? 'black' : '' } >
        <
        div className = "header--logo" >
        <
        a href = "/" > < img src = "https://i.ibb.co/2nWjG7y/e.png"
        alt = "e"
        border = "0" / > < /a>

        <
        /div>

        <
        div className = "header--user" >
        <
        a href = "/" > < img src = "https://i.ibb.co/48gCjbb/Design-sem-nome-1.png"
        alt = "Design-sem-nome-1"
        border = "0" / > < /a> <
        /div>

        <
        /header>
    );
}