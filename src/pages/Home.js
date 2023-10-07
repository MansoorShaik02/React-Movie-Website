import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
import StarIcon from '@mui/icons-material/Star';
import Moviecard from '../Components/Moviecard';
import Imagenotavailable from '../posters/Imagenotavailable.png';
import { ReactFitty } from "react-fitty";
function Home() {
    const [slidermovie, setslidermovie] = useState([])
    const [popular, setpopular] = useState([])
    const [tvpopular, settvpopular] = useState([])

    const getRatingColor = (rating) => {
        if (rating > 8) {
            return 'green';
        } else if (rating > 6) {
            return 'yellow';
        } else {
            return 'red';
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=dd4f1bd1adf0dca4a7f30b9e36309e4f`).then(res => res.json()).then(data => { setslidermovie(data.results) }, [])
    })
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=dd4f1bd1adf0dca4a7f30b9e36309e4f&with_origin_country=US`).then(res => res.json()).then(data => { settvpopular(data.results) }, [])

    })

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=dd4f1bd1adf0dca4a7f30b9e36309e4f').then(res => res.json()).then(data => { setpopular(data.results) }, [])
    })
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='homeclass'>
            <Carousel
                infinite={true}

                responsive={responsive}
                showDots={false}
                /* autoPlay={this.props.deviceType !== "mobile" ? true : false} */
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                /*        customTransition="all .5" */
                transitionDuration={500}>
                {slidermovie.map(movie =>
                (
                    <Link style={{ textDecoration: "none", color: "white" }} to={`/detailsmovie/${movie.id}`} >
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                        </div>
                        <div className="posterImage__overlay">
                            <div className='posterImage__title'>{movie ? movie.original_title : ""}
                            </div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="posterImage__rating" style={{ color: getRatingColor(movie.vote_average) }}>
                                    <StarIcon />{" "}
                                    {movie ? movie.vote_average : ""}
                                </span>
                            </div>
                            <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                        </div>
                    </Link>
                )
                )}
            </Carousel>
            <p className='populartag'>POPULAR</p>



            <div className='popularmovies'>
                {popular.map(movier => (<Link to={`/detailsmovie/${movier.id}`}>

                    <Moviecard name={movier.original_title} id={movier.id} source={movier.poster_path} rating={movier.vote_average} />
                </Link>


                ))} </div>


            <p className='populartag'>TV</p>
            <div className='populartv'>
                {
                    tvpopular.map(tv => (
                        <Link to={`/detailstv/${tv.id}`}>
                            <Moviecard name={tv.name} id={tv.id} source={tv.poster_path ? tv.poster_path : null} rating={tv.vote_average} /></Link>
                    ))
                }
            </div>

        </div>
    )
}
export default Home