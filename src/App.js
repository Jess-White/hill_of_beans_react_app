import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import './App.css';
import {getMovies} from './Services/IMDBAPI';
import Header from './Components/Header';
import Movie from './Components/Movie';
import SearchMovie from './Components/SearchMovie';
import RateMovie from './Components/RateMovie';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  //set in state for movie SEARCH function:
  const [movies, setMovies] = useState([])
  
  //set in state for ADD MOVIE to DATABASE function: 
  const movieRating = useState({movie_title: '', thumbs_up: '', thumbs_down: '', })

  const [error, setError] = useState("")
  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(true)
  }

  const handleCloseAbout = () => setShowAbout(false);

  // useEffect(() => {
  //   getMovie() 
  //     .then(response => {
  //       setMovies(response)
  //     }).catch(error => {
  //       setError("Something went wrong.")
  //     })
  // }, [])

  const handleSearchMovie = (title) => {
    getMovies(title)
    .then((response) => {
      const movies = response.data.Search;
      console.log(movies);
      setMovies(movies)
    })
  }


  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="App">
      <Header />
      
      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowAbout}>What is this for?
      </Button>
      <Modal show={showAbout}>
      <ModalBody>
      <About></About>
      </ModalBody>
        <ModalFooter>
          <Button 
            className="close-btn" 
            color="danger" 
            style={{ 
              backgroundColor: "#000080", 
              color: "#ffff1b", 
              width: "100%"
            }} 
            onClick={handleCloseAbout}>Close
          </Button>
        </ModalFooter>
      </Modal>

      <SearchMovie handleSearchMovie={handleSearchMovie} />

      {movies.map((movie) => {
        return <Movie movie={movie} />
      })}

      <RateMovie />

    </div>
  );
}