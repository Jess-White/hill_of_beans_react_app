import axios from "axios";

export const getMovies = (title) => {

  const options = {
    method: 'GET',
    url: `/api/films/search?title=${title}`
  };

  return axios.request(options)

}

export const moreInfo = (imdb_id) => {

  const options = {
    method: 'GET',
    url: `/api/films/moreInfo/`
  };

  return axios.request(options)

}

