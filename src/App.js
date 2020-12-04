import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import './App.css';
import {getMovies} from './Services/IMDBAPI';
import Header from './Components/Header';
import Movie from './Components/Movie';
import SearchMovie from './Components/SearchMovie';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [movies, setMovies] = useState([])
  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(true)
  }

  const handleCloseAbout = () => setShowAbout(false);

  

  const handleSearchMovie = (title) => {
    getMovies(title)
    .then((response) => {
      const movies = response.data;
      console.log(movies);
      setMovies(movies)
    })
  }

  return (
    <div className="App" style={{backgroundImage: `url("https://www.deccanherald.com/sites/dh/files/articleimages/2020/09/19/ingrid-bergman-889682-1600474553.jpg")`, 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>>
      
      <Header />

      <Modal show={showAbout}>
      <ModalBody>
      <About></About>
      </ModalBody>
        <ModalFooter>
          <Button  
            style={{ 
              backgroundColor: "#242424", 
              color: "#f2f2f2",
              width: "100%",
              fontSize: "30px",
              border: "3px solid #fafafa",
              fontFamily: "Trebuchet MS, Helvetica, sans-serif"
            }} 
            onClick={handleCloseAbout}>Close
          </Button>
        </ModalFooter>
      </Modal>

      <SearchMovie handleSearchMovie={handleSearchMovie}/>

      {movies.map((movie) => {
        return <Movie key={movie.imdbID} movie={movie}/>
      })}

      <Button 
        className="btn-lg" 
        style={{ 
                backgroundColor: "#242424", 
                color: "#f2f2f2", 
                width: "25%",
                fontSize: "30px",
                marginTop: "5%",
                border: "3px solid #fafafa"
                }}
        type="submit"
        onClick={handleShowAbout}>About
      </Button>

    </div>
  );
}