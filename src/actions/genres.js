// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// api
import api from '../api/genres'
import {getCategories} from './categories'


const actions = createActions({
  genres: {
    request: x => x,
    success: x => x,
    error: x => x,
  },
})

export default actions


export const getGenres = (force = false) => async (dispatch, getState) => {
  const { genres } = getState()
  if (!!genres.length && !force) return

  dispatch(actions.genres.request())
  try {
    const result = await api.apiGetGenres()
    dispatch(
      actions.genres.success({
        items: {...genres.items, ...result},
      })
    )
    dispatch(getCategories())
  } catch (e) {
    dispatch(actions.genres.error({ error: e }))
    console.log(e)
  }
}




