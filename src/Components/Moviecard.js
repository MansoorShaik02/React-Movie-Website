import React from 'react'
import '../Styles/Moviecard.css'
import spiderverse from '../posters/spiderverse.jpg'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ReactFitty } from "react-fitty";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import download from "../posters/download.jpg"
import defaulterror from "../posters/defaulterror.jpg"
function Moviecard(props) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])
    return (
        <>{isLoading ?
            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={500} />
                </SkeletonTheme>
            </div> :
            <div className='moviecardwrapper'>
                <div className='imageclass'>
                    <LazyLoadImage src=/* {`https://image.tmdb.org/t/p/original${props.source}`} */ {props.source ? `https://image.tmdb.org/t/p/w500${props.source}` : defaulterror} effect='blur' />

                    <div className='content'>
                        <p>{props.name}</p>
                        <p>{props.rating}</p>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
export default Moviecard