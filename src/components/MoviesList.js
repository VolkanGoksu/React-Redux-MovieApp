import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.js';
import {Grid} from 'semantic-ui-react'


const MovieList = ({ movies }) => {
    const emptyMessage = (
        <p>No Movies yet.</p>
    )

    const moviesList = (

        <div>
            {
                movies.error.response ? <h3>Error retrieving data</h3>
                    : 
                    <Grid stackable columns={4}>
                        {
                           movies.movies.map(movie => <MovieCard key={movie._id} movie={movie} />) 
                        }
                    </Grid>
                   
            }
        </div>
    )
    return (
        <div>
            {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.shape({
        movies: PropTypes.array.isRequired
    }).isRequired
}
export default MovieList