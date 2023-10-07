import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Location } from 'react-router-dom'
import { useEffect } from 'react'
import '../Styles/NavigationBar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import CloseIcon from '@mui/icons-material/Close';

function NavigationBar() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const apiKey = 'dd4f1bd1adf0dca4a7f30b9e36309e4f';
    const [navbarexpansion, setnavbarexpansion] = useState(false)
    const location = useLocation();
    useEffect(() => {
        setnavbarexpansion(false);
    }, [location]);


    return (
        <div className='navbardiv' id={navbarexpansion ? "open" : "close"}>

            <div className='hamburgermenu'>
                <button onClick={() => { setnavbarexpansion((prev) => !prev) }}>{navbarexpansion ? (<CloseIcon />) : (<ReorderIcon />)}
                </button>
            </div>
            <div className='NavigationBar'>
                <Link to="/">Home</Link>
                <Link to="/discovermovies">Movies</Link>
                <Link to="/discovershows">Shows</Link>
                <Link to="/upcoming">Upcoming</Link>
                <Link to="/SearchPage">Search</Link>

            </div>


        </div>

    )
}

export default NavigationBar