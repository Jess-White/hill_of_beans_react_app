import React from 'react';
import { getMovie } from '../Services/IMDBAPI.js';


export default class SearchMovie extends React.Component {
   state= {
       title: '',
       thumbs_up: '',
       thumbs_down: '',
       imdb_id: ''
   }

  handleInputTitle = (event) => {
     event.preventDefault();
     const title = event.target.value;
     this.setState({title});
   }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
   }

  handleSubmit = () => {
    const title = this.state.title;
    if (title) {
      this.props.handleSearchMovie(title)
    } else {
      this.props.handleSearchMovie("blank")
    }
    // getMovie(title)
    this.setState({title: ''})
   }

   const handleThumbsUp = (event) => {
    event.preventDefault();
    const thumbs_up = 1
   }

   const handleThumbsDown = (event) => {
    event.preventDefault();
    const thumbs_down = 1
   }

   handleAddMovie = () => {
    addFilm()
   }

   render() {
    console.log(this.state.title)
    const {title} = this.state;
     return (
        <div>
         <div className="search">
             <input className="search-box" type="text" name="title" onChange={this.handleInputTitle} value={title}/>
             <button type="submit" onClick={this.handleSubmit} value="Search">Search</button>
         </div>

         <div className="rate-movie">
               <div className="search">
               <button type="submit" onClick={this.handleThumbsUp} value="thumbs_up">Thumbs Up</button>
               <button type="submit" onClick={this.handleThumbsDown} value="thumbs_up">Thumbs Down</button>
              </div>
          </div>

          <div className="add_movie">
             <button type="submit" onClick={this.handleAddMovie} value="add_movie">Add Movie</button>
         </div>

         </div>
     )
   }
}