
import {API_BASE} from  '../config/env'
import axios from 'axios'
export function fetchMovies(){
  return   dispatch=>{
      axios.get(`${API_BASE}/movies`)
     .then(res=>console.log(res.data))
    
    
    }
}