import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import movies from './movies'
import genres from './genres'
import categories from './categories'

export default combineReducers({
  routing: routerReducer,
  movies,
  genres,
  categories,
})
