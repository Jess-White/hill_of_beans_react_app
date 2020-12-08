import axios from 'axios';

//add a new film to the database

export const addFilm = (imdb_number, title, rating) => {
  return axios
    .post('/api/films', {imdb_number, title, rating})
    .then(response => response.data)
}

//add incremented score to the database

export const updateFilm = (db_id, imdb_number, title, rating) => {
  return axios
    .patch(
      '/api/films/' + db_id,
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