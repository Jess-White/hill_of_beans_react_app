import axios from "axios";

export const getMovies = (title) => {

  const options = {
    method: 'GET',
    url: `http://localhost:3000/api/films/search?title=${title}`
  };

  return axios.request(options)

}

