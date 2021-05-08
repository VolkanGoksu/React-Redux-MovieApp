
import {FETCHED_MOVIES} from '../actions/movies.js'
export default (state = [] , action)=>{
  switch(action.type){
    case FETCHED_MOVIES:
      return{
        ...state,
        movies: action.payload
      }
      default:
          return state;
  }
}