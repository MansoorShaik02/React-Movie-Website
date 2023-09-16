import Axios from "axios"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Discovermovies from "./pages/Discovermovies";

import toprated from "./pages/toprated";
import NavigationBar from "./Components/NavigationBar";

import { useState, useEffect } from "react";
import './App.css';
import Moviecard from "./Components/Moviecard";
import React from "react";
import Discovershows from "./pages/Discovershows"
import Upcoming from "./pages/Upcoming";
import Movie from "./pages/Movie";
import TVshow from './pages/TVshow'

function App() {
  const apikey = "dd4f1bd1adf0dca4a7f30b9e36309e4f"
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar >
        <Routes>
          <Route path="detailsmovie/:id" element={<Movie />} />
          <Route path="detailstv/:id" element={<TVshow />} />
          <Route path="/" element={<Home />} /><Route />
          <Route path="/discovermovies" element={<Discovermovies />} /><Route />
          <Route path="/discovershows" element={<Discovershows />} /><Route />
          <Route path="/upcoming" element={<Upcoming />} /><Route />

          {/*  <Route path="/traveldestinations" element={<Traveldestinations />} />
          <Route path="/signin" element={<Login />} /> */}
        </Routes>
      </Router>



    </div>
  );

}




export default App;


/* data.forEach(movie => {
  const { original_title, poster_path, vote_average, id, release_date, overview } = movie;
  const movier = document.createElement('div')
  movier.classList.add('movieclass')
  movier.innerHTML = `<img
style="height: 190px"
src="${upcomingimage + poster_path}"
alt="${original_title}"
/>
<div class="movieinfo">
<h3>${original_title}</h3>
<span class="releasedateupcoming"> Release date : </span>
<span class="releasedateupcoming" style="font-size : 24px; color : yellow">${release_date}</span>
<button id="moviedesc">Check</button> <div id="divoverflow"><p id="overviewfile">${overview}</p></div> 



</div>`
  /*   
      } */

