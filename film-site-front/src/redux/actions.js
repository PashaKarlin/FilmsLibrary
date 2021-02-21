import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {
    ADD_FILM, DELETE_FILM, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT,
    SHOW_LOADER, UPDATE_FORMAT, UPDATE_TITLE, UPDATE_STARS, UPDATE_YEAR, FETCH_FILMS, SUBMIT_FILM
} from "./types";

export const addFilm = (params) => {
    return async dispatch => {
        try {
            await submitFilm(params)
            dispatch({ type: ADD_FILM, payload: params })
        } catch (error) {
            dispatch(showAlert('Error on server'))
        }
    }
}

const submitFilm = async ({ id, title, releaseYear, stars, format }) => {
    const response = await axios.post('http://localhost:5000/api/films', {
        id: id || uuidv4(),
        title,
        releaseYear,
        stars,
        format
    })
    return response
}
export const updateTitle = (title) => ({ type: UPDATE_TITLE, title })
export const updateYear = (releaseYear) => ({ type: UPDATE_YEAR, releaseYear })
export const updateStars = (stars) => ({ type: UPDATE_STARS, stars })
export const updateFormat = (format) => ({ type: UPDATE_FORMAT, format })
export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const hideAlert = () => ({ type: HIDE_ALERT })

export const deleteFilm = (id) => {
    return async dispatch => {
        try {
            await axios.delete(`http://localhost:5000/api/films/${id}`)   
            dispatch({type: DELETE_FILM,id}) 
        } catch (error) {
            dispatch(showAlert('Error on Server Side'))
        }
    }
    
}

export const fetchFilms = () => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get('http://localhost:5000/api/films')
            setTimeout(() => {
                dispatch({ type: FETCH_FILMS, payload: response.data })
                dispatch({ type: HIDE_LOADER })
            }, 200)
        } catch (err) {
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

