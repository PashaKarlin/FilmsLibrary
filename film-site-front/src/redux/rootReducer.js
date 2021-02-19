import { combineReducers } from 'redux'
import appReducer from './appReducer';
import filmReducer from './filmReducer'

const rootReducer = combineReducers({
    film: filmReducer,
    app: appReducer
})

export default rootReducer;