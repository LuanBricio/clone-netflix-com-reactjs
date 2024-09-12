import React, { useEffect, useState } from "react";
import tmdb from './tmdb';
import MovieRow from "./components/MovieRow";
import './App.css';

export default () => {


    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async() => {
            // pegando a lista TOTAL
            let list = await tmdb.getHomelist();
            setMovieList(list);
        }

        loadAll();
    }, []);
    return ( <
        div className = "page" >
        <
        section className = "lists" > {
            movieList.map((item, key) => ( <
                MovieRow key = { key }
                title = { item.title }
                items = { item.items }
                />
            ))
        } <
        /section> <
        /div>
    );
}