import {createStore,combineReducers} from 'redux'
import { listReducer } from './reducers/listReducer'
import { tabbarReducer }from './reducers/tabbarReducer'




var reducer= combineReducers({
	tabbarReducer,
	listReducer
}) 
const store = createStore(reducer)

export default store