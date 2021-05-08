import React from 'react';
import PropTypes from 'prop-types';


const MovieList = ({ movies }) => {
    const emptyMessage = (
        <p>No Movies yet.</p>
    )

    const moviesList = (
        <div>
            {
                  movies.error.response ? <h3>Error retrieving data</h3>:'Hata yok'
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
        movies : PropTypes.array.isRequired
    }).isRequired
}
export default MovieList