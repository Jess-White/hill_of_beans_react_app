import React, {Component} from 'react';
import { addFilm, updateFilm } from '../Services/RailsDB.js';

class RateMovie extends Component {

  handleThumbsUp = (event) => {
    event.preventDefault();
    const action = "thumbs_up"
    if (this.props.db_id) {
      updateFilm(this.props.imdb_number, this.props.title, this.props.db_id, action)
    } else{
      addFilm(this.props.imdb_number, this.props.title, action)
    }
   }

   handleThumbsDown = (event) => {
    const action = "thumbs_down"
    event.preventDefault();
    if (this.props.db_id) {
      updateFilm(this.props.imdb_number, this.props.title, this.props.db_id, action)
    } else{
      addFilm(this.props.imdb_number, this.props.title, action)
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