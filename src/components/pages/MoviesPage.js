import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MoviesList from '../MoviesList.js';
import { fetchMovies } from '../../actions/movies.js'

class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired
    }
    componentDidMount() {
        this.props.fetchMovies()
    }
    render() {
        return (
            <div>
                <h2>Movies Page</h2>
                <MoviesList movies={this.props.movies}></MoviesList>
            </div>
        );
    }
}

const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
}
const mapDispatchToProps = {
    fetchMovies
}
export default connect(mapStateToProps,mapDispatchToProps )(MoviesPage);