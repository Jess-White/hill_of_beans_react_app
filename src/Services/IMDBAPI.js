import axios from "axios";

export const getMovies = (title) => {

  const options = {
    method: 'GET',
    url: `/api/films/search?title=${title}`
  };

  return axios.request(options)

}

