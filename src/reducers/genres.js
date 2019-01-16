// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/genres'

export const initialState = {
  isFetching: false,
  error: '',
  items: {},
}

export default handleActions(
  {
    [actions.genres.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.genres.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items,

    }),

    [actions.genres.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

  },
  initialState
)
