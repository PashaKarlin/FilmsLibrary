import { FETCH_FILMS } from './types';

const initialState = {
    films: [],
    newTitle: '',
    newReleaseYear: '',
    newStars: '',
    newFormat: ''
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILMS: 
            return{
                ...state,
                films: [...state.films.concat(action.payload)]
            }
        default: return state;
    }

}

export default filmReducer;