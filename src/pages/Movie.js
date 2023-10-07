import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Moviecard from '../Components/Moviecard';
import "../Styles/Movie.css"
import "../Styles/Moviecard.css"
import { Link } from 'react-router-dom';
import { Refresh } from '@mui/icons-material';

function Movie() {
    let { id } = useParams();


    const [getdetails, setgetdetails] = useState([]);
    const [getsimilarmovie, setgetsimilarmovie] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=dd4f1bd1adf0dca4a7f30b9e36309e4f`).then(response => response.json()).then(data => { setgetsimilarmovie(data.results) });

    })

    useEffect(() => {
        const apiKey = `dd4f1bd1adf0dca4a7f30b9e36309e4f`
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`


        fetch(apiUrl).then(response => response.json()).then(data => {
            {
                setgetdetails(data)
            }
        })
    })
    function scrollToTop() {
        window.scrollTo(0, 0);
        // Scroll to the top-left corner of the page
    }
    return (
        <div className='overalldiv'>

            <div className='moviedestination'>
                <div className='moviepicture'>
                    <img src={`https://image.tmdb.org/t/p/w500${getdetails.poster_path}`}></img>
                </div>
                <div className='moviedetails'>
                    <p className='movietitle'>{getdetails.title}</p>
                    <p className='movieoverview'>{getdetails.overview}</p>
                    <p className='moviereleasedate'>Release Date : {getdetails.release_date}</p>
                    <p className='moviereleasedate'>Genres: {getdetails.genres?.map((genre) => genre.name).join(', ')}</p>
                    <p className='moviereleasedate'>Runtime: {getdetails.runtime} minutes</p>

                </div>

            </div>
            <h1>Watch Similar</h1>

            <div className='Similar'>
                {getsimilarmovie.map(movie => (
                    <Link style={{ textDecoration: "none", color: "white" }} to={`/detailsmovie/${movie.id}`} onClick={scrollToTop}>
                        <Moviecard name={movie.original_title} id={movie.id} source={movie.poster_path} rating={movie.vote_average} />   </Link>
                ))}

            </div>
        </div>
    )
}

export default Movie