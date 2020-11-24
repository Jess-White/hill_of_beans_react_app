import axios from "axios";

export const getMovies = (title) => {

  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {s: title, page: '1', r: 'json'},
    headers: {
      'x-rapidapi-key': 'e979f7406cmsh363d1f98423c118p197d7bjsnce1e962638fd',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
  };

  return axios.request(options)

}

  // axios.request(options)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// export const getVoteData = () => {
//   return axios('/api/votes')
//     .then(response => response.data)
// }

// export const getVoteData = () => {
//   return axios('/api/votes')
//     .then(response => response.data)
// }

// import unirest from 'unirest';

// export const getMovie = (title) => {
//    const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

//    req.query({
//      "page": "1",
//      "r": "json",
//      "s": title
//    });

//    req.headers({
//      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//      "x-rapidapi-key": "e979f7406cmsh363d1f98423c118p197d7bjsnce1e962638fd"
//    });


//   req.end((res) => {
//   if (res.error) throw new Error(res.error);
//   console.log(res);
//   const movies = res.body.Search;
//   this.setState({movies});
//   });
//  }
