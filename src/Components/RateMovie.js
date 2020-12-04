import React, {Component} from 'react';
import { addFilm, updateFilm } from '../Services/RailsDB.js';

// import ReactDOM from 'react-dom'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />

const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} />

class RateMovie extends Component {

  state = {
    thumbs_up: this.props.thumbs_up,
    thumbs_down: this.props.thumbs_down
  }

  handleThumbsUp = (event) => {
    const rating = "thumbs_up"
    event.preventDefault();
    if (this.props.db_id) {
      updateFilm(this.props.db_id, this.props.imdb_number, this.props.title, rating)
    } else {
      addFilm(this.props.imdb_number, this.props.title, rating)
    }
    this.setState({
      thumbs_up: this.state.thumbs_up + 1
    })
   }

   handleThumbsDown = (event) => {
    const rating = "thumbs_down"
    event.preventDefault();
    if (this.props.db_id) {
      updateFilm(this.props.db_id, this.props.imdb_number, this.props.title, rating)
    } else{
      addFilm(this.props.imdb_number, this.props.title, rating)
    }
    this.setState({
      thumbs_down: this.state.thumbs_down + 1
    })
   }

   render() {
    return (
       <div className="rate-movie">
        <Card style={{backgroundColor: "#242424"}}>
          <ButtonGroup>
            <Button 
              style={{ 
              backgroundColor: "#242424", 
              color: "#f2f2f2", 
              width: "50%",
              fontSize: "30px"
              }}
              type="submit" onClick={this.handleThumbsUp} value="thumbs_up">{thumbsUp}</Button>
            <Button 
              style={{ 
              backgroundColor: "#242424", 
              color: "#f2f2f2", 
              width: "50%",
              fontSize: "30px"
              }} 
              type="submit" onClick={this.handleThumbsDown} value="thumbs_down">{thumbsDown}
            </Button>
          </ButtonGroup>
          {(this.state.thumbs_up === 0 && this.state.thumbs_down === 0) ? (
            <h3>No one has rated {this.props.title} yet</h3>
          ) : null }
          {(this.state.thumbs_up !== 0 || this.state.thumbs_down !== 0) ? (
            <div>
              <h3>{this.state.thumbs_up} people gave {this.props.title} a thumbs up</h3>
              <h3>{this.state.thumbs_down} people gave {this.props.title} a thumbs down</h3>
            </div>
          ) : null }
         </Card>
      </div>
   )
   }
}

export default RateMovie;

