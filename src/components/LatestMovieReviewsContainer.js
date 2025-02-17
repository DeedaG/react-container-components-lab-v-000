
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  // handleClick = () => {
  //
  // }


  componentDidMount() {
        this.handleFetch()
      }

      handleFetch = () => {
        fetch(URL)
        .then(response => response.json())
        .then(response => this.setState({ reviews: response.results }))
       }

  render() {
    return (
      <div
        className = "latest-movie-reviews">
        <MovieReviews reviews= {this.state.reviews}/>
      </div>
   )
  }
}

export default LatestMovieReviewsContainer
