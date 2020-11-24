import React from 'react';
import { getMovie } from '../Services/IMDBAPI.js';


export default class SearchMovie extends React.Component {
   state= {
       title: ''
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

   render() {
    console.log(this.state.title)
    const {title} = this.state;
     return (
         <div className="search">
             <input className="search-box" type="text" name="title" onChange={this.handleInputTitle} value={title}/>
             <button type="submit" onClick={this.handleSubmit} value="Search">Search</button>
         </div>
     )
   }
}