// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/movies'

export const initialState = {
  isFetching: false,
  error: '',
  items: [],
  result: '',
  page: 0,
  resultByGenre: '',
}

export default handleActions(
  {
    [actions.movies.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.movies.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items,
      page: payload.page,
    }),

    [actions.movies.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

    [actions.movies.filter]: (state, { payload }) => ({
      ...state,
      result: payload.result,

    }),

    [actions.movies.filterByGenre]: (state, { payload }) => ({
      ...state,
      result: payload.result,

    }),
  },
  initialState
)
