import axios from 'axios';

//get all of the movies from the database 

export const getSavedFilms = () => {
  return axios('http://localhost:3000/api/films')
    .then(response => response.data)
}

//add a new film to the database

export const addFilm = (title, imdb_number, action) => {
  return axios
    .post('http://localhost:3000/api/films', {title, imdb_number, action})
    .then(response => response.data)
}

export const createOrUpdateFilm = ({})

//add incremented score to the database

export const updateFilm = (title, imdb_number, action, db_id) => {
  return axios
    .patch(
      'http://localhost:3000/api/films/' + db_id,
      {
        title: title,
        imdb_number: imdb_number,
        action: action
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