import React from 'react';
import RateMovie from './RateMovie';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import axios from "axios";
import { moreInfo } from '../Services/RailsDB.js';


export default class Movie extends React.Component {
    state = {
      showMovie: false,
      Rating: "",
      Runtime: "",
      Genre: "",
      Director: "", 
      Actors: "",
      Plot: "",
      Awards: ""
    }

  handleShowMovie = () => {
    this.setState({
      showMovie: true
    })
    this.getMoreInfo()
  }

  handleCloseShowMovie = () => {
    this.setState({
      showMovie: false
    })
  }

  getMoreInfo = () => {
    const inputID = this.props.movie.imdbID
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/api/films/' + inputID,
    }
    axios.request(options).then((response) => {
      this.setState({
        Rating: response.data.Rated,
        Runtime: response.data.Runtime,
        Genre: response.data.Genre,
        Director: response.data.Director, 
        Actors: response.data.Actors,
        Plot: response.data.Plot,
        Awards: response.data.Awards
    })
    }).catch(function (error) {
      console.error(error);
    });
  }

   render() {
       const {Title, Poster, Year, imdbID, db_id, thumbs_up, thumbs_down} = this.props.movie;

       return (
           <div className="movie">
              <Card 
                style={{backgroundColor: "#242424"}}>
              <div style={{paddingTop: "2%"}}>
                   <h3 className="title">{Title}</h3>
               </div>
              <div style={{paddingTop: "0%",
                  maxWidth: "100%", 
                  height: "auto"}}>
                {(Poster === "N/A") ? (
                <img 
                  style={{
                  maxWidth: "25%", 
                  height: "auto"}}
                  src="https://www.movienewsletters.net/photos/000000h1.jpg" alt="my movie poster"/>
                ) : null }
                {(Poster !== "N/A") ? (
                <img src={Poster} alt="my movie poster"/>
                ) : null }
               </div>
               <div>

               <div className={"col"}>

               <div className={"row"} style={{display: "block", marginLeft: "auto", marginRight: "auto"}}> 
               <Button 
                 className="btn-lg" 
                 style={{ 
                         backgroundColor: "#242424", 
                         color: "#f2f2f2",
                         fontSize: "20px",
                         marginTop: "1%",
                         marginBottom: "1%",
                         border: "3px solid #fafafa"
                         }}
                 type="submit"
                 onClick={this.handleShowMovie}>More Info
               </Button>
               <Modal show={this.state.showMovie}>
               <ModalBody>
                <div style={{
                  backgroundColor: "#3d3d3d",
                  color: "#c5c5c5",
                  padding: "2%",
                  margin: "0%"}}>
                   <h5>
                    Title: {Title}
                    </h5>
                    <h5>Year: {Year}</h5>
                    <h5>Rating: {this.state.Rating}</h5>
                    <h5>Runtime: {this.state.Runtime}</h5>
                    <h5>Genre: {this.state.Genre}</h5>
                    <h5>Director: {this.state.Director}</h5>
                    <h5>Actors: {this.state.Actors}</h5>
                    <h5>Description: {this.state.Plot}</h5>
                    <h5>Awards: {this.state.Awards}</h5>
               </div>
               </ModalBody>
                 <ModalFooter>
                   <Button  
                     style={{ 
                       backgroundColor: "#242424", 
                       color: "#f2f2f2",
                       width: "100%",
                       fontSize: "30px",
                       border: "3px solid #fafafa",
                       fontFamily: "Trebuchet MS, Helvetica, sans-serif"
                     }} 
                     onClick={this.handleCloseShowMovie}>Close
                   </Button>
                 </ModalFooter>
               </Modal>
               </div>

               <div className={"row"} style={{display: "block", marginLeft: "auto", marginRight: "auto"}}>
               <RateMovie thumbs_up={thumbs_up} thumbs_down={thumbs_down} title={Title} db_id={db_id} imdb_number={imdbID}/>
               </div>

              </div>

               </div>
            </Card>
          </div>
       )
   }
}