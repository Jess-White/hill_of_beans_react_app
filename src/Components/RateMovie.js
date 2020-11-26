import React from 'react';

class RateMovie extends React.Component {
   render() {
       const {movie} = this.props;

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