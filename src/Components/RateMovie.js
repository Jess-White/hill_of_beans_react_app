import React, {Component} from 'react';
import { addFilm, updateFilm } from '../Services/RailsDB.js';

class RateMovie extends Component {

  handleThumbsUp = (event) => {
    const rating = "thumbs_up"
    event.preventDefault();
    if (this.props.db_id) {
      updateFilm(this.props.db_id, this.props.imdb_number, this.props.title, rating)
    } else{
      addFilm(this.props.imdb_number, this.props.title, rating)
    }
   }

   handleThumbsDown = (event) => {
    const rating = "thumbs_down"
    event.preventDefault();
    if (this.props.db_id) {
      updateFilm(this.props.db_id, this.props.imdb_number, this.props.title, rating)
    } else{
      addFilm(this.props.imdb_number, this.props.title, rating)
    }
   }

   render() {
    const {movie} = this.props;
    return (
       <div className="rate-movie">
         <button type="submit" onClick={this.handleThumbsUp} value="thumbs_up">Thumbs Up</button>
         <button type="submit" onClick={this.handleThumbsDown} value="thumbs_down">Thumbs Down</button>
      </div>
   )
   }
}

export default RateMovie;

