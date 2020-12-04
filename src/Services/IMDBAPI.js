import axios from "axios";

export const getMovies = (title) => {

  const options = {
    method: 'GET',
    url: `https://git.heroku.com/hill-of-beans-db.git/api/films/search?title=${title}`
  };

  return axios.request(options)

}

