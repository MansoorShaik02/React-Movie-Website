

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/SearchPage.css"
import Moviecard from '../Components/Moviecard'; import { Link } from 'react-router-dom';


function SearchPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const API_KEY = 'dd4f1bd1adf0dca4a7f30b9e36309e4f';

    useEffect(() => {
        if (query) {
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
                .then((response) => setMovies(response.data.results))
                .catch((error) => console.error(error));
        }
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Search for a movie here</h1>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={query}
                    onChange={handleInputChange}
                />
            </header>
            <MovieGrid movies={movies} />
        </div>
    );
}

function MovieGrid({ movies }) {
    return (
        <div className="movie-grid">
            {movies.map((movie) => (
                /*      <MovieCard key={movie.id} movie={movie} /> */
                /*            <Moviecard name={movie.original_title} id={movie.id} source={movie.poster_path} rating={movie.vote_average} /> */
                <Link to={`/detailsmovie/${movie.id}`} style={{ width: '100px', marginBottom: "10px" }}>
                    <Moviecard name={movie.original_title} id={movie.id} source={movie.poster_path} rating={movie.vote_average} />
                </Link>
            ))}
        </div>
    );
}

/* function MovieCard({ movie }) {
    const { title, poster_path } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w200/${poster_path}`;

    return (

        <div className="movie-card">
            <img src={imgUrl} alt={title} />
            <div className="movie-info">
                <h2>{title}</h2>
            </div>
        </div>
    );
} */




export default SearchPage