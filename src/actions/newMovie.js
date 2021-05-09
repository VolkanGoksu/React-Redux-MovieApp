
import axios from 'axios'
import {API_BASE} from  '../config/env.js'


export const NEW_MOVIE = "NEW_MOVIE"
export const NEW_MOVIE_ERROR = "NEW_MOVIE_ERROR"
export function fetchMovies(){
  return   dispatch=>{
      axios.get(`${API_BASE}/movies`)
 
     .then(res=>dispatch({
       type : NEW_MOVIE,
       payload : res.data
     }))
    .catch(error=>({
       type : NEW_MOVIE_ERROR,
       payload: error
    }))
  }
}

