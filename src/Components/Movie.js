import React from 'react';
import RateMovie from './RateMovie';
import Card from 'react-bootstrap/Card';


class Movie extends React.Component {
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
               <div style={{paddingBottom: "2%"}}>
                   <h2 className="year">{Year}</h2>
               </div>
               <RateMovie thumbs_up={thumbs_up} thumbs_down={thumbs_down} title={Title} db_id={db_id} imdb_number={imdbID}/>
               </div>
            </Card>
          </div>
       )
   }
}

export default Movie;