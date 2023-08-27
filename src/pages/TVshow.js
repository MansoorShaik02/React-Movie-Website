import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Movie() {
    let { id } = useParams();


    const [getdetails, setgetdetails] = useState([]);
    useEffect(() => {
        const apiKey = `dd4f1bd1adf0dca4a7f30b9e36309e4f`
        const apiUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`


        fetch(apiUrl).then(response => response.json()).then(data => {
            {
                setgetdetails(data)
            }
        })
    })
    return (
        <div>
            <h1>{getdetails.name}</h1>
            <p>{getdetails.overview}</p>
            <p>Release Date : {getdetails.first_air_date}</p>
            <img src={`https://image.tmdb.org/t/p/w500${getdetails.poster_path}`}></img>
        </div>
    )
}

export default Movie