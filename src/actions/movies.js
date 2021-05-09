
import axios from 'axios'
import {API_BASE} from  '../config/env.js'


export const FETCH_MOVIES = "FETCHED_MOVIES"
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR"
export function fetchMovies(){
  return   dispatch=>{
      axios.get(`${API_BASE}/movies`)
 
     .then(res=>dispatch({
       type : FETCH_MOVIES,
       payload : res.data
     }))
    .catch(error=>({
       type : FETCH_MOVIES_ERROR,
       payload: error
    }))
  }
}

