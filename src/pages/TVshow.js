import React, { useEffect, useState } from 'react'
import Moviecard from '../Components/Moviecard';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import "../Styles/Movie.css"
import "../Styles/Moviecard.css"

function Movie() {
    let { id } = useParams();
    function scrollToTop() {
        window.scrollTo(0, 0); // Scroll to the top-left corner of the page
    }
    const [getdetails, setgetdetails] = useState([]);

    const [getsimilar, setgetsimilar] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=dd4f1bd1adf0dca4a7f30b9e36309e4f`).then(response => response.json()).then(data => { setgetsimilar(data.results) });
    })

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
        <div className='overalldiv'>
            <div className='moviedestination'>
                <div className='moviepicture'>
                    <img src={`https://image.tmdb.org/t/p/w500${getdetails.poster_path}`}></img>
                </div>
                <div className='moviedetails'>
                    <p className='movietitle'>{getdetails.name}</p>
                    <p className='movieoverview'>{getdetails.overview}</p>
                    <p className='moviereleasedate'>Release Date : {getdetails.first_air_date}</p>
                    <p className='moviereleasedate'>Rating: {getdetails.vote_average}</p>
                    <p className='moviereleasedate'>Genres: {getdetails.genres?.map((genre) => genre.name).join(', ')}</p>



                </div>
                {/*      <h1>{getdetails.name}</h1>
                <p>{getdetails.overview}</p>
                <p>Release Date : {getdetails.first_air_date}</p> */}

            </div>
            <h1>Similar</h1>
            <div className='Similar'>
                {getsimilar.map(tv => (
                    <Link to={`/detailstv/${tv.id}`} onClick={scrollToTop} >

                        <Moviecard name={tv.name} id={tv.id} source={tv.poster_path} rating={tv.vote_average} />


                    </Link>
                ))}


            </div>
        </div>
    )
}

export default Movie