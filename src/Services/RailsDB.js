import axios from 'axios';

//get all of the movies from the database 

export const getSavedFilms = () => {
  return axios('http://localhost:3000/api/films')
    .then(response => response.data)
}

//add a new film to the database

export const addFilm = (imdb_number, title, rating) => {
  return axios
    .post('http://localhost:3000/api/films', {imdb_number, title, rating})
    .then(response => response.data)
}

export const createOrUpdateFilm = ({})

//add incremented score to the database

export const updateFilm = (db_id, imdb_number, title, rating) => {
  return axios
    .patch(
      'http://localhost:3000/api/films/' + db_id,
      {
        imdb_number: imdb_number,
        title: title,
        rating: rating
      },
      )
      .then(response => response.data)
      .catch((error) => {
        console.log('film rating error', error);
      })
}

//check to see if the film is already in the database

export const checkFilm = () => {
  let title = this.state.title
  let filmArray = getSavedFilms()
  filmArray.forEach((film) => {
    if (film.title === title) {
      return film
    } else {
      addFilm()
    }
  })
}