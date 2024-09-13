import React, { useEffect, useState } from "react";
import tmdb from './tmdb';
import MovieRow from "./components/MovieRow";
import './App.css';
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {


    const [movieList, setMovieList] = useState([]);
    const [FeaturedData, setFeaturedData] = useState(null);
    const [blackheader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async() => {
            // pegando a lista TOTAL
            let list = await tmdb.getHomelist();
            setMovieList(list);

            //pegando o Featured
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');

            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(() => {
        const scrollListiner = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListiner);

        return () => {
            window.removeEventListener('scroll', scrollListiner);
        }

    }, []);

    return ( <
        div className = "page" >

        <
        Header black = { blackheader }
        />

        {
            FeaturedData &&
                <
                FeaturedMovie item = { FeaturedData }
            />

        }

        <
        section className = "lists" > {
            movieList.map((item, key) => ( <
                MovieRow key = { key }
                title = { item.title }
                items = { item.items }
                />
            ))
        } <
        /section> < /
        div >
    );
}