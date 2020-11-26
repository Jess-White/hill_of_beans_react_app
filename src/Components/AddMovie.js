import React from 'react';
import { addFilm } from '../Services/RailsDB.js';


export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddMovie = () => {

    addFilm()
   }

   render() {
     return (
         <div className="add_movie">
             <button type="submit" onClick={this.handleAddMovie} value="add_movie">Add Movie</button>
         </div>
     )
   }
}