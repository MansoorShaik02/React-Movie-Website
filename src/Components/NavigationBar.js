import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Styles/NavigationBar.css'
function NavigationBar() {
    return (
        <div className='NavigationBar'>
            <Link to="/">HOME</Link>
            <Link to="/discovermovies">Movies</Link>
            <Link to="/discovershows">Shows</Link>
            <Link to="/upcoming">Upcoming</Link>

        </div>
    )
}

export default NavigationBar