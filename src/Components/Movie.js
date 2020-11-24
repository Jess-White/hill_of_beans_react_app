import React from 'react';
import { getMovie } from '../Services/IMDBAPI';

class Movie extends React.Component {
   render() {
       const {Title, Poster, Year} = this.props.movie;

       return (
           <div className="movie">
               <div className="title-year">
                   <h1 className="title">{Title}</h1>
                   <h2 className="year">{Year}</h2>
               </div>
               <div className="poster">
                   <img src={Poster} alt="my movie poster"/>
               </div>
           </div>
       )
   }
}

export default Movie;