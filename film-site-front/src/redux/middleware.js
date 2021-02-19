import { ADD_FILM } from "./types"
import {showAlert} from './actions'

const approwed = ['VHS', 'DVD', 'BLU-RAY']

export const approwedWordsMiddleware = ({dispatch}) => {
    return function (next) {
        return function (action) {
            if (action.type === ADD_FILM){
                const found = approwed.filter(w => !action.format.title.includes(w))
                if (found.length !== 0){
                    return(dispatch(showAlert('Only VHS, DVD or BLU-RAY!')))
                } 
            }
            return next(action)
        }
    }
}