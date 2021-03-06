import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewMovieForm from '../NewMovieForm'
import { onNewMovieSubmit, onUpdateMovieSubmit } from '../../actions/newMovie'

class NewMoviePage extends Component {

    render() {
        return (
            <div>
                <NewMovieForm
                    movie={this.props.movie}
                    newMovie={this.props.newMovie}
                    onNewMovieSubmit={this.props.onNewMovieSubmit}
                    onUpdateMovieSubmit={this.props.onUpdateMovieSubmit} />
            </div>
        )
    }
}
const mapStateToProps = ({ newMovie, movies }, props) => {
    return {
        newMovie,
        movie: movies.movies.find(item => item._id === props.match.params._id)
    }
}

const mapDispatchToProps = {
    onNewMovieSubmit,
    onUpdateMovieSubmit,
}
export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);