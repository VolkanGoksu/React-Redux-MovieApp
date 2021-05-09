
import {NEW_MOVIE,NEW_MOVIE_ERROR} from '../actions/newMovie.js'
const initialState = {
  fetching:false,
  fetched:false,
  movies:[],
  error : {}

}
export default (state = initialState, action)=>{
  switch(action.type){
    case NEW_MOVIE:
      return{
        ...state,
        movies: action.payload,
     
      }
      case NEW_MOVIE_ERROR:
        return{
          ...state,
          error:action.payload
        }
      default:
          return state;
  }
}