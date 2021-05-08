
import axios from 'axios'
import {API_BASE} from  '../config/env.js'


export const FETCHED_MOVIES = "FETCHED_MOVIES"
export function fetchMovies(){
  return   dispatch=>{
      axios.get(`${API_BASE}/movies`)
 
     .then(res=>dispatch({
       type : FETCHED_MOVIES,
       payload : res.data
     }))
    .catch(error=>console.log(error))
    }
}

