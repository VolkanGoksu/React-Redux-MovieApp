import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewMovieForm from '../NewMovieForm'

class NewMoviePage extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <NewMovieForm/>
        )
    }
}
const mapStateToProps= ({newMovie})=>{
    return{
          newMovie
    }
}
export default connect(mapStateToProps, null)(NewMoviePage);