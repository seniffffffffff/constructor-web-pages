import { combineReducers } from 'redux'
import { elements } from './elementsReducer'

export const rootReducer = combineReducers({
    elements,
})
