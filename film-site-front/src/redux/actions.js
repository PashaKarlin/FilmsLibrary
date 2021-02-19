import axios from "axios";
import {
    ADD_FILM, DELETE_FILM, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT,
    SHOW_LOADER, UPDATE_FORMAT, UPDATE_TITLE, UPDATE_STARS, UPDATE_YEAR,  FETCH_FILMS
} from "./types";

export const addFilm = () => ({ type: ADD_FILM })
export const deleteFilm = (id) => ({ type: DELETE_FILM, id })
export const updateTitle = (title) => ({ type: UPDATE_TITLE, title })
export const updateYear = (releaseYear) => ({ type: UPDATE_YEAR, releaseYear })
export const updateStars = (stars) => ({ type: UPDATE_STARS, stars })
export const updateFormat = (format) => ({ type: UPDATE_FORMAT, format })
export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({type: HIDE_LOADER})
export const hideAlert = ()  => ({type: HIDE_ALERT})

export const fetchFilms = () => {
    return async dispatch => {
        try{
            dispatch(showLoader())
            const response = await axios.get('http://localhost:5000/api/films')
            setTimeout(() => {
                dispatch({type:FETCH_FILMS, payload: response.data})
                dispatch({type : HIDE_LOADER})
            },200)
        }catch(err){
            dispatch(showAlert('Error on server side'))
            dispatch(hideLoader())
        }
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

