import { v4 as uuidv4 } from 'uuid';
import { ADD_FILM, DELETE_FILM, UPDATE_FORMAT, UPDATE_TITLE, UPDATE_STARS, UPDATE_YEAR, FETCH_FILMS } from './types';

const initialState = {
    films: [],
    newTitle: '',
    newReleaseYear: '',
    newStars: '',
    newFormat: ''
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILM:
            const newFilm ={
                title : state.newTitle,
                releaseYear : state.newReleaseYear,
                stars : state.newStars,
                format : state.newFormat,
                _id : uuidv4()
            }
            return { 
                films: [...state.films,newFilm],
                newTitle: '',
                newReleaseYear: '',
                newStars: '',
                newFormat: ''
            }
        case DELETE_FILM:
            return {
                ...state,
                films: state.films.filter(film => film._id !== action.id)
            }
        case UPDATE_TITLE:
            return {
                ...state,
                newTitle: action.title
            }
        case UPDATE_YEAR:
            return {
                ...state,
                newReleaseYear: action.releaseYear
            }
        case UPDATE_STARS:
            return {
                ...state,
                newStars: action.stars
            }
        case UPDATE_FORMAT:
            return {
                ...state,
                newFormat: action.format
            }
        case FETCH_FILMS: 
            return{
                ...state,
                films: [...state.films.concat(action.payload)]
            }
        default: return state;
    }

}

export default filmReducer;