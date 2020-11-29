import React from 'react';

class RateMovie extends React.Component {
   render() {
      const {movie} = this.props;

  const handleThumbsUp = (event) => {
    event.preventDefault();
    const thumbs_up = 1
   }

   const handleThumbsDown = (event) => {
    event.preventDefault();
    const thumbs_down = 1
   }

       return (
           <div className="rate-movie">
               <div className="search">
             <button type="submit" onClick={this.handleThumbsUp} value="thumbs_up">Thumbs Up</button>
             <button type="submit" onClick={this.handleThumbsDown} value="thumbs_up">Thumbs Down</button>
          </div>
           </div>
       )
   }
}

export default RateMovie;