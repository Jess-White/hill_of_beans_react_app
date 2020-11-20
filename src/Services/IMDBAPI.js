export const sendRequest = (title) => {
   const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

   req.query({
     "page": "1",
     "r": "json",
     "s": title
   });

   req.headers({
     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
     "x-rapidapi-key": "e979f7406cmsh363d1f98423c118p197d7bjsnce1e962638fd"
   });


  req.end((res) => {
  if (res.error) throw new Error(res.error);
  const movies = res.body.Search;
  this.setState({movies});
  });
 }

