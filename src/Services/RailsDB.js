import axios from 'axios';

//get all of the movies from the database 

export const getSavedFilms = () => {
  return axios('/api/films')
    .then(response => response.data)
}

//add a new film to the database

export const addFilm = ({title, imdb_number, thumbs_up, thumbs_down}) => {
  return axios
    .post('/api/films', {title, imdb_number, thumbs_up, thumbs_down})
    .then(response => response.data)
}

//add incremented score to the database

export const rateFilm = () => {
  const { title, imdb_number, thumbs_up, thumbs_down } = this.state;
  return axios
    .patch(
      '/api/films/' + this.state.id,
      {
        title: title,
        imdb_number: imdb_number,
        thumbs_up: thumbs_up,
        thumbs_down: thumbs_down
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