


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moviecard from '../Components/Moviecard';
import '../Styles/Discovermovies.css'

function Upcoming() {
    const apiKey = `dd4f1bd1adf0dca4a7f30b9e36309e4f`
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
            .then((response) => {
                setUpcomingMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching upcoming movies:', error);
            });
    }, []);

    return (
        <div className='discovermovies'>

            {upcomingMovies.map((movier) => (
                <Moviecard name={movier.original_title} id={movier.id} source={movier.poster_path} rating={movier.vote_average} />
            ))}

        </div>
    );
}

export default Upcoming;
