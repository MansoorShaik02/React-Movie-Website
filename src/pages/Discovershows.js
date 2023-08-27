import React from 'react'
import { useState, useEffect } from 'react';
import Moviecard from '../Components/Moviecard';
import { Link } from 'react-router-dom';

function Discovershows() {
    const [tvmain, settvmain] = useState([]);



    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=dd4f1bd1adf0dca4a7f30b9e36309e4f&language=en`).then(res => res.json()).then(data => { settvmain(data.results) }, [])

    })




    return (
        <div className='discovermovies'> {

            tvmain.map(tvshow => (
                <Link to={`/detailstv/${tvshow.id}`}>
                    <Moviecard name={tvshow.name} id={tvshow.id} source={tvshow.poster_path} rating={tvshow.vote_average} />
                </Link>

            ))
        }

        </div>

    )

}

export default Discovershows