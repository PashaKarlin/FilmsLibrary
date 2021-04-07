import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {
    HIDE_ALERT, HIDE_LOADER, SHOW_ALERT,
    SHOW_LOADER, FETCH_FILMS
} from "./types";

export const addFilm = (film) => {
    return async dispatch => {
        try {
            await submitFilm(film)
            // dispatch({ type: ADD_FILM, payload: film })

        } catch (error) {
            dispatch(showAlert('Error on server'))
        }
        finally {
            await dispatch(fetchFilms())
        }
    }
}

const submitFilm = async (film) => {
    const response = await axios.post('http://localhost:5000/api/films', {
        id: uuidv4(),
        title: film.title,
        releaseYear: +film.releaseYear,
        stars: film.stars,
        format: film.format
    })
    return response
}

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const hideAlert = () => ({ type: HIDE_ALERT })

export const deleteFilm = (id) => {
    return async dispatch => {
        try {
            await handleDelete(id)
        } catch (error) {
            dispatch(showAlert('Error on Server Side'))
        } finally {
            await dispatch(fetchFilms())
        }
    }
}
const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/films/${id}`)
    return response;

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

