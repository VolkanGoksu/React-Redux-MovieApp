import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewMovieForm from '../NewMovieForm'
import {onNewMovieSubmit} from '../../actions/newMovie'

class NewMoviePage extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <NewMovieForm 
        
            onNewMovieSubmit={this.props.onNewMovieSubmit}/>
        )
    }
}
const mapStateToProps= ({newMovie})=>{
    return{
          newMovie
    }
}

const mapDispatchToProps ={
    onNewMovieSubmit
}
export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);