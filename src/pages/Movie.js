import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Movie() {
    let { id } = useParams();


    const [getdetails, setgetdetails] = useState([]);
    useEffect(() => {
        const apiKey = `dd4f1bd1adf0dca4a7f30b9e36309e4f`
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

        fetch(apiUrl).then(response => response.json()).then(data => {
            {
                console.log(data);
            }
        })

        fetch(apiUrl).then(response => response.json()).then(data => {
            {
                setgetdetails(data)
            }
        })
    })

    return (
        <div>
            <h1>{getdetails.title}</h1>
            <p>{getdetails.overview}</p>
            <p>Release Date : {getdetails.release_date}</p>
            <img src={`https://image.tmdb.org/t/p/w500${getdetails.poster_path}`}></img>
            <h1>Genres</h1>



        </div>
    )
}

export default Movie