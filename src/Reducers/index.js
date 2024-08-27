import updateQuantity from './Increment_decriment.js'
import UpdateBusketArray from './BusketArrayReducer.js';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    updateQuantity,
    UpdateBusketArray,
})


export default rootReducer;