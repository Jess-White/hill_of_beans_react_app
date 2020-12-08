import React, {Component} from 'react';
import { addFilm, updateFilm } from '../Services/RailsDB.js';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import DuplicateRating from './DuplicateRating'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />

const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} />

class RateMovie extends Component {

  state = {
    thumbs_up: this.props.thumbs_up,
    thumbs_down: this.props.thumbs_down,
    duplicateRating: false
  }

  //Function to rate movies

  handleThumbsUp = (event) => {
    const rating = "thumbs_up"
    event.preventDefault();
    if (!localStorage.getItem(this.props.imdb_number)) {
      if (this.props.db_id) {
        updateFilm(this.props.db_id, this.props.imdb_number, this.props.title, rating)
        .then(() => {
          localStorage.setItem(this.props.imdb_number, true)
          console.log(localStorage)
        })
      } else {
        addFilm(this.props.imdb_number, this.props.title, rating)
        .then(() => {
          localStorage.setItem(this.props.imdb_number, true)
          console.log(localStorage)
        })
      }
      this.setState({
        thumbs_up: this.state.thumbs_up + 1
      })
    } else {
      this.setState({duplicateRating: true})
    }
   }

   handleThumbsDown = (event) => {
    const rating = "thumbs_down"
    event.preventDefault();
    if (!localStorage.getItem(this.props.imdb_number)) {
      if (this.props.db_id) {
        updateFilm(this.props.db_id, this.props.imdb_number, this.props.title, rating)
        .then(() => {
          localStorage.setItem(this.props.imdb_number, true)
          console.log(localStorage)
        })
      } else {
        addFilm(this.props.imdb_number, this.props.title, rating)
        .then(() => {
          localStorage.setItem(this.props.imdb_number, true)
          console.log(localStorage)
        })
      }
      this.setState({
        thumbs_down: this.state.thumbs_down + 1
      })
    } else {
      this.setState({duplicateRating: true})
    }
   }

   render() {
    return (
       <div className="rate-movie">
        <Card style={{backgroundColor: "#242424"}}>
          <ButtonGroup style={{ 
              width: "100%", display: "block", marginLeft: "auto", marginRight: "auto"}}>
            <Button 
              style={{ 
              marginRight: "2%",
              backgroundColor: "#242424", 
              color: "#f2f2f2", 
              fontSize: "20px",
              border: "3px solid #fafafa",
              borderRadius: "2px"
              }}
              type="submit" onClick={this.handleThumbsUp} value="thumbs_up">{thumbsUp}</Button>
            <Button 
              style={{ 
              marginLeft: "2%",
              backgroundColor: "#242424", 
              color: "#f2f2f2", 
              fontSize: "20px",
              border: "3px solid #fafafa",
              borderRadius: "2px"
              }} 
              type="submit" onClick={this.handleThumbsDown} value="thumbs_down">{thumbsDown}
            </Button>
          </ButtonGroup>

          {(this.state.duplicateRating === true) ? (
            <DuplicateRating />
          ) : null}

          {(this.state.thumbs_up === 0 && this.state.thumbs_down === 0) ? (
            <h4>No one has rated {this.props.title} yet</h4>
          ) : null }
          {(this.state.thumbs_up !== 0 || this.state.thumbs_down !== 0) ? (
            <div>
              <h4>{this.state.thumbs_up} people gave {this.props.title} a thumbs up</h4>
              <h4>{this.state.thumbs_down} people gave {this.props.title} a thumbs down</h4>
            </div>
          ) : null }
         </Card>
      </div>
   )
   }
}

export default RateMovie;

