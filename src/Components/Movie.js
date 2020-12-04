import React from 'react';
import RateMovie from './RateMovie';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';


export default class Movie extends React.Component {
    state = {
      showMovie: false
    }

  handleShowMovie = () => {
    this.setState({
      showMovie: true
    })
  }

  handleCloseShowMovie = () => {
    this.setState({
      showMovie: false
    })
  }

   render() {
       const {Title, Poster, Year, imdbID, db_id, thumbs_up, thumbs_down} = this.props.movie;

       return (
           <div className="movie">
              <Card 
                style={{backgroundColor: "#242424"}}>
              <div style={{paddingTop: "2%"}}>
                   <h1 className="title">{Title}</h1>
               </div>
              <div style={{paddingTop: "2%",
                  maxWidth: "100%", 
                  height: "auto"}}>
                {(Poster === "N/A") ? (
                <img 
                  style={{
                  maxWidth: "50%", 
                  height: "auto"}}
                  src="https://www.movienewsletters.net/photos/000000h1.jpg" alt="my movie poster"/>
                ) : null }
                {(Poster !== "N/A") ? (
                <img src={Poster} alt="my movie poster"/>
                ) : null }
               </div>
               <div>
               <Button 
                 className="btn-lg" 
                 style={{ 
                         backgroundColor: "#242424", 
                         color: "#f2f2f2", 
                         width: "25%",
                         fontSize: "30px",
                         marginTop: "5%",
                         border: "3px solid #fafafa"
                         }}
                 type="submit"
                 onClick={this.handleShowMovie}>More Info
               </Button>
               <Modal show={this.state.showMovie}>
               <ModalBody>
                <div style={{paddingBottom: "2%"}}>
                   <h2 className="year">{Year}</h2>
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
               <RateMovie thumbs_up={thumbs_up} thumbs_down={thumbs_down} title={Title} db_id={db_id} imdb_number={imdbID}/>
               </div>
            </Card>
          </div>
       )
   }
}