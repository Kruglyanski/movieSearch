// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

const actions = createActions({
  categories: {
    success: x => x,
  },
})

export default actions

export const getCategories = () => (dispatch, getState) => {
  const { genres } = getState()

  const items = genres.items.genres

  console.log('items', genres.items)

  dispatch(
    actions.categories.success({
      items,
    })
  )
}
//test