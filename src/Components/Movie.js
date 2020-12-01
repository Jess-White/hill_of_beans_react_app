import React from 'react';
import { getMovie } from '../Services/IMDBAPI';
import RateMovie from './RateMovie';


class Movie extends React.Component {
   render() {
       const {Title, Poster, Year, imdbID, db_id, thumbs_up, thumbs_down} = this.props.movie;

       return (
           <div className="movie">
               <div className="title-year">
                   <h1 className="title">{Title}</h1>
                   <h2 className="year">{Year}</h2>
                   <h2 className="thumbs_up">{thumbs_up}</h2>
                   <h2 className="thumbs_down">{thumbs_down}</h2>
               </div>
               <div className="poster">
                   <img src={Poster} alt="my movie poster"/>
               </div>
               <RateMovie title={Title} db_id={db_id} imdb_number={imdbID}/>
           </div>
       )
   }
}

export default Movie;