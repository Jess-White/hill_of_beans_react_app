import React from 'react';
import { getMovie } from '../Services/IMDBAPI.js';
import { addFilm } from '../Services/RailsDB.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class SearchMovie extends React.Component {
   state = {
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
    const NOUSERINPUT = "blank"
    if (title) {
      this.props.handleSearchMovie(title)
    } else {
      this.props.handleSearchMovie(NOUSERINPUT)
    }
    // getMovie(title)
    this.setState({title: ''})
   }

   handleAddFilm = () => {
      addFilm()
   }

   render() {
    console.log(this.state.title)
    const {title} = this.state;
     return (
        <div>
         <div className="search">
            <div className="row"> 
            <input className="col-sm-10" style={{paddingTop: "1%", paddingBottom: "1%", 
              paddingLeft: "0%",
              backgroundColor: "#a9a9a9"}} type="text" name="title" onChange={this.handleInputTitle} value={title}/>
            <div className="col-sm-2">
             <Button 
                style={{ 
                backgroundColor: "#242424", 
                color: "#f2f2f2", 
                width: "100%",
                fontSize: "30px",
                border: "3px solid #fafafa"
                }}
                type="submit" onClick={this.handleSubmit} value="Search">Search
              </Button>
            </div>
            </div>
         </div>

         </div>
     )
   }
}