import requests from "../../../api/reqest";
import movieApi from "../../../api/baseURL"
import { FETCH_ALL_MOVIES } from "../action.type";
import { fetchmovieCollection } from "../movies_category_actions/moviesCategroyAction";

export const fetchAllMovies = () =>  (dispatch) =>{

    Object.entries(requests).forEach((key,i) =>{
       movieApi.get(key[1])
       .then((res)=>{
        // console.log(res)
        // console.log(key)
        // console.log(i)
        console.log(Object.entries(requests))
        const movieData=res.data.results
        dispatch(fetchmovieCollection(movieData,key[0]))
        // dispatch( {type:FETCH_ALL_MOVIES,payload:movieData } )
       })
       .catch(err=>{
        console.log(err)
       })
              
    })
}