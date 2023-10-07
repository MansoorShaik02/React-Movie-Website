import React from 'react'
import '../Styles/Discovermovies.css'
import { useState, useEffect } from 'react';
import Moviecard from '../Components/Moviecard';
import { Link } from 'react-router-dom';

function Discovermovies() {

    const apikey = "dd4f1bd1adf0dca4a7f30b9e36309e4f"

    const [movies, setMovies] = useState([]);



    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=dd4f1bd1adf0dca4a7f30b9e36309e4f&language=fr`).
            then(res => res.json()).then(data => { setMovies(data.results) }, [])
    })


    return (
        <div className='discovermovies'> {

            movies.map(movie => (
                <Link to={`/detailsmovie/${movie.id}`} style={{ width: '100px', marginBottom: "10px" }}>
                    <Moviecard name={movie.original_title} id={movie.id} source={movie.poster_path} rating={movie.vote_average} />
                </Link>

            ))
        }

        </div>

    )
}

export default Discovermovies